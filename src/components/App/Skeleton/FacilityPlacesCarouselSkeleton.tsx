"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const FacilityPlacesCarouselSkeleton = ({ count = 3 }) => {
  return (
    <div className="relative mb-8 w-80 px-4 sm:mb-10 sm:px-6 tablet:w-full lg:mb-12 lg:px-8">
      {/* Header Section */}
      <div className="mb-4 flex items-center justify-between sm:mb-6">
        <div className="flex items-center gap-2">
          <Skeleton className="h-6 w-40 rounded-md sm:h-8 sm:w-56 lg:h-10 lg:w-64" />
        </div>
        <Skeleton className="hidden h-5 w-16 rounded-md sm:block" />
      </div>

      {/* Carousel Section */}
      <div className="flex w-full gap-4 overflow-x-auto pb-2">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="flex w-full flex-shrink-0 flex-col gap-3 tablet:w-56 laptop:w-56 desktop:w-72"
          >
            <Skeleton className="h-44 w-full rounded-xl sm:h-56 lg:h-64" />
            <div className="flex flex-col gap-2 px-1">
              <Skeleton className="h-4 w-3/4 rounded-md" />
              <Skeleton className="h-3 w-1/2 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacilityPlacesCarouselSkeleton;
