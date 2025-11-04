"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Clock, User, Phone } from "lucide-react";
import { format } from "date-fns";

interface TodayAvailabilityProps {
  facilityId: string;
  number: string; // business_number
}

type DoctorData = {
  doctor_id: string;
  name: string;
  fee: number;
  avatar_url?: string | null;
  available_slots: number;
};

export default function TodayAvailability({
  facilityId,
  number,
}: TodayAvailabilityProps) {
  const [loading, setLoading] = useState(true);
  const [doctors, setDoctors] = useState<DoctorData[]>([]);
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    const fetchTodayAvailability = async () => {
      try {
        setLoading(true);
        const today = format(new Date(), "yyyy-MM-dd");

        // 1️⃣ Fetch all available seats for today
        const { data: seats, error } = await supabase
          .from("appointment_seats")
          .select("doctor_id")
          .eq("facility_id", facilityId)
          .eq("date", today)
          .eq("status", "available");

        if (error) throw error;
        if (!seats?.length) {
          setDoctors([]);
          return;
        }

        // 2️⃣ Count slots per doctor
        const slotCountMap = seats.reduce<Record<string, number>>(
          (acc, seat) => {
            acc[seat.doctor_id] = (acc[seat.doctor_id] || 0) + 1;
            return acc;
          },
          {},
        );

        const doctorIds = Object.keys(slotCountMap);
        if (doctorIds.length === 0) {
          setDoctors([]);
          return;
        }

        // 3️⃣ Fetch doctor details
        const { data: doctorData, error: doctorError } = await supabase
          .from("org_members")
          .select("id, full_name, avatar_url, appointment_price")
          .in("id", doctorIds);

        if (doctorError) throw doctorError;

        // 4️⃣ Merge slot counts
        const merged = doctorData.map((doc: any) => ({
          doctor_id: doc.id,
          name: doc.full_name,
          fee: doc.appointment_price ?? "—",
          avatar_url: doc.avatar_url,
          available_slots: slotCountMap[doc.id] || 0,
        }));

        setDoctors(merged);
      } catch (err) {
        console.error("Error fetching today availability:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTodayAvailability();
  }, [facilityId]);

  // ---- Loading Skeleton ----
  if (loading)
    return (
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="border border-gray-200">
            <CardHeader className="flex flex-row items-center gap-3">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="flex-1">
                <Skeleton className="mb-2 h-4 w-24" />
                <Skeleton className="h-3 w-16" />
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    );

  // ---- No Doctors Today ----
  if (doctors.length === 0)
    return (
      <div className="relative mt-4 rounded-md borderr border-gray-200 bg-white  text-center text-gray-700">
        <h3 className="mb-2 text-base font-semibold">
          No doctors are available for appointments today.
        </h3>
        <p className="text-sm text-gray-500">
          Please check again later or contact the clinic directly for more
          information about doctor schedules.
        </p>

        <div className="mt-4 flex items-center justify-center text-xs text-gray-400">
          <Clock className="mr-1 h-3 w-3" />
          {format(new Date(), "EEEE, MMM d, yyyy")}
        </div>

        {/* ---- Sticky Bottom Call Button (Mobile only) ---- */}
        <div>
          <Button
            onClick={() => router.push(`tel:${number}`)}
            variant="default"
            className="h-12 w-full gap-2 bg-blue-500 hover:bg-blue-600"
          >
            <Phone className="h-5 w-5 text-white" />
            <span className="text-base font-medium text-white">
              Call Clinic
            </span>
          </Button>
          <p className="mt-2 text-center text-xs text-gray-500">
            Tap to contact the reception for today’s doctor availability.
          </p>
        </div>
      </div>
    );

  // ---- Doctor Cards ----
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {doctors.map((doc) => (
        <Card
          key={doc.doctor_id}
          className="border-gray-200 transition hover:shadow-md"
        >
          <CardHeader className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={doc.avatar_url || undefined} alt={doc.name} />
              <AvatarFallback>
                <User className="h-5 w-5 text-gray-500" />
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-base font-semibold">
                {doc.name}
              </CardTitle>
              <p className="text-sm text-gray-500">
                ₹{doc.fee ?? "—"} / consult
              </p>
            </div>
          </CardHeader>

          <CardContent className="mt-2 flex items-center justify-between">
            <Badge
              variant="secondary"
              className="border border-green-200 bg-green-50 text-green-700"
            >
              {doc.available_slots} slots today
            </Badge>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="mr-1 h-4 w-4" />
              Today
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
