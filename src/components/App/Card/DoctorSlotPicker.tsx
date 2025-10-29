"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import { format } from "date-fns";
// import { Colors } from "@/constants/Brand";

dayjs.extend(isSameOrAfter);

export default function DoctorSlotPicker({
  doctor_id,
  org_id,
  facility_id,
  slotData,
  fee,
}: any) {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const [selectedSlot, setSelectedSlot] = useState<any>(null);

  const availableDates = Array.from(
    new Set(
      slotData
        .map((s: any) => s.date)
        .filter((d: string) => dayjs(d).isSameOrAfter(dayjs(), "day")),
    ),
  )
    .map((d: any) => dayjs(d))
    .sort((a, b) => a.diff(b));

  useEffect(() => {
    if (!selectedDate && availableDates.length > 0) {
      setSelectedDate(availableDates[0]);
    }
  }, [availableDates]);

  const getSlotsForDate = (date: any) => {
    const dateStr = date.format("YYYY-MM-DD");
    const now = dayjs();
    const filtered = slotData.filter(
      (slot: any) =>
        slot.date === dateStr &&
        slot.doctor_id === doctor_id &&
        slot.facility_id === facility_id &&
        (!date.isSame(now, "day") ||
          dayjs(`${slot.date} ${slot.start_time}`).isAfter(now)),
    );
    return filtered.reduce((acc: any, s: any) => {
      if (!acc[s.shift]) acc[s.shift] = [];
      acc[s.shift].push(s);
      return acc;
    }, {});
  };

  const slotsByShift = selectedDate ? getSlotsForDate(selectedDate) : {};

  return (
    <div className="rounded-2xl border bg-gray-50 p-6">
      <h3 className="mb-4 text-lg font-semibold">Available Slots</h3>

      {/* Date Selector */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {availableDates.map((d) => {
          const isSelected = selectedDate?.isSame(d, "day");
          return (
            <button
              key={d.toString()}
              onClick={() => setSelectedDate(d)}
              className={`flex h-20 w-20 flex-col items-center justify-center rounded-xl border px-3 py-2 text-sm ${
                isSelected
                  ? "border-green-600 bg-green-600 text-white"
                  : "border-gray-300 text-gray-800"
              }`}
            >
              <span>{d.format("ddd")}</span>
              <span>{d.format("D MMM")}</span>
            </button>
          );
        })}
      </div>

      {/* Slots */}
      <div className="mt-6 space-y-5">
        {Object.entries(slotsByShift).length === 0 ? (
          <p className="mt-4 text-center text-gray-500">
            No slots for selected date.
          </p>
        ) : (
          Object.entries(slotsByShift).map(([shift, slots]: any) => (
            <div key={shift}>
              <h4 className="mb-2 font-semibold text-gray-800">
                {shift.toUpperCase()}
              </h4>
              <div className="redd flex h-36 w-72 tablet:w-auto pl-2 flex-row items-center justify-start gap-2 overflow-y-scroll">
                {slots.map((slot: any) => {
                  const isBooked = slot.status === "booked";
                  const isCancelled = slot.status === "cancelled";
                  const isSelected = selectedSlot?.id === slot.id;

                  return (
                    <button
                      key={slot.id}
                      disabled={isBooked || isCancelled}
                      onClick={() => {
                        setSelectedSlot(slot);
                        router.push(
                          `/search/facility/book?doctor_id=${doctor_id}&org_id=${org_id}&facility_id=${facility_id}&date=${slot.date}&time=${slot.start_time}&seat=${slot.seat_number}&fee=${fee || ""}&slot_id=${slot.id}`,
                        );
                      }}
                      className={`h-20 min-w-44 rounded-lg border px-4 py-2 text-sm transition-all ${
                        isBooked
                          ? "bg-gray-200 text-gray-400"
                          : isCancelled
                            ? "bg-red-600 text-white"
                            : isSelected
                              ? "border-green-600 bg-green-600 text-white"
                              : "border-gray-300 bg-white text-gray-800 hover:border-green-500"
                      }`}
                    >
                      {format(
                        new Date(`${slot.date}T${slot.start_time}`),
                        "hh:mm a",
                      )}{" "}
                      -{" "}
                      {format(
                        new Date(`${slot.date}T${slot.end_time}`),
                        "hh:mm a",
                      )}{" "}
                      <span className="block text-xs text-gray-500">
                        Seat #{slot.seat_number}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
