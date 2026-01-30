"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function B2BRegisterPage() {
  return (
    <div className="my-20 w-full px-[5%] laptop:px-[15%]">
      {/* ================= HERO ================= */}
      <section className="relative grid min-h-screen grid-cols-1 items-center gap-6">
        <div className="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        <div className="mt-20 flex flex-col items-center text-center">
          <h1 className="text-3xl font-semibold laptop:text-4xl">
            List your clinic or hospital on Exelth
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Exelth is an infrastructure platform that helps clinics and
            hospitals manage visibility, appointments, staff coordination, and
            patient flow — without chaos.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="https://app.exelth.com/auth/sign-up">
              <Button variant="exelth" size="lg">
                Get started
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Talk to sales
              </Button>
            </Link>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Listing is free. Verification required before going live.
          </p>
        </div>

        {/* Hero Visual */}
        <div className="relative h-48 w-full overflow-hidden rounded-xl border-[5px] border-green-200 bg-gray-50 shadow-xl tablet:h-80 laptop:h-[420px] desktop:h-[520px]">
          <Image
            src="/gifs/solutions/facility-profiles.png"
            alt="Exelth facility public profile"
            width={1920}
            height={1080}
            priority
            quality={100}
            className="scale-125 size-full object-contain p-6"
          />
        </div>
      </section>

      {/* ================= WHY EXELTH ================= */}
      <section className="mt-24 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Centralized operations",
            desc: "Run visits, departments, and staff from one connected system.",
          },
          {
            title: "Doctor & staff coordination",
            desc: "Align schedules, availability, and workloads in real time.",
          },
          {
            title: "Patient flow & visit tracking",
            desc: "Reduce wait times with live status and queue visibility.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <p className="font-medium">{item.title}</p>
            <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* ================= VISUAL 1 ================= */}
      <section className="mt-24 grid items-center gap-10 rounded-lg bg-green-50 p-8 laptop:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold tablet:text-3xl">
            A trusted public profile for your facility
          </h2>
          <p className="mt-4 text-gray-600">
            Your Exelth profile shows everything a patient needs to decide —
            doctors, services, fees, and availability — in one clear view.
          </p>
          <p className="mt-2 text-gray-600">
            No misleading ads. No ranking games. Just structured, verified
            information.
          </p>
        </div>

        <div className="relative h-40 w-full overflow-hidden rounded-md border bg-gray-50 tablet:h-80">
          <Image
            src="/gifs/solutions/facility-profile.gif"
            alt="Facility profile"
            fill
            className="scale-110 object-contain p-4"
          />
        </div>
      </section>

      {/* ================= PROBLEM ================= */}
      <section className="mt-24">
        <h2 className="text-xl font-semibold tablet:text-3xl">
          The problem today
        </h2>
        <p className="mt-4 max-w-3xl text-gray-600">
          Most clinics are either invisible online or represented poorly on
          generic platforms. Patients can’t compare properly, forcing clinics
          into price competition instead of quality.
        </p>
      </section>

      {/* ================= VISUAL 2 ================= */}
      <section className="mt-24 grid items-center gap-10 rounded-lg bg-green-50 p-8 laptop:grid-cols-2">
        <div className="relative order-2 h-40 w-full overflow-hidden rounded-md border bg-gray-50 tablet:h-80 laptop:order-1">
          <Image
            src="/gifs/solutions/patient-booking-flow.gif"
            alt="Patient booking flow"
            fill
            className="scale-110 object-contain p-4"
          />
        </div>

        <div className="order-1 laptop:order-2">
          <h2 className="text-xl font-semibold tablet:text-3xl">
            From discovery to booking — without friction
          </h2>
          <p className="mt-4 text-gray-600">
            Patients browse facilities, choose doctors, and book appointments
            directly — without phone calls or confusion.
          </p>
          <p className="mt-2 text-gray-600">
            You receive structured bookings, not random walk-ins.
          </p>
        </div>
      </section>

      {/* ================= VISUAL 3 ================= */}
      <section className="mt-24 grid items-center gap-10 rounded-lg bg-green-50 p-8 laptop:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold tablet:text-3xl">
            Full operational visibility
          </h2>
          <p className="mt-4 text-gray-600">
            Every booking appears directly in your operational dashboard, linked
            to visits, doctors, and schedules.
          </p>
          <p className="mt-2 text-gray-600">No manual entry. No surprises.</p>
        </div>

        <div className="relative h-40 w-full overflow-hidden rounded-md border bg-gray-50 tablet:h-80">
          <Image
            src="/gifs/solutions/admin-booking-dashboard.png"
            alt="Admin booking dashboard"
            fill
            className="object-contain p-4"
          />
        </div>
      </section>

      {/* ================= RESULT ================= */}
      <section className="mt-24 rounded-xl bg-gray-50 p-6">
        <h3 className="font-semibold">Real-world result</h3>
        <p className="mt-2 max-w-3xl text-gray-600">
          A multi-specialty clinic with excellent doctors but low walk-ins
          started receiving steady online bookings after listing on Exelth —
          without ads or manual coordination.
        </p>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="mt-24 rounded-xl border border-gray-200 bg-white p-10 text-center">
        <h2 className="text-2xl font-semibold tablet:text-3xl">
          Get your facility live on Exelth
        </h2>
        <p className="mt-4 text-gray-600">
          Join clinics and hospitals already using Exelth to run operations with
          clarity and control.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link href="https://app.exelth.com/auth/sign-up">
            <Button variant="exelth" size="lg">
              Get started
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Talk to sales
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
