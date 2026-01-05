// "use client";

import React from "react";
import Container from "@/components/Global/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
export const metadata = {
  title: "Pricing & Fees",
};
const PricingPage = () => {
  return (
    <div className="flex w-full items-center justify-center py-5">
      <Container className="flex flex-col items-center">
        {/* Header */}
        <div className="max-w-2xl text-center">
          <Badge
            variant="outline"
            className="mb-4 rounded-3xl px-4 py-1 text-sm"
          >
            B2B Pricing • Performance Based
          </Badge>

          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Simple pricing built for
            <span className="block text-green-600">healthcare facilities</span>
          </h1>

          <p className="mt-4 text-neutral-600">
            You pay only when a booking is completed.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid w-fit max-w-5xl gap-6 tablet:grid-cols-1">
          {/* Standard Pricing */}
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold">Standard pricing</h3>
            <p className="mt-1 text-sm text-neutral-600">
              For most clinics & diagnostic centers
            </p>
            <div className="mt-8 flex h-fit w-full flex-col items-baseline justify-start gap-8 tablet:flex-row">
              {/* OPD */}
              <div className="mt-6">
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold">10%</span>
                  <span className="pb-1 text-neutral-500">
                    OPD / doctor bookings
                  </span>
                </div>

                <ul className="mt-4 space-y-2 text-sm">
                  {[
                    "Online appointment booking",
                    "Live queue & arrival tracking",
                    "Automated reminders & follow-ups",
                    "No-show reduction",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="mt-0.5 size-4 text-green-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="my-6 w-0.5 border-r" />

              {/* Lab */}
              <div>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold">15%</span>
                  <span className="pb-1 text-neutral-500">lab bookings</span>
                </div>

                <ul className="mt-4 space-y-2 text-sm">
                  {[
                    "Test & package discovery",
                    "Slot-based scheduling",
                    "Home sample collection",
                    "Payment & invoice automation",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="mt-0.5 size-4 text-green-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Link href={"https://app.exelth.com/auth/sign-up"} target="_blank">
              <Button variant="exelth" className="mt-8 rounded-xl">
                Get started
              </Button>
            </Link>
          </div>
        </div>

        {/* Fine print */}
        <p className="mx-auto mt-10 max-w-xl text-center text-xs text-neutral-500">
          Pricing applies only to successful, completed bookings. Cancelled or
          no-show appointments are not charged.
        </p>
      </Container>
    </div>
  );
};

export default PricingPage;
