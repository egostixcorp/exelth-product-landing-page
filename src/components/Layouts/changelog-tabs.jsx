"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

const TABS = [
  { label: "All", value: "all" },
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
    <div className="flex items-center gap-1 rounded-lg border bg-neutral-100 p-1 dark:bg-neutral-900">
      {TABS.map((tab) => (
        <button
          key={tab.value}
          onClick={() => handleTab(tab.value)}
          className={cn(
            "rounded-md px-4 py-1.5 text-sm font-medium transition-colors",
            active === tab.value
              ? "bg-white text-black shadow-sm dark:bg-neutral-800 dark:text-white"
              : "text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200",
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
