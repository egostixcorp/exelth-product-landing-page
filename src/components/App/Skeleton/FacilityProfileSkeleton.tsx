"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function FacilityProfileSkeleton() {
  return (
    <div className="min-h-screen bg-white p-5">
      {/* --- Cover Section --- */}
      <div className="hidden h-96 w-full items-center justify-center tablet:px-2 md:flex laptop:px-8 desktop:px-[21%]">
        <div className="grid h-full w-full grid-cols-2 gap-2 overflow-hidden rounded-2xl">
          <Skeleton className="h-full w-full" />
          <div className="grid grid-cols-2 gap-2">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-48 w-full" />
          </div>
        </div>
      </div>

      {/* Mobile Carousel Skeleton */}
      <div className="block md:hidden">
        <Skeleton className="h-64 w-full rounded-2xl" />
      </div>

      {/* --- Header Section --- */}
      <div className="mx-auto max-w-5xl px-4 py-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Skeleton className="h-6 w-40 rounded-md" />
              <Skeleton className="h-5 w-5 rounded-full" />
            </div>
            <div className="mt-1 flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-1">
                <Skeleton className="h-4 w-4 rounded-full" />
                <Skeleton className="h-4 w-64" />
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-1">
                  <Skeleton className="h-4 w-4 rounded-full" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <div className="flex items-center gap-1">
                  <Skeleton className="h-4 w-4 rounded-full" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <Skeleton className="h-10 w-24 rounded-md" />
            <Skeleton className="h-10 w-10 rounded-md" />
          </div>
        </div>

        {/* --- Departments Section --- */}
        <div className="mt-8">
          <Skeleton className="mb-3 h-5 w-40" />
          <div className="flex gap-3 overflow-x-auto">
            {[...Array(4)].map((_, i) => (
              <Skeleton
                key={i}
                className="h-16 w-32 flex-shrink-0 rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* --- Doctors Section --- */}
        <div className="mt-10">
          <div className="mb-3 flex items-center gap-2">
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="h-5 w-32" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center rounded-xl border p-4"
              >
                <Skeleton className="mb-3 h-24 w-24 rounded-full" />
                <Skeleton className="mb-1 h-4 w-32" />
                <Skeleton className="mb-2 h-3 w-24" />
                <Skeleton className="h-4 w-20" />
              </div>
            ))}
          </div>
        </div>

        {/* --- Services Section --- */}
        <div className="mt-10">
          <Skeleton className="mb-3 h-5 w-28" />
          <div className="flex flex-wrap gap-2">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-6 w-20 rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
