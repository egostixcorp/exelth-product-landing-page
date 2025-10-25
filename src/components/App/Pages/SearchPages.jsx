"use client";

import React, { useEffect, useState, useCallback } from "react";
// import { Colors } from "@/constants/Brand";
import { API_URL_V1 } from "@/const/URL";
import FacilityCard from "@/components/App/Card/FacilityCard";
import FacilityCardSkeleton from "@/components/App/Skeleton/FacilityCardSkeleton";
// import SearchHeader from "@/components/Global/SearchHeader";
import { useAuth } from "@/context/AuthContext";
import { FaUsers } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const allowedPhones = ["917478005366", "919800908021"];
const restrictedFacilityIds = ["089f5f81-631d-4e10-a980-2f804b808154"];

const SearchPage = () => {
  const { user } = useAuth();
  const [facilities, setFacilities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchFacilities = useCallback(async () => {
    try {
      setError("");
      const response = await fetch(`${API_URL_V1}/public-facilities`);
      if (!response.ok) throw new Error("Failed to fetch facilities");

      const json = await response.json();

      // Filter based on restriction logic
      const visibleFacilities = json.filter((facility) => {
        if (restrictedFacilityIds.includes(facility.id)) {
          return allowedPhones.includes(user?.phone ?? "");
        }
        return true;
      });

      setFacilities(visibleFacilities);
    } catch (err) {
      console.error(err);
      setError("Could not load facilities. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchFacilities();
  }, [fetchFacilities]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* <SearchHeader /> */}

      <div className="container mx-auto px-4 py-4">
        {loading ? (
          <div className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <FacilityCardSkeleton key={i} />
            ))}
          </div>
        ) : error ? (
          <p className="mt-4 text-center text-red-500">{error}</p>
        ) : facilities.length === 0 ? (
          <p className="mt-4 text-center text-gray-500">No facilities found.</p>
        ) : (
          <div className="grid grid-cols-1 place-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => (
              <FacilityCard
                key={facility.id}
                id={facility.id}
                name={facility.name}
                address={facility.location?.address ?? "No address provided"}
                image={facility.cover_photo}
                status={facility.verified}
              />
            ))}
          </div>
        )}
      </div>

      <div className=" flex w-full items-center justify-center bg-white">
        <p className="redd w-fit rounded-3xl border border-green-500 p-2 text-center text-xs text-gray-600">
          <span className="font-bold text-black">Disclaimer:</span> Some clinic
          profiles are community{" "}
          <FaUsers size={12} className="inline-block text-gray-500" /> for
          discovery purposes. Exelth does not claim partnership unless marked
          Verified{" "}
          <MdVerified size={12} className="inline-block text-blue-500" />.
        </p>
      </div>
    </div>
  );
};

export default SearchPage;
