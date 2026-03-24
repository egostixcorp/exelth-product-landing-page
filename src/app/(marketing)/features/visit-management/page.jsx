import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Operational Visit Management — Exelth",
  description:
    "Manage every patient visit from arrival to completion. Control check-ins, consultations, prescriptions, and visit outcomes in a structured workflow.",
};

const VisitManagementFeature = () => {
  return (
    <div className="my-20 w-full px-[5%] laptop:px-[15%]">

      {/* Hero */}
      <section className="relative grid min-h-[80vh] grid-cols-1 items-center gap-10 laptop:grid-cols-2">
        <div className="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        <div className="mt-20 flex flex-col">
          <p className="text-sm font-medium text-green-600">Operational Visit Management</p>
          <h1 className="mt-3 text-balance text-3xl font-semibold leading-tight laptop:text-5xl">
            Every visit, structured from arrival to close.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-gray-600">
            Exelth gives your team a structured workflow for every patient visit —
            check-in, triage, consultation, prescription, billing — all in one
            connected system.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="https://app.exelth.com/auth/sign-up">
              <Button variant="exelth">Get Started</Button>
            </Link>
            <Link href="/solutions/operations">
              <Button variant="outline">See the Solution</Button>
            </Link>
          </div>
        </div>

        <div className="relative h-64 w-full overflow-hidden rounded-2xl border-[5px] border-green-100 bg-gray-50 shadow-xl tablet:h-96 laptop:h-[460px]">
          <Image
            src="/screenshots/solutions/visit-lifecycle.png"
            alt="Visit lifecycle management"
            fill
            priority
            quality={100}
            className="object-contain p-4"
          />
        </div>
      </section>

      {/* Section 1 — Visit Lifecycle */}
      <section className="mt-28 grid items-center gap-10 rounded-2xl bg-green-50 p-8 laptop:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold laptop:text-3xl">
            A clear lifecycle for every visit
          </h2>
          <p className="mt-4 text-gray-600">
            From the moment a patient walks in to the moment they leave, every
            step is tracked — check-in, waiting, consultation, prescription, and
            payment. Nothing falls through the gaps.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            {[
              "Structured check-in and triage flow",
              "Doctor-assigned consultation records",
              "Prescription and clinical notes per visit",
              "Visit status visible across all departments",
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
            src="/screenshots/solutions/visit-lifecycle.png"
            alt="Visit lifecycle"
            fill
            quality={90}
            className="object-contain p-4"
          />
        </div>
      </section>

      {/* Section 2 — Operations Overview */}
      <section className="mt-16 grid items-center gap-10 rounded-2xl bg-green-50 p-8 laptop:grid-cols-2">
        <div className="relative order-2 h-52 w-full overflow-hidden rounded-xl border bg-white tablet:h-80 laptop:order-1">
          <Image
            src="/screenshots/solutions/operations-overview.png"
            alt="Operations overview dashboard"
            fill
            quality={90}
            className="object-contain p-4"
          />
        </div>
        <div className="order-1 laptop:order-2">
          <h2 className="text-2xl font-semibold laptop:text-3xl">
            Your whole operation in one dashboard
          </h2>
          <p className="mt-4 text-gray-600">
            Reception, doctors, nurses, and billing all work from the same live
            view. Everyone knows what&apos;s happening, what&apos;s next, and who is
            responsible.
          </p>
          <p className="mt-3 text-gray-600">
            Role-based access ensures each staff member sees exactly what they
            need — no more, no less.
          </p>
        </div>
      </section>

      {/* Section 3 — Staff & Departments */}
      <section className="mt-16 grid items-center gap-10 rounded-2xl bg-green-50 p-8 laptop:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold laptop:text-3xl">
            Departments and staff, always in sync
          </h2>
          <p className="mt-4 text-gray-600">
            Assign doctors to departments, manage shift availability, and control
            who can do what inside the system. No manual coordination needed
            between teams.
          </p>
          <p className="mt-3 text-gray-600">
            Audit logs keep every action traceable and accountable.
          </p>
        </div>
        <div className="relative h-52 w-full overflow-hidden rounded-xl border bg-white tablet:h-80">
          <Image
            src="/screenshots/solutions/department-staff-management.png"
            alt="Department and staff management"
            fill
            quality={90}
            className="object-contain p-4"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mt-28 flex flex-col items-center rounded-2xl border bg-gray-50 py-20 text-center">
        <h3 className="text-2xl font-semibold">Run a tighter operation, starting today.</h3>
        <p className="mt-3 max-w-xl text-gray-500">
          Give your team a structured system and let the visits manage themselves.
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

export default VisitManagementFeature;
