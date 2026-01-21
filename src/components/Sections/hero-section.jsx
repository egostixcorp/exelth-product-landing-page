"use client";
import Link from "next/link";

import { AppBaseUrl, AppMBaseUrl } from "@/data/const";
import Waitlist from "@/components/Waitlist/Waitlist";
import Icon from "@/components/Global/Icon";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "../ui/badge";
import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import TranslatableText from "../Global/TranslatableText";
import SearchHeader from "../App/Global/SearchHeader";
const HeroSection = () => {
  useLayoutEffect(() => {
    const Gctx = gsap.context(() => {
      let tl = gsap.timeline({
        delay: 0.5, // update delay here
        autoAlpha: 1, // combines opacity + visibility
      });
      tl.to("#badge", {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.1,
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
      tl.to("#desc2", {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      });
      tl.to("#action-button", {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      });
    });
    return () => Gctx.revert();
  }, []);
  return (
    <div className="redd flex h-[80vh] w-full flex-col items-center justify-center gap-5 desktop:gap-10">
      <div id="badge" className="translate-y-[50%] opacity-0 blur-sm">
        <Badge variant={"outline"} className="gap-3 rounded-xl text-sm">
          <Icon.Activity className="size-4 text-green-600" />
          Exelth is live across clinics & hospitals
        </Badge>
      </div>
      <div id="content" className="redd space-y-3 text-center laptop:px-[10%]">
        <h1
          id="headline"
          className="translate-y-[50%] text-xl font-semibold opacity-0 blur-sm tablet:text-2xl laptop:text-3xl desktop:text-5xl"
        >
          <TranslatableText
            en="Bringing Healthcare Centers and Patients Together — Seamlessly."
            bn="স্বাস্থ্যসেবা কেন্দ্র এবং রোগীদের একত্রিত করা — নির্বিঘ্নে।"
          />
        </h1>
        <p
          id="desc1"
          className="translate-y-[50%] text-xs opacity-0 blur-sm tablet:text-sm desktop:text-xl"
        >
          <TranslatableText
            en="Built for clinics and hospitals to manage
          appointments, staff, and care coordination —
          and for patients to book visits, track health, and
          stay connected in real time."
            bn="ক্লিনিক এবং হাসপাতালগুলির জন্য তৈরি করা হয়েছে

অ্যাপয়েন্টমেন্ট, কর্মী এবং যত্ন সমন্বয় পরিচালনা করার জন্য —
এবং রোগীদের ভিজিট বুক করার জন্য, স্বাস্থ্য ট্র্যাক করার জন্য এবং
রিয়েল টাইমে সংযুক্ত থাকার জন্য।"
          />
        </p>
      </div>
      <div
        id="action-button"
        className="flex translate-y-[50%] flex-col items-center justify-center gap-5 opacity-0 blur-sm"
      >
        <div className="flex items-center gap-2">
          <Link href={"/search"} className="w-80">
            <SearchHeader />
          </Link>
        </div>

        {/* Mobile App Button with Tooltip */}
        <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center">
          {/* Primary – Platform Login */}
          <Link href="https://app.exelth.com/auth/sign-in">
            <Button
              variant="exelth"
              className="h-11 w-72 tablet:w-72 laptop:w-fit"
            >
              Log in to Exelth Platform
            </Button>
          </Link>

          {/* Secondary – Free Listing */}
          <div className="relative">
            <Link href="https://app.exelth.com/auth/sign-up">
              <Button
                variant="outline"
                className="h-11 w-72 border-green-600 text-green-700 hover:bg-green-50 tablet:w-72 hover:text-green-700 laptop:w-fit"
              >
                List Your Facility (Free)
              </Button>
            </Link>

            {/* Tooltip */}
            <div className="absolute -right-5 top-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Icon.Info className="size-4 cursor-pointer text-gray-500" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p>
                      Clinics and hospitals must log in to verify ownership
                      before listing facilities. Listing is free.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
