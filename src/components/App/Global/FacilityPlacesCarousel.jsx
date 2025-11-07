import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import FacilityCard from "../Card/FacilityCard";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const FacilityPlacesCarousel = ({ cityName, facilities }) => {
  const showViewAll = facilities.length > 3;

  return (
    <div className="redd relative mb-8 w-80 px-4 sm:mb-10 sm:px-6 tablet:w-full lg:mb-12 lg:px-8">
      {/* Header Section */}
      <div className="mb-4 flex items-center justify-between sm:mb-6">
        <Link
          href={`/search/places/${cityName}`}
          className="group flex items-center justify-center gap-1"
        >
          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl lg:text-3xl">
            Facilities in {cityName}
          </h2>
          <ChevronRight
            className="text-black transition-all duration-500 group-hover:-rotate-12"
            strokeWidth={"3px"}
          />
        </Link>
        {/* {showViewAll && (
          <button
            onClick={onViewAll}
            className="flex items-center gap-1 text-sm font-semibold text-gray-700 transition-colors hover:text-gray-900 hover:underline sm:text-base"
          >
            Show all
            <ChevronRight className="h-4 w-4" />
          </button>
        )} */}
      </div>

      {/* Carousel Section */}
      <div className="redd w-fullf relative w-[19rem] laptop:max-w-4xl desktop:max-w-4xl">
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="redd -ml-2 w-full sm:-ml-4">
            {facilities.map((facility, index) => (
              <CarouselItem
                key={facility.id || index}
                className="basis-[75%] pl-2 sm:basis-1/3 sm:pl-4 lg:basis-1/3 xl:basis-1/3"
              >
                <div className="h-full">
                  <FacilityCard
                    id={facility.id}
                    name={facility.name}
                    address={
                      facility.location?.address ?? "No address provided"
                    }
                    image={facility.cover_photo}
                    status={facility.verified}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons - Hidden on mobile, visible on tablet and up */}
          <div className="absolute -top-10 right-10 hidden items-center justify-center laptop:flex">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default FacilityPlacesCarousel;
