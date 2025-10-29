"use client";

import AppointmentCard from "@/components/App/Card/AppointmentCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar } from "lucide-react";

export default function UpcomingAppointments({
  appointments = [],
  loading = true,
}: {
  appointments?: any[];
  loading?: boolean;
}) {
  const upcoming = appointments.filter(
    (a) =>
      ["booked", "rescheduled"].includes(a.status?.toLowerCase()) ||
      ["upcoming"].includes(a.status?.toLowerCase()),
  );

  if (loading) {
    return (
      <div className="mb-6 px-4">
        <Skeleton className="mb-3 h-5 w-40" />
        <div className="flex gap-3 overflow-x-auto">
          {[...Array(2)].map((_, i) => (
            <Skeleton
              key={i}
              className="h-72 w-80 rounded-xl tablet:w-[320px]"
            />
          ))}
        </div>
      </div>
    );
  }

  if (!appointments?.length) {
    return (
      <div className="mb-8 rounded-xl border bg-gray-50 p-4 px-2 text-center">
        <div className="mb-2 text-3xl text-gray-400">
          <Calendar />
        </div>
        <p className="mb-2 font-medium text-gray-600">
          You don&apos;t have any appointments yet.
        </p>
        <p className="mb-4 text-sm text-gray-500">
          Start by booking your first one!
        </p>
        <Link href="/search">
          <Button className="bg-green-600 text-white hover:bg-green-700">
            Book Now
          </Button>
        </Link>
      </div>
    );
  }

  if (upcoming.length === 0) return null;

  return (
    <div className="mb-10 px-2">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Upcoming Appointments</h2>
        <Link href="/activities/appointments">
          <span className="text-sm font-medium text-green-600 hover:underline">
            See all
          </span>
        </Link>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {upcoming.map((item) => (
          <div key={item.id} className="flex-shrink-0">
            <AppointmentCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
