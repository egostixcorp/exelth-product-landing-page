"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import DepartmentSheet from "@/components/App/Facility/DepartmentSheet";
import { HeartPulse } from "lucide-react";
import { RequestPublishCard } from "../Card/RequestPublishCard";

interface Department {
  id: string;
  org_id: string;
  name: string;
  logo_url?: string;
}

interface Props {
  departments?: Department[];
  loading?: boolean;
  facility_id: string;
  facility_name: string;
}

export default function DepartmentsScrollView({
  departments = [],
  loading = false,
  facility_id,
  facility_name,
}: Props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  if (loading) {
    return (
      <div className="mb-8 px-4">
        <h3 className="mb-2 text-sm font-semibold">Departments</h3>
        <div className="flex gap-4">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-20 w-36 rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  if (!departments?.length) {
    return (
      <div className="mb-8 px-1">
        <h3 className="flex items-start gap-2 text-base font-semibold text-gray-900">
          {" "}
          <HeartPulse className="h-5 w-5 text-gray-600" />
          Departments
        </h3>
        <p className="text-sm text-gray-500">No departments found.</p>
        <RequestPublishCard type="department" orgId="" userId="" />
      </div>
    );
  }

  const visibleDepartments = departments.slice(0, 3);
  const hasMore = departments.length > 3;

  const handleDepartmentSelect = (dept: Department) => {
    router.push(
      `/search/facility/department?org_id=${dept.org_id}&facility_id=${facility_id}&facility_name=${facility_name}&department_id=${dept.id}&department_name=${dept.name}`,
    );
  };

  return (
    <div className="mb-8 px-1">
      <div className="mb-3 flex items-start gap-2">
        <HeartPulse className="h-5 w-5 text-gray-600" />
        <h3 className="text-base font-semibold text-gray-900">Departments</h3>
      </div>

      <Carousel className="w-full max-w-full">
        <CarouselContent>
          {visibleDepartments.map((dept) => (
            <CarouselItem
              key={dept.id}
              className="basis-1/2 sm:basis-1/3 lg:basis-1/5"
            >
              <div
                onClick={() => handleDepartmentSelect(dept)}
                className="flex cursor-pointer flex-col items-center justify-center rounded-xl border bg-gray-50 p-4 transition hover:bg-gray-100"
              >
                {dept.logo_url ? (
                  <Image
                    src={dept.logo_url}
                    alt={dept.name}
                    width={50}
                    height={50}
                    className="mb-2 rounded-full object-cover"
                  />
                ) : (
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 font-bold text-gray-600">
                    {dept.name.charAt(0)}
                  </div>
                )}
                <p className="text-center text-sm font-medium text-gray-800">
                  {dept.name}
                </p>
              </div>
            </CarouselItem>
          ))}

          {hasMore && (
            <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/5">
              <div
                onClick={() => setOpen(true)}
                className="flex h-full cursor-pointer items-center justify-center rounded-xl border bg-gray-50 p-4 transition hover:bg-gray-100"
              >
                <p className="text-sm font-medium text-gray-800">See More</p>
              </div>
            </CarouselItem>
          )}
        </CarouselContent>
        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      </Carousel>

      {/* Sheet for "See More" */}
      <DepartmentSheet
        open={open}
        onOpenChange={setOpen}
        departments={departments}
        onSelect={handleDepartmentSelect}
      />
    </div>
  );
}
