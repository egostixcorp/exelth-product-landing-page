"use client";

import React from "react";
import { useRouter } from "next/navigation";
import FallBackScreen from "@/components/App/Skeleton/FallBackScreen";

const RoomsBedAllocationPage = () => {
  const router = useRouter();
  return (
    <div className="w-full max-w-3xl">
      <FallBackScreen
        icon="home"
        title="No room or bed allocated yet."
        subtitle="When admitted, your room and bed information will appear here."
        actionText="Refresh"
        onPress={() => router.refresh()}
      />
    </div>
  );
};

export default RoomsBedAllocationPage;
