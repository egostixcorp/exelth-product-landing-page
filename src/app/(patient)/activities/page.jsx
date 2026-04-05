import React from "react";
import Link from "next/link";
import { FaBook, FaRegCalendarCheck } from "react-icons/fa6";
import { TbBedFilled } from "react-icons/tb";
import { GiMedicinePills } from "react-icons/gi";
import { MdMedicalServices } from "react-icons/md";
import { RiBillFill } from "react-icons/ri";

const sections = [
  {
    label: "Appointments & Tests",
    description: "View, manage, and track your upcoming and past appointments.",
    route: "/activities/appointments_tests",
    icon: FaRegCalendarCheck,
    color: "bg-blue-50 text-blue-600",
  },
  {
    label: "Medical Records",
    description: "Access prescriptions, reports, and clinical notes from your visits.",
    route: "/activities/medical_records",
    icon: FaBook,
    color: "bg-purple-50 text-purple-600",
  },
  {
    label: "Bills & Payments",
    description: "Review invoices and payment history for your healthcare visits.",
    route: "/activities/bill_payments",
    icon: RiBillFill,
    color: "bg-amber-50 text-amber-600",
  },
  {
    label: "Rooms & Bed Allocation",
    description: "Check your current room assignment if you are admitted.",
    route: "/activities/rooms_bed_allocation",
    icon: TbBedFilled,
    color: "bg-teal-50 text-teal-600",
  },
  {
    label: "Medicines & Meals",
    description: "See your prescribed medicines and scheduled meal plans.",
    route: "/activities/medicines_meals",
    icon: GiMedicinePills,
    color: "bg-green-50 text-green-600",
  },
  {
    label: "Checkups & Operations",
    description: "Track upcoming procedures, checkups, and surgical schedules.",
    route: "/activities/checkups_oparations",
    icon: MdMedicalServices,
    color: "bg-rose-50 text-rose-600",
  },
];

export default function ActivitiesPage() {
  return (
    <div className="w-full max-w-3xl">
      <p className="mb-6 text-sm text-gray-500">
        Select a category to view your health activity details.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {sections.map(({ label, description, route, icon: Icon, color }) => (
          <Link
            key={route}
            href={route}
            className="group flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition hover:border-gray-200 hover:shadow-md"
          >
            <div
              className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ${color}`}
            >
              <Icon size={20} />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-gray-900 group-hover:text-green-700">
                {label}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-gray-500">
                {description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
