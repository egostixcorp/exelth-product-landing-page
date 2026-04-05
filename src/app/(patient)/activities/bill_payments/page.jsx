"use client";

import React from "react";
import { useRouter } from "next/navigation";
import FallBackScreen from "@/components/App/Skeleton/FallBackScreen";

const BillPaymentsPage = () => {
  const router = useRouter();
  return (
    <div className="w-full max-w-3xl">
      <FallBackScreen
        icon="bill"
        title="No bills or payments yet."
        subtitle="Your recent invoices and transactions will appear here."
        actionText="Refresh"
        onPress={() => router.refresh()}
      />
    </div>
  );
};

export default BillPaymentsPage;
