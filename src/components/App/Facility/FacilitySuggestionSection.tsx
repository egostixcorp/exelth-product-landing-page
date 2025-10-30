"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { MapPin, Users, CheckCircle2, Map, LayoutGrid } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  GoogleMap,
  MarkerF,
  InfoWindowF,
  useJsApiLoader,
} from "@react-google-maps/api";
import { MdVerified } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

// Base API URL
const API_URL =
  process.env.NEXT_PUBLIC_API_URL_V1 || "https://api.exelth.com/api/v1";

// Map Container Styling
const containerStyle = {
  width: "100%",
  height: "clamp(300px, 50vh, 450px)",
  borderRadius: "12px",
};

// Google Map Styling
const mapOptions: google.maps.MapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: false,
  styles: [
    { featureType: "poi.business", stylers: [{ visibility: "off" }] },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ lightness: 50 }, { saturation: -100 }],
    },
  ],
};

// Dynamic Marker Icons
const MARKER_ICONS: Record<string, string> = {
  hospital: "/m_hospital.png",
  clinic: "/m_clinic.png",
  pharmacy: "/m_pham.png",
  default: "/icons/default-marker.png",
};
// ✅ NEW — User’s own marker icon
const USER_MARKER_ICON = "/m_user.png";
export default function FacilitySuggestionSection() {
  const router = useRouter();
  const [facilities, setFacilities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [radiusKm, setRadiusKm] = useState(1);
  const [tab, setTab] = useState<"card" | "map">("map");
  const [userPosition, setUserPosition] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  useEffect(() => {
    fetchFacilities();
  }, [radiusKm]);

  async function fetchFacilities() {
    try {
      setLoading(true);

      // Try to get user location
      const position = await new Promise<GeolocationPosition | null>(
        (resolve) => {
          navigator.geolocation.getCurrentPosition(resolve, () =>
            resolve(null),
          );
        },
      );
      if (position) {
        const { latitude, longitude } = position.coords;
        setUserPosition({ lat: latitude, lng: longitude });
      }
      const res = await fetch(`${API_URL}/public-facilities`);
      const data = await res.json();

      let processed = data;
      if (position) {
        const { latitude, longitude } = position.coords;
        processed = data
          .map((facility: any) => {
            const lat = parseFloat(facility.lat || "0");
            const lng = parseFloat(facility.lng || "0");
            if (!lat || !lng) return { ...facility, distanceKm: null };
            const distanceKm = haversineDistance(latitude, longitude, lat, lng);
            return { ...facility, distanceKm };
          })
          .filter((f: any) => f.distanceKm !== null && f.distanceKm <= radiusKm)
          .sort((a: any, b: any) => (a.distanceKm ?? 0) - (b.distanceKm ?? 0));
      }

      setFacilities(processed.slice(0, 6));
    } catch (err) {
      console.error("Error fetching facilities:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-6 space-y-4">
      {/* --- Header --- */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          Nearby Facilities
        </h2>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setRadiusKm((prev) => (prev === 1 ? 3 : prev === 3 ? 5 : 1))
            }
          >
            {radiusKm} km radius
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setTab(tab === "card" ? "map" : "card")}
          >
            {tab === "card" ? (
              <>
                <Map className="mr-1 h-4 w-4" /> Map
              </>
            ) : (
              <>
                <LayoutGrid className="mr-1 h-4 w-4" /> Cards
              </>
            )}
          </Button>
        </div>
      </div>

      {/* --- Loading State --- */}
      {loading ? (
        <div className="flex gap-4 overflow-x-auto">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="min-w-[200px] rounded-xl border p-3">
              <Skeleton className="h-32 w-full rounded-md" />
              <Skeleton className="mt-2 h-4 w-3/4" />
              <Skeleton className="mt-1 h-4 w-1/2" />
            </div>
          ))}
        </div>
      ) : tab === "card" ? (
        // --- CARD VIEW ---
        <div className="redd relative flex w-80 grid-cols-1 flex-row gap-4 overflow-x-auto sm:grid-cols-2 tablet:grid tablet:w-auto lg:grid-cols-3">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              onClick={() =>
                router.push(`/search/facility/profile/${facility.id}`)
              }
              className="relative w-56 cursor-pointer rounded-xl border bg-white p-3 shadow-sm transition hover:shadow-md tablet:w-auto"
            >
              {facility.verified ? (
                <div className="absolute right-5 top-5 z-40 flex items-center gap-1 rounded-md bg-blue-50 p-1 text-xs font-medium text-blue-600">
                  <MdVerified size={12} />
                  {/* Verified */}
                </div>
              ) : (
                <div className="absolute right-5 top-5 z-40 flex items-center gap-1 rounded-md bg-gray-100 p-1 text-xs font-medium text-gray-600">
                  <FaUsers size={12} />
                  {/* Community */}
                </div>
              )}

              <div className="relative h-36 w-full overflow-hidden rounded-md">
                <Image
                  src={facility.cover_photo || "/placeholder.png"}
                  alt={facility.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-2">
                <h3 className="truncate text-sm font-semibold text-gray-800">
                  {facility.name}
                </h3>
                <p className="truncate text-xs text-gray-500">
                  {facility.location?.address || "No address"}
                </p>
                {facility.distanceKm !== null && (
                  <div className="mt-1 flex items-center gap-1 text-xs font-medium text-green-600">
                    <MapPin size={12} />
                    {facility.distanceKm?.toFixed(1)} km away
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        // --- MAP VIEW ---
        <div className="w-full overflow-hidden rounded-xl border border-gray-200 shadow-sm">
          {!isLoaded && <Skeleton style={containerStyle} />}
          {isLoaded && facilities.length > 0 && (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={{
                lat: Number(facilities[0].lat || 0),
                lng: Number(facilities[0].lng || 0),
              }}
              zoom={13}
              options={mapOptions}
            >
              {/* ✅ User’s real-time marker */}
              {userPosition && (
                <MarkerF
                  position={userPosition}
                  icon={{
                    url: USER_MARKER_ICON,
                    scaledSize: new google.maps.Size(50, 50),
                  }}
                />
              )}
              {facilities.map((facility) => (
                <MapMarker key={facility.id} facility={facility} />
              ))}
            </GoogleMap>
          )}
        </div>
      )}

      {!loading && (
        <div className="flex justify-center">
          <Button
            className="mt-2 w-40 bg-green-600 hover:bg-green-700"
            onClick={() => router.push("/search")}
          >
            View More
          </Button>
        </div>
      )}
    </div>
  );
}

// ✅ Marker Component for Map
function MapMarker({ facility }: { facility: any }) {
  const [showInfo, setShowInfo] = useState(false);
  const position = {
    lat: Number(facility.lat),
    lng: Number(facility.lng),
  };

  if (!position.lat || !position.lng) return null;

  // Choose marker icon based on facility type
  const icon =
    MARKER_ICONS[facility.facility_type?.toLowerCase()] || MARKER_ICONS.default;

  return (
    <>
      <MarkerF
        position={position}
        onClick={() => setShowInfo(true)}
        // icon={{
        //   url: "",
        // }}
        icon={{
          url: icon,
          scaledSize: new google.maps.Size(50, 50),
        }}
      />
      {showInfo && (
        <InfoWindowF
          position={position}
          onCloseClick={() => setShowInfo(false)}
        >
          <div className="w-56 font-sans text-sm">
            {facility.cover_photo && (
              <Image
                src={facility.cover_photo}
                alt={facility.name}
                width={500}
                height={300}
                className="mb-2 h-24 w-full rounded-md object-cover"
              />
            )}
            <h3 className="font-semibold text-gray-800">{facility.name}</h3>
            <p className="mt-1 text-xs text-gray-600">
              {facility.location?.address || "No address"}
            </p>
          </div>
        </InfoWindowF>
      )}
    </>
  );
}

// ✅ Distance utility
function haversineDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
) {
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
