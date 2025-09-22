"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <main className="my-20 w-full px-4 tablet:px-8 desktop:px-16">
      {/* Hero Section */}
      <section className="relative mx-auto mb-16 mt-16 flex h-[45vh] max-w-4xl flex-col items-center justify-center pt-20 text-center">
        <div className="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="my-10 rounded-2xl border border-neutral-100 bg-white p-2 shadow-inner">
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
      <section className="redd mx-auto max-w-5xl pt-16 text-center">
        <h1 className="text-2xl font-bold laptop:text-4xl">
          A story of health, connection, and the future of care
        </h1>
      </section>
      {/* Story Section */}
      <section className="mx-auto mb-16 max-w-5xl space-y-16">
        {/* Clinics Side */}
        <div className="grid gap-6 tablet:grid-cols-2 tablet:items-center">
          <div className="redd">
            <Image
              src="/exelth-about-juggling.png"
              width={500}
              height={400}
              alt="Clinic team juggling tasks"
              className="sfu mx-auto"
            />
          </div>
          <div className="text-center text-xl tablet:text-left">
            {/* <h2 className="text-2xl font-semibold text-gray-800">
              Built for Healthcare Teams
            </h2> */}
            <p className="mt-4 text-gray-600">
              If you&apos;re a doctor, receptionist, or clinic owner,
              you&apos;re probably spending hours every day juggling patients,
              appointments, and records.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-xl font-semibold text-gray-800 laptop:text-3xl">
            We created <span className="text-green-600">Exelth</span> to change
            that — for everyone.
          </h1>
        </div>
        {/* Patients Side */}
        <div className="grid gap-6 tablet:grid-cols-2 tablet:flex-row-reverse tablet:items-center">
          <div className="text-center tablet:text-left">
            {/* <h2 className="text-2xl font-semibold text-gray-800">
              Designed for Patients
            </h2> */}
            <p className="mt-4 text-xl text-gray-600">
              And if you&apos;re a patient, you know how frustrating it can be
              to wait in long queues, chase prescriptions, or manage your health
              history across multiple hospitals.
            </p>
          </div>
          <div>
            <Image
              src="/exelth-about-b2c.png"
              width={500}
              height={400}
              alt="Patient waiting illustration"
              className="mx-auto"
            />
          </div>
        </div>
        {/* Healthcare was built for another era */}
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-xl font-semibold text-gray-800 laptop:text-3xl">
            Healthcare was built for another era
          </h1>
          <div className="grid gap-6 tablet:grid-cols-2 tablet:items-center">
            <div className="redd">
              <Image
                src="/exelth-manual-1.png"
                width={500}
                height={400}
                alt="Clinic team juggling tasks"
                className="sfu mx-auto"
              />
            </div>
            <div className="text-center text-xl tablet:text-left">
              {/* <h2 className="text-2xl font-semibold text-gray-800">
              Built for Healthcare Teams
            </h2> */}
              <p className="mt-4 text-gray-600">
                For decades, clinics have relied on manual registers, physical
                files, and endless phone calls to run their operations.
              </p>
            </div>
          </div>
          <div className="grid gap-6 tablet:grid-cols-2 tablet:items-center">
            <div className="text-center text-xl tablet:text-left">
              {/* <h2 className="text-2xl font-semibold text-gray-800">
              Built for Healthcare Teams
            </h2> */}
              <p className="mt-4 text-gray-600">
                Patients, meanwhile, have carried paper prescriptions, lab
                results, and files from one hospital to another — often losing
                precious time and information along the way.
              </p>
            </div>
            <div className="redd">
              <Image
                src="/patient-checks-file.png"
                width={500}
                height={400}
                alt="Clinic team juggling tasks"
                className="sfu mx-auto"
              />
            </div>
          </div>
          <p className="text-based text-gray-800 laptop:text-xl">
            This worked once, but healthcare has outgrown those tools.
          </p>
        </div>
        {/* Then came software — but it was scattered */}
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-xl font-semibold text-gray-800 laptop:text-3xl">
            Then came software — but it was scattered
          </h1>
          <div className="grid gap-6 tablet:grid-cols-2 tablet:items-center">
            <div className="redd">
              <Image
                src="/old-software.png"
                width={500}
                height={400}
                alt="Clinic team juggling tasks"
                className="sfu mx-auto"
              />
            </div>
            <div className="text-center text-lg tablet:text-left">
              {/* <h2 className="text-2xl font-semibold text-gray-800">
              Built for Healthcare Teams
            </h2> */}
              <p className="mt-4 text-gray-600">
                First came spreadsheets and hospital management systems. <br />
                They helped, but they were designed for administrators, not for
                care teams or patients. Each tool solved just one problem —
                billing, records, or scheduling — but never brought the entire
                care experience together.
              </p>
            </div>
          </div>
        </div>
        {/* Exelth is here to change that */}
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-xl font-semibold text-gray-800 laptop:text-3xl">
            Exelth is here to change that
          </h1>
          <p className="mt-2 text-base text-gray-600 laptop:text-lg">
            We believe healthcare should be connected, patient-first, and
            collaborative. So we built a platform where:
          </p>
          <div className="grid gap-6 tablet:grid-cols-2 tablet:items-center">
            <div className="redd">
              <Image
                src="/exelth-clinic-team.png"
                width={500}
                height={400}
                alt="Clinic team juggling tasks"
                className="sfu mx-auto"
              />
            </div>
            <div className="text-center text-xl tablet:text-left">
              {/* <h2 className="text-2xl font-semibold text-gray-800">
              Built for Healthcare Teams
            </h2> */}
              <p className="mt-4 text-gray-600">
                Clinics & Hospitals can manage doctors, departments,
                appointments, billing, and patient records — all in one place.
              </p>
            </div>
          </div>
          <div className="grid gap-6 tablet:grid-cols-2 tablet:items-center">
            <div className="text-center text-xl tablet:text-left">
              {/* <h2 className="text-2xl font-semibold text-gray-800">
              Built for Healthcare Teams
            </h2> */}
              <p className="mt-4 text-gray-600">
                Patients can book appointments, access prescriptions, view lab
                results, and manage their family&apos;s health history anytime,
                anywhere.
              </p>
            </div>
            <div className="redd">
              <Image
                src="/patient-peace.png"
                width={500}
                height={400}
                alt="Clinic team juggling tasks"
                className="sfu mx-auto"
              />
            </div>
          </div>
          <p className="text-based text-gray-800 laptop:text-xl">
            Everything is synced in real-time, so everyone — from front desk to
            doctor to patient — is always on the same page.
          </p>
        </div>
        {/* Your health, your way */}
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-xl font-semibold text-gray-800 laptop:text-3xl">
            Your health, your way
          </h1>
          <div className="grid gap-6 tablet:grid-cols-2 tablet:items-center">
            <div className="redd">
              <Image
                src="/just-exelth.png"
                width={500}
                height={400}
                alt="Clinic team juggling tasks"
                className="sfu mx-auto"
              />
            </div>
            <div className="text-center text-lg tablet:text-left">
              {/* <h2 className="text-2xl font-semibold text-gray-800">
              Built for Healthcare Teams
            </h2> */}
              <p className="mt-4 text-gray-600">
                Exelth lets you run healthcare your way, not the other way
                around. <br /> No more juggling between tools, apps, and paper.{" "}
                <br />
                Everything you need is just there — secure, private, and
                available when you need it.
              </p>
            </div>
          </div>
        </div>
        {/* Exelth Building */}
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-xl font-semibold text-gray-800 laptop:text-3xl">
            we&apos;re just getting started
          </h1>
          <div className="grid gap-6 tablet:grid-cols-2 tablet:items-center">
            <div className="redd">
              <Image
                src="/exelth-building.png"
                width={500}
                height={400}
                alt="Clinic team juggling tasks"
                className="sfu mx-auto"
              />
            </div>
            <div className="text-center text-lg tablet:text-left">
              {/* <h2 className="text-2xl font-semibold text-gray-800">
              Built for Healthcare Teams
            </h2> */}
              <p className="mt-4 text-gray-600">
                That&apos;s why we&apos;re building{" "}
                <span className="text-green-600">Exelth</span> — to reimagine
                the way care is delivered, one appointment at a time.
              </p>
              <p className="mt-4 text-gray-600">
                if you&apos;re a healthcare organization that wants to run
                smarter, or a patient who wants better control of your care —
                we&apos;d love to have you onboard.
              </p>
            </div>
          </div>
        </div>
        {/* Vision Section */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Our Vision for the Future
          </h2>
          <p className="mt-4 text-gray-600 laptop:text-lg">
            We believe healthcare should be connected, collaborative, and
            patient-first. Exelth bridges the gap between clinics and patients,
            making care proactive — not reactive.
          </p>
          <blockquote className="mt-6 italic text-gray-700">
            &quot;The best way to predict the future is to invent it.&quot;
            <br />— Alan Kay, Computing Pioneer
          </blockquote>
        </div>
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
          <h3 className="text-lg font-semibold">Exelth for Patients</h3>
          <p className="mt-2 text-sm text-gray-600">
            Book appointments, manage bills, track care plans, and stay
            informed—on mobile.
          </p>
        </div>
        <div className="rounded-xl border p-6 text-center shadow-sm tablet:col-span-2">
          <h3 className="text-lg font-semibold">Bridging Gaps in Care</h3>
          <p className="mt-2 text-sm text-gray-600">
            From the front desk to the bedside, Exelth makes information
            accessible and timely.
          </p>
          <video
            src="/Exelth-product-demo.webm"
            muted
            autoPlay
            loop
            className="mt-4 w-full rounded-lg"
          ></video>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mx-auto mb-16 flex max-w-6xl items-center justify-center rounded-xl border bg-white p-8 text-center shadow-sm">
        <div>
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
