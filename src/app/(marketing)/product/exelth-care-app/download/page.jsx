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
import React, { useState, useEffect } from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { useTrackClick } from "@/components/hooks/useTrackClick";
import WaitlistModal from "@/components/Waitlist/WaitlistModel";

// App screenshots
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

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.exelth.patientapp";

export default function DownloadPage() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState(null);
  const { track, loading } = useTrackClick();

  useEffect(() => {
    if (!api) return;
    setCurrentIndex(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

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

        {/* Title */}
        <h1 className="mb-2 text-2xl font-bold text-gray-800">
          Get the Exelth App
        </h1>

        <p className="mb-6 text-sm text-gray-600">
          Book doctors, labs, manage appointments, prescriptions, and bills —
          all in one trusted healthcare app.
        </p>

        {/* Primary Actions */}
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href={PLAY_STORE_URL}
            target="_blank"
            className="w-full sm:w-auto"
          >
            <Button
              variant="exelth"
              className="w-full"
              onClick={() => track("play_store_click")}
              disabled={loading}
            >
              <FaGooglePlay className="mr-2" />
              Get it on Google Play
            </Button>
          </Link>

          <WaitlistModal
            joinFor="iOS_app"
            title="Exelth for iOS"
            description="iOS app coming soon. Join the waitlist to get early access."
            successMessage="You’re on the list! We’ll notify you when iOS launches."
            variant="bw"
          >
            <Button
              variant="outline"
              className="w-full"
              onClick={() => track("ios_waitlist_click")}
            >
              <FaApple className="mr-2" />
              Join iOS Waitlist
            </Button>
          </WaitlistModal>
        </div>

        {/* Preview */}
        <div className="mt-6">
          <Button
            variant="ghost"
            className="text-sm text-gray-600"
            onClick={() => setOpen(true)}
          >
            <Icon.Fullscreen className="mr-1" /> See app preview
          </Button>
        </div>

        {/* Trust Section */}
        <div className="mt-8 text-left">
          <h2 className="mb-2 text-lg font-semibold text-gray-800">
            Why people trust Exelth
          </h2>
          <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
            <li>Official app available on Google Play</li>
            <li>No ads, no dark patterns</li>
            <li>Healthcare-first privacy & security</li>
          </ul>
        </div>

        {/* Contact */}
        <p className="mt-6 text-xs text-gray-500">
          Need help?{" "}
          <Link href="mailto:support@exelth.com" className="text-green-600">
            support@exelth.com
          </Link>
        </p>
      </div>

      {/* Preview Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="z-[999] h-[80vh] w-[95%] max-w-full rounded-lg sm:max-w-xl md:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-center text-base sm:text-lg md:text-xl">
              Exelth App Preview
            </DialogTitle>
          </DialogHeader>

          <div className="relative flex w-full flex-col items-center justify-center">
            <Carousel
              setApi={setApi}
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
                      className="h-auto w-[80%] max-w-[280px] rounded-lg shadow-lg"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-6 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute -right-6 top-1/2 -translate-y-1/2" />
            </Carousel>
          </div>

          <div className="mt-2 text-center text-xs text-gray-500">
            {currentIndex + 1} / {screenshots.length}
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
