"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

const PriceCard = ({
  title,
  description,
  price,
  priceSuffix,
  note,
  recommended,
  features,
  buttonText,
  buttonLink,
}) => {
  return (
    <div
      className={`relative flex h-full flex-col justify-between rounded-2xl border bg-white p-6 shadow-sm sm:p-8 ${recommended ? "ring-2 ring-green-500 sm:scale-[1.02]" : ""} `}
    >
      {recommended && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-600 px-3 py-1 text-xs font-medium text-white">
          Recommended
        </span>
      )}

      <div>
        <h3 className="text-xl font-semibold sm:text-2xl">{title}</h3>

        <p className="mt-1 text-sm text-neutral-600">{description}</p>

        <div className="mt-6 flex items-end gap-2">
          <span className="text-3xl font-bold sm:text-4xl">{price}</span>
          {priceSuffix && (
            <span className="pb-1 text-neutral-500">{priceSuffix}</span>
          )}
        </div>

        {note && <p className="mt-1 text-xs text-neutral-500">{note}</p>}

        <ul className="mt-6 space-y-2 text-sm">
          {features.map((item) => (
            <li key={item} className="flex gap-2">
              <Check className="mt-0.5 size-4 text-green-600" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <Link href={buttonLink} target="_blank">
        <Button
          variant={recommended ? "exelth" : "outline"}
          className="mt-8 w-full rounded-md"
        >
          {buttonText}
        </Button>
      </Link>
    </div>
  );
};

export default PriceCard;
