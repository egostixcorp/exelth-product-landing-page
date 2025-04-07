"use client";

import Image from "next/image";
import React from "react";

type LaptopMockupProps = {
  screenImage: string; // path to the app screenshot
  alt?: string;
};

const LaptopMockup: React.FC<LaptopMockupProps> = ({
  screenImage,
  alt = "App Screenshot",
}) => {
  return (
    <div className="relative mx-auto w-full max-w-5xl">
      {/* Laptop frame */}
      <Image
        src="/device-mbp-15-nonotch.png"
        alt="Laptop Frame"
        width={1280}
        height={800}
        className="pointer-events-none h-auto w-full "
        priority
      />

      {/* Screenshot positioned inside the screen */}
      <div
        className="redd absolute overflow-hidden rounded-2xl"
        style={{
          top: "1.1%", // adjust to align with your frame
          left: "13%",
          width: "74%",
          height: "92%",
          //   borderRadius: "6px",
        }}
      >
        <Image
          src={screenImage}
          alt={alt}
          width={1000}
          height={1000}
          className="size-full"
        />
      </div>
    </div>
  );
};

export default LaptopMockup;
