import Link from "next/link";
import { AppBaseUrl, AppMBaseUrl } from "@/data/const";
import Waitlist from "@/components/Global/Waitlist";
import Icon from "@/components/Global/Icon";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import React from "react";

const HeroSection = () => {
  return (
    <div className="redd flex h-full w-full flex-col items-start justify-center gap-5 desktop:gap-10">
      <div id="badge">
        <Badge variant={"outline"} className="gap-3 text-sm">
          <Icon.Activity className="size-4 text-green-600" /> Coming soon
        </Badge>
      </div>
      <div id="content" className="redd space-y-3">
        <h1
          id="headline"
          className="text-2xl font-semibold laptop:text-3xl desktop:text-5xl"
        >
          Streamline Hospital Management with a Centralized Real-Time Platform
        </h1>
        <p id="desc" className="text-sm desktop:text-xl">
          Optimize <span className="text-blue-400">operations</span>, enhance{" "}
          <span className="redd text-green-400">communication</span>, and
          simplify <span className="text-red-400">workflows</span> across{" "}
          <span className="text-purple-400">departments</span>.{" "}
          <span>Insurance providers</span>, and <span>patients</span> — all in
          one seamless system.
        </p>
        <p id="desc" className="text-sm desktop:text-xl">
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
        {/* <Link target="_blank" href={AppBaseUrl}>
          <Button>
            Demo <Icon.AppWindow />
          </Button>
        </Link>
        <Link target="_blank" href={AppMBaseUrl}>
          <Button>
            Demo <Icon.Smartphone />
          </Button>
        </Link> */}
        <Waitlist />
      </div>
    </div>
  );
};

export default HeroSection;
