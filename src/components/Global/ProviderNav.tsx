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

const providerItems = [
  {
    title: "Exelth Platform",
    href: "/product/exelth-infrastructure-platform",
    description:
      "Operate clinics and hospitals with real-time workflows, scheduling, billing, and clinical operations.",
  },
  {
    title: "Free Listing on Exelth",
    href: "/product/exelth-infrastructure-platform",
    description:
      "Get your clinic discovered by patients with a verified profile, bookings, and visibility — free forever.",
  },
];

// Navigation Component
const ProviderNav = () => {
  return (
    <NavigationMenu className="redd">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="redd ml-0.5">
            <span>For Providers</span>
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {/* Left highlight block */}
              <li className="row-span-2">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-green-50 bg-gradient-to-b p-6 no-underline outline-none"
                    href="/product/exelth-infrastructure-platform"
                  >
                    <div className="mb-2 mt-4 text-2xl font-bold text-green-600">
                      For Providers
                    </div>
                    <p className="text-sm leading-snug text-muted-foreground">
                      Everything clinics and hospitals need to operate, grow,
                      and stay compliant.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>

              {/* Provider offerings */}
              {providerItems.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default ProviderNav;

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
