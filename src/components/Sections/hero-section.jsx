"use client";
import Link from "next/link";
import { AppBaseUrl, AppMBaseUrl } from "@/data/const";
import Waitlist from "@/components/Waitlist/Waitlist";
import Icon from "@/components/Global/Icon";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import React, { useLayoutEffect } from "react";
import gsap from "gsap";
const HeroSection = () => {
  useLayoutEffect(() => {
    const Gctx = gsap.context(() => {
      let tl = gsap.timeline({
        delay: 1,
        autoAlpha: 1, // combines opacity + visibility
      });
      tl.from("#badge", {
        opacity: 0,
        y: "50%",
        filter: "blur(10px)",
      });
      tl.from("#headline", {
        opacity: 0,
        y: "50%",
        filter: "blur(10px)",
      });
      tl.from("#desc1", {
        opacity: 0,
        y: "50%",
        filter: "blur(10px)",
      });
      tl.from("#desc2", {
        opacity: 0,
        y: "50%",
        filter: "blur(10px)",
      });
      tl.from("#action-button", {
        opacity: 0,
        y: "50%",
        filter: "blur(10px)",
      });
    });
    return () => Gctx.revert();
  }, []);
  return (
    <div className="redd flex h-[80vh] w-full flex-col items-center justify-center gap-5 desktop:gap-10">
      <div id="badge">
        <Badge variant={"outline"} className="gap-3 rounded-xl text-sm">
          <Icon.Activity className="size-4 text-green-600" /> Coming soon
        </Badge>
      </div>
      <div id="content" className="redd space-y-3 text-center laptop:px-[10%]">
        <h1
          id="headline"
          className="text-xl font-semibold tablet:text-2xl laptop:text-3xl desktop:text-5xl"
        >
          Streamline Health Care Infrastructure with a Centralized Real-Time
          Platform
        </h1>
        <p id="desc1" className="text-xs tablet:text-sm desktop:text-xl">
          Optimize <span className="text-blue-400">operations</span>, enhance{" "}
          <span className="redd text-green-400">communication</span>, and
          simplify <span className="text-red-400">workflows</span> across{" "}
          <span className="text-purple-400">departments</span>.{" "}
          <span>Insurance providers</span>, and <span>patients</span> — all in
          one seamless system.
        </p>
        <p id="desc2" className="text-xs tablet:text-sm desktop:text-xl">
          Empower patients with a mobile app for{" "}
          <span className="text-red-400">real-time updates</span>,{" "}
          <span className="text-green-400">billing</span>, and{" "}
          <span className="text-orange-400">payments</span>.
        </p>
      </div>
      <div
        id="action-button"
        className="flex flex-wrap items-center justify-center gap-5"
      >
        <Waitlist />
      </div>
    </div>
  );
};

export default HeroSection;
