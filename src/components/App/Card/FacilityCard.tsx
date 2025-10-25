"use client";

import Image from "next/image";
import Link from "next/link";
import { FaUsers } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { Users, CheckCircle } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

interface FacilityCardProps {
  id: string;
  name: string;
  address: string;
  image: string;
  status?: boolean; // true = verified, false = community
}

const FacilityCard: React.FC<FacilityCardProps> = ({
  id,
  name,
  address,
  image,
  status,
}) => {
  return (
    <Link
      href={`/search/facility/profile/${id}`}
      className="block w-full max-w-80 overflow-hidden rounded-xl border border-gray-100 bg-white transition hover:shadow-md"
    >
      <div className="redd relative h-52 w-full overflow-hidden rounded-xl">
        <Image
          src={image || "/placeholder-facility.jpg"}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>

      <div className="flex flex-col gap-1 p-4">
        <div className="flex flex-wrap items-center justify-between gap-1">
          <h3 className="redd w-52 truncate text-lg font-semibold text-gray-900">
            {name}
          </h3>

          {status ? (
            <span
              className={cn(
                "flex items-center gap-1 rounded-md border border-blue-500/50 bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-600",
              )}
            >
              <MdVerified size={14} />
              {/* Verified */}
            </span>
          ) : (
            <span
              className={cn(
                "flex items-center gap-1 rounded-md border border-gray-300 bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600",
              )}
            >
              <FaUsers size={13} />
              {/* Community */}
            </span>
          )}
        </div>

        <p className="line-clamp-2 text-sm text-gray-600">{address}</p>
      </div>
    </Link>
  );
};

export default FacilityCard;
