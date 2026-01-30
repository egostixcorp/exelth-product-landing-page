"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const OperationsSolution = () => {
  return (
    <div className="my-20 w-full px-[5%] laptop:px-[15%]">
      {/* Hero */}
      <section className="flex h-[50vh] flex-col justify-center">
        <h1 className="text-2xl font-semibold laptop:text-4xl">
          One system to run daily healthcare operations.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Exelth brings structure and real-time visibility to clinics and
          hospitals — replacing paper, spreadsheets, and manual coordination.
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
          Most healthcare facilities rely on fragmented systems to manage
          departments, staff, and daily visits. This leads to confusion,
          bottlenecks, delayed care, and constant firefighting by admins.
        </p>
      </section>

      {/* Solution */}
      <section className="mt-16">
        <h2 className="text-xl font-semibold">What Exelth does</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
          <li>Centralized department and staff management</li>
          <li>Role-based access for admins, receptionists, and doctors</li>
          <li>Visit lifecycle tracking from check-in to completion</li>
          <li>Real-time operational visibility across the facility</li>
        </ul>
      </section>

      {/* Use Case */}
      <section className="mt-16 rounded-xl bg-gray-50 p-6">
        <h3 className="font-semibold">Real-world use case</h3>
        <p className="mt-2 text-gray-600">
          During peak OPD hours, an admin identifies overload in one department
          and reallocates staff instantly — preventing long queues and delays
          before they escalate.
        </p>
      </section>
    </div>
  );
};

export default OperationsSolution;
