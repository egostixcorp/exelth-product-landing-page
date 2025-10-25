"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBook } from "react-icons/fa6";
import { TbBedFilled } from "react-icons/tb";
import { GiMedicinePills } from "react-icons/gi";
import { MdMedicalServices } from "react-icons/md";
import { RiBillFill } from "react-icons/ri";
import { FaRegCalendarCheck } from "react-icons/fa";
import clsx from "clsx";

const activityTabs = [
  {
    label: "Appointments & Test Booking",
    route: "/activities/appointments_tests",
    icon: FaRegCalendarCheck,
  },
  {
    label: "Medical Records",
    route: "/activities/medical_records",
    icon: FaBook,
  },
  {
    label: "Bills & Payments",
    route: "/activities/bill_payments",
    icon: RiBillFill,
  },
  {
    label: "Rooms & Bed Allocation",
    route: "/activities/rooms_bed_allocation",
    icon: TbBedFilled,
  },
  {
    label: "Medicines & Meals",
    route: "/activities/medicines_meals",
    icon: GiMedicinePills,
  },
  {
    label: "Checkups & Operations",
    route: "/activities/checkups_oparations",
    icon: MdMedicalServices,
  },
];

export default function ActivitiesLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-full items-start justify-center bg-white">
      {/* Sidebar */}
      <aside className="hidden h-full w-80 flex-shrink-0 border-r bg-white p-6 md:flex md:flex-col">
        <h1 className="mb-6 text-2xl font-semibold text-gray-800">
          Activities
        </h1>

        <nav className="flex flex-col gap-1">
          {activityTabs.map(({ route, label, icon: Icon }) => {
            const isActive =
              pathname === route || pathname.startsWith(`${route}/`);

            return (
              <Link
                key={route}
                href={route}
                className={clsx(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-base font-medium transition-colors",
                  isActive
                    ? "border border-green-100 text-green-700"
                    : "text-black hover:bg-gray-100 hover:text-gray-900",
                )}
              >
                {Icon && (
                  <Icon
                    size={20}
                    className={clsx(
                      "flex-shrink-0 text-green-600",
                      isActive ? "text-green-700" : "text-gray-500",
                    )}
                  />
                )}
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
      <nav className="redd flex w-full flex-col items-start justify-start gap-1 p-5 md:hidden">
        {activityTabs.map(({ route, label, icon: Icon }) => {
          const isActive =
            pathname === route || pathname.startsWith(`${route}/`);

          return (
            <Link
              key={route}
              href={route}
              className={clsx(
                "flex w-full items-center gap-3 rounded-lg border px-3 py-2 text-base font-medium transition-colors",
                isActive
                  ? "border border-green-100 text-green-700"
                  : "text-black hover:bg-gray-100 hover:text-gray-900",
              )}
            >
              {Icon && (
                <Icon
                  size={20}
                  className={clsx(
                    "flex-shrink-0 text-green-600",
                    isActive ? "text-green-700" : "text-gray-500",
                  )}
                />
              )}
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
      {/* Main content */}
      <main className="hidden flex-1 items-center justify-center overflow-y-auto p-4 md:flex md:p-8">
        {children}
      </main>
      {/* {children} */}
    </div>
  );
}
