"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

// Navigation Data
const productItems = [
  {
    title: "Exelth Infrastructure Platform",
    href: "/product/exelth-infrastructure-platform",
    description:
      "Streamline operations, staff coordination, and patient workflows with real-time data and automation.",
  },
  {
    title: "Exelth Care App",
    href: "/product/exelth-care-app",
    description:
      "Empower patients with real-time updates, appointment booking, and transparent billing.",
  },
];

const featureItems = [
  {
    title: "Facility Profile & Online Booking",
    // href: "/features/visibility-booking",
    href: "/features/",
    description:
      "Public Exelth profiles that let patients discover, and book clinics directly.",
  },
  {
    title: "Operational Visit Management",
    // href: "/features/visit-management",
    href: "/features/",
    description:
      "Run daily clinic and hospital operations with visit-based workflows and role control.",
  },
  {
    title: "Live Patient Flow & Queue Control",
    // href: "/features/patient-flow",
    href: "/features/",
    description:
      "Track patient status in real time and manage queues to reduce waiting time.",
  },
  {
    title: "Billing, Clinical Records & Analytics",
    // href: "/features/revenue-clinical-analytics",
    href: "/features/",
    description:
      "Visit-linked billing, prescriptions, reports, and performance insights in one system.",
  },
];

const solutionItems = [
  {
    title: "Online Visibility & Patient Acquisition",
    href: "/solutions/visibility",
    description:
      "Get discovered by patients with a trusted Exelth profile that drives direct bookings.",
  },
  {
    title: "Clinic & Hospital Operations",
    href: "/solutions/operations",
    description:
      "Run day-to-day operations with real-time control over staff, departments, and visits.",
  },
  {
    title: "Patient Flow & Experience",
    href: "/solutions/patient-flow",
    description:
      "Reduce wait times and improve patient experience with live visit tracking.",
  },
  {
    title: "Revenue, Clinical & Analytics Suite",
    href: "/solutions/revenue-clinical-analytics",
    description:
      "Billing, prescriptions, reports, and performance analytics — all tied to visits.",
  },
];

// Navigation Component
const DesktopNav = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Product */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link href={"/product"}>Products</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 grid-cols-2 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-bg-green-50 to-bg-white line-clamp-2 flex h-full w-full select-none flex-col justify-end rounded-md bg-green-50 bg-gradient-to-b p-6 no-underline outline-none"
                    href="/product"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-2xl font-bold text-green-500">
                      Exelth Products
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Streamline Health Care Infrastructure with a Centralized
                      Real-Time Platform
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {productItems.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
            {/* <div className="red w-full px-3">changelog</div> */}
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Solutions */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-3 gap-3 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]p">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-bg-green-50 to-bg-white flex h-full w-full select-none flex-col justify-end rounded-md bg-green-50 bg-gradient-to-b p-6 no-underline outline-none"
                    href="/solutions"
                  >
                    <div className="mb-2 mt-4 text-2xl font-bold text-green-500">
                      Exelth Solutions
                    </div>
                    <p className="text-sm leading-snug text-muted-foreground line-clamp-2">
                      Solve real clinic and hospital problems — from patient
                      discovery to daily operations, visit flow, and revenue
                      clarity.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>

              {solutionItems.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* About */}
        <NavigationMenuItem>
          <Link href="/about" passHref legacyBehavior>
            <NavigationMenuLink className="px-4 py-2 text-sm font-medium">
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* Features */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-2 gap-3 p-4 md:w-[500px] lg:w-[600px]">
              {featureItems.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Blog */}
        <NavigationMenuItem>
          <Link href="/blog" passHref legacyBehavior>
            <NavigationMenuLink className="px-4 py-2 text-sm font-medium">
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Pricing */}
        <NavigationMenuItem>
          <Link href="/pricing" passHref legacyBehavior>
            <NavigationMenuLink className="px-4 py-2 text-sm font-medium">
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopNav;

// ListItem Component
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
