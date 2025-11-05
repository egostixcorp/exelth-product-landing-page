"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Skeleton } from "../../ui/skeleton";
import FacilityCard from "../Card/FacilityCard";
import { useParams } from "next/navigation";
import {
  GoogleMap,
  MarkerF,
  InfoWindowF,
  useJsApiLoader,
  CircleF,
} from "@react-google-maps/api";
import { MdVerified } from "react-icons/md";
import { API_URL_V1 } from "@/const/URL";
import { useAuth } from "@/context/AuthContext";

// const API_URL_V1 =
//   process.env.NEXT_PUBLIC_API_URL_V1 || "https://api.exelth.com/api/v1";
const allowedPhones = ["917478005366", "919800908021"];
const restrictedFacilityIds = ["089f5f81-631d-4e10-a980-2f804b808154"];

// Mock user - replace with actual auth
const mockUser = { phone: "917478005366" };

// Map Container Styling
const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "24px",
};

// Google Map Options
const mapOptions = {
  disableDefaultUI: false,
  zoomControl: true,
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: true,
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
const MARKER_ICONS = {
  hospital: "/m_hospital.png",
  clinic: "/m_clinic.png",
  pharmacy: "/m_pham.png",
  default: "/m_clinic.png",
};

// Map Marker Component
function MapMarker({ facility }) {
  const [showInfo, setShowInfo] = useState(false);
  const position = {
    lat: Number(facility.lat),
    lng: Number(facility.lng),
  };

  if (!position.lat || !position.lng) return null;

  const icon =
    MARKER_ICONS[facility.facility_type?.toLowerCase()] || MARKER_ICONS.default;

  return (
    <>
      <MarkerF
        position={position}
        onClick={() => setShowInfo(true)}
        icon={{
          url: icon,
          scaledSize: new window.google.maps.Size(50, 50),
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
                width={224}
                height={96}
                className="mb-2 h-24 w-full rounded-md object-cover"
              />
            )}
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-gray-800">{facility.name}</h3>
              {facility.verified && (
                <MdVerified
                  className="mt-0.5 flex-shrink-0 text-blue-500"
                  size={16}
                />
              )}
            </div>
            <p className="mt-1 text-xs text-gray-600">
              {facility.facility_type}
            </p>
            <p className="mt-1 text-xs text-gray-600">
              {facility.location?.address || "No address"}
            </p>
          </div>
        </InfoWindowF>
      )}
    </>
  );
}

const PlacesClientPage = ({ placeName }) => {
  // const params = useParams();
  // const placeName = params?.place || "";
  const decodedPlace = decodeURIComponent(placeName);
  const { user } = useAuth();
  const [facilities, setFacilities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [mapCenter, setMapCenter] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  // Fetch facilities based on place/city name
  const fetchFacilities = useCallback(async () => {
    try {
      setError("");
      setLoading(true);

      // Replace with actual API call
      const response = await fetch(`${API_URL_V1}/public-facilities`);
      const data = await response.json();

      // Filter facilities by city name
      const filteredFacilities = data.filter(
        (facility) =>
          facility.location?.city?.toLowerCase() === decodedPlace.toLowerCase(),
      );

      // Apply restriction logic
      const visibleFacilities = filteredFacilities.filter((facility) => {
        if (restrictedFacilityIds.includes(facility.id)) {
          return allowedPhones.includes(user?.phone ?? "");
        }
        return true;
      });

      setFacilities(visibleFacilities);

      // Calculate map center from facilities
      if (visibleFacilities.length > 0) {
        const validFacilities = visibleFacilities.filter((f) => f.lat && f.lng);
        if (validFacilities.length > 0) {
          const avgLat =
            validFacilities.reduce((sum, f) => sum + Number(f.lat), 0) /
            validFacilities.length;
          const avgLng =
            validFacilities.reduce((sum, f) => sum + Number(f.lng), 0) /
            validFacilities.length;
          setMapCenter({ lat: avgLat, lng: avgLng });
        }
      }
    } catch (err) {
      console.error(err);
      setError("Could not load facilities. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, [decodedPlace]);

  useEffect(() => {
    fetchFacilities();
  }, [fetchFacilities]);

  if (loading) {
    return (
      <div className="flex h-full w-full items-start justify-center gap-5 p-4 sm:p-6 lg:p-10">
        <div className="grid h-full w-full grid-cols-1 place-items-center gap-5 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-3">
          {Array.from({ length: 6 }).map((_, idx) => (
            <Skeleton
              key={idx}
              className="h-64 w-80 rounded-3xl tablet:w-64 laptop:w-60 desktop:w-60"
            />
          ))}
        </div>
        <div className="sticky top-36 hidden h-[75vh] w-full laptop:block">
          <Skeleton className="h-full w-full rounded-3xl" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (facilities.length === 0) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900">
            No facilities found in {decodedPlace}
          </h2>
          <p className="mt-2 text-gray-600">
            Try searching for a different location
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="redd flex h-full w-full flex-col items-start justify-start gap-5 p-4 sm:p-6 lg:flex-row lg:p-10">
      {/* Facilities List */}
      <div className="w-full lg:w-auto lg:flex-1">
        <h1 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">
          Facilities in {decodedPlace}
        </h1>
        <div className="grid h-full w-full grid-cols-1 place-items-center gap-5 tablet:grid-cols-3 laptop:grid-cols-2 desktop:grid-cols-3">
          {facilities.map((facility) => (
            <FacilityCard
              key={facility.id}
              id={facility.id}
              name={facility.name}
              address={facility.location?.address ?? "No address provided"}
              image={facility.cover_photo}
              status={facility.verified}
              ClassName="w-80"
            />
          ))}
        </div>
      </div>

      {/* Google Maps */}
      <div className="sticky top-32 hidden h-[75vh] w-full flex-shrink-0 overflow-hidden rounded-3xl shadow-lg laptop:block laptop:w-[45%]">
        {!isLoaded ? (
          <Skeleton className="h-full w-full" />
        ) : mapCenter ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={mapCenter}
            zoom={13}
            options={mapOptions}
          >
            {/* Circle around the city/place */}
            <CircleF
              center={mapCenter}
              radius={3000} // 3km radius in meters
              options={{
                strokeColor: "#22c55e",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#22c55e",
                fillOpacity: 0.15,
              }}
            />
            {facilities.map((facility) => (
              <MapMarker key={facility.id} facility={facility} />
            ))}
          </GoogleMap>
        ) : (
          <div className="flex h-full items-center justify-center bg-gray-100">
            <p className="text-gray-500">No location data available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlacesClientPage;
