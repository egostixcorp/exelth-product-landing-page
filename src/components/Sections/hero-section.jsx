import Link from "next/link";
import { AppBaseUrl } from "@/data/const";
import Icon from "../Global/Icon";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import React from "react";

const HeroSection = () => {
  return (
    <div className="redd desktop:gap-10 flex h-full w-full flex-col items-start justify-center gap-5">
      <div id="badge">
        <Badge variant={"outline"} className="gap-3 text-sm">
          <Icon.Activity className="size-4 text-green-600" /> Coming soon
        </Badge>
      </div>
      <div id="content" className="space-y-3">
        <h1 id="headline" className="desktop:text-5xl text-2xl font-semibold">
          Streamline Hospital Management with a Centralized Real-Time Platform
        </h1>
        <p id="desc" className="desktop:text-xl text-sm">
          Optimize <span className="text-blue-400">operations</span>, enhance{" "}
          <span className="redd text-green-400">communication</span>, and
          simplify <span className="text-red-400">workflows</span> across{" "}
          <span className="text-purple-400">departments</span>.{" "}
          <span>Insurance providers</span>, and <span>patients</span> — all in
          one seamless system.
        </p>
        <p id="desc" className="desktop:text-xl text-sm">
          Empower patients with a mobile app for{" "}
          <span className="text-red-400">real-time updates</span>,{" "}
          <span className="text-green-400">billing</span>, and{" "}
          <span className="text-orange-400">payments</span>.
        </p>
      </div>
      <div
        id="action-button"
        className="flex items-center justify-center gap-5"
      >
        <Link target="_blank" href={AppBaseUrl}>
          <Button>
            Demo <Icon.AppWindow />
          </Button>
        </Link>
        <Button>
          Waitlist <Icon.Mailbox />{" "}
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
