"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const PatientFlowSolution = () => {
  return (
    <div className="my-20 w-full px-[5%] laptop:px-[15%]">
      {/* Hero */}
      <section className="relative grid min-h-screen grid-cols-1 items-center justify-center gap-5">
        <div className="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        <div className="mt-20 flex w-full flex-col items-center justify-center">
          <h1 className="text-center text-2xl font-semibold laptop:text-4xl">
            Faster visits. Fewer complaints. Better patient experience.
          </h1>
          <p className="mt-4 max-w-2xl text-center text-lg text-gray-600">
            Exelth optimizes how patients move through your facility — reducing
            wait times and improving throughput without adding staff.
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
        <div className="relative h-48 w-full overflow-hidden rounded-xl border-[5px] border-green-200 bg-white shadow-xl tablet:h-80 laptop:h-[420px] desktop:h-[520px]">
          <Image
            src="/gifs/solutions/patient-flow-overview.png"
            alt="Patient flow overview"
            width={1920}
            height={1080}
            priority
            quality={100}
            className="size-full object-contain scale-110 p-6"
          />
        </div>
      </section>

      {/* Visual 1 — Live Patient Status */}
      <section className="mt-24 grid items-center gap-10 rounded-lg bg-green-50 p-8 laptop:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold tablet:text-3xl">
            Live visibility into patient status
          </h2>
          <p className="mt-4 text-gray-600">
            Track every patient from check-in to completion — waiting,
            consulting, or completed — in real time.
          </p>
          <p className="mt-2 text-gray-600">
            Staff always know what’s happening without asking around.
          </p>
        </div>

        <div className="relative h-48 w-full overflow-hidden rounded-xl border bg-gray-50 tablet:h-80">
          <Image
            src="/gifs/solutions/admin-booking-dashboard.png"
            alt="Patient status tracking"
            width={1920}
            height={1080}
            priority
            quality={100}
            className="scale-105 object-contain p-6"
          />
        </div>
      </section>

      {/* Problem */}
      <section className="mt-24">
        <h2 className="text-xl font-semibold tablet:text-3xl">
          The problem today
        </h2>
        <p className="mt-4 max-w-3xl text-gray-600">
          Long wait times, unclear queues, and missed follow-ups frustrate
          patients and overload staff. Poor patient flow reduces capacity and
          directly impacts care quality.
        </p>
      </section>

      {/* Visual 2 — Queue & Wait-Time Management */}
      <section className="mt-24 grid items-center gap-10 rounded-lg bg-green-50 p-8 laptop:grid-cols-2">
        <div className="relative h-48 w-full overflow-hidden rounded-xl border bg-gray-50 tablet:h-80 laptop:order-1">
          <Image
            src="/gifs/solutions/operations-overview.png"
            alt="Queue and wait-time management"
            width={1920}
            height={1080}
            priority
            quality={100}
            className="scale-105 object-contain p-6"
          />
        </div>

        <div className="order-1 laptop:order-2">
          <h2 className="text-xl font-semibold tablet:text-3xl">
            Manage queues before they become complaints
          </h2>
          <p className="mt-4 text-gray-600">
            Exelth makes queues and wait times visible so front desks and admins
            can intervene early.
          </p>
          <p className="mt-2 text-gray-600">
            Better flow without rushing doctors.
          </p>
        </div>
      </section>

      {/* Visual 3 — Follow-ups & Continuity */}
      <section className="mt-24 grid items-center gap-10 rounded-lg bg-green-50 p-8 laptop:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold tablet:text-3xl">
            Fewer drop-offs after the visit
          </h2>
          <p className="mt-4 text-gray-600">
            Automated reminders and follow-ups keep patients informed after
            their visit — without manual calls or tracking.
          </p>
          <p className="mt-2 text-gray-600">
            Continuity of care, built into the workflow.
          </p>
        </div>

        <div className="relative h-48 w-full overflow-hidden rounded-xl border bg-gray-50 tablet:h-80">
          <Image
            src="/gifs/solutions/patient-followups.png"
            alt="Patient follow-ups"
            width={1920}
            height={1080}
            priority
            quality={100}
            className="scale-105 object-contain p-6"
          />
        </div>
      </section>

      {/* Use Case */}
      <section className="mt-24 rounded-xl bg-gray-50 p-6">
        <h3 className="font-semibold">Real-world result</h3>
        <p className="mt-2 max-w-3xl text-gray-600">
          A hospital reduced average OPD waiting time by actively managing
          patient flow in real time — increasing daily capacity without hiring
          more doctors.
        </p>
      </section>
    </div>
  );
};

export default PatientFlowSolution;
