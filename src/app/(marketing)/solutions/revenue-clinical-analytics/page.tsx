"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const RevenueClinicalAnalyticsSolution = () => {
  return (
    <div className="my-20 w-full px-[5%] laptop:px-[15%]">
      {/* Hero */}
      <section className="relative grid min-h-screen grid-cols-1 items-center justify-center gap-5">
        <div className="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        <div className="mt-20 flex w-full flex-col items-center justify-center">
          <h1 className="text-center text-2xl font-semibold laptop:text-4xl">
            Every visit. Every rupee. Fully accounted.
          </h1>
          <p className="mt-4 max-w-2xl text-center text-lg text-gray-600">
            Exelth connects billing, clinical work, and analytics directly to
            visits — giving owners and admins complete financial clarity.
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
            src="/gifs/solutions/revenue-analytics-overview.png"
            alt="Revenue and analytics dashboard overview"
            width={1920}
            height={1080}
            priority
            quality={100}
            className="size-full scale-105 object-contain p-6"
          />
        </div>
      </section>

      {/* Visual 1 — Visit-linked Billing */}
      <section className="mt-24 grid items-center gap-10 rounded-lg bg-green-50 p-8 laptop:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold tablet:text-3xl">
            Billing that starts and ends with a visit
          </h2>
          <p className="mt-4 text-gray-600">
            Every bill, payment, and receipt in Exelth is tied directly to an
            actual visit — eliminating mismatches and manual reconciliation.
          </p>
          <p className="mt-2 text-gray-600">
            No orphan invoices. No missing payments.
          </p>
        </div>

        <div className="relative h-48 w-full overflow-hidden rounded-xl border bg-gray-50 tablet:h-80">
          <Image
            src="/gifs/solutions/visit-linked-billing.png"
            alt="Visit linked billing"
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
          Disconnected billing systems, manual records, and limited reporting
          make it hard to understand where money is earned, lost, or blocked.
          Decisions are often based on assumptions instead of data.
        </p>
      </section>

      {/* Visual 2 — Clinical Records */}
      <section className="mt-24 grid items-center gap-10 rounded-lg bg-green-50 p-8 laptop:grid-cols-2">
        <div className="relative h-48 w-full overflow-hidden rounded-xl border bg-gray-50 tablet:h-80 laptop:order-1">
          <Image
            src="/gifs/solutions/patient-followups.png"
            alt="Clinical records tied to visits"
            width={1920}
            height={1080}
            priority
            quality={100}
            className="scale-105 object-contain p-6"
          />
        </div>

        <div className="order-1 laptop:order-2">
          <h2 className="text-xl font-semibold tablet:text-3xl">
            Clinical work and revenue stay connected
          </h2>
          <p className="mt-4 text-gray-600">
            Prescriptions, lab orders, and reports are created as part of each
            visit — ensuring clinical actions and billing never drift apart.
          </p>
          <p className="mt-2 text-gray-600">
            Better compliance with less effort.
          </p>
        </div>
      </section>

      {/* Visual 3 — Admin Audit Logs */}
      <section className="mt-24 grid items-center gap-10 rounded-lg bg-green-50 p-8 laptop:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold tablet:text-3xl">
            Complete audit trail for every action
          </h2>
          <p className="mt-4 text-gray-600">
            Every critical action — bookings, edits, cancellations, billing
            changes, and clinical updates — is automatically logged with user,
            time, and context.
          </p>
          <p className="mt-2 text-gray-600">
            Built for accountability, compliance, and internal audits.
          </p>
        </div>

        <div className="relative h-48 w-full overflow-hidden rounded-xl border bg-gray-50 tablet:h-80">
          <Image
            src="/gifs/solutions/admin-audit-logs.png"
            alt="Admin audit logs"
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
          A clinic owner identified underperforming schedules and revenue
          leakage points using Exelth’s analytics — improving margins without
          increasing patient volume.
        </p>
      </section>
    </div>
  );
};

export default RevenueClinicalAnalyticsSolution;
