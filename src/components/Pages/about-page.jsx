import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { exelthTeam } from "../../data/team";
// import TeamCard from "../Cards/team-card";

const AboutPage = () => {
  return (
    <main className="my-20 w-full px-4 tablet:px-8 desktop:px-16">
      {/* Hero Section */}
      <section className="redd relative mx-auto mb-16 mt-16 flex h-[45vh] max-w-4xl flex-col items-center justify-center pt-20 text-center">
        <div class="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div
          id="logo"
          className="my-10 rounded-2xl border border-neutral-100 bg-white p-2 shadow-inner"
        >
          <Image
            src={"/brand/exelth-green.png"}
            width={100}
            height={100}
            alt="Exelth"
          />
        </div>
        <h1 className="text-3xl font-semibold tablet:text-4xl laptop:text-6xl">
          Transforming Healthcare <br /> for the Modern World
        </h1>
        <p className="mt-4 text-base text-neutral-700 tablet:px-[15%] laptop:text-lg">
          At Exelth, we&apos;re on a mission to simplify care delivery and bring
          clarity to healthcare—for everyone, everywhere.
        </p>
      </section>

      {/* Mission */}
      <section className="mx-auto mb-16 max-w-4xl pt-20 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
        <p className="mt-4 text-gray-600 tablet:px-[15%] laptop:text-lg">
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

      {/* Team Section */}
      {/* <section className="redd mb-20 w-full">
        <h2 className="mb-6 text-center text-2xl font-bold">
          Meet the People Behind Exelth — Transforming Healthcare Together
        </h2>
        <div className="redd grid w-full grid-cols-2 place-items-center tablet:grid-cols-2">
          {exelthTeam.map((member, i) => (
            <TeamCard key={i} {...member} />
          ))}
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="redd mx-auto mb-16 flex max-w-6xl items-center justify-center rounded-xl border bg-white p-8 text-center shadow-sm">
        <div className="redd rounded-xl">
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
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
