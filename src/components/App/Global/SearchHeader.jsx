"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { detectSearchType } from "@/lib/utils";
import { IoMdSearch } from "react-icons/io";
import { createClient } from "@/utils/supabase/client";
// import { getPatientID } from "@/data/user";
// import { useAuth } from "@/context/AppAuthContext";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { Colors } from "@/constants/Brand";
import { Filter } from "lucide-react";
import { cn } from "@/lib/utils";
import { getPatientID } from "@/app/actions/user";
import { useAuth } from "@/context/AuthContext";

const SearchHeader = () => {
  const supabase = createClient();
  const [query, setQuery] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const placeholders = [
    "Hospitals",
    "Clinics",
    "Lab tests",
    "Book appointments",
  ];
  const router = useRouter();
    const { user } = useAuth();

  // Filter states
  const [location, setLocation] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [department, setDepartment] = useState("");
  const departmentsList = [
    "Cardiology",
    "Orthopedics",
    "Dermatology",
    "Pediatrics",
    "General Medicine",
  ];

  // Cycle placeholder every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [placeholders.length]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const searchType = detectSearchType(query.trim());
    const patientId = await getPatientID(user?.id);
    // const patientId = "test-patient-id"; // Placeholder for patient ID

    const { error } = await supabase.from("patient_search_logs").insert({
      term: query.trim(),
      user_id: patientId || null,
      search_type: searchType,
    });

    if (error) console.error("❌ Supabase insert error:", error);
    router.push(`/search/${encodeURIComponent(query)}`);
    // router.push(`/search`);
  };

  const applyFilters = () => {
    console.log("Filters applied:", {
      location,
      priceMin,
      priceMax,
      department,
    });
    // You could extend this to update URL params for filtered search
  };

  const resetFilters = () => {
    setLocation("");
    setPriceMin("");
    setPriceMax("");
    setDepartment("");
  };

  return (
    <div className="flex w-full items-center justify-center">
      <form
        onSubmit={handleSearch}
        className="redd flex h-20 w-96 items-center justify-center gap-2"
      >
        <div className="rede relative w-full">
          <Input
            type="text"
            placeholder={`Search for ${placeholders[placeholderIndex]}`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex h-12 rounded-full bg-white px-4 py-2 text-sm shadow-md focus-visible:ring-1 focus-visible:ring-green-500"
          />
          <div className="absolute right-1 top-1 flex size-10 items-center justify-center rounded-full bg-green-600">
            <IoMdSearch size={25} color="white" />
          </div>
        </div>

        {/* <Sheet>
          <SheetTrigger asChild>
            <Button
              type="button"
              size="icon"
              disabled={!query.trim()}
              className={cn(
                "rounded-xl bg-green-600 text-white shadow-sm hover:bg-green-700",
                !query.trim() && "cursor-not-allowed opacity-50",
              )}
            >
              <Filter size={20} />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-full overflow-y-auto sm:w-[400px]"
          >
            <SheetHeader>
              <SheetTitle>Filter Options</SheetTitle>
            </SheetHeader>

            <div className="mt-4 space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Location
                </label>
                <Input
                  placeholder="Enter city or area"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Price Range
                </label>
                <div className="mt-1 flex gap-2">
                  <Input
                    placeholder="Min"
                    type="number"
                    value={priceMin}
                    onChange={(e) => setPriceMin(e.target.value)}
                  />
                  <Input
                    placeholder="Max"
                    type="number"
                    value={priceMax}
                    onChange={(e) => setPriceMax(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Department
                </label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {departmentsList.map((dept) => (
                    <button
                      key={dept}
                      type="button"
                      onClick={() =>
                        setDepartment((prev) => (prev === dept ? "" : dept))
                      }
                      className={cn(
                        "rounded-full border px-3 py-1.5 text-sm transition",
                        department === dept
                          ? "border-green-600 bg-green-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200",
                      )}
                    >
                      {dept}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={resetFilters}
                >
                  Reset
                </Button>
                <Button
                  className="flex-1 bg-green-600 hover:bg-green-700"
                  onClick={applyFilters}
                >
                  Apply
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet> */}
      </form>
    </div>
  );
};

export default SearchHeader;
