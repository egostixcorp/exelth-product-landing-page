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
    <div className="redd flex h-[80vh] w-full flex-col items-center justify-center gap-5 desktop:gap-10">
      <div id="badge" className="translate-y-[50%] opacity-0 blur-sm">
        <Badge variant={"outline"} className="gap-3 rounded-xl text-sm">
          <Icon.Activity className="size-4 text-green-600" /> Coming soon
        </Badge>
      </div>
      <div id="content" className="redd space-y-3 text-center laptop:px-[10%]">
        <h1
          id="headline"
          className="translate-y-[50%] text-xl font-semibold opacity-0 blur-sm tablet:text-2xl laptop:text-3xl desktop:text-5xl"
        >
          Streamline Health Care Infrastructure with a Centralized Real-Time
          Platform
        </h1>
        <p
          id="desc1"
          className="translate-y-[50%] text-xs opacity-0 blur-sm tablet:text-sm desktop:text-xl"
        >
          Optimize <span className="text-blue-400">operations</span>, enhance{" "}
          <span className="redd text-green-400">communication</span>, and
          simplify <span className="text-red-400">workflows</span> across{" "}
          <span className="text-purple-400">departments</span>.{" "}
          <span>Insurance providers</span>, and <span>patients</span> — all in
          one seamless system.
        </p>
        <p
          id="desc2"
          className="translate-y-[50%] text-xs opacity-0 blur-sm tablet:text-sm desktop:text-xl"
        >
          Empower patients with a mobile app for{" "}
          <span className="text-red-400">real-time updates</span>,{" "}
          <span className="text-green-400">billing</span>, and{" "}
          <span className="text-orange-400">payments</span>.
        </p>
      </div>
      <div
        id="action-button"
        className="flex translate-y-[50%] flex-wrap items-center justify-center gap-5 opacity-0 blur-sm"
      >
        <Waitlist />
      </div>
    </div>
  );
};

export default HeroSection;
