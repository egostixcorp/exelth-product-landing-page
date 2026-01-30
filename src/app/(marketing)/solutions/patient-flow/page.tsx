"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const PatientFlowSolution = () => {
  return (
    <div className="my-20 w-full px-[5%] laptop:px-[15%]">
      {/* Hero */}
      <section className="flex h-[50vh] flex-col justify-center">
        <h1 className="text-2xl font-semibold laptop:text-4xl">
          Faster visits. Fewer complaints. Better patient experience.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Exelth optimizes how patients move through your facility — improving
          throughput without increasing staff or infrastructure.
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
          Long wait times, unclear queues, and missed follow-ups frustrate
          patients and overload staff. Poor patient flow directly impacts care
          quality and operational efficiency.
        </p>
      </section>

      {/* Solution */}
      <section className="mt-16">
        <h2 className="text-xl font-semibold">What Exelth does</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
          <li>Online and front-desk appointment booking</li>
          <li>Live visit status and queue visibility</li>
          <li>Automated reminders and follow-ups</li>
          <li>Optional patient-facing Care App</li>
        </ul>
      </section>

      {/* Use Case */}
      <section className="mt-16 rounded-xl bg-gray-50 p-6">
        <h3 className="font-semibold">Real-world use case</h3>
        <p className="mt-2 text-gray-600">
          A hospital reduces average OPD wait time by managing visit flow in
          real time — increasing daily capacity without hiring more doctors.
        </p>
      </section>
    </div>
  );
};

export default PatientFlowSolution;
