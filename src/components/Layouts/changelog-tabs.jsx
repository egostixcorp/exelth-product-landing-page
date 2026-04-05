"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

const TABS = [
  { label: "All updates", value: "all" },
  { label: "Infra Platform", value: "infra-platform" },
  { label: "Care App", value: "care-app" },
];

export default function ChangelogTabs() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const active = searchParams.get("product") || "all";

  function handleTab(value) {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "all") {
      params.delete("product");
    } else {
      params.set("product", value);
    }
    router.push(`/changelog?${params.toString()}`);
  }

  return (
    <div className="flex items-center gap-1 self-start rounded-full border border-neutral-200 bg-neutral-50 p-1 dark:border-neutral-800 dark:bg-neutral-900">
      {TABS.map((tab) => (
        <button
          key={tab.value}
          onClick={() => handleTab(tab.value)}
          className={cn(
            "min-h-[36px] rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-150",
            active === tab.value
              ? "bg-white text-neutral-900 shadow-sm ring-1 ring-neutral-200 dark:bg-neutral-800 dark:text-white dark:ring-neutral-700"
              : "text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-300",
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
