"use client";

import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Menu } from "lucide-react";
import Link from "next/link";
import { MdHomeFilled, MdLocalHospital } from "react-icons/md";
import { RiLayoutMasonryFill, RiInboxFill } from "react-icons/ri";
import { FaCircleUser } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import LoginDialog from "./LoginDialog";
import Image from "next/image";

const NavPopover = () => {
  const { signOut, user } = useAuth();
  const mainNav = [
    { label: "Home", href: "/patient", icon: <MdHomeFilled size={18} /> },
    {
      label: "Activities",
      href: "/activities",
      icon: <RiLayoutMasonryFill size={18} />,
    },
    { label: "Inbox", href: "/inbox", icon: <RiInboxFill size={18} /> },
    { label: "Profile", href: "/profile", icon: <FaCircleUser size={18} /> },
  ];

  const secondaryNav = [
    { label: "Account settings", href: "/settings" },
    { label: "Help Centre", href: "#" },
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-neutral-100 hover:bg-neutral-200"
        >
          <Menu size={20} />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        className={cn(
          "w-80 rounded-2xl border border-gray-100 bg-white p-2 shadow-xl",
          "flex flex-col",
        )}
      >
        {/* --- Main Nav --- */}
        {user ? (
          <div className="flex flex-col gap-1 border-b border-gray-200 pb-2">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-50"
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        ) : null}
        {/* <div className="flex flex-col gap-1 border-b border-gray-200 pb-2">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-50"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div> */}

        {/* --- Secondary Nav --- */}
        {user ? (
          <div className="mt-1 flex flex-col gap-1 border-b border-gray-200 py-2">
            {secondaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-50"
              >
                {item.label}
              </Link>
            ))}
          </div>
        ) : null}

        {/* --- Facility Section --- */}
        <div className="group mt-1 flex flex-col gap-1 border-b border-gray-200 py-2">
          <Link
            // href="/b2b/register"
            href="https://app.exelth.com/"
            className="flex gap-0.5 rounded-md px-3 py-2 transition hover:bg-gray-50"
          >
            <div className="flex flex-col">
              <span className="flex items-center gap-1 text-sm font-medium text-gray-900 transition-all duration-500 group-hover:text-green-600">
                List your clinic or hospital
              </span>

              <span className="text-xs text-gray-500">
                Join Exelth to connect with patients and grow your healthcare
                presence.
              </span>
            </div>
            <div className="redd flex h-20 w-52 items-center justify-center overflow-hidden">
              <Image
                src={"/icon/d-p.png"}
                alt=""
                className="size-full object-cover transition-all duration-500 group-hover:scale-110"
                width={500}
                height={500}
              />
            </div>
          </Link>

          <Link
            // href="/b2b/refer"
            href="#"
            className="rounded-md px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-50"
          >
            Refer a healthcare centre
          </Link>

          <Link
            // href="/b2b/partner"
            href="#"
            className="rounded-md px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-50"
          >
            Become a partner
          </Link>
        </div>

        {/* --- Logout --- */}
        {user ? (
          <button
            onClick={() => signOut()}
            className="mt-1 rounded-md px-3 py-2 text-left text-sm text-gray-700 transition hover:bg-gray-50 hover:text-red-600"
          >
            Log out
          </button>
        ) : (
          // <div className="flex items-center justify-end p-4">
          <LoginDialog triggerLabel="Login / Signup" />
          // </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default NavPopover;
