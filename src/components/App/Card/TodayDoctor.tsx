"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Clock, User } from "lucide-react";
import { format } from "date-fns";

interface TodayAvailabilityProps {
  facilityId: string;
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
}: TodayAvailabilityProps) {
  const [loading, setLoading] = useState(true);
  const [doctors, setDoctors] = useState<DoctorData[]>([]);
  const supabase = createClient();
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
          (acc: any, seat: any) => {
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
          fee: doc.consultation_fee,
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
  if (doctors.length === 0) return null;
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

  if (doctors.length === 0)
    return (
      <div className="rounded-md border py-6 text-center text-sm text-gray-500">
        No doctors available today.
      </div>
    );

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
