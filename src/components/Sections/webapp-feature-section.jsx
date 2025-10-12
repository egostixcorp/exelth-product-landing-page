"use client";
import Image from "next/image";
import React from "react";
import { WebAppfeatures } from "../../data/features";
import { motion } from "framer-motion";
import TranslatableText from "../Global/TranslatableText";
const WebAppFeatureSection = () => {
  return (
    <section className="w-full px-4 py-16 tablet:px-8 desktop:px-16">
      <div className="mx-auto mb-12 max-w-6xl text-center">
        <h2 className="text-EgostixBlue text-3xl font-extrabold tablet:text-4xl">
          <TranslatableText
            en="Core Features of Exelth"
            bn="এক্সেলথের মূল বৈশিষ্ট্য"
          />
        </h2>
        <p className="mt-2 text-sm text-gray-600 tablet:text-base">
          <TranslatableText
            en="Purpose-built for modern healthcare providers."
            bn="আধুনিক স্বাস্থ্যসেবা প্রদানকারীদের জন্য উদ্দেশ্য-নির্মিত।"
          />
        </p>
      </div>

      <div className="grid gap-6 tablet:grid-cols-2 desktop:grid-cols-2">
        {WebAppfeatures.map((feature, index) => (
          <div
            key={index}
            className="flex h-96 flex-col items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="redd flex w-full items-center justify-start">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-600">
                {/* <feature.icon size={24} /> */}
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                <TranslatableText bn={feature.bntitle} en={feature.title} />
              </h3>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              {" "}
              <TranslatableText bn={feature.bnDesc} en={feature.description} />
            </p>
            <div className="redd flex size-full items-center justify-end overflow-hidden">
              {feature.image && (
                <Image
                  src={feature.image}
                  width={1980}
                  height={1080}
                  quality={100}
                  alt={feature.title}
                  className="redd mt-28 h-full w-fit scale-150 rounded-md border border-green-200 object-contain"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WebAppFeatureSection;
