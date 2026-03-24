"use client";

import React from "react";
import TranslatableText from "../Global/TranslatableText";

// ─── Isometric SVG Illustrations ─────────────────────────────────────────────

function LayeredPlatformIllustration() {
  return (
    <svg
      viewBox="0 0 260 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
    >
      {/* Bottom layer — large, lightest */}
      <path
        d="M130 175 L48 128 L130 81 L212 128 Z"
        stroke="#e5e7eb"
        strokeWidth="1.4"
        fill="#f9fafb"
      />
      <path
        d="M48 128 L48 144 L130 191 L130 175 Z"
        fill="#f3f4f6"
        stroke="#e5e7eb"
        strokeWidth="1.4"
      />
      <path
        d="M212 128 L212 144 L130 191 L130 175 Z"
        fill="#e9ebee"
        stroke="#e5e7eb"
        strokeWidth="1.4"
      />

      {/* Mid layer */}
      <path
        d="M130 145 L63 105 L130 65 L197 105 Z"
        stroke="#d1d5db"
        strokeWidth="1.4"
        fill="#f9fafb"
      />
      <path
        d="M63 105 L63 121 L130 161 L130 145 Z"
        fill="#f3f4f6"
        stroke="#d1d5db"
        strokeWidth="1.4"
      />
      <path
        d="M197 105 L197 121 L130 161 L130 145 Z"
        fill="#e9ebee"
        stroke="#d1d5db"
        strokeWidth="1.4"
      />

      {/* Top layer — green accent */}
      <path
        d="M130 113 L76 80 L130 47 L184 80 Z"
        stroke="#16a34a"
        strokeWidth="1.6"
        fill="#f0fdf4"
      />
      <path
        d="M76 80 L76 96 L130 129 L130 113 Z"
        fill="#dcfce7"
        stroke="#16a34a"
        strokeWidth="1.6"
      />
      <path
        d="M184 80 L184 96 L130 129 L130 113 Z"
        fill="#bbf7d0"
        stroke="#16a34a"
        strokeWidth="1.6"
      />

      {/* Apex dot */}
      <circle cx="130" cy="47" r="4.5" fill="#16a34a" />
      <circle
        cx="130"
        cy="47"
        r="8"
        stroke="#16a34a"
        strokeWidth="1"
        opacity="0.3"
        fill="none"
      />
    </svg>
  );
}

function ConnectedNodesIllustration() {
  return (
    <svg
      viewBox="0 0 260 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
    >
      {/* Bottom connector platform */}
      <path
        d="M130 172 L52 128 L130 84 L208 128 Z"
        stroke="#e5e7eb"
        strokeWidth="1"
        fill="none"
        strokeDasharray="5 4"
      />

      {/* Left cube */}
      <path
        d="M78 140 L44 120 L78 100 L112 120 Z"
        stroke="#d1d5db"
        strokeWidth="1.4"
        fill="#fafafa"
      />
      <path
        d="M44 120 L44 136 L78 156 L78 140 Z"
        fill="#f3f4f6"
        stroke="#d1d5db"
        strokeWidth="1.4"
      />
      <path
        d="M112 120 L112 136 L78 156 L78 140 Z"
        fill="#e9ebee"
        stroke="#d1d5db"
        strokeWidth="1.4"
      />

      {/* Right cube */}
      <path
        d="M182 140 L148 120 L182 100 L216 120 Z"
        stroke="#d1d5db"
        strokeWidth="1.4"
        fill="#fafafa"
      />
      <path
        d="M148 120 L148 136 L182 156 L182 140 Z"
        fill="#f3f4f6"
        stroke="#d1d5db"
        strokeWidth="1.4"
      />
      <path
        d="M216 120 L216 136 L182 156 L182 140 Z"
        fill="#e9ebee"
        stroke="#d1d5db"
        strokeWidth="1.4"
      />

      {/* Center cube — green, elevated */}
      <path
        d="M130 100 L88 76 L130 52 L172 76 Z"
        stroke="#16a34a"
        strokeWidth="1.6"
        fill="#f0fdf4"
      />
      <path
        d="M88 76 L88 92 L130 116 L130 100 Z"
        fill="#dcfce7"
        stroke="#16a34a"
        strokeWidth="1.6"
      />
      <path
        d="M172 76 L172 92 L130 116 L130 100 Z"
        fill="#bbf7d0"
        stroke="#16a34a"
        strokeWidth="1.6"
      />

      {/* Connection lines center → left/right */}
      <line
        x1="88"
        y1="84"
        x2="78"
        y2="100"
        stroke="#9ca3af"
        strokeWidth="1"
        strokeDasharray="3 2"
      />
      <line
        x1="172"
        y1="84"
        x2="182"
        y2="100"
        stroke="#9ca3af"
        strokeWidth="1"
        strokeDasharray="3 2"
      />
      <line
        x1="112"
        y1="128"
        x2="148"
        y2="128"
        stroke="#9ca3af"
        strokeWidth="1"
        strokeDasharray="3 2"
      />
    </svg>
  );
}

function StackedScreensIllustration() {
  return (
    <svg
      viewBox="0 0 260 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
    >
      {/* Back screen */}
      <path
        d="M150 160 L78 120 L78 64 L150 104 Z"
        fill="#f9fafb"
        stroke="#e5e7eb"
        strokeWidth="1.2"
      />
      <path
        d="M150 160 L192 136 L192 80 L150 104 Z"
        fill="#f3f4f6"
        stroke="#e5e7eb"
        strokeWidth="1.2"
      />
      <path
        d="M78 64 L120 40 L192 80 L150 104 Z"
        fill="#fafafa"
        stroke="#e5e7eb"
        strokeWidth="1.2"
      />

      {/* Middle screen */}
      <path
        d="M135 170 L70 134 L70 84 L135 120 Z"
        fill="#f9fafb"
        stroke="#d1d5db"
        strokeWidth="1.4"
      />
      <path
        d="M135 170 L180 144 L180 94 L135 120 Z"
        fill="#f0f0ef"
        stroke="#d1d5db"
        strokeWidth="1.4"
      />
      <path
        d="M70 84 L115 58 L180 94 L135 120 Z"
        fill="#f9fafb"
        stroke="#d1d5db"
        strokeWidth="1.4"
      />
      {/* Content lines */}
      <line
        x1="82"
        y1="102"
        x2="122"
        y2="79"
        stroke="#e5e7eb"
        strokeWidth="1"
      />
      <line
        x1="82"
        y1="114"
        x2="112"
        y2="98"
        stroke="#e5e7eb"
        strokeWidth="1"
      />

      {/* Front screen — green */}
      <path
        d="M120 180 L62 146 L62 101 L120 135 Z"
        fill="#f0fdf4"
        stroke="#16a34a"
        strokeWidth="1.6"
      />
      <path
        d="M120 180 L168 153 L168 108 L120 135 Z"
        fill="#dcfce7"
        stroke="#16a34a"
        strokeWidth="1.6"
      />
      <path
        d="M62 101 L110 74 L168 108 L120 135 Z"
        fill="#f0fdf4"
        stroke="#16a34a"
        strokeWidth="1.6"
      />
      {/* Screen content */}
      <line
        x1="75"
        y1="117"
        x2="115"
        y2="93"
        stroke="#16a34a"
        strokeWidth="1.3"
        opacity="0.55"
      />
      <line
        x1="75"
        y1="129"
        x2="102"
        y2="114"
        stroke="#16a34a"
        strokeWidth="1.3"
        opacity="0.35"
      />
      <circle
        cx="154"
        cy="118"
        r="7"
        fill="#16a34a"
        opacity="0.2"
        stroke="#16a34a"
        strokeWidth="1.2"
      />
      <circle cx="154" cy="118" r="3" fill="#16a34a" opacity="0.6" />
    </svg>
  );
}

// ─── Pillar Data ──────────────────────────────────────────────────────────────

const pillars = [
  {
    label: "EXL 01",
    enTitle: "Built for real healthcare operations",
    bnTitle: "বাস্তব স্বাস্থ্যসেবা অপারেশনের জন্য নির্মিত",
    enDesc:
      "Designed around how clinics and hospitals actually function — visit management, queues, billing, and staff coordination unified in one system.",
    bnDesc:
      "ক্লিনিক ও হাসপাতাল যেভাবে বাস্তবে পরিচালিত হয় তার উপর ভিত্তি করে তৈরি — ভিজিট ম্যানেজমেন্ট, কিউ, বিলিং এবং স্টাফ সমন্বয় একক সিস্টেমে, বিচ্ছিন্ন টুল নয়।",
    Illustration: LayeredPlatformIllustration,
  },
  {
    label: "EXL 02",
    enTitle: "See everything as it happens",
    bnTitle: "ঘটনাক্রমে সবকিছু দেখুন",
    enDesc:
      "Track patient flow, manage department queues, and monitor status instantly — so every team member stays aligned and nothing falls through the cracks.",
    bnDesc:
      "পেশেন্ট ফ্লো ট্র্যাক করুন, বিভাগীয় কিউ নিয়ন্ত্রণ করুন এবং তাৎক্ষণিক স্ট্যাটাস দেখুন — যাতে পুরো টিম সমন্বিত থাকে এবং কোনো কাজ বাদ না যায়।",
    Illustration: ConnectedNodesIllustration,
  },
  {
    label: "EXL 03",
    enTitle: "Patients informed automatically",
    bnTitle: "রোগীরা স্বয়ংক্রিয়ভাবে আপডেট পায়",
    enDesc:
      "Appointments, prescriptions, visit updates, and records delivered directly to patients’ phones — reducing calls, confusion, and front-desk workload.",
    bnDesc:
      "অ্যাপয়েন্টমেন্ট, প্রেসক্রিপশন, ভিজিট আপডেট এবং রেকর্ড সরাসরি রোগীর মোবাইলে পৌঁছে — কলের চাপ, বিভ্রান্তি এবং ফ্রন্ট-ডেস্কের কাজ কমায়।",
    Illustration: StackedScreensIllustration,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

const ValuePropsSection = () => {
  return (
    <section className="w-full border-t border-gray-100 bg-white">
      {/* Statement header */}
      <div className="border-b border-gray-100 px-6 py-16 text-center laptop:px-12">
        <p className="text-sm font-medium text-green-600">Why Exelth</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-semibold leading-tight text-gray-900 laptop:text-4xl desktop:text-5xl">
          <TranslatableText
            en="A new standard for clinic and hospital operations."
            bn="ক্লিনিক ও হাসপাতাল পরিচালনার নতুন মানদণ্ড।"
          />
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-balance text-base text-gray-500">
          <TranslatableText
            en="Purpose-built for healthcare — covering every workflow from patient arrival to billing close."
            bn="স্বাস্থ্যসেবার জন্য উদ্দেশ্য-নির্মিত — রোগীর আগমন থেকে বিলিং সম্পন্ন পর্যন্ত প্রতিটি ওয়ার্কফ্লো কভার করে।"
          />
        </p>
      </div>

      {/* 3-column pillar grid */}
      <div className="grid grid-cols-1 tablet:grid-cols-3">
        {pillars.map((pillar, i) => {
          const { label, enTitle, bnTitle, enDesc, bnDesc, Illustration } =
            pillar;
          const isLast = i === pillars.length - 1;
          return (
            <div
              key={label}
              className={[
                "flex flex-col px-8 py-12 laptop:px-10 laptop:py-16",
                !isLast
                  ? "border-b border-gray-100 tablet:border-b-0 tablet:border-r"
                  : "",
              ].join(" ")}
            >
              {/* Mono label */}
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">
                {label}
              </p>

              {/* Illustration */}
              <div className="my-10 flex items-center justify-center">
                <div className="w-full max-w-[210px]">
                  <Illustration />
                </div>
              </div>

              {/* Text — pushed to bottom via mt-auto */}
              <div className="mt-auto">
                <h3 className="text-[15px] font-semibold text-gray-900">
                  <TranslatableText en={enTitle} bn={bnTitle} />
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-gray-500">
                  <TranslatableText en={enDesc} bn={bnDesc} />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ValuePropsSection;
