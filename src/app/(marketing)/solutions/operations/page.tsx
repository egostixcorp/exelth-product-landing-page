"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const OperationsSolution = () => {
  return (
    <div className="my-20 w-full px-[5%] laptop:px-[15%]">
      {/* Hero */}
      <section className="relative grid min-h-screen grid-cols-1 items-center gap-5">
        <div className="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        <div className="mt-20 flex w-full flex-col items-center justify-center">
          <h1 className="text-2xl font-semibold laptop:text-4xl">
            One system to run daily healthcare operations.
          </h1>
          <p className="mt-4 max-w-2xl text-center text-lg text-gray-600">
            Exelth gives clinics and hospitals real-time control over staff,
            departments, and visits — without paper, spreadsheets, or chaos.
          </p>

          {/* CTA */}
          <div className="mt-8 flex gap-4">
            <Link href="https://app.exelth.com/auth/sign-up">
              <Button variant="exelth">Get Started</Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline">View Pricing</Button>
            </Link>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="relative h-48 w-fit overflow-hidden rounded-xl border-[5px] border-green-200 bg-white shadow-xl tablet:h-80 laptop:h-[420px] desktop:h-[520px]">
          <Image
            src="/gifs/solutions/operations-overview.png"
            alt="Exelth operations dashboard overview"
            width={1920}
            height={1080}
            priority
            quality={100}
            className="scale-100 object-contain p-6"
          />
        </div>
      </section>

      {/* Visual 1 — Centralized Operations */}
      <section className="mt-24 grid items-center gap-10 rounded-lg bg-green-50 p-8 laptop:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold tablet:text-3xl">
            Centralized control over daily operations
          </h2>
          <p className="mt-4 text-gray-600">
            Manage departments, staff, and visits from a single operational
            dashboard — with everyone working from the same system.
          </p>
          <p className="mt-2 text-gray-600">
            No duplicated work. No conflicting information.
          </p>
        </div>

        <div className="relative h-48 w-full overflow-hidden rounded-xl border bg-gray-50 tablet:h-80">
          <Image
            src="/gifs/solutions/department-staff-management.png"
            alt="Department and staff management"
            width={1920}
            height={1080}
            priority
            quality={100}
            className="size-full scale-105 object-contain p-6"
          />
        </div>
      </section>

      {/* Problem */}
      <section className="mt-24">
        <h2 className="text-xl font-semibold tablet:text-3xl">
          The problem today
        </h2>
        <p className="mt-4 max-w-3xl text-gray-600">
          Most healthcare facilities rely on fragmented tools to manage staff,
          schedules, and visits. This creates confusion, delays, and constant
          firefighting — especially during peak hours.
        </p>
      </section>

      {/* Visual 2 — Visit Lifecycle */}
      <section className="mt-24 grid items-center gap-10 rounded-lg bg-green-50 p-8 laptop:grid-cols-2">
        <div className="relative h-48 w-full overflow-hidden rounded-xl border bg-gray-50 tablet:h-80 laptop:order-1">
          <Image
            src="/gifs/solutions/visit-lifecycle.png"
            alt="Visit lifecycle management"
            width={1920}
            height={1080}
            priority
            quality={100}
            className="size-full scale-105 object-contain p-6"
          />
        </div>

        <div className="order-1 laptop:order-2">
          <h2 className="text-xl font-semibold tablet:text-3xl">
            Every visit tracked from start to finish
          </h2>
          <p className="mt-4 text-gray-600">
            From check-in to consultation to completion, Exelth tracks every
            visit in real time so staff always know what’s happening.
          </p>
          <p className="mt-2 text-gray-600">
            This reduces bottlenecks and improves coordination.
          </p>
        </div>
      </section>

      {/* Visual 3 — Admin Visibility */}
      <section className="mt-24 grid items-center gap-10 rounded-lg bg-green-50 p-8 laptop:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold tablet:text-3xl">
            Real-time visibility for admins
          </h2>
          <p className="mt-4 text-gray-600">
            Admins can instantly see workload by department, doctor, or time
            slot — and act before issues escalate.
          </p>
          <p className="mt-2 text-gray-600">
            Decisions are based on live data, not assumptions.
          </p>
        </div>

        <div className="relative h-48 w-full overflow-hidden rounded-xl border bg-gray-50 tablet:h-80">
          <Image
            src="/gifs/solutions/operations-overview.png"
            alt="Admin operations dashboard"
            width={1920}
            height={1080}
            priority
            quality={100}
            className="size-full scale-105 object-contain p-6"
          />
        </div>
      </section>

      {/* Use Case */}
      <section className="mt-24 rounded-xl bg-gray-50 p-6">
        <h3 className="font-semibold">Real-world result</h3>
        <p className="mt-2 max-w-3xl text-gray-600">
          During peak OPD hours, an admin reallocates staff in real time using
          Exelth — preventing long queues and reducing patient complaints
          without adding headcount.
        </p>
      </section>
    </div>
  );
};

export default OperationsSolution;
