"use client";
import Image from "next/image";
import React, { useRef } from "react";
import MobileProductThumbnail from "@/components/Layouts/mobile-thumbnail-layout";
// import MobileProductAppLayout from "@/components/Layouts/mobile-app-layout";
import MobileFeatureSection from "@/components/Sections/mobile-feature-section";
const ExelthMobileProductPage = () => {
  // const container = useRef(null);
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center">
      <div
        id="container"
        className="redd flex w-full flex-col items-start justify-center gap-5 overflow-hidden px-[5%] laptop:px-[15%]"
      >
        <MobileProductThumbnail />
      </div>

      <div className="flex min-h-[55vh] w-full flex-col items-center justify-center text-center">
        <div className="mb-2 text-xl font-semibold text-gray-800 laptop:text-5xl">
          Stay up to date of Your Care Journey
        </div>
        <div className="mb-6 max-w-xl px-4 text-sm text-gray-600 laptop:px-0 laptop:text-lg">
          Your inbox keeps you in the loop with essential health
          updates—appointments, prescriptions, lab results, and more. Swipe
          right to mark as read or unread, swipe left to delete, or tap to take
          action when it matters most.
        </div>
        <div className="h-[500px] w-full max-w-[1920px] overflow-hidden">
          <Image
            src="/assets/mobile/feature_swipe_frame.png"
            width={1980}
            height={1080}
            className="size-full object-contain"
            alt="Swipe actions for  patient inbox"
          />
        </div>
      </div>

      <div
        id="container"
        className="redd flex w-full flex-col items-start justify-center gap-5 overflow-hidden px-[5%] laptop:px-[15%]"
      >
        <MobileFeatureSection />
      </div>
    </div>
  );
};

export default ExelthMobileProductPage;
