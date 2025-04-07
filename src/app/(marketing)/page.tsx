import React from "react";
import HeroSection from "@/components/Sections/hero-section";
import DemoSection from "@/components/Sections/demo-section";
import MobileDemoSection from "@/components/Sections/mobile-demo-section";
const Home = () => {
  return (
    <div className="redd flex min-h-full w-full flex-col items-center justify-center">
      <div
        id="container"
        className="redd flex gap-5 w-full flex-col items-start justify-center px-[5%] laptop:px-[15%]"
      >
        <HeroSection />
        <DemoSection />
        <MobileDemoSection />
      </div>
    </div>
  );
};

export default Home;
