"use client";
import Image from "next/image";
import gsap from "gsap";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import { useMouse } from "../hooks/useMouse";
import { ArrowUpRight } from "lucide-react";
// Register the plugin once
gsap.registerPlugin(ScrollTrigger);
const PhoneMockUp = ({ ref }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const mockRef = useRef(null);
  const cursorRef = useRef(null);
  const { x, y, isInside } = useMouse(mockRef);
  const images = [
    "/mock/mobile-mock-home.jpg",
    "/mock/mobile-mock-services.jpg",
    "/mock/mobile-mock-search.jpg",
    "/mock/mobile-mock-activites.jpg",
    "/mock/mobile-mock-account-profile.jpg",
    "/mock/mobile-mock-appointments.jpg",
    "/mock/mobile-mock-booking.jpg",
    "/mock/mobile-mock-facility-profile.jpg",
  ];
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref,
          start: "40% 80%", // Trigger when element enters 80% from top
          end: "50% 40%",
          //   scrub: 1,
          //   markers: true, // Enable this for debugging
        },
      });

      tl.from("#phone-mock", {
        x: "200%",
        // opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });
    }, ref);

    return () => ctx.revert(); // Clean up on unmount
  }, [ref]);
  useLayoutEffect(() => {
    if (!cursorRef.current || !mockRef.current) return;

    if (isInside) {
      const rect = mockRef.current.getBoundingClientRect();
      const offsetX = 16;
      const offsetY = 18;

      const cw = cursorRef.current.offsetWidth || 120;
      const ch = cursorRef.current.offsetHeight || 36;

      const targetX = Math.max(0, Math.min(rect.width - cw, x + offsetX));
      const targetY = Math.max(0, Math.min(rect.height - ch, y + offsetY));

      gsap.to(cursorRef.current, {
        x: targetX - 90,
        y: targetY - 50,
        opacity: 1,
        scale: 1,
        duration: 0.15,
        ease: "power3.out",
        overwrite: true,
      });
    } else {
      gsap.to(cursorRef.current, {
        opacity: 0,
        scale: 0.2,
        duration: 0.2,
        ease: "power2.out",
      });
    }
  }, [x, y, isInside]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup
  }, [images.length]);
  return (
    <div
      id="phone-mock"
      ref={mockRef}
      className="absolute -bottom-7 right-0 z-30 w-[80px] overflow-hidden tablet:-right-10 tablet:w-[190px] laptop:-bottom-5 laptop:w-[201px] desktop:-bottom-5 desktop:h-[550px] desktop:w-[291px]"
    >
      <Image
        src="/iphoneMockup.png"
        alt="Phone Frame"
        className="pointer-events-none absolute inset-0 z-10 size-full object-contain"
        width={500}
        height={500}
      />
      <div
        // ref={mockRef}
        className="relative size-full bg-transparent tablet:px-4 tablet:py-1.5 laptop:px-5 laptop:py-2 desktop:px-6 desktop:py-3"
      >
        {/* Cursor div */}
        <div
          id="cursor"
          ref={cursorRef}
          className="pointer-events-none absolute rounded-3xl bg-green-600 px-4 py-2 text-sm font-semibold capitalize text-white shadow-lg shadow-green-100"
          style={{
            willChange: "transform, opacity",
            transform: "translate3d(0,0,0)",
          }}
        >
          <div className="flex items-center justify-center gap-2">
            exelth mobile <ArrowUpRight className="size-6" />
          </div>
        </div>
        <Link href={"/product/exelth-care-app"}>
          <div className="redd size-full overflow-hidden rounded-2xl bg-white p-1.5">
            <Image
              src={images[currentImageIndex]}
              alt={`Mockup ${currentImageIndex + 1}`}
              className="pointer-events-none size-full object-cover"
              width={500}
              height={500}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PhoneMockUp;
