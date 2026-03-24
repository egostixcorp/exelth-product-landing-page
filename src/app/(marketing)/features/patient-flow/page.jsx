import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Live Patient Flow & Queue Control — Exelth",
  description:
    "Track patient movement across departments in real time. Reduce waiting times and improve coordination between reception, doctors, labs, and billing.",
};

const PatientFlowFeature = () => {
  return (
    <div className="my-20 w-full px-[5%] laptop:px-[15%]">
      {/* Hero */}
      <section className="relative grid min-h-[80vh] grid-cols-1 items-center gap-10 laptop:grid-cols-2">
        <div className="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        <div className="mt-20 flex flex-col">
          <p className="text-sm font-medium text-green-600">
            Live Patient Flow & Queue Control
          </p>
          <h1 className="mt-3 text-balance text-3xl font-semibold leading-tight laptop:text-5xl">
            See every patient. Move them faster.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-gray-600">
            Exelth gives your facility a live view of every patient — where they
            are, how long they&apos;ve waited, and what happens next. Reduce
            queues without adding staff.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="https://app.exelth.com/auth/sign-up">
              <Button variant="exelth">Get Started</Button>
            </Link>
            <Link href="/solutions/patient-flow">
              <Button variant="outline">See the Solution</Button>
            </Link>
          </div>
        </div>

        <div className="relative h-64 w-full overflow-hidden rounded-2xl border-[5px] border-green-100 bg-gray-50 shadow-xl tablet:h-96 laptop:h-[460px]">
          <Image
            src="/screenshots/solutions/patient-flow-overview.png"
            alt="Live patient flow overview"
            fill
            priority
            quality={100}
            className="object-contain p-4"
          />
        </div>
      </section>

      {/* Section 1 — Live View */}
      <section className="mt-28 grid items-center gap-10 rounded-2xl bg-green-50 p-8 laptop:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold laptop:text-3xl">
            A live map of your patient queue
          </h2>
          <p className="mt-4 text-gray-600">
            See every active patient, their current stage, and their wait time
            at a glance. Spot bottlenecks before they become delays.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            {[
              "Real-time status per patient across all stages",
              "Queue position and estimated wait time",
              "Department-level overload alerts",
              "Staff can reassign or escalate instantly",
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
            src="/screenshots/solutions/patient-flow-overview.png"
            alt="Patient flow live view"
            fill
            quality={90}
            className="object-contain p-4"
          />
        </div>
      </section>

      {/* Section 2 — Follow-ups */}
      <section className="mt-16 grid items-center gap-10 rounded-2xl bg-green-50 p-8 laptop:grid-cols-2">
        <div className="relative order-2 h-52 w-full overflow-hidden rounded-xl border bg-white tablet:h-80 laptop:order-1">
          <Image
            src="/screenshots/solutions/patient-followups.png"
            alt="Patient follow-ups"
            fill
            quality={90}
            className="object-contain p-4"
          />
        </div>
        <div className="order-1 laptop:order-2">
          <h2 className="text-2xl font-semibold laptop:text-3xl">
            Follow-ups and post-visit care, tracked automatically
          </h2>
          <p className="mt-4 text-gray-600">
            After a visit closes, follow-up reminders and scheduled return
            appointments are tracked in the system — so no patient is forgotten
            between visits.
          </p>
          <p className="mt-3 text-gray-600">
            Patients also receive automated updates via the Exelth Care App.
          </p>
        </div>
      </section>

      {/* Section 3 — Operations coordination */}
      <section className="mt-16 grid items-center gap-10 rounded-2xl bg-green-50 p-8 laptop:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold laptop:text-3xl">
            Better coordination across every department
          </h2>
          <p className="mt-4 text-gray-600">
            Reception, doctors, lab, pharmacy, and billing all work from the
            same live patient state. When a patient moves, every department
            knows — no calls, no paper slips.
          </p>
          <p className="mt-3 text-gray-600">
            The result: faster throughput, fewer mistakes, happier patients.
          </p>
        </div>
        <div className="relative h-52 w-full overflow-hidden rounded-xl border bg-white tablet:h-80">
          <Image
            src="/screenshots/solutions/operations-overview.png"
            alt="Operations and flow coordination"
            fill
            quality={90}
            className="object-contain p-4"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mt-28 flex flex-col items-center rounded-2xl border bg-gray-50 py-20 text-center">
        <h3 className="text-2xl font-semibold">
          Shorter queues start with better visibility.
        </h3>
        <p className="mt-3 max-w-xl text-gray-500">
          Give your team a live view of every patient and watch wait times drop.
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

export default PatientFlowFeature;
