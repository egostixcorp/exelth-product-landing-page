import React from "react";
import MobileMock from "@/components/Mock/mobile-mockup";
const MobileDemoSection = () => {
  const mobileMocks = [
    "/mock/mobile-mock-home.jpg",
    "/mock/mobile-mock-search.jpg",
    "/mock/mobile-mock-activites.jpg",
    // "/mock/mobile-mock-profile.jpg",
  ];
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start gap-5">
      <h1 className="w-full text-center font-semibold laptop:text-3xl">
        Empower Patient Mobile App
      </h1>
      <div className="flex h-full flex-col laptop:flex-row w-full items-center justify-center gap-5">
        {mobileMocks.map((data, i) => {
          return <MobileMock key={i} screenImage={data} />;
        })}
      </div>
    </div>
  );
};

export default MobileDemoSection;
