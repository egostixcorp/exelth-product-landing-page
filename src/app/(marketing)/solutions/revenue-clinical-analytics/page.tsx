"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const RevenueClinicalAnalyticsSolution = () => {
  return (
    <div className="my-20 w-full px-[5%] laptop:px-[15%]">
      {/* Hero */}
      <section className="flex h-[50vh] flex-col justify-center">
        <h1 className="text-2xl font-semibold laptop:text-4xl">
          Every visit. Every rupee. Fully accounted.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Exelth connects billing, clinical workflows, and analytics directly to
          visits — giving owners and admins complete clarity.
        </p>
        {/* CTA */}
        <section className="mt-16 flex gap-4">
          <Link href="https://app.exelth.com/auth/sign-up">
            <Button variant="exelth">Get Started</Button>
          </Link>
          <Link href="/pricing">
            <Button variant="outline">View Pricing</Button>
          </Link>
        </section>
      </section>

      {/* Problem */}
      <section className="mt-16">
        <h2 className="text-xl font-semibold">The problem</h2>
        <p className="mt-4 max-w-3xl text-gray-600">
          Disconnected billing systems, manual records, and lack of analytics
          lead to revenue leakage, compliance risks, and uninformed decisions.
        </p>
      </section>

      {/* Solution */}
      <section className="mt-16">
        <h2 className="text-xl font-semibold">What Exelth does</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
          <li>Visit-linked billing and payment tracking</li>
          <li>Support for online and offline payment methods</li>
          <li>E-prescriptions and lab reports tied to visits</li>
          <li>Doctor, department, and capacity analytics</li>
          <li>SLA and utilization insights</li>
        </ul>
      </section>

      {/* Use Case */}
      <section className="mt-16 rounded-xl bg-gray-50 p-6">
        <h3 className="font-semibold">Real-world use case</h3>
        <p className="mt-2 text-gray-600">
          A clinic owner identifies underperforming schedules and revenue
          leakage points — improving margins without increasing patient volume.
        </p>
      </section>
    </div>
  );
};

export default RevenueClinicalAnalyticsSolution;
