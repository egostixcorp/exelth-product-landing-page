"use client";

import Image from "next/image";
import React from "react";
import { WebAppfeatures } from "../../data/features";
import TranslatableText from "../Global/TranslatableText";

// 5 items: [wide, narrow, narrow, wide, full]
const spanConfig = [
  "laptop:col-span-2",
  "laptop:col-span-1",
  "laptop:col-span-1",
  "laptop:col-span-2",
  "laptop:col-span-3",
];

function FeatureCard({ feature, span }) {
  return (
    <div
      className={`group flex h-[420px] flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-shadow duration-300 hover:shadow-lg ${span}`}
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
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
          </>
        )}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2 px-6 pb-6 pt-4">
        <div className="flex items-center gap-2 text-gray-400">
          <span className="text-sm">{feature.icon}</span>
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

const WebAppFeatureSection = () => {
  return (
    <section className="w-full px-[5%] py-16 laptop:px-[15%]">
      <div className="mx-auto mb-10 max-w-6xl text-center">
        <p className="text-sm font-medium text-green-600">Exelth Platform</p>
        <h2 className="mt-2 text-balance text-2xl font-medium text-gray-900 laptop:text-3xl">
          <TranslatableText
            en="Core Features of Exelth"
            bn="এক্সেলথের মূল বৈশিষ্ট্য"
          />
        </h2>
        <p className="mt-3 text-gray-500">
          <TranslatableText
            en="Purpose-built for modern healthcare providers."
            bn="আধুনিক স্বাস্থ্যসেবা প্রদানকারীদের জন্য উদ্দেশ্য-নির্মিত।"
          />
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 tablet:grid-cols-2 laptop:grid-cols-3">
        {WebAppfeatures.map((feature, index) => (
          <FeatureCard
            key={index}
            feature={feature}
            span={spanConfig[index] ?? ""}
          />
        ))}
      </div>
    </section>
  );
};

export default WebAppFeatureSection;
