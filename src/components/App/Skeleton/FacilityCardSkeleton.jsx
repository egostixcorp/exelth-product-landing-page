"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const FacilityCardSkeleton = () => {
  return (
    <div className="block w-full max-w-80 overflow-hidden rounded-xl border border-gray-100 bg-white transition">
      {/* Image placeholder */}
      <div className="relative h-52 w-full overflow-hidden rounded-t-xl">
        <Skeleton className="h-full w-full" />
      </div>

      {/* Text placeholders */}
      <div className="flex flex-col gap-2 p-4">
        {/* Name + badge row */}
        <div className="flex items-center justify-between gap-2">
          <Skeleton className="h-5 w-40 rounded-md" /> {/* name */}
          <Skeleton className="h-5 w-16 rounded-md" /> {/* badge */}
        </div>

        {/* Address text lines */}
        <Skeleton className="h-4 w-3/4 rounded-md" />
        <Skeleton className="h-4 w-1/2 rounded-md" />
      </div>
    </div>
  );
};

export default FacilityCardSkeleton;
