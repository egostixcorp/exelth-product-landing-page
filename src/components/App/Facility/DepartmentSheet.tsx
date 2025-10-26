"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Department {
  id: string;
  org_id: string;
  name: string;
  logo_url?: string;
}

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  departments: Department[];
  onSelect: (dept: Department) => void;
}

export default function DepartmentSheet({
  open,
  onOpenChange,
  departments = [],
  onSelect,
}: Props) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return departments;
    return departments.filter((dept) =>
      dept.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, departments]);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="h-[75%] rounded-t-2xl p-0">
        <SheetHeader className="border-b p-4">
          <SheetTitle>Departments</SheetTitle>
          <SheetDescription>
            Select a department to view its details
          </SheetDescription>
        </SheetHeader>

        <div className="p-4">
          <Input
            placeholder="Search department..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-4"
          />

          <ScrollArea className="h-[60vh]">
            <div className="flex flex-col divide-y pb-10">
              {filtered.length > 0 ? (
                filtered.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => {
                      onSelect(dept);
                      onOpenChange(false);
                    }}
                    className="flex items-center gap-3 rounded-md px-2 py-3 text-left transition hover:bg-gray-50"
                  >
                    {dept.logo_url ? (
                      <Image
                        src={dept.logo_url}
                        alt={dept.name}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 font-semibold text-gray-600">
                        {dept.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <p className="font-medium text-gray-900">{dept.name}</p>
                    </div>
                  </button>
                ))
              ) : (
                <p className="mt-10 text-center text-gray-500">
                  No departments found.
                </p>
              )}
            </div>
          </ScrollArea>

          <div className="mt-4 flex justify-end">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Close
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
