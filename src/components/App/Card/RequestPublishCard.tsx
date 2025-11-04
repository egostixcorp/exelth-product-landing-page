"use client";

import React, { useEffect, useState, useTransition } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { sendPublishRequest } from "@/lib/tracker";
import { createClient } from "@/utils/supabase/client";

type RequestType = "doctor" | "department" | "lab_test";

interface Props {
  orgId: string; // facility_id
  userId: string;
  type: RequestType;
}

const requestMap = {
  doctor: {
    title: "Request to Publish Doctors",
    description:
      "This facility hasn’t published their doctor list yet. Send a request to make it visible for patients.",
    icon: "/icon/d-p-r.png",
  },
  department: {
    title: "Request to Publish Departments",
    description:
      "The department information is not visible. Request the facility to share their departments.",
    icon: "/icon/dp-p-r.png",
  },
  lab_test: {
    title: "Request to Publish Lab Tests",
    description:
      "The lab tests list is currently hidden. Ask the facility to make their available tests public.",
    icon: "/icon/l-p-r.png",
  },
} as const;

export function RequestPublishCard({ orgId, userId, type }: Props) {
  const { title, description, icon } = requestMap[type];
  const [isPending, startTransition] = useTransition();
  const [requested, setRequested] = useState(false);

  const handleRequest = async () => {
    startTransition(async () => {
      const res = await sendPublishRequest({
        facility_id: orgId,
        user_id: userId,
        type,
      });

      if (res.success) {
        toast.success(res.message);
        setRequested(true);
      } else if (res.alreadyRequested) {
        toast.info("You’ve already requested this.");
        setRequested(true);
      } else {
        toast.error(res.message);
      }
    });
  };

  // (Optional) Check if user already requested on mount
  useEffect(() => {
    const checkExisting = async () => {
      const supabase = createClient(); // client-side supabase
      const { data } = await supabase
        .from("facility_publish_requests")
        .select("id")
        .eq("facility_id", orgId)
        .eq("user_id", userId)
        .eq("type", type)
        .maybeSingle();

      if (data) setRequested(true);
    };
    checkExisting();
  }, [orgId, userId, type]);

  return (
    <Card className="flex w-80 flex-col items-center justify-between gap-3 rounded-2xl border border-gray-200 p-5 shadow-sm transition hover:border-green-300 hover:shadow-md">
      <div className="relative h-28 w-28">
        <Image
          src={icon}
          alt={`${type} icon`}
          fill
          className="object-contain"
          sizes="112px"
          priority
        />
      </div>

      <div className="space-y-1 text-center">
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      <Button
        onClick={handleRequest}
        disabled={isPending || requested}
        className={`w-full rounded-lg ${
          requested
            ? "cursor-default bg-gray-300 text-gray-700"
            : "bg-green-600 text-white hover:bg-green-700"
        }`}
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
          </>
        ) : requested ? (
          "Requested"
        ) : (
          "Send Request"
        )}
      </Button>
    </Card>
  );
}
