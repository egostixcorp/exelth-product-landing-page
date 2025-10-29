import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
// import * as FileSystem from "expo-file-system";
// import * as Sharing from "expo-sharing";
// import { Alert, Platform } from "react-native";
dayjs.extend(LocalizedFormat);
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function detectSearchType(term: string) {
  const lower = term.toLowerCase();

  if (lower.includes("clinic") || lower.includes("hospital")) return "clinic";
  if (lower.includes("doctor") || lower.includes("dr") || lower.includes("md"))
    return "doctor";
  if (lower.includes("lab") || lower.includes("test")) return "lab";
  if (lower.includes("appointment") || lower.includes("book"))
    return "appointment";

  return "general"; // default fallback
}

export function getInitials(fullName: string) {
  if (!fullName) return "";

  const names = fullName
    .trim()
    .split(/\s+/)
    .filter((name) => name.length > 0);

  if (names.length === 0) return "";

  if (names.length === 1) {
    return names[0][0].toUpperCase();
  }

  return (names[0][0] + names[names.length - 1][0]).toUpperCase();
}
export function formatTimeToAMPM(timeStr: string) {
  return dayjs(`2000-01-01T${timeStr}`).format("hh:mm A");
}
export function formatTimeTo12hrs(timeStr: string) {
  return dayjs(`2000-01-01T${timeStr}`).format("hh:mm");
}
export function formatDate(date: string) {
  return dayjs(date).format("ll");
}

// Always return YYYY-MM-DD in local timezone
export const toSqlDate = (date: string) => {
  return dayjs(date).format("YYYY-MM-DD");
};
export const calculateTimeUntilAppointment = (
  appointmentDate: string,
  appointmentTime: string,
) => {
  const appointmentDateTime = dayjs(`${appointmentDate}T${appointmentTime}`);
  const now = dayjs();
  const diffInMinutes = appointmentDateTime.diff(now, "minute");

  if (diffInMinutes <= 0) return "Now or past";

  const days = Math.floor(diffInMinutes / (60 * 24));
  const hours = Math.floor((diffInMinutes % (60 * 24)) / 60);
  const minutes = diffInMinutes % 60;

  let parts = [];
  if (days > 0) parts.push(`${days}d`);
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);

  return `in ${parts.join(" ")}`;
};
