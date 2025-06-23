"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import PhoneMock from "../Mock/phone-mockup-mobile";
import Image from "next/image";
import { Button } from "../ui/button";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import gsap from "gsap";
const MobileAppLayout = () => {
  const container = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/mock/feature_home.png",
    "/mock/feature_services.png",
    "/mock/feature_activities.png",
    "/mock/feature_search_centars.png",
    "/mock/feature_profile.png",
  ];
  useLayoutEffect(() => {
    const Gctx = gsap.context(() => {
      let tl = gsap.timeline({
        delay: 1,
        autoAlpha: 1, // combines opacity + visibility
      });
      tl.to("#badge", {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.5,
      });
      tl.to("#headline", {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      });
      tl.to("#desc1", {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      });
      tl.to("#action-button", {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      });
      tl.to("#phone-mock", {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
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
    <div className="redd relative mt-20 flex min-h-screen w-full flex-col items-center justify-start tablet:flex-row tablet:justify-between">
      <div class="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div id="content" className="size-full">
        <div
          id="right"
          className="redd flex flex-col items-start justify-center gap-5"
        >
          <p
            id="badge"
            className="mb-2 translate-y-[50%] text-sm text-green-600 opacity-0 blur-sm"
          >
            Introducing Exelth Mobile
          </p>
          <h1
            id="headline"
            className="translate-y-[50%] text-3xl font-semibold leading-tight opacity-0 blur-sm tablet:text-5xl laptop:text-5xl desktop:text-6xl"
          >
            Exelth Patient Care
          </h1>
          <p
            id="desc1"
            className="translate-y-[50%] text-base opacity-0 blur-sm tablet:text-lg"
          >
            Track appointments, bills, prescriptions, and real-time updates —
            all from your phone. Available for iOS and Android.
          </p>
          <div
            id="action-button"
            className="translate-y-[50%] opacity-0 blur-sm"
          >
            <Button variant={"exelth"}>
              <FaGooglePlay size={18} />
              <p className="text-sm">Open Play Store</p>
            </Button>
          </div>
        </div>
      </div>
      <div className="redd relative mt-16 flex size-full items-center justify-center tablet:mt-0">
        <div
          id="phone-mock"
          className="redd h-96 w-fit translate-x-[50%] overflow-hidden opacity-0 blur-sm desktop:h-[35rem]"
        >
          <Image
            src={images[currentImageIndex]}
            // src={"/assets/mobile/feature_home_frame.png"}
            alt={`Mockup ${currentImageIndex + 1}`}
            // alt=""
            className="pointer-events-none h-full w-full object-contain"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileAppLayout;
