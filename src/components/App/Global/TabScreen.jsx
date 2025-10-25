"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { MdHomeFilled } from "react-icons/md";
import { RiLayoutMasonryFill } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import { MdViewTimeline } from "react-icons/md";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, Search, Activity, UserCircle } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";
import { createClient } from "@/utils/supabase/client";

const tabs = [
  { name: "Home", href: "/patient", icon: MdHomeFilled },
  { name: "Service", href: "/service", icon: RiLayoutMasonryFill },
  { name: "Search", href: "/search", icon: IoMdSearch },
  { name: "Activities", href: "/activities", icon: MdViewTimeline },
  { name: "Profile", href: "/profile", icon: UserCircle },
];

export default function TabScreen() {
  const pathname = usePathname();
  const { user } = useAuth();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const fetchPatient = async () => {
      if (!user?.id) return;
      const supabase = createClient();

      const { data, error } = await supabase
        .from("patient_users")
        .select("*, user:user_id(*)")
        .eq("user_id", user.id)
        .single();

      if (error) {
        console.error("Error fetching patient details:", error.message);
      } else {
        setPatient(data);
      }
    };

    fetchPatient();
  }, [user?.id]);
  // hide tab bar on certain pages
  const hidden =
    pathname.includes("/facility") || pathname.includes("/profile/");

  if (hidden) return null;

  return (
    <nav
      className={clsx(
        "fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white shadow-sm md:hidden",
        "flex h-16 items-center justify-around px-2 md:h-20",
      )}
    >
      {tabs.map(({ name, href, icon: Icon }) => {
        const isActive = pathname === href || pathname.startsWith(`${href}/`);

        // Special rendering for Profile tab
        if (name === "Profile") {
          return (
            <Link
              key={name}
              href={href}
              className={clsx(
                "flex flex-col items-center justify-center gap-1 text-xs font-medium transition",
                isActive
                  ? "text-green-600"
                  : "text-gray-500 hover:text-gray-800",
              )}
            >
              {patient?.user?.avatar_url ? (
                <Image
                  src={patient?.user.avatar_url}
                  alt="Profile"
                  width={28}
                  height={28}
                  className={clsx(
                    "rounded-full border object-cover",
                    isActive ? "border-green-600" : "border-gray-300",
                  )}
                />
              ) : (
                <UserCircle
                  className={clsx(
                    "h-6 w-6 transition-transform",
                    isActive && "scale-110",
                  )}
                />
              )}
              <span>{name}</span>
            </Link>
          );
        }

        // Default tab rendering
        return (
          <Link
            key={name}
            href={href}
            className={clsx(
              "flex flex-col items-center justify-center gap-1 text-xs font-medium transition",
              isActive ? "text-green-600" : "text-gray-500 hover:text-gray-800",
            )}
          >
            <Icon
              className={clsx(
                "h-6 w-6 transition-transform",
                isActive && "scale-110",
              )}
            />
            <span>{name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
