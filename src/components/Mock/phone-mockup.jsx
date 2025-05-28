"use client";
import Image from "next/image";
import gsap from "gsap";
import React, { useEffect, useLayoutEffect, useState } from "react";

const PhoneMockUp = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/mock/mobile-mock-home.jpg",
    "/mock/mobile-mock-activites.jpg",
    "/mock/mobile-mock-profile.jpg",
    "/mock/mobile-mock-search.jpg",
  ];
  useLayoutEffect(() => {
    const Gctx = gsap.context(() => {
      let tl = gsap.timeline({
        delay: 4,
      });
      tl.from("#phone-mock", {
        // opacity: 0,
        x: "200%",
        // filter: "blur(10px)",
      });
    });
    return () => Gctx.revert();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup
  }, [images.length]);
  return (
    <div
      id="phone-mock"
      className="absolute -bottom-7 right-0 z-30 w-[80px] overflow-hidden tablet:-right-10 tablet:w-[190px] laptop:-bottom-5 laptop:w-[201px] desktop:-bottom-5 desktop:h-[550px] desktop:w-[291px]"
    >
      <Image
        src="/iphoneMockup.png"
        alt="Phone Frame"
        className="pointer-events-none absolute inset-0 z-10 size-full object-contain"
        width={500}
        height={500}
      />
      <div className="size-full bg-transparent tablet:px-4 tablet:py-1.5 laptop:px-5 laptop:py-2 desktop:px-6 desktop:py-3">
        <div className="redd size-full overflow-hidden rounded-2xl bg-white p-1.5">
          <Image
            src={images[currentImageIndex]}
            alt={`Mockup ${currentImageIndex + 1}`}
            className="pointer-events-none size-full object-cover"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneMockUp;
