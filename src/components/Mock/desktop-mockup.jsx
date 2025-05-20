"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const images = [
  "/mock/mock-calendar.png",
  "/mock/mock-patients.png",
  "/mock/mock-apps.png",
  "/mock/mock-staffs.png",
];

const DesktopMockUp = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="borderr w-full desktop:h-[85vh]">
      <div
        id="frame"
        className="redd grid size-full overflow-hidden rounded-lg border-[5px] border-green-200 shadow-xl"
      >
        <Image
          src={images[currentImageIndex]}
          alt={`Mockup ${currentImageIndex + 1}`}
          width={1920}
          height={1080}
          priority
          quality={100}
          className="redd size-full object-contain transition-opacity duration-500"
        />
      </div>
    </div>
  );
};

export default DesktopMockUp;
