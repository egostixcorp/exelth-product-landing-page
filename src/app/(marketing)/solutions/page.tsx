"use client";

import Link from "next/link";
import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import TranslatableText from "@/components/Global/TranslatableText";

const SolutionsPage = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ delay: 0.8 })
        .to("#headline", { opacity: 1, y: 0, filter: "blur(0px)" })
        .to("#desc", { opacity: 1, y: 0, filter: "blur(0px)" })
        .to("#cta", { opacity: 1, y: 0, filter: "blur(0px)" });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="my-20 min-h-screen w-full px-[5%] laptop:px-[15%]">
      {/* Hero */}

      <section className="relative flex h-[60vh] flex-col items-center justify-center text-center">
        <div className="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        <h1
          id="headline"
          className="translate-y-10 text-2xl font-semibold opacity-0 blur-sm laptop:text-4xl desktop:text-5xl"
        >
          Healthcare operations, finally systemized.
        </h1>

        <p
          id="desc"
          className="mt-6 max-w-3xl translate-y-10 text-lg text-gray-600 opacity-0 blur-sm"
        >
          Exelth is an infrastructure platform for clinics and hospitals to
          manage patient discovery, daily operations, visit flow, billing, and
          performance — all in one connected system.
        </p>

        <div
          id="cta"
          className="mt-8 flex translate-y-10 gap-4 opacity-0 blur-sm"
        >
          <Link href="https://app.exelth.com/auth/sign-up">
            <Button variant="exelth">Get Started</Button>
          </Link>
          <Link href="https://app.exelth.com/auth/sign-up">
            <Button variant="outline">Request Demo</Button>
          </Link>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="mt-20 grid gap-8 md:grid-cols-2">
        <SolutionCard
          title="Online Visibility & Patient Acquisition"
          desc="Get discovered by patients who are actively choosing where to book."
          href="/solutions/visibility"
        />
        <SolutionCard
          title="Clinic & Hospital Operations"
          desc="Run daily operations with real-time control over staff and visits."
          href="/solutions/operations"
        />
        <SolutionCard
          title="Patient Flow & Experience"
          desc="Reduce wait times and improve throughput without adding staff."
          href="/solutions/patient-flow"
        />
        <SolutionCard
          title="Revenue, Clinical & Analytics Suite"
          desc="Billing, prescriptions, reports, and performance insights — all tied to visits."
          href="/solutions/revenue-clinical-analytics"
        />
      </section>
    </div>
  );
};

export default SolutionsPage;

const SolutionCard = ({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) => (
  <Link
    href={href}
    className="rounded-xl border border-gray-200 p-6 transition hover:border-green-400 hover:bg-green-50"
  >
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-gray-600">{desc}</p>
    <p className="mt-4 text-sm text-green-600">Explore →</p>
  </Link>
);
