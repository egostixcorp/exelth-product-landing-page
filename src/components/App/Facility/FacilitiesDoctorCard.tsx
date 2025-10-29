"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDoctorAvailability } from "@/components/hooks/useDoctorAvailability";
import { useDoctorFacilityStatus } from "@/components/hooks/useDoctorFacilityStatus";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FacilitiesDoctorCardProps = {
  name: string;
  specialty: string;
  fee?: string | number;
  image?: string;
  doctor_id: string;
  org_id: string;
  facility_id: string;
};

export default function FacilitiesDoctorCard({
  name,
  specialty,
  fee,
  image,
  doctor_id,
  org_id,
  facility_id,
}: FacilitiesDoctorCardProps) {
  const router = useRouter();
  const availabilityText = useDoctorAvailability(doctor_id);
  const { showPrice, loading } = useDoctorFacilityStatus(
    facility_id,
    doctor_id,
  );

  return (
    <div
      onClick={() =>
        router.push(
          `/search/facility/doctor?doctor_id=${doctor_id}&org_id=${org_id}&facility_id=${facility_id}`,
        )
      }
      className={cn(
        "flex cursor-pointer items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md",
      )}
    >
      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="64px"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-400">
            <span className="text-sm font-medium">{name[0]}</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col">
        <p className="text-base font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-600">{specialty}</p>
        <p className="mt-1 text-sm font-medium text-gray-700">
          {showPrice && fee ? `₹${fee}` : "Not provided fee"}
        </p>
        {availabilityText && (
          <p className="mt-1 text-xs text-green-600">{availabilityText}</p>
        )}
      </div>

      <Button
        variant="default"
        size="sm"
        className="bg-green-600 text-white hover:bg-green-700"
        onClick={(e) => {
          e.stopPropagation();
          router.push(
            `/search/facility/doctor?doctor_id=${doctor_id}&org_id=${org_id}&facility_id=${facility_id}`,
          );
        }}
      >
        Book
      </Button>
    </div>
  );
}
