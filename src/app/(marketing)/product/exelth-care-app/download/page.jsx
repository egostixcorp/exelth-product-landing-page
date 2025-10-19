// app/download/page.tsx
"use client";

import Icon from "@/components/Global/Icon";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { trackButtonClick } from "@/lib/tracker";
import { useTrackClick } from "@/components/hooks/useTrackClick";

// Example screenshots array
const screenshots = [
  "/apk/preview/screen1.png",
  "/apk/preview/screen2.png",
  "/apk/preview/screen3.png",
  "/apk/preview/screen4.png",
  "/apk/preview/screen5.png",
  "/apk/preview/screen6.png",
  "/apk/preview/screen7.png",
  "/apk/preview/screen8.png",
];

export default function DownloadPage() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState(null);
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrentIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);
  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  const prevImage = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length,
    );
  // const handleDownload = async () => {
  //   try {
  //     await trackButtonClick("download_apk");
  //     window.location.href = "/apk/exelth.apk";
  //   } catch (error) {
  //     console.error("Error tracking download:", error);
  //     window.location.href = "/apk/exelth.apk";
  //   }
  // };
  const { track, loading } = useTrackClick();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6 pt-20">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 text-center shadow-lg">
        {/* Logo */}
        <Image
          src="/brand/exelth-green.png"
          alt="Exelth Logo"
          width={80}
          height={80}
          className="mx-auto mb-4"
        />

        <h1 className="mb-2 text-2xl font-bold text-gray-800">
          Download Exelth App
        </h1>
        <p className="mb-6 text-sm text-gray-600">
          You&apos;re about to try our early-access version before it&apos;s on
          Google Play. Your feedback will help us shape the future of
          healthcare.
        </p>

        {/* QR Code */}
        <div className="mb-6 flex w-full flex-col items-center justify-center rounded-lg p-4">
          <div className="flex w-fit items-center justify-center rounded-lg bg-gray-100 p-2 shadow-sm">
            <Image
              src="/exelth-qr-code-apk-download.png"
              alt="QR Code to download Exelth"
              width={180}
              height={180}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex w-full items-center justify-center gap-5">
          {/* <a href="/apk/exelth.apk"> */}
          <Button
            variant="exelth"
            onClick={async () => {
              await track("download_apk");
              window.location.href = "/apk/exelth.apk"; // manually trigger download
            }}
            disabled={loading}
          >
            <Icon.Download /> Download APK
          </Button>
          {/* </a> */}
          <Button variant="outline" onClick={() => setOpen(true)}>
            <Icon.Fullscreen /> See preview
          </Button>
        </div>

        {/* Safety Section */}
        <div className="mt-8 text-left">
          <h2 className="mb-2 text-lg font-semibold text-gray-800">
            Why This is Safe
          </h2>
          <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
            <li>Official build provided directly by the Exelth team.</li>
            <li>
              No ads, no hidden fees — 100% focused on your healthcare
              experience.
            </li>
            <li>
              Secure & private — we never sell or share your personal data.
            </li>
          </ul>
        </div>

        {/* Installation Steps */}
        <div className="mt-6 text-left">
          <h2 className="mb-2 text-lg font-semibold text-gray-800">
            How to Install
          </h2>
          <ol className="list-inside list-decimal space-y-1 text-sm text-gray-600">
            <li>Download the APK using the button above.</li>
            <li>
              If prompted, allow{" "}
              <strong>&quot;Install from Unknown Sources&quot;</strong> in your
              device settings.
            </li>
            <li>
              Open the file and tap <strong>Install</strong>.
            </li>
            <li>Launch Exelth from your app list and start exploring.</li>
          </ol>
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-xs text-gray-500">
          Disclaimer: This pre-release version is for testing only. Use at your
          own discretion. Features may change before our public release.
        </p>

        {/* Contact */}
        <p className="mt-2 text-xs text-gray-500">
          Contact:{" "}
          <Link href="mailto:support@exelth.com" className="text-green-600">
            support@exelth.com
          </Link>
        </p>
      </div>

      {/* Dialog for Preview Carousel */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="z-[999] h-[80vh] w-[95%] max-w-full rounded-lg sm:max-w-xl md:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-center text-base sm:text-lg md:text-xl">
              App Preview
            </DialogTitle>
          </DialogHeader>

          {/* Carousel Section */}
          <div className="relative flex w-full flex-col items-center justify-center">
            <Carousel
              setApi={setApi}
              // onSelect={handleSelect}
              className="w-full max-w-[320px] sm:max-w-[400px]"
            >
              <CarouselContent>
                {screenshots.map((src, index) => (
                  <CarouselItem key={index} className="flex justify-center">
                    <Image
                      src={src}
                      alt={`Screenshot ${index + 1}`}
                      width={1000}
                      height={1000}
                      priority={index === 0}
                      quality={100}
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 280px"
                      className="h-auto w-[80%] max-w-[280px] rounded-lg shadow-lg sm:w-[60%] md:w-[280px]"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Built-in navigation buttons */}
              <CarouselPrevious
                className="absolute -left-6 top-1/2 -translate-y-1/2"
                // onClick={prevImage}
              />
              <CarouselNext
                className="absolute -right-6 top-1/2 -translate-y-1/2"
                // onClick={nextImage}
              />
            </Carousel>
          </div>
          {/* Counter */}
          <div className="mt-2 text-center text-xs text-gray-500 sm:text-sm">
            {/* If you want currentIndex, use Carousel's API */}
            {currentIndex + 1} / {screenshots.length}
            {/* Use arrows to navigate through {screenshots.length} screenshots */}
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
