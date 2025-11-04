"use client";

import * as React from "react";
import { IoMdSearch } from "react-icons/io";
import { MapPin, Stethoscope, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// ---- Mock Data ---- //
const suggestedLocations = [
  {
    name: "Kolkata, West Bengal",
    desc: "For sights like Victoria Memorial",
    icon: "🏙️",
  },
  { name: "Puri, Odisha", desc: "Known for its beaches", icon: "🏖️" },
  {
    name: "Bangalore, Karnataka",
    desc: "India’s tech hub with top hospitals",
    icon: "💻",
  },
  {
    name: "Chennai, Tamil Nadu",
    desc: "Leading city for medical tourism",
    icon: "🏥",
  },
  {
    name: "Delhi, India",
    desc: "Known for multi-specialty facilities",
    icon: "🌆",
  },
];

const mockDepartments = [
  { name: "Cardiology", desc: "Heart & vascular care", icon: "❤️" },
  { name: "Orthopedics", desc: "Bone & joint treatments", icon: "🦴" },
  { name: "Neurology", desc: "Brain and nervous system", icon: "🧠" },
  { name: "Pediatrics", desc: "Child health specialists", icon: "👶" },
  { name: "Dermatology", desc: "Skin & cosmetic care", icon: "🧴" },
];

const mockDoctorsByLocation: Record<
  string,
  { name: string; specialty: string; icon: string }[]
> = {
  "Kolkata, West Bengal": [
    { name: "Dr. Ananya Sen", specialty: "Cardiologist", icon: "🫀" },
    { name: "Dr. Rajesh Saha", specialty: "Orthopedic Surgeon", icon: "🦴" },
  ],
  "Bangalore, Karnataka": [
    { name: "Dr. Priya Reddy", specialty: "Neurologist", icon: "🧠" },
    { name: "Dr. Rohan Iyer", specialty: "Pediatrician", icon: "👶" },
  ],
  "Chennai, Tamil Nadu": [
    { name: "Dr. Kavita Rao", specialty: "Dermatologist", icon: "🧴" },
  ],
};

export default function PatientSearchBar() {
  const router = useRouter();
  const [openPopover, setOpenPopover] = React.useState<string | null>(null);
  const [location, setLocation] = React.useState("");
  const [department, setDepartment] = React.useState("");
  const [doctor, setDoctor] = React.useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(
      `/search?location=${encodeURIComponent(location)}&department=${encodeURIComponent(
        department,
      )}&doctor=${encodeURIComponent(doctor)}`,
    );
  };

  const doctors = mockDoctorsByLocation[location] || [];

  return (
    <div className="mx-auto mt-10 flex w-full max-w-3xl items-center justify-center">
      <form
        onSubmit={handleSearch}
        className="flex h-20 w-full flex-wrap items-center justify-between gap-2 rounded-full border border-gray-200 bg-white px-2 py-2 shadow-sm transition-all hover:shadow-md md:flex-nowrap"
      >
        {/* ---- Location Selector ---- */}
        <Popover
          open={openPopover === "location"}
          onOpenChange={(open) => setOpenPopover(open ? "location" : null)}
        >
          <PopoverTrigger asChild>
            <div
              className={cn(
                "flex w-full cursor-pointer flex-col px-3 py-3 md:w-auto",
                {
                  "rounded-full bg-green-50": openPopover === "location",
                },
              )}
            >
              <label className="flex items-center gap-1 text-xs font-semibold text-gray-700">
                <MapPin className="h-3 w-3 text-gray-500" /> Where
              </label>
              <Input
                placeholder="Search location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mt-0.5 border-none bg-transparent text-sm text-gray-800 shadow-none placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </PopoverTrigger>

          <PopoverContent
            align="start"
            sideOffset={8}
            className="mt-2 w-[320px] rounded-2xl p-0"
          >
            <div className="border-bd px-4 py-2">
              <h4 className="text-sm font-semibold text-gray-700">
                Suggested locations
              </h4>
            </div>

            <div className="max-h-[300px] overflow-y-auto py-1">
              {suggestedLocations.map((loc) => (
                <button
                  key={loc.name}
                  type="button"
                  onClick={() => {
                    setLocation(loc.name);
                    setOpenPopover(null);
                  }}
                  className={cn(
                    "flex w-full items-center gap-4 px-4 py-3 text-left transition hover:bg-gray-50",
                    location === loc.name && "bg-green-50",
                  )}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-lg">
                    {loc.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {loc.name}
                    </p>
                    <p className="text-xs text-gray-500">{loc.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {/* ---- Department Selector ---- */}
        <Popover
          open={openPopover === "department"}
          onOpenChange={(open) => setOpenPopover(open ? "department" : null)}
        >
          <PopoverTrigger asChild>
            <div
              className={cn(
                "flex w-full cursor-pointer flex-col px-3 py-3 md:w-auto",
                {
                  "rounded-full bg-green-50": openPopover === "department",
                },
              )}
            >
              <label className="flex items-center gap-1 text-xs font-semibold text-gray-700">
                <Users className="h-3 w-3 text-gray-500" /> Department
              </label>
              <Input
                placeholder="Select department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="mt-0.5 border-none bg-transparent text-sm text-gray-800 shadow-none placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </PopoverTrigger>

          <PopoverContent
            align="start"
            sideOffset={8}
            className="mt-2 w-[320px] rounded-2xl p-0"
          >
            <div className="border-bd border-gray-200 px-4 py-2">
              <h4 className="text-sm font-semibold text-gray-700">
                Top departments
              </h4>
            </div>

            <div className="max-h-[300px] overflow-y-auto py-1">
              {mockDepartments.map((dept) => (
                <button
                  key={dept.name}
                  type="button"
                  onClick={() => {
                    setDepartment(dept.name);
                    setOpenPopover(null);
                  }}
                  className={cn(
                    "flex w-full items-center gap-4 px-4 py-3 text-left transition hover:bg-gray-50",
                    department === dept.name && "bg-green-50",
                  )}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-lg">
                    {dept.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {dept.name}
                    </p>
                    <p className="text-xs text-gray-500">{dept.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {/* ---- Doctor Selector ---- */}
        <Popover
          open={openPopover === "doctor"}
          onOpenChange={(open) => setOpenPopover(open ? "doctor" : null)}
        >
          <PopoverTrigger asChild>
            <div
              className={cn(
                "flex w-full cursor-pointer flex-col px-3 py-3 md:w-auto",
                {
                  "rounded-full bg-green-50": openPopover === "doctor",
                },
              )}
            >
              <label className="flex items-center gap-1 text-xs font-semibold text-gray-700">
                <Stethoscope className="h-3 w-3 text-gray-500" /> Doctor
              </label>
              <Input
                placeholder={
                  location ? "Select doctor" : "Select location first"
                }
                value={doctor}
                disabled={!location}
                onChange={(e) => setDoctor(e.target.value)}
                className="mt-0.5 border-none bg-transparent text-sm text-gray-800 placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </PopoverTrigger>

          <PopoverContent
            align="start"
            sideOffset={8}
            className="mt-2 w-[320px] rounded-2xl p-0 shadow-xl"
          >
            {location ? (
              <>
                <div className="border-bd border-gray-200 px-4 py-2">
                  <h4 className="text-sm font-semibold text-gray-700">
                    Doctors in {location}
                  </h4>
                </div>
                <div className="max-h-[300px] overflow-y-auto py-1">
                  {doctors.map((doc) => (
                    <button
                      key={doc.name}
                      type="button"
                      onClick={() => {
                        setDoctor(doc.name);
                        setOpenPopover(null);
                      }}
                      className={cn(
                        "flex w-full items-center gap-4 px-4 py-3 text-left transition hover:bg-gray-50",
                        doctor === doc.name && "bg-green-50",
                      )}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-lg">
                        {doc.icon}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {doc.name}
                        </p>
                        <p className="text-xs text-gray-500">{doc.specialty}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="p-4 text-sm text-gray-500">
                Select a location first to view doctors.
              </div>
            )}
          </PopoverContent>
        </Popover>

        {/* ---- Search Button ---- */}
        <Button
          type="submit"
          size="icon"
          className="ml-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-600 hover:bg-green-700"
        >
          <IoMdSearch size={22} color="#fff" />
        </Button>
      </form>
    </div>
  );
}
