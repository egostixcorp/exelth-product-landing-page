"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  getFacilityDoctorById,
  getPublicFacilityDetailsByID,
} from "@/app/actions/facility";
import { formatDate, formatTimeToAMPM } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Calendar } from "lucide-react";

const getStatusColor = (status: string) => {
  switch (status?.toLowerCase()) {
    case "upcoming":
    case "rescheduled":
      return "bg-blue-500";
    case "inprogress":
    case "booked":
      return "bg-green-500";
    case "completed":
      return "bg-amber-500";
    case "cancelled":
      return "bg-red-500";
    default:
      return "bg-gray-400";
  }
};

export default function AppointmentCard({
  doctor_id,
  facility_id,
  date,
  time,
  status,
  appointment_id,
}: {
  doctor_id: string;
  facility_id: string;
  date: string;
  time: string;
  status: string;
  appointment_id: string;
}) {
  const [facility, setFacility] = useState<any>(null);
  const [doctor, setDoctor] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const [facilityData, doctorData] = await Promise.all([
          getPublicFacilityDetailsByID(facility_id),
          getFacilityDoctorById(doctor_id),
        ]);
        setFacility(facilityData);
        setDoctor(doctorData?.doctor);
      } catch (err) {
        console.error("Failed to load appointment details:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [facility_id, doctor_id]);

  if (loading)
    return (
      <Card className="h-72 w-80 animate-pulse p-4 tablet:w-[320px]">
        <div className="mb-2 h-6 w-3/4 rounded bg-gray-200" />
        <div className="h-4 w-1/2 rounded bg-gray-100" />
      </Card>
    );

  return (
    <Card className="h-72 w-80 rounded-xl border p-4 transition hover:shadow-md tablet:w-[320px]">
      <CardContent className="flex h-full flex-col justify-between gap-3 p-0">
        {/* --- Doctor Header --- */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {doctor?.user?.avatar_url ? (
              <Image
                src={doctor.user.avatar_url}
                alt={doctor.user.full_name}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
            ) : (
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 font-semibold text-gray-600">
                {doctor?.user?.full_name?.[0] ?? "?"}
              </div>
            )}
            <div>
              <p className="font-semibold">
                {doctor?.user?.full_name ?? "Unknown"}
              </p>
              <p className="text-sm text-gray-500">
                {doctor?.department?.name ?? "—"}
              </p>
            </div>
          </div>
          <div
            className={`rounded-lg px-2 py-1 text-xs font-semibold capitalize text-white ${getStatusColor(status)}`}
          >
            {status}
          </div>
        </div>

        {/* --- Date & Time --- */}
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <span>
            <Calendar />
          </span>
          {formatDate(date)} • {formatTimeToAMPM(time)} • {appointment_id}
        </div>

        {/* --- Facility Info --- */}
        <div className="mt-1 flex items-center gap-3">
          {facility?.cover_photo ? (
            <Image
              src={facility.cover_photo}
              alt={facility.name}
              width={44}
              height={44}
              className="rounded border border-gray-200 object-cover"
            />
          ) : (
            <div className="h-11 w-11 rounded-lg bg-gray-100" />
          )}
          <div>
            <p className="font-medium">{facility?.name}</p>
            <p className="text-xs text-gray-500">
              {facility?.location?.address ?? "No address"}
            </p>
          </div>
        </div>

        {/* --- Actions --- */}
        <div className="mt-3 flex gap-2">
          <Link
            href={`/activities/appointments_tests/${appointment_id}?doctor_id=${doctor_id}&facility_id=${facility_id}`}
            className="flex-1"
          >
            <Button className="w-full bg-gray-100 text-gray-800 hover:bg-gray-200">
              View Details
            </Button>
          </Link>
          {status === "cancelled" && (
            <Button variant="destructive" className="flex-1">
              Cancelled
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
