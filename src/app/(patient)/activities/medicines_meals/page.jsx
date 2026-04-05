"use client";

import React from "react";
import { useRouter } from "next/navigation";
import FallBackScreen from "@/components/App/Skeleton/FallBackScreen";

const MedicinesMealsPage = () => {
  const router = useRouter();
  return (
    <div className="w-full max-w-3xl">
      <FallBackScreen
        icon="coffee"
        title="No prescriptions or meal plans yet."
        subtitle="You'll see your prescribed medicines and scheduled meals here."
        actionText="Refresh"
        onPress={() => router.refresh()}
      />
    </div>
  );
};

export default MedicinesMealsPage;
