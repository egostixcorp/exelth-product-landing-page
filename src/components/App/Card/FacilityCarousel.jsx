"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// type FacilityCarouselProps = {
//   data: {
//     cover_photo?: string;
//     photos?: string[];
//   };
// };

export default function FacilityCarousel({ data }) {
  const coverPhoto = data?.cover_photo;
  const facility_logo = data?.facility_logo;
  const photos = Array.isArray(data?.photos) ? data.photos : [];
  const facilityImages = [coverPhoto, ...photos].filter(Boolean);

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  );

  const [current, setCurrent] = React.useState(0);

  if (facilityImages.length === 0) {
    return (
      <div className="relative flex h-[250px] w-full items-center justify-center bg-gray-100">
        <span className="text-gray-400">No images available</span>
      </div>
    );
  }

  return (
    <div className="redd relative mx-auto w-full max-w-5xl overflow-hidden rounded-xl">
      {facility_logo && (
        <div className="redd absolute bottom-2 left-2 z-40 size-20 overflow-hidden rounded-lg bg-white">
          <Image
            src={facility_logo}
            alt={`Facility logo`}
            // fill
            width={500}
            height={500}
            // sizes="100vw"
            className="size-full scale-95 object-cover transition-transform duration-700 ease-in-out hover:scale-105"
            priority={true}
          />
        </div>
      )}
      <Carousel
        opts={{
          align: "start",
          loop: facilityImages.length > 1,
        }}
        plugins={[plugin.current]}
        onSlideChange={(index) => setCurrent(index)}
        className="w-full"
      >
        <CarouselContent>
          {facilityImages.map((url, idx) => (
            <CarouselItem key={idx} className="w-full">
              <div className="relative h-[250px] w-full overflow-hidden rounded-xl bg-gray-100">
                <Image
                  src={url}
                  alt={`Facility image ${idx + 1}`}
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                  priority={idx === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {facilityImages.length > 1 && (
          <>
            {/* <CarouselPrevious className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-white/70 backdrop-blur-sm hover:bg-white" /> */}
            {/* <CarouselNext className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-white/70 backdrop-blur-sm hover:bg-white" /> */}
          </>
        )}
      </Carousel>

      {/* Dot indicators */}
      {facilityImages.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
          {facilityImages.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 w-2 rounded-full transition-all ${
                idx === current ? "bg-white" : "bg-gray-400/70"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
