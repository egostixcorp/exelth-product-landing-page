import React from "react";
import Image from "next/image";
import Link from "next/link";
import { exelthTeam } from "../../data/team";
import TeamCard from "../Cards/team-card";

const AboutPage = () => {
  return (
    <main className="my-20 w-full px-4 tablet:px-8 desktop:px-16">
      {/* Hero Section */}
      <section className="redd relative mx-auto mb-16 flex h-[45vh] max-w-4xl flex-col items-center justify-center pt-20 text-center">
        <div class="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <h1 className="text-4xl font-extrabold text-gray-900 tablet:text-5xl">
          Built for Better Healthcare
        </h1>
        <p className="mt-4 text-base text-gray-600">
          At Exelth, we&apos;re on a mission to simplify care delivery and bring
          clarity to healthcare—for everyone, everywhere.
        </p>
      </section>

      {/* Mission */}
      <section className="mx-auto mb-16 max-w-4xl text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
        <p className="mt-4 px-[10%] text-gray-600">
          To create a connected, patient-first healthcare experience—empowering
          hospitals, clinics, and individuals with tools that are smart, secure,
          and human-centered.
        </p>
      </section>

      {/* What We’re Building */}
      <section className="mx-auto mb-16 grid max-w-6xl gap-6 tablet:grid-cols-2">
        <div className="rounded-xl border p-6 shadow-sm">
          <h3 className="text-lg font-semibold">
            Exelth for Hospitals & Clinics
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Coordinate care, staff, billing, and patient discharge—all in one
            system.
          </p>
        </div>
        <div className="rounded-xl border p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Exelth for Patients </h3>
          <p className="mt-2 text-sm text-gray-600">
            Book appointments, manage bills, track care plans, and stay
            informed—on mobile.
          </p>
        </div>
        <div className="rounded-xl border p-6 shadow-sm tablet:col-span-2">
          <h3 className="text-lg font-semibold">Bridging Gaps in Care</h3>
          <p className="mt-2 text-sm text-gray-600">
            From the front desk to the bedside, Exelth makes information
            accessible and timely.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto mb-20 max-w-4xl">
        <h2 className="mb-8 text-center text-2xl font-bold">Our Journey</h2>
        <ol className="relative border-s border-gray-200">
          <li className="mb-10 ms-6">
            <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 ring-8 ring-white">
              <span className="h-2.5 w-2.5 rounded-full bg-green-600"></span>
            </span>
            <h3 className="text-base font-semibold text-gray-900">
              2022 — The Spark
            </h3>
            <p className="text-sm text-gray-600">
              Exelth was born from frustration with outdated healthcare systems
              and a desire to improve patient outcomes.
            </p>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 ring-8 ring-white">
              <span className="h-2.5 w-2.5 rounded-full bg-green-600"></span>
            </span>
            <h3 className="text-base font-semibold text-gray-900">
              2023 — Building Begins
            </h3>
            <p className="text-sm text-gray-600">
              Assembled a core team of engineers and clinical advisors. Designed
              and tested the first prototypes.
            </p>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 ring-8 ring-white">
              <span className="h-2.5 w-2.5 rounded-full bg-green-600"></span>
            </span>
            <h3 className="text-base font-semibold text-gray-900">
              2024 — Early Pilots
            </h3>
            <p className="text-sm text-gray-600">
              Partnered with clinics and hospitals for real-world pilots.
              Refined workflows, security, and UI/UX.
            </p>
          </li>
          <li className="ms-6">
            <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 ring-8 ring-white">
              <span className="h-2.5 w-2.5 rounded-full bg-green-600"></span>
            </span>
            <h3 className="text-base font-semibold text-gray-900">
              2025 — Scaling Impact
            </h3>
            <p className="text-sm text-gray-600">
              Rolling out across more providers and expanding our patient-facing
              mobile app with real-time coordination.
            </p>
          </li>
        </ol>
      </section>

      {/* Team Section */}
      <section className="redd mb-20 w-full">
        <h2 className="mb-6 text-center text-2xl font-bold">
          Meet the People Behind Exelth — Transforming Healthcare Together
        </h2>
        <div className="redd grid w-full grid-cols-2 place-items-center tablet:grid-cols-2">
          {exelthTeam.map((member, i) => (
            <TeamCard key={i} {...member} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-12 rounded-xl border bg-white p-8 text-center shadow-sm">
        <h3 className="text-2xl font-semibold text-gray-800">
          Want to build with us?
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          We&apos;re always looking for thoughtful people who care about
          healthcare and design. Engineers, designers, and domain experts
          welcome.
        </p>
        <Link
          href=""
          className="mt-4 inline-block rounded-full bg-green-600 px-6 py-2 text-sm font-medium text-white hover:bg-green-700"
        >
          Explore Careers
        </Link>
      </section>
    </main>
  );
};

export default AboutPage;
