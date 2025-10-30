"use client";

import React, { useState, useTransition } from "react";
// import { requestPublishAction } from "@/app/actions/requestPublishAction";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

type RequestType = "doctor" | "department" | "lab_test";

interface Props {
  orgId: string;
  userId: string;
  type: RequestType;
}

const requestMap: Record<
  RequestType,
  {
    title: string;
    description: string;
    icon: string;
  }
> = {
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
};

export function RequestPublishCard({ orgId, userId, type }: Props) {
  const { title, description, icon } = requestMap[type];
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  //   const handleRequest = () => {
  //     startTransition(async () => {
  //       const res = await requestPublishAction({ orgId, userId, type, message });
  //       if (res.success) toast.success(res.message);
  //       else toast.error(res.message);
  //     });
  //   };

  return (
    <Card className="flex flex-col w-80 items-center justify-between gap-3 rounded-2xl border border-gray-200 p-5 shadow-sm transition hover:border-green-300 hover:shadow-md">
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

      {/* <textarea
        placeholder="Add a short message (optional)"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="mt-2 w-full rounded-lg border border-gray-300 p-2 text-sm outline-none focus:ring-2 focus:ring-green-500"
      /> */}

      <Button
        // onClick={handleRequest}
        disabled={isPending}
        className="w-full rounded-lg bg-green-600 text-white hover:bg-green-700"
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          "Send Request"
        )}
      </Button>
    </Card>
  );
}
