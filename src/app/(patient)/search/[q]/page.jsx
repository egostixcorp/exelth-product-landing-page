"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { CheckCircle2, Users } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { API_URL_V1 } from "@/const/URL";
import FacilityCard from "@/components/App/Card/FacilityCard";
import FacilitiesDoctorCard from "@/components/App/Facility/FacilitiesDoctorCard";

// interface Doctor {
//   id: string;
//   org_id: string;
//   appointment_price?: string | number;
//   department?: { name?: string };
//   user?: { full_name?: string; avatar_url?: string };
// }

// interface Facility {
//   id: string;
//   name: string;
//   location?: { address?: string };
//   cover_photo?: string;
//   verified?: boolean;
//   doctors?: Doctor[];
// }

// interface SearchResults {
//   facilities: Facility[];
//   matchedSpecialty?: string | null;
// }

export default function SearchResultsPage() {
  const router = useRouter();
  const { q } = useParams();
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const normalizedQuery = Array.isArray(q) ? q[0] : q;
  useEffect(() => {
    if (!q) return;
    fetchResults();
  }, [q]);

  async function fetchResults() {
    try {
      setLoading(true);
      const res = await fetch(
        `${API_URL_V1}/search?query=${encodeURIComponent(normalizedQuery)}`,
      );
      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.error("Search error:", err);
    } finally {
      setLoading(false);
    }
  }
//   console.log("Doctors", results.facilities.name);

  // --- Loading State ---
  if (loading) {
    return (
      <div className="flex min-h-[70vh] w-full items-center justify-center">
        <Skeleton className="h-6 w-32" />
      </div>
    );
  }

  // --- No Results ---
  if (!results || !results.facilities || results.facilities.length === 0) {
    return (
      <div className="flex min-h-[70vh] w-full flex-col items-center justify-center text-gray-500">
        <p>No results found for: {q}</p>
        <Button
          onClick={() => router.push("/search")}
          className="mt-4 bg-green-600 hover:bg-green-700"
        >
          Back to Search
        </Button>
      </div>
    );
  }

  // --- Render Results ---
  return (
    <div className="flex min-h-screen flex-col items-center bg-white px-4 py-6 md:px-8">
      <h1 className="mb-4 text-lg font-semibold text-gray-800">
        Results for <span className="text-green-600">{q}</span>
      </h1>

      <div className="grid w-full max-w-5xl grid-cols-1 place-content-center gap-5 space-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {results.facilities.map((facility) => (
          <div
            key={facility.id}
            className="overflow-hidden flex-col flex items-center justify-center gap-2 pt-1 rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
          >
            {/* --- Facility Header --- */}
            <FacilityCard
              id={facility.id}
              name={facility.name}
              address={facility.location?.address ?? "No address available"}
              image={facility.cover_photo ?? "/placeholder-hospital.jpg"}
              status={facility.verified}
            />

            {/* --- Doctors Section --- */}
            {facility.doctors && facility.doctors.length > 0 && (
              <div className="border-t border-gray-100 bg-gray-50 px-4 py-3">
                <div className="flex flex-col gap-3">
                  {facility.doctors.map((doc) => {
                    const doctor = doc.doctor || {}; // handle nested structure safely
                    return (
                      <FacilitiesDoctorCard
                        key={doctor.id}
                        doctor_id={doctor.id}
                        org_id={doctor.org_id}
                        facility_id={facility.id}
                        name={doctor.user?.full_name ?? "Unknown Doctor"}
                        specialty={doctor.department?.name ?? "General"}
                        fee={
                          doc.appointment_price
                            ? `${doc.appointment_price}`
                            : "Fee not available"
                        }
                        image={
                          doctor.user?.avatar_url ?? "/doctor-placeholder.png"
                        }
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* --- Disclaimer --- */}
      <p className="mt-8 text-center text-xs leading-relaxed text-gray-600">
        <strong className="font-semibold text-gray-900">Disclaimer:</strong>{" "}
        Some clinic profiles are community{" "}
        <Users className="inline-block h-3 w-3 text-gray-500" /> listings for
        discovery purposes. Exelth does not claim partnership unless marked{" "}
        <CheckCircle2 className="inline-block h-3 w-3 text-blue-500" />{" "}
        Verified.
      </p>
    </div>
  );
}
