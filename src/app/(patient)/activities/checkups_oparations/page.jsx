"use client";

import React from "react";
import { useRouter } from "next/navigation";
import FallBackScreen from "@/components/App/Skeleton/FallBackScreen";

const CheckupsOperationsPage = () => {
  const router = useRouter();
  return (
    <div className="w-full max-w-3xl">
      <FallBackScreen
        icon="heart"
        title="No checkups or operations planned yet."
        subtitle="Upcoming procedures and medical checkups will be listed here."
        actionText="Refresh"
        onPress={() => router.refresh()}
      />
    </div>
  );
};

export default CheckupsOperationsPage;
