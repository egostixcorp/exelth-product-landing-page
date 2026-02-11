"use client";

import React, { useEffect, useState, useCallback } from "react";
// import { Colors } from "@/constants/Brand";
import { API_URL_V1 } from "@/const/URL";
import FacilityCard from "@/components/App/Card/FacilityCard";
import FacilityCardSkeleton from "@/components/App/Skeleton/FacilityCardSkeleton";
// import SearchHeader from "@/components/Global/SearchHeader";
import FacilityPlacesCarousel from "@/components/App/Global/FacilityPlacesCarousel";
import { useAuth } from "@/context/AuthContext";
import { FaUsers } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import FacilityPlacesCarouselSkeleton from "../Skeleton/FacilityPlacesCarouselSkeleton";

const allowedPhones = ["917478005366", "919800908021"];
const restrictedFacilityIds = ["089f5f81-631d-4e10-a980-2f804b808154"];

const SearchPage = () => {
  const { user } = useAuth();
  const [facilities, setFacilities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  //  const [userPosition, setUserPosition] = useState<{
  //     lat: number;
  //     lng: number;
  //   } | null>(null);
  const fetchFacilities = useCallback(async () => {
    try {
      setError("");
      // Try to get user location
      const position = await new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(resolve, () => resolve(null));
      });
      if (position) {
        const { latitude, longitude } = position.coords;
        // setUserPosition({ lat: latitude, lng: longitude });
      }
      const response = await fetch(`${API_URL_V1}/public-facilities`);
      if (!response.ok) throw new Error("Failed to fetch facilities");

      const data = await response.json();
      let processed = data;
      if (position) {
        const { latitude, longitude } = position.coords;
        processed = data
          .map((facility) => {
            const lat = parseFloat(facility.lat || "0");
            const lng = parseFloat(facility.lng || "0");
            if (!lat || !lng) return { ...facility, distanceKm: null };
            const distanceKm = haversineDistance(latitude, longitude, lat, lng);
            return { ...facility, distanceKm };
          })
          // .filter((f) => f.distanceKm !== null && f.distanceKm <= radiusKm)
          .sort((a, b) => (a.distanceKm ?? 0) - (b.distanceKm ?? 0));
      }
      // Filter based on restriction logic
      const visibleFacilities = processed.filter((facility) => {
        if (restrictedFacilityIds.includes(facility.id)) {
          return allowedPhones.includes(user?.phone ?? "");
        }
        return true;
      });
      const uniqueCities = [
        ...new Set(
          visibleFacilities.map((f) => f.location?.city).filter(Boolean), // Remove null/undefined values
        ),
      ];
      const grouped = uniqueCities.reduce((acc, city) => {
        acc[city] = visibleFacilities.filter((f) => f.location?.city === city);
        return acc;
      }, {});
      setFacilities(grouped);
      // setFacilities(visibleFacilities);
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
      {/* <div className="container mx-auto px-4 py-4">
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
      </div> */}
      <div className="container mx-auto px-4 py-4">
        {loading ? (
          <div className="w-full">
            {[1, 2, 3].map((i) => (
              <FacilityPlacesCarouselSkeleton key={i} />
            ))}
          </div>
        ) : Object.keys(facilities).length === 0 ? (
          <p className="text-center text-gray-500">No facilities found.</p>
        ) : (
          <>
            {Object.entries(facilities).map(([city, facilities]) => (
              <FacilityPlacesCarousel
                key={city}
                cityName={city}
                facilities={facilities}
              />
            ))}
          </>
        )}
      </div>

      <div className="flex w-full items-center justify-center bg-white">
        <p className="redd w-full rounded-3xl border border-green-500 p-2 text-center text-xs text-gray-600">
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
// ✅ Distance utility
function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
