"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { featuresV1, Mobilefeatures } from "@/data/features";
import { Button } from "@/components/ui/button";
import TranslatableText from "../Global/TranslatableText";

// Linear-style asymmetric 2:1 grid — alternating direction each row
// grid-cols-3 at laptop: wide = col-span-2, narrow = col-span-1
// Row 0: [wide, narrow], Row 1: [narrow, wide], Row 2: [wide, narrow], Row 3: [narrow, wide]
const spanConfig = [
  "laptop:col-span-2", // F1
  "laptop:col-span-1", // F2
  "laptop:col-span-1", // F3
  "laptop:col-span-2", // F4
  "laptop:col-span-2", // F5
  "laptop:col-span-1", // F6
  "laptop:col-span-1", // F7
  "laptop:col-span-2", // F8
];

// ------------------------------------------------------------------
// Feature Card
// Screenshot fills top portion, fades into white card bg via gradient
// ------------------------------------------------------------------
function FeatureCard({ feature, span }) {
  return (
    <Link
      href={feature.href ?? "/features"}
      className={`group flex h-[440px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl ${span}`}
    >
      {/* Screenshot — fills top, fades to white */}
      <div className="relative flex-1 overflow-hidden bg-gray-50">
        {feature.image && (
          <>
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              quality={90}
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
            {/* Fade gradient dissolves screenshot into white card */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
          </>
        )}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2 px-6 pb-6 pt-4">
        <div className="flex items-center gap-2">
          <span className="text-base text-green-600">{feature.icon}</span>
          <h3 className="text-base font-semibold text-gray-900">
            <TranslatableText en={feature.title} bn={feature.bntitle} />
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-gray-500">
          <TranslatableText en={feature.description} bn={feature.bnDesc} />
        </p>
        <span className="mt-1 text-xs font-semibold tracking-wide text-green-600 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-green-700">
          Explore →
        </span>
      </div>
    </Link>
  );
}

// ------------------------------------------------------------------
// Mobile Feature Card — same layout as FeatureCard
// ------------------------------------------------------------------
function MobileFeatureCard({ feature, span }) {
  return (
    <div
      className={`group flex h-[420px] flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-shadow duration-300 hover:shadow-lg ${span}`}
    >
      <div className="relative flex-1 overflow-hidden bg-gray-50">
        {feature.image && (
          <>
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              quality={90}
              className="object-contain object-top p-4 transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
          </>
        )}
      </div>
      <div className="flex flex-col gap-2 px-6 pb-6 pt-4">
        <div className="flex items-center gap-2 text-gray-400">
          <span className="text-sm text-green-600">{feature.icon}</span>
          <h3 className="text-sm font-medium text-gray-900">
            <TranslatableText en={feature.title} bn={feature.bntitle} />
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-gray-500">
          <TranslatableText en={feature.description} bn={feature.bnDesc} />
        </p>
      </div>
    </div>
  );
}

// ------------------------------------------------------------------
// Main Layout
// ------------------------------------------------------------------
// compact=true → used on homepage: hides hero, section headers, and CTA
const GridLayout = ({ compact = false }) => {
  return (
    <div className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 laptop:px-12">
        {/* ── Hero (features page only) ── */}
        {!compact && (
          <section className="flex min-h-[55vh] flex-col items-center justify-center py-28 text-center">
            <h1 className="text-balance text-3xl font-medium leading-tight text-gray-900 laptop:text-5xl">
              <TranslatableText
                en="Everything your clinic needs, in one platform."
                bn="আপনার ক্লিনিকের প্রয়োজনীয় সবকিছু, এক প্ল্যাটফর্মে।"
              />
            </h1>
            <p className="mt-5 max-w-2xl text-balance text-lg text-gray-500">
              <TranslatableText
                en="Purpose-built for clinics and hospitals — covering operations, patient flow, billing, and mobile care."
                bn="ক্লিনিক ও হাসপাতালের জন্য নির্মিত — অপারেশন, পেশেন্ট ফ্লো, বিলিং এবং মোবাইল কেয়ার সহ।"
              />
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="https://app.exelth.com/auth/sign-up">
                <Button variant="exelth">Get started free</Button>
              </Link>
              <Link href="/solutions">
                <Button variant="outline">View solutions</Button>
              </Link>
            </div>
          </section>
        )}

        {/* ── B2B Features Grid ── */}
        <section className={compact ? "pb-16 pt-8" : "pb-28"}>
          {compact && (
            <div className="mb-10 text-center">
              <p className="text-sm font-medium text-green-600">
                Exelth Features
              </p>
              <h2 className="mt-2 text-balance text-3xl font-semibold text-gray-900 laptop:text-4xl desktop:text-5xl">
                <TranslatableText
                  en="Built for every part of your clinic"
                  bn="আপনার ক্লিনিকের প্রতিটি অংশের জন্য নির্মিত"
                />
              </h2>
            </div>
          )}
          {!compact && (
            <div className="mb-10 text-center">
              <p className="text-sm font-medium text-green-600">
                Exelth Platform
              </p>
              <h2 className="mt-2 text-balance text-3xl font-semibold text-gray-900 laptop:text-4xl desktop:text-5xl">
                <TranslatableText
                  en="For Clinics & Hospitals"
                  bn="ক্লিনিক ও হাসপাতালের জন্য"
                />
              </h2>
              <p className="mt-3 text-gray-500">
                <TranslatableText
                  en="A connected system to run daily operations, manage patient visits, and grow your facility."
                  bn="দৈনন্দিন অপারেশন পরিচালনা, রোগীর ভিজিট ম্যানেজ এবং ফ্যাসিলিটি বৃদ্ধির জন্য একটি সংযুক্ত সিস্টেম।"
                />
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 gap-3 tablet:grid-cols-2 laptop:grid-cols-3">
            {featuresV1.map((feature, index) => (
              <FeatureCard
                key={index}
                feature={feature}
                span={spanConfig[index] ?? ""}
              />
            ))}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="border-t border-gray-100" />

        {/* ── Mobile / Patient App ── */}
        <section className={compact ? "pb-16 pt-8" : "py-28"}>
          {compact && (
            <div className="mb-10 text-center">
              <p className="text-sm font-medium text-green-600">
                Exelth Care App
              </p>
              <h2 className="mt-2 text-balance text-3xl font-semibold text-gray-900 laptop:text-4xl desktop:text-5xl">
                <TranslatableText
                  en="Features for patients"
                  bn="রোগীদের জন্য বৈশিষ্ট্য"
                />
              </h2>
            </div>
          )}
          {!compact && (
            <div className="mb-10 text-center">
              <p className="text-sm font-medium text-green-600">
                Exelth Care App
              </p>
              <h2 className="mt-2 text-balance text-3xl font-semibold text-gray-900 laptop:text-4xl desktop:text-5xl">
                <TranslatableText en="For Patients" bn="রোগীদের জন্য" />
              </h2>
              <p className="mt-3 text-gray-500">
                <TranslatableText
                  en="A mobile-first experience for appointments, records, and real-time health updates."
                  bn="অ্যাপয়েন্টমেন্ট, রেকর্ড এবং রিয়েল-টাইম স্বাস্থ্য আপডেটের জন্য মোবাইল-ফার্স্ট অভিজ্ঞতা।"
                />
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 gap-3 tablet:grid-cols-2 laptop:grid-cols-3">
            {Mobilefeatures.map((feature, index) => (
              <MobileFeatureCard
                key={index}
                feature={feature}
                span={spanConfig[index] ?? ""}
              />
            ))}
          </div>
        </section>

        {/* ── CTA (features page only) ── */}

        <section className="mb-28 rounded-2xl border border-gray-100 bg-gray-50 py-20 text-center">
          <h3 className="text-balance text-2xl font-medium text-gray-900 laptop:text-3xl">
            <TranslatableText
              en="Plan the present. Build the future."
              bn="বর্তমানকে সংগঠিত করুন। ভবিষ্যৎ গড়ুন।"
            />
          </h3>
          <p className="mt-3 text-gray-500">
            <TranslatableText
              en="Join clinics and hospitals already running on Exelth."
              bn="ইতিমধ্যে এক্সেলথে পরিচালিত ক্লিনিক ও হাসপাতালে যোগ দিন।"
            />
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="https://app.exelth.com/auth/sign-up">
              <Button variant="exelth">Get started free</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline">Talk to us</Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GridLayout;
