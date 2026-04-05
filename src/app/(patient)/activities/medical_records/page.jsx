"use client";

import React from "react";
import { useRouter } from "next/navigation";
import FallBackScreen from "@/components/App/Skeleton/FallBackScreen";

const MedicalRecordsPage = () => {
  const router = useRouter();
  return (
    <div className="w-full max-w-3xl">
      <FallBackScreen
        icon="book"
        title="No medical records found."
        subtitle="Once your doctor uploads your medical records, they will appear here."
        actionText="Refresh"
        onPress={() => router.refresh()}
      />
    </div>
  );
};

export default MedicalRecordsPage;
