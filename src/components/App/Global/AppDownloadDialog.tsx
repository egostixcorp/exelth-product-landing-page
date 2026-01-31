"use client";

import * as React from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import WaitlistModal from "@/components/Waitlist/WaitlistModel";

export default function AppDownloadDialog() {
  const [open, setOpen] = React.useState(true);

  React.useEffect(() => {
    // Check if the dialog was already shown before
    const shown = localStorage.getItem("exelthAppPromoShown");
    if (!shown) {
      const timer = setTimeout(() => {
        setOpen(true);
        localStorage.setItem("exelthAppPromoShown", "true");
      }, 3000); // 3 seconds delay

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-80 rounded-2xl border-none p-0 shadow-xl tablet:w-[40rem]">
        <div className="relative flex flex-col items-center overflow-hidden rounded-2xl bg-white">
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute right-3 top-3 rounded-full bg-gray-100 p-1.5 text-gray-500 hover:bg-gray-200"
          >
            <X size={18} />
          </button>

          {/* Images section */}
          <div className="relative h-56 w-full overflow-hidden rounded-t-2xl bg-gray-50">
            <Image
              src="/apk/preview/exelth-preview-v2.png"
              alt="Exelth mobile app preview"
              fill
              className="object-contain tablet:object-cover"
              priority
            />
          </div>

          {/* Text section */}
          <div className="flex w-full flex-col items-center justify-center space-y-3 p-6 text-center">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold text-gray-900">
                Get the Exelth App
              </DialogTitle>
              <DialogDescription className="text-sm text-gray-600">
                Book appointments, access records, and manage your health from
                anywhere.
              </DialogDescription>
            </DialogHeader>

            {/* Buttons */}
            <div className="mt-4 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                target="_blank"
                href={
                  "https://play.google.com/store/apps/details?id=com.exelth.patientapp"
                }
              >
                <Button variant={"exelth"}>
                  <FaGooglePlay /> Open Play Store
                </Button>
              </Link>
              <WaitlistModal
                joinFor="iOS_app"
                title="Exelth for iOS"
                description="iOS app coming soon. Join the waitlist to get early access."
                successMessage="You’re on the list! We’ll notify you when iOS launches."
                variant="bw"
              >
                <Button variant="outline">
                  <FaApple /> Join iOS Waitlist
                </Button>
              </WaitlistModal>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
