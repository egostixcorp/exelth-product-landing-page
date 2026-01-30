"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const VisibilitySolution = () => {
  return (
    <div className="my-20 w-full px-[5%] laptop:px-[15%]">
      {/* Hero */}
      <section className="grid min-h-screen relative grid-cols-1 flex-col items-center justify-center gap-5 laptop:flex-row">
        <div className="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        <div className="mt-20 flex w-full flex-col items-center justify-center">
          <h1 className="text-2xl font-semibold laptop:text-4xl">
            Be visible where patients actually decide.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-center text-gray-600">
            Exelth helps clinics and hospitals get discovered by patients who
            are actively looking to book — without ads or commission-driven
            platforms.
          </p>

          {/* CTA */}
          <div className="mt-8 flex gap-4">
            <Link href="https://app.exelth.com/auth/sign-up">
              <Button variant="exelth">List Your Facility</Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline">View Pricing</Button>
            </Link>
          </div>
        </div>
        <div>
          <div className="relative h-48 w-full overflow-hidden rounded-xl border-[5px] border-green-200 bg-gray-50 shadow-xl tablet:h-80 laptop:h-[420px] desktop:h-[520px]">
            {/* Replace src with real screenshot */}
            <Image
              src="/gifs/solutions/facility-profiles.png"
              alt="Exelth facility public profile"
              width={1920}
              height={1080}
              priority
              quality={100}
              className="size-full scale-125 object-contain p-6"
            />
          </div>
        </div>
      </section>

      {/* Visual 1 — Public Profile */}
      <section className="rded mt-24 grid items-center gap-10 rounded-lg bg-green-50 p-8 laptop:grid-cols-2">
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
          {/* Replace src with real screenshot */}
          <Image
            src="/gifs/solutions/facility-profile.gif"
            alt="Exelth facility public profile"
            fill
            className="size-full scale-110 object-contain p-4"
          />
        </div>
      </section>

      {/* Problem */}
      <section className="mt-24">
        <h2 className="text-xl font-semibold tablet:text-3xl">
          The problem today
        </h2>
        <p className="mt-4 max-w-3xl text-gray-600">
          Most clinics are either invisible online or represented poorly on
          generic platforms. Patients can’t compare properly, and clinics end up
          competing on price instead of quality.
        </p>
      </section>

      {/* Visual 2 — Patient Booking Flow */}
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

      {/* Visual 3 — Admin Visibility */}
      <section className="mt-24 grid items-center gap-10 rounded-lg bg-green-50 p-8 laptop:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold tablet:text-3xl">
            Full visibility on where patients come from
          </h2>
          <p className="mt-4 text-gray-600">
            Every online booking appears directly in your operational dashboard,
            linked to visits and schedules.
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

      {/* Use Case */}
      <section className="mt-24 rounded-xl bg-gray-50 p-6">
        <h3 className="font-semibold">Real-world result</h3>
        <p className="mt-2 max-w-3xl text-gray-600">
          A multi-specialty clinic with excellent doctors but low walk-ins
          started receiving steady online bookings once patients could clearly
          see services, availability, and fees on Exelth.
        </p>
      </section>
    </div>
  );
};

export default VisibilitySolution;
