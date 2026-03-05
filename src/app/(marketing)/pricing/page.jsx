// "use client";

import React from "react";
import PriceCard from "@/components/Cards/PriceCard";
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
            Exelth Infrastructure Pricing
          </Badge>

          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Infrastructure for modern
            <span className="block text-green-600">healthcare facilities</span>
          </h1>

          <p className="mt-4 text-neutral-600">
            Large hospitals run on powerful healthcare infrastructure. <br />
            <span className="font-medium text-neutral-900">
              Exelth brings the same operational technology to clinics and
              diagnostic centers.
            </span>
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid w-fit max-w-6xl gap-6 tablet:grid-cols-1 md:grid-cols-3">
          <PriceCard
            title="Foundation"
            description="For small clinics getting started"
            price="Free"
            note="Up to 20 visits / month"
            features={[
              "Appointment scheduling",
              "Basic patient records",
              "Online appointment booking",
              "Automated reminders",
              "Basic queue management",
              // "1 doctor / clinic",
            ]}
            buttonText="Start Free"
            buttonLink="https://app.exelth.com/auth/sign-up"
          />

          <PriceCard
            title="Core"
            recommended={true}
            description="For growing clinics & diagnostic centers"
            price="₹1999"
            priceSuffix="/ month"
            features={[
              "Unlimited visits",
              "Patient records & visit history",
              "E-prescriptions & clinical notes",
              "Live queue & arrival tracking",
              "Staff & department management",
              "Lab test booking & order management",
              "Operational analytics",
            ]}
            buttonText="Upgrade to Pro"
            buttonLink="https://app.exelth.com/auth/sign-up"
          />

          <PriceCard
            title="Enterprise"
            description="For large clinics, hospitals & healthcare networks"
            price="Custom"
            features={[
              "Multi-doctor & multi-facility infrastructure",
              "Advanced analytics & operational insights",
              "Role-based access & enterprise security",
              "Custom integrations & APIs",
              "Workflow automation & system integrations",
              "Dedicated onboarding & priority support",
            ]}
            buttonText="Contact Sales"
            buttonLink="/contact"
          />
        </div>

        {/* Add-ons */}
        <div className="mt-20 w-full max-w-4xl rounded-2xl border bg-white p-8 shadow-sm">
          <h3 className="text-center text-2xl font-semibold">
            Add-ons & Pay-as-you-go
          </h3>

          <p className="mt-2 text-center text-sm text-neutral-600">
            Activate additional capabilities only when needed.
          </p>

          <div className="mt-8 grid gap-4 text-sm md:grid-cols-2">
            {[
              "AI clinical documentation (pay per usage)",
              "AI patient communication automation",
              "Marketplace bookings – 15% per completed appointment",
              "Diagnostics marketplace orders",
              "Payment processing infrastructure",
              "Advanced AI operational analytics",
            ].map((item) => (
              <div key={item} className="flex gap-2">
                <Check className="mt-0.5 size-4 text-green-600" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Fine print */}
        <p className="mx-auto mt-10 max-w-xl text-center text-xs text-neutral-500">
          Starter plan is free up to 20 visits per month. Marketplace commission
          applies only to patients or lab bookings generated through Exelth.
          Add-ons are optional and charged based on usage.
        </p>
      </Container>
    </div>
  );
};

export default PricingPage;
