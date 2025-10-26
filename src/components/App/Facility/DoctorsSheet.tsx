"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Doctor = {
  doctor: {
    id: string;
    org_id: string;
    user: {
      full_name: string;
      avatar_url?: string;
    };
    department?: {
      name?: string;
    };
  };
  facility_doctor: {
    facility_id: string;
    show_price?: boolean;
    fee?: number | string;
  };
};

type DoctorsSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  doctors: Doctor[];
};

export default function DoctorsSheet({
  open,
  onOpenChange,
  doctors = [],
}: DoctorsSheetProps) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const filtered = useMemo(
    () =>
      doctors.filter((doc) =>
        doc.doctor.user.full_name.toLowerCase().includes(search.toLowerCase()),
      ),
    [search, doctors],
  );

  const handleDoctorClick = (item: Doctor) => {
    onOpenChange(false);
    router.push(
      `/search/facility/doctor?doctor_id=${item.doctor.id}&org_id=${item.doctor.org_id}&facility_id=${item.facility_doctor.facility_id}`,
    );
  };

  const handleBookClick = (item: Doctor) => {
    onOpenChange(false);
    router.push(
      `/search/facility/slot?doctor_id=${item.doctor.id}&org_id=${item.doctor.org_id}&facility_id=${item.facility_doctor.facility_id}`,
    );
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="bottom"
        className="max-h-[80vh] overflow-y-auto rounded-t-2xl"
      >
        <SheetHeader>
          <SheetTitle>Available Doctors</SheetTitle>
        </SheetHeader>

        <div className="mt-4 flex flex-col gap-3">
          <Input
            placeholder="Search doctor"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="divide-y divide-gray-100">
            {filtered.map((item) => (
              <div
                key={item.doctor.id}
                className="flex items-center justify-between py-3"
              >
                <div
                  className="flex cursor-pointer items-center gap-3"
                  onClick={() => handleDoctorClick(item)}
                >
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    {item.doctor.user.avatar_url ? (
                      <Image
                        src={item.doctor.user.avatar_url}
                        alt={item.doctor.user.full_name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-400">
                        <span className="text-sm font-medium">
                          {item.doctor.user.full_name[0]}
                        </span>
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {item.doctor.user.full_name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {item.doctor.department?.name || "Unknown"} •{" "}
                      {item.facility_doctor.show_price
                        ? `₹${item.facility_doctor.fee}`
                        : "Not provided fee"}
                    </p>
                  </div>
                </div>
                <Button
                  size="sm"
                  className="bg-green-600 text-white hover:bg-green-700"
                  onClick={() => handleBookClick(item)}
                >
                  Book
                </Button>
              </div>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
