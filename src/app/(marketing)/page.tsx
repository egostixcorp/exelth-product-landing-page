import React from "react";
import HeroSection from "@/components/Sections/hero-section";
const Home = () => {
  return (
    <div className="redd flex h-screen w-full flex-col items-center justify-center">
      <div
        id="container"
        className="redd container flex flex-col items-start justify-center px-[5%] laptop:px-[15%]"
      >
        <HeroSection />
      </div>
    </div>
  );
};

export default Home;
