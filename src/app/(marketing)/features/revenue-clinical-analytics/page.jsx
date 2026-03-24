import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Billing, Clinical Records & Analytics — Exelth",
  description:
    "Generate visit-linked bills, prescriptions, and medical records automatically. Track revenue and clinical performance with real-time analytics.",
};

const RevenueClinicalFeature = () => {
  return (
    <div className="my-20 w-full px-[5%] laptop:px-[15%]">
      {/* Hero */}
      <section className="relative grid min-h-[80vh] grid-cols-1 items-center gap-10 laptop:grid-cols-2">
        <div className="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        <div className="mt-20 flex flex-col">
          <p className="text-sm font-medium text-green-600">
            Billing, Clinical Records & Analytics
          </p>
          <h1 className="mt-3 text-balance text-3xl font-semibold leading-tight laptop:text-5xl">
            Bills, prescriptions, and records — all tied to the visit.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-gray-600">
            Exelth generates billing, prescriptions, and clinical records
            automatically from visit data. No double entry, no lost paperwork,
            and no revenue that slips through the cracks.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="https://app.exelth.com/auth/sign-up">
              <Button variant="exelth">Get Started</Button>
            </Link>
            <Link href="/solutions/revenue-clinical-analytics">
              <Button variant="outline">See the Solution</Button>
            </Link>
          </div>
        </div>

        <div className="relative h-64 w-full overflow-hidden rounded-2xl border-[5px] border-green-100 bg-gray-50 shadow-xl tablet:h-96 laptop:h-[460px]">
          <Image
            src="/screenshots/solutions/visit-linked-billing.png"
            alt="Visit-linked billing"
            fill
            priority
            quality={100}
            className="object-contain p-4"
          />
        </div>
      </section>

      {/* Section 1 — Billing */}
      <section className="mt-28 grid items-center gap-10 rounded-2xl bg-green-50 p-8 laptop:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold laptop:text-3xl">
            Visit-linked billing with zero manual entry
          </h2>
          <p className="mt-4 text-gray-600">
            Every service, procedure, and prescription in a visit automatically
            appears on the bill. Staff review and confirm — the system does the
            calculation.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            {[
              "Auto-generated bills from visit services",
              "Itemized breakdown by department",
              "Partial payments and outstanding balances tracked",
              "Patient receives digital receipt via Care App",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5 text-green-500">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-52 w-full overflow-hidden rounded-xl border bg-white tablet:h-80">
          <Image
            src="/screenshots/solutions/visit-linked-billing.png"
            alt="Visit-linked billing screenshot"
            fill
            quality={90}
            className="object-contain p-4"
          />
        </div>
      </section>

      {/* Section 2 — Analytics */}
      <section className="mt-16 grid items-center gap-10 rounded-2xl bg-green-50 p-8 laptop:grid-cols-2">
        <div className="relative order-2 h-52 w-full overflow-hidden rounded-xl border bg-white tablet:h-80 laptop:order-1">
          <Image
            src="/screenshots/solutions/revenue-analytics-overview.png"
            alt="Revenue analytics overview"
            fill
            quality={90}
            className="object-contain p-4"
          />
        </div>
        <div className="order-1 laptop:order-2">
          <h2 className="text-2xl font-semibold laptop:text-3xl">
            Revenue and performance, visible in real time
          </h2>
          <p className="mt-4 text-gray-600">
            Track daily revenue, visit volumes, department performance, and
            outstanding payments on a single dashboard. Know your numbers
            without pulling reports manually.
          </p>
          <p className="mt-3 text-gray-600">
            Trend charts help you spot what&apos;s growing and what needs
            attention.
          </p>
        </div>
      </section>

      {/* Section 3 — Audit & Records */}
      <section className="mt-16 grid items-center gap-10 rounded-2xl bg-green-50 p-8 laptop:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold laptop:text-3xl">
            Clinical records and audit logs, always intact
          </h2>
          <p className="mt-4 text-gray-600">
            Every prescription, diagnosis note, and action taken on a visit is
            recorded and timestamped. Clinical records are organized by patient
            and searchable across visits.
          </p>
          <p className="mt-3 text-gray-600">
            Audit logs capture who did what and when — for compliance, quality
            control, and dispute resolution.
          </p>
        </div>
        <div className="relative h-52 w-full overflow-hidden rounded-xl border bg-white tablet:h-80">
          <Image
            src="/screenshots/solutions/admin-audit-logs.png"
            alt="Admin audit logs"
            fill
            quality={90}
            className="object-contain p-4"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mt-28 flex flex-col items-center rounded-2xl border bg-gray-50 py-20 text-center">
        <h3 className="text-2xl font-semibold">
          Stop losing revenue to manual billing gaps.
        </h3>
        <p className="mt-3 max-w-xl text-gray-500">
          Every visit generates a bill, a record, and an insight —
          automatically.
        </p>
        <div className="mt-8 flex gap-3">
          <Link href="https://app.exelth.com/auth/sign-up">
            <Button variant="exelth">Get Started Free</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">Talk to Us</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RevenueClinicalFeature;
