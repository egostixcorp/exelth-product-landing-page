import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function detectSearchType(term:string) {
  const lower = term.toLowerCase();

  if (lower.includes("clinic") || lower.includes("hospital")) return "clinic";
  if (lower.includes("doctor") || lower.includes("dr") || lower.includes("md"))
    return "doctor";
  if (lower.includes("lab") || lower.includes("test")) return "lab";
  if (lower.includes("appointment") || lower.includes("book"))
    return "appointment";

  return "general"; // default fallback
}