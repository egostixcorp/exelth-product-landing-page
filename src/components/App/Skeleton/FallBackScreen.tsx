"use client";

import {
  BookText,
  CalendarCheck,
  CheckCheck,
  Coffee,
  Feather,
  Heart,
  Home,
  Pill,
  ReceiptText,
} from "lucide-react";
import React from "react";

interface FallBackScreenProps {
  icon: keyof typeof IconMap;
  title: string;
  subtitle?: string;
  actionText?: string;
  onPress?: () => void;
}

const IconMap = {
  // calendar variants (also keep old typo as alias)
  calendar: CalendarCheck,
  calneder: CalendarCheck,
  // document / records
  book: BookText,
  // billing
  bill: ReceiptText,
  // rooms
  home: Home,
  // medicines
  pill: Pill,
  coffee: Coffee,
  // checkups
  checkups: CheckCheck,
  heart: Heart,
  // generic fallback
  feather: Feather,
};

export default function FallBackScreen({
  icon,
  title,
  subtitle,
  actionText,
  onPress,
}: FallBackScreenProps) {
  const Icon = IconMap[icon] ?? Feather;

  return (
    <div className="flex min-h-[300px] w-full flex-col items-center justify-center py-8 px-4">
      <div className="flex w-full max-w-sm flex-col items-center justify-center rounded-xl border border-gray-100 bg-gray-50 p-8 text-center shadow-sm">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
          <Icon className="h-7 w-7 text-green-600" />
        </div>
        <h2 className="mt-4 text-base font-semibold text-gray-800">
          {title.trim()}
        </h2>
        {subtitle && (
          <p className="mt-2 text-sm leading-relaxed text-gray-500">
            {subtitle.trim()}
          </p>
        )}
        {onPress && actionText && (
          <button
            onClick={onPress}
            className="mt-5 rounded-lg bg-green-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-green-700 active:scale-95"
          >
            {actionText}
          </button>
        )}
      </div>
    </div>
  );
}
