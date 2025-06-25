"use client";
import Link from "next/link";
import { AppBaseUrl, AppMBaseUrl } from "@/data/const";
import WebAppFeatureSection from "@/components/Sections/webapp-feature-section";
import Icon from "@/components/Global/Icon";
// import { Button } from "../ui/button";
import { Badge } from "@/components/ui/badge";
import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import DesktopMockUp from "@/components/Mock/desktop-mockup";
const HeroSection = () => {
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
    <div className="redd my-20 flex min-h-screen w-full flex-col items-center justify-center gap-5 desktop:gap-10">
      {/* <div id="badge" className="translate-y-[50%] opacity-0 blur-sm">
        <Badge variant={"outline"} className="gap-3 rounded-xl text-sm">
          <Icon.Activity className="size-4 text-green-600" /> Coming soon
        </Badge>
      </div> */}
      <div
        id="container"
        className="redd flex w-full flex-col items-start justify-center gap-5 overflow-hidden px-[5%] laptop:px-[15%]"
      >
        <div
          id="content"
          className="redd relative flex h-96 flex-col items-center justify-center space-y-3 text-center laptop:h-[40vh] laptop:px-[10%] desktop:h-[60vh]"
        >
          <div class="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          <h1
            id="headline"
            className="translate-y-[50%] text-xl font-semibold opacity-0 blur-sm tablet:text-2xl laptop:text-3xl desktop:text-5xl"
          >
            Streamline Health Care Infrastructure with a Centralized Real-Time
            Platform
          </h1>
          <p
            id="desc1"
            className="translate-y-[50%] px-[15%] text-xs opacity-0 blur-sm tablet:text-sm desktop:text-xl"
          >
            Optimize <span className="text-blue-400">operations</span>, enhance{" "}
            <span className="redd text-green-400">communication</span>, and
            simplify <span className="text-red-400">workflows</span> across{" "}
            <span className="text-purple-400">departments</span>.{" "}
            <span>Insurance providers</span>, and <span>patients</span> — all in
            one seamless system.
          </p>
        </div>
        <div className="redd relative flex w-full flex-col items-center justify-start gap-5">
          <DesktopMockUp />
        </div>
        <WebAppFeatureSection />
      </div>
    </div>
  );
};

export default HeroSection;
