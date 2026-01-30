"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const VisibilitySolution = () => {
  return (
    <div className="my-20 w-full px-[5%] laptop:px-[15%]">
      {/* Hero */}
      <section className="flex h-[50vh] flex-col justify-center">
        <h1 className="text-2xl font-semibold laptop:text-4xl">
          Be visible where patients actually decide.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Exelth helps clinics and hospitals attract patients through trusted,
          structured discovery — not ads.
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
          Most clinics are either invisible online or represented poorly on
          generic platforms. This leads to missed demand, price-based
          competition, and dependency on aggregators.
        </p>
      </section>

      {/* Solution */}
      <section className="mt-16">
        <h2 className="text-xl font-semibold">What Exelth does</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
          <li>Creates a verified public profile for your facility</li>
          <li>Displays doctors, services, fees, and availability</li>
          <li>Enables direct appointment booking</li>
          <li>Gives you control over patient flow</li>
        </ul>
      </section>

      {/* Use Case */}
      <section className="mt-16 rounded-xl bg-gray-50 p-6">
        <h3 className="font-semibold">Real-world use case</h3>
        <p className="mt-2 text-gray-600">
          A multi-specialty clinic with strong doctors but low walk-ins gains
          steady bookings once patients can compare services and availability
          clearly on Exelth.
        </p>
      </section>
    </div>
  );
};

export default VisibilitySolution;
