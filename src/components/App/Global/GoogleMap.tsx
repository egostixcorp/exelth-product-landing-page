"use client";

import React, { useCallback, useState } from "react";
import {
  GoogleMap,
  MarkerF,
  InfoWindowF,
  useJsApiLoader,
} from "@react-google-maps/api";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { Hospital } from "lucide-react";

type Props = {
  lat: number;
  lng: number;
  name?: string;
  address?: string;
  image?: string;
};

const containerStyle = {
  width: "100%",
  height: "250px",
  borderRadius: "12px",
};

const mapOptions: google.maps.MapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: false,
  styles: [
    {
      featureType: "poi.business",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ lightness: 50 }, { saturation: -100 }],
    },
  ],
};

export default function GoogleMapEmbed({
  lat,
  lng,
  name,
  address,
  image,
}: Props) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const [showInfo, setShowInfo] = useState(false);

  const center = { lat: Number(lat), lng: Number(lng) };

  const onLoad = useCallback((map: google.maps.Map) => {
    map.setZoom(15);
  }, []);

  if (!isLoaded || !lat || !lng) return null;

  return (
    <div className="mt-3 w-full overflow-hidden rounded-xl border border-gray-200 shadow-sm">
      {!isLoaded && <Skeleton style={containerStyle} />}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        options={mapOptions}
      >
        <MarkerF
          position={center}
          title={name || "Facility"}
          onClick={() => setShowInfo((prev) => !prev)}
        />

        {showInfo && (
          <InfoWindowF
            position={center}
            options={{}}
            onCloseClick={() => setShowInfo(false)}
          >
            <div
              className="redd w-56 text-sm"
              style={{
                fontFamily: "system-ui, sans-serif",
              }}
            >
              {image && (
                <Image
                  src={image}
                  alt={name || ""}
                  width={500}
                  height={500}
                  className="mb-2 h-24 w-full rounded-md object-cover"
                />
              )}
              <h3 className="font-semibold text-gray-800">{name}</h3>
              <p className="mt-1 text-gray-600">{address}</p>
            </div>
          </InfoWindowF>
        )}
      </GoogleMap>
    </div>
  );
}
