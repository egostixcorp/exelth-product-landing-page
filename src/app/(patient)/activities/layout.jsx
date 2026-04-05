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
import BackButton from "@/components/App/Button/BackButton";

const activityTabs = [
  {
    label: "Appointments & Tests",
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

  // On mobile/tablet, when inside a sub-route, hide the list nav so only
  // the content (+ back button) shows. On laptop+ the sidebar always shows.
  const isSubRoute = pathname !== "/activities";

  const activeTab = activityTabs.find(
    (tab) => pathname === tab.route || pathname.startsWith(`${tab.route}/`),
  );
  const currentLabel = activeTab?.label ?? "Activities";

  return (
    <div className="flex min-h-dvh w-full items-start justify-center bg-white pb-16 laptop:pb-0">
      {/* ── Sidebar (laptop+) ─────────────────────────────────────── */}
      <aside className="sticky top-[155px] hidden max-h-[calc(100vh-155px)] w-72 flex-shrink-0 overflow-y-auto border-r bg-white p-6 laptop:flex laptop:flex-col xl:w-80">
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
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "border border-green-100 bg-green-50 text-green-700"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                )}
              >
                <Icon
                  size={18}
                  className={clsx(
                    "flex-shrink-0",
                    isActive ? "text-green-600" : "text-gray-400",
                  )}
                />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* ── Mobile / Tablet nav list (below laptop:) ──────────────── */}
      {!isSubRoute && (
        <nav className="flex w-full flex-col items-start justify-start gap-2 px-4 py-5 laptop:hidden">
          <h1 className="mb-2 px-1 text-xl font-semibold text-gray-800">
            Activities
          </h1>
          {activityTabs.map(({ route, label, icon: Icon }) => {
            const isActive =
              pathname === route || pathname.startsWith(`${route}/`);
            return (
              <Link
                key={route}
                href={route}
                className={clsx(
                  "flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium transition-colors",
                  isActive
                    ? "border-green-200 bg-green-50 text-green-700"
                    : "border-gray-100 bg-white text-gray-800 hover:bg-gray-50",
                )}
              >
                <Icon
                  size={20}
                  className={clsx(
                    "flex-shrink-0",
                    isActive ? "text-green-600" : "text-gray-400",
                  )}
                />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>
      )}

      {/* ── Main content ──────────────────────────────────────────── */}
      {/* On laptop+: always visible alongside sidebar.
          On mobile/tablet: only visible when inside a sub-route. */}
      <main
        className={clsx(
          "flex-1 flex-col min-w-0 p-4 laptop:p-8",
          // Sub-routes: always shown. Root: hidden on mobile/tablet, shown on laptop+.
          isSubRoute ? "flex" : "hidden laptop:flex",
        )}
      >
          {/* Page header row */}
          <div className="mb-4 flex items-center gap-3">
            {/* Back button: visible on sub-routes below laptop */}
            {isSubRoute && (
              <div className="laptop:hidden">
                <BackButton />
              </div>
            )}
            <h2 className="text-lg font-semibold text-gray-900 laptop:text-xl">
              {currentLabel}
            </h2>
          </div>

          {children}
        </main>
    </div>
  );
}
