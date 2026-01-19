"use client";

import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useMouse } from "@/components/hooks/useMouse"; // <-- custom hook

const images = [
  "/mock/mock-home.png",
  "/mock/mock-calendar.png",
  "/mock/mock-patients.png",
  "/mock/mock-apps.png",
  "/mock/mock-staffs.png",
  "/mock/mock-payments.png",
  "/mock/mock-workflows.png",
  "/mock/mock-analytics.png",
];

export default function DesktopMockUp() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const mockRef = useRef(null);
  const cursorRef = useRef(null);

  const { x, y, isInside } = useMouse(mockRef);

  /** Initial appearance animation (runs once) */
  useLayoutEffect(() => {
    if (!mockRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(mockRef.current, {
        opacity: 0,
        y: "50%",
        filter: "blur(6px)",
      });

      gsap.to(mockRef.current, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3,
      });
    }, mockRef);

    return () => ctx.revert();
  }, []);

  /** Animate cursor whenever position changes */
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
        x: targetX - 80,
        y: targetY - 40,
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

  /** Auto image cycling */
  useEffect(() => {
    const id = setInterval(
      () => setCurrentImageIndex((i) => (i + 1) % images.length),
      5000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div
      id="desktop-mock"
      ref={mockRef}
      className="relative w-full translate-y-[50%] opacity-0 blur-sm desktop:h-fit"
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
        exelth platform
      </div>

      <Link href={"/product/exelth-infrastructure-platform"}>
        <div className="grid size-full overflow-hidden rounded-lg border-[5px] border-green-200 shadow-xl">
          <Image
            src={images[currentImageIndex]}
            alt={`Mockup ${currentImageIndex + 1}`}
            width={1920}
            height={1080}
            priority
            quality={100}
            className="size-full object-contain transition-opacity duration-500"
          />
        </div>
      </Link>
    </div>
  );
}
