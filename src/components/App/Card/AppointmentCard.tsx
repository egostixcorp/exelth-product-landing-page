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
import { Calendar, MapPin } from "lucide-react";

const statusStyles: Record<string, string> = {
  upcoming: "bg-blue-100 text-blue-700",
  rescheduled: "bg-blue-100 text-blue-700",
  requested: "bg-blue-100 text-blue-700",
  booked: "bg-green-100 text-green-700",
  inprogress: "bg-green-100 text-green-700",
  confirmed: "bg-green-100 text-green-700",
  completed: "bg-amber-100 text-amber-700",
  cancelled: "bg-red-100 text-red-700",
};

const getStatusStyle = (status: string) =>
  statusStyles[status?.toLowerCase()] ?? "bg-gray-100 text-gray-600";

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
      <Card className="w-full animate-pulse p-4">
        <div className="mb-3 h-12 w-12 rounded-full bg-gray-200" />
        <div className="mb-2 h-4 w-3/4 rounded bg-gray-200" />
        <div className="h-3 w-1/2 rounded bg-gray-100" />
      </Card>
    );

  const doctorName = doctor?.user?.full_name ?? "Unknown Doctor";

  return (
    <Card className="w-full rounded-xl border transition hover:shadow-md">
      <CardContent className="flex flex-col gap-4 p-4">
        {/* Doctor + status */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            {doctor?.user?.avatar_url ? (
              <Image
                src={doctor.user.avatar_url}
                alt={doctorName}
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover"
              />
            ) : (
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-600">
                {doctorName[0]}
              </div>
            )}
            <div>
              <p className="text-sm font-semibold text-gray-900">{doctorName}</p>
              <p className="text-xs text-gray-500">
                {doctor?.department?.name ?? "—"}
              </p>
            </div>
          </div>
          <span
            className={`flex-shrink-0 rounded-md px-2 py-1 text-xs font-semibold capitalize ${getStatusStyle(status)}`}
          >
            {status}
          </span>
        </div>

        {/* Date & time */}
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <Calendar size={14} className="flex-shrink-0 text-gray-400" />
          <span>
            {formatDate(date)} &bull; {formatTimeToAMPM(time)}
          </span>
          <span className="ml-auto font-mono text-gray-400">{appointment_id}</span>
        </div>

        {/* Facility */}
        <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3">
          {facility?.cover_photo ? (
            <Image
              src={facility.cover_photo}
              alt={facility.name ?? "Facility"}
              width={36}
              height={36}
              className="h-9 w-9 flex-shrink-0 rounded-lg border border-gray-200 object-cover"
            />
          ) : (
            <div className="h-9 w-9 flex-shrink-0 rounded-lg bg-gray-200" />
          )}
          <div className="min-w-0">
            <p className="truncate text-xs font-medium text-gray-800">
              {facility?.name ?? "—"}
            </p>
            <div className="flex items-center gap-1">
              <MapPin size={11} className="flex-shrink-0 text-gray-400" />
              <p className="truncate text-xs text-gray-500">
                {facility?.location?.address ?? "No address"}
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Link
            href={`/activities/appointments_tests/${appointment_id}?doctor_id=${doctor_id}&facility_id=${facility_id}`}
            className="flex-1"
          >
            <Button
              variant="outline"
              size="sm"
              className="w-full text-xs"
            >
              View Details
            </Button>
          </Link>
          {status === "cancelled" && (
            <div className="flex-shrink-0 rounded-md bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600">
              Cancelled
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
