import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Facility Profile & Online Booking — Exelth",
  description:
    "Create a trusted public Exelth profile. Let patients discover your clinic, view services, and book appointments directly online.",
};

const VisibilityBookingFeature = () => {
  return (
    <div className="my-20 w-full px-[5%] laptop:px-[15%]">
      {/* Hero */}
      <section className="relative grid min-h-[80vh] grid-cols-1 items-center gap-10 laptop:grid-cols-2">
        <div className="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        <div className="mt-20 flex flex-col">
          <p className="text-sm font-medium text-green-600">
            Facility Profile & Online Booking
          </p>
          <h1 className="mt-3 text-balance text-3xl font-semibold leading-tight laptop:text-5xl">
            Be where patients look — and let them book instantly.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-gray-600">
            Your Exelth profile is a complete, structured facility page —
            doctors, services, departments, fees, and live availability — all in
            one place patients can trust and book from.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="https://app.exelth.com/auth/sign-up">
              <Button variant="exelth">List Your Facility</Button>
            </Link>
            <Link href="/solutions/visibility">
              <Button variant="outline">See the Solution</Button>
            </Link>
          </div>
        </div>

        <div className="relative h-64 w-full overflow-hidden rounded-2xl border-[5px] border-green-100 bg-gray-50 shadow-xl tablet:h-96 laptop:h-[460px]">
          <Image
            src="/screenshots/solutions/facility-profiles.png"
            alt="Exelth facility public profile"
            fill
            priority
            quality={100}
            className="object-contain p-4"
          />
        </div>
      </section>

      {/* Section 1 — Profile */}
      <section className="mt-28 grid items-center gap-10 rounded-2xl bg-green-50 p-8 laptop:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold laptop:text-3xl">
            A complete public profile patients can trust
          </h2>
          <p className="mt-4 text-gray-600">
            Show your doctors, specialties, departments, services, and fees in a
            structured, verified view. Patients see exactly what they need to
            decide — no phone calls, no guessing.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            {[
              "Doctor profiles with specialties and availability",
              "Department and service listings",
              "Fee transparency per service",
              "Verified facility badge",
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
            src="/screenshots/solutions/facility-profiles.png"
            alt="Facility profile screenshot"
            fill
            quality={90}
            className="object-contain p-4"
          />
        </div>
      </section>

      {/* Section 2 — Online Booking */}
      <section className="mt-16 grid items-center gap-10 rounded-2xl bg-green-50 p-8 laptop:grid-cols-2">
        <div className="relative order-2 h-52 w-full overflow-hidden rounded-xl border bg-white tablet:h-80 laptop:order-1">
          <Image
            src="/screenshots/solutions/admin-booking-dashboard.png"
            alt="Online booking dashboard"
            fill
            quality={90}
            className="object-contain p-4"
          />
        </div>
        <div className="order-1 laptop:order-2">
          <h2 className="text-2xl font-semibold laptop:text-3xl">
            Online bookings, directly into your dashboard
          </h2>
          <p className="mt-4 text-gray-600">
            Patients select a doctor, pick a time slot, and confirm — the
            booking appears immediately in your Exelth dashboard, linked to the
            patient&apos;s visit record.
          </p>
          <p className="mt-3 text-gray-600">
            No manual entry. No phone tag. No missed appointments.
          </p>
        </div>
      </section>

      {/* Section 3 — Discovery */}
      <section className="mt-16 grid items-center gap-10 rounded-2xl bg-green-50 p-8 laptop:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold laptop:text-3xl">
            Get discovered by patients who are ready to book
          </h2>
          <p className="mt-4 text-gray-600">
            Exelth connects patients searching for care to your facility —
            filtered by specialty, location, and availability. Every view of
            your profile is a potential booking.
          </p>
          <p className="mt-3 text-gray-600">
            No ads. No commissions. Just organic patient reach.
          </p>
        </div>
        <div className="relative h-52 w-full overflow-hidden rounded-xl border bg-white tablet:h-80">
          <Image
            src="/screenshots/solutions/patient-flow-overview.png"
            alt="Patient discovery flow"
            fill
            quality={90}
            className="object-contain p-4"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mt-28 flex flex-col items-center rounded-2xl border bg-gray-50 py-20 text-center">
        <h3 className="text-2xl font-semibold">Ready to get more patients?</h3>
        <p className="mt-3 max-w-xl text-gray-500">
          Create your facility profile and start receiving online bookings
          today.
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

export default VisibilityBookingFeature;
