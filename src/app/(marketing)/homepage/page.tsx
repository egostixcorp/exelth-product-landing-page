// "use client";
import React, { useEffect } from "react";
import HeroSection from "@/components/Sections/hero-section";
import DemoSection from "@/components/Sections/demo-section";
import GridLayout from "@/components/Layouts/grid-layout";
import MobileDemoSection from "@/components/Sections/mobile-demo-section";
const Home = () => {
  return (
    <div className="redd flex min-h-full w-full flex-col items-center justify-center">
      <div
        id="container"
        className="redd flex w-full flex-col items-start justify-center gap-5 overflow-hidden px-[5%] laptop:px-[15%]"
      >
        <HeroSection />
        <DemoSection />
        {/* <MobileDemoSection /> */}
        <GridLayout />
      </div>
    </div>
  );
};

export default Home;
