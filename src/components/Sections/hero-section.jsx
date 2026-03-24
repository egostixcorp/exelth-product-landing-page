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
            en="Infrastructure to run and grow modern healthcare facilities"
            bn="আধুনিক স্বাস্থ্যসেবা প্রতিষ্ঠানসমূহ পরিচালনা ও সম্প্রসারণের অবকাঠামো"
          />
        </h1>
        <p
          id="desc1"
          className="translate-y-[50%] px-5 text-xs opacity-0 blur-sm tablet:text-sm desktop:text-2xl"
        >
          <TranslatableText
            en="Coordinate operations, patient flow, billing, clinical records, and visibility — from your first patient to enterprise scale."
            bn="আপনার প্রথম রোগী থেকে শুরু করে প্রাতিষ্ঠানিক পর্যায় পর্যন্ত—পরিচালন কার্যক্রম, রোগীর প্রবাহ, বিলিং, ক্লিনিক্যাল নথিপত্র এবং দৃশ্যমানতার সমন্বয় সাধন করুন।"
          />
        </p>
      </div>
      <div
        id="action-button"
        className="flex translate-y-[50%] flex-col items-center justify-center gap-5 opacity-0 blur-sm"
      >
        {/* <div className="flex items-center gap-2">
          <Link href={"/search"} className="w-80">
            <SearchHeader />
          </Link>
        </div> */}

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
                className="h-11 w-72 border-green-600 text-green-700 hover:bg-green-50 hover:text-green-700 tablet:w-72 laptop:w-fit"
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
