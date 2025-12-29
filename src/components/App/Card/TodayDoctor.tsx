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
  orgId: string;
  number: string; // business_number
}

type DoctorData = {
  doctor_id: string;
  org_id: string;
  name: string;
  fee: number;
  avatar_url?: string | null;
  available_slots: number;
};

export default function TodayAvailability({
  facilityId,
  number,
  orgId,
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
          .select(
            "id,org_id, user:user_id(full_name, avatar_url), appointment_price",
          )
          .in("id", doctorIds);

        if (doctorError) throw doctorError;

        // 4️⃣ Merge slot counts
        const merged = doctorData.map((doc: any) => ({
          doctor_id: doc.id,
          org_id: doc.org_id,
          name: doc.user.full_name,
          fee: doc.appointment_price ?? "—",
          avatar_url: doc.user.avatar_url,
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
      <div className="grid gap-4 tablet:grid-cols-1 laptop:grid-cols-2">
        {[1, 2].map((i) => (
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
      <div className="borderr relative mt-4 rounded-md border-gray-200 bg-white text-center text-gray-700">
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
    <div className="w-full">
      {/* Header */}
      <div className="mb-3 flex items-center gap-2 text-lg font-bold capitalize text-gray-600">
        <Clock className="size-5 animate-spin text-green-600" />
        available today
      </div>

      {/* Doctor cards */}
      <div className="grid gap-4 tablet:grid-cols-1 laptop:grid-cols-2">
        {doctors.slice(0, 2).map((doc) => (
          <div
            key={doc.doctor_id}
            onClick={() =>
              router.push(
                `/search/facility/doctor?doctor_id=${doc.doctor_id}&org_id=${doc.org_id}&facility_id=${facilityId}`,
              )
            }
            className="flex cursor-pointer flex-col items-center rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            {/* Avatar */}
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-gray-50">
              <Avatar className="h-12 w-12">
                <AvatarImage src={doc.avatar_url || undefined} alt={doc.name} />
                <AvatarFallback>
                  <User className="h-5 w-5 text-gray-400" />
                </AvatarFallback>
              </Avatar>
            </div>

            {/* Name */}
            <p className="text-center text-sm font-semibold text-gray-900">
              {doc.name}
            </p>

            {/* Slot badge */}
            <div className="mt-2 space-y-2 flex items-center flex-col">
              <span className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-3 py-0.5 text-xs font-medium text-green-700">
                {doc.available_slots} slots today
              </span>
            <Button
              variant="default"
              // size="sm"
              className="bg-green-600 w-full text-white hover:bg-green-700"
              onClick={(e) => {
                e.stopPropagation();
                router.push(
                  `/search/facility/doctor?doctor_id=${doc.doctor_id}&org_id=${doc.org_id}&facility_id=${facilityId}`,
                );
              }}
            >
              Book now
            </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
