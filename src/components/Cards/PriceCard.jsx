"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

// interface PriceCardProps {
//   title: string;
//   description: string;
//   price: string;
//   priceSuffix?: string;
//   note?: string;
//   features: string[];
//   buttonText: string;
//   buttonLink: string;
// }

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
    <div className={`rounded-2xl border bg-white p-8 shadow-sm flex flex-col items-start justify-between ${recommended ? "ring-2 ring-green-500 " : ""}`}>
      <h3 className="text-2xl font-semibold">{title}</h3>

      <p className="mt-1 text-sm text-neutral-600">{description}</p>

      <div className="mt-6 flex items-end gap-2">
        <span className="text-4xl font-bold">{price}</span>
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

      <Link href={buttonLink} target="_blank">
        <Button variant="exelth" className="mt-8 w-full rounded-md">
          {buttonText}
        </Button>
      </Link>
    </div>
  );
};

export default PriceCard;