import React from "react";
import { features } from "@/data/features";
import Image from "next/image";

const GridLayout = () => {
  return (
    <section className="w-full px-4 py-16 tablet:px-8 desktop:px-16">
      <div className="mx-auto mb-12 max-w-6xl text-center">
        <h2 className="text-EgostixBlue text-3xl font-extrabold tablet:text-4xl">
          Core Features of Exelth
        </h2>
        <p className="mt-2 text-sm text-gray-600 tablet:text-base">
          Purpose-built for modern healthcare providers.
        </p>
      </div>

      <div className="grid gap-6 tablet:grid-cols-2 desktop:grid-cols-2">
        {features.map((feature, index) => (
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
                {feature.title}
              </h3>
            </div>
            <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
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

export default GridLayout;
