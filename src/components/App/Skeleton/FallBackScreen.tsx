// components/FallBackScreen.tsx
"use client";

import {
  BookText,
  CalendarCheck,
  CheckCheck,
  Feather,
  Home,
  Pill,
  ReceiptText,
} from "lucide-react"; // Using lucide for consistency with shadcn/ui
import React from "react";
import { cn } from "@/lib/utils"; // optional helper if you're using it for class merging

interface FallBackScreenProps {
  icon: keyof typeof FeatherIcons;
  title: string;
  subtitle?: string;
  actionText?: string;
  onPress?: () => void;
}

const FeatherIcons = {
  alertCircle: Feather,
  wifiOff: Feather,
  calneder: CalendarCheck,
  book: BookText,
  bill: ReceiptText,
  home: Home,
  pill: Pill,
  checkups: CheckCheck,

  // You can extend this dynamically if you prefer:
  // e.g., import * as FeatherIcons from "react-icons/fi"
};

export default function FallBackScreen({
  icon,
  title,
  subtitle,
  actionText,
  onPress,
}: FallBackScreenProps) {
  const Icon = FeatherIcons[icon] || Feather;

  return (
    <div className="flex flex-col items-center justify-center bg-white px-4">
      <div className="flex w-full max-w-md flex-col items-center justify-center rounded-xl border border-gray-100 bg-gray-50 p-6 text-center shadow-sm">
        <Icon className="h-12 w-12 text-green-600" />
        <h2 className="mt-4 text-lg font-semibold text-gray-800">{title}</h2>
        {subtitle && <p className="mt-2 text-sm text-gray-500">{subtitle}</p>}
        {onPress && actionText && (
          <button
            onClick={onPress}
            className="mt-4 rounded-lg bg-green-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-green-700"
          >
            {actionText}
          </button>
        )}
      </div>
    </div>
  );
}
