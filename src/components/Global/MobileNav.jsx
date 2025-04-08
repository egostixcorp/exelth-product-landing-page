import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { navigation } from "../../data/navigation";
import Waitlist from "../Waitlist/Waitlist";
import Link from "next/link";
const MobileNav = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className="z-[9999] w-80">
        <SheetHeader>
          <SheetTitle hidden>Are you absolutely sure?</SheetTitle>
          <SheetDescription hidden>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col items-start justify-center gap-4 text-xl">
          {navigation.map((data, i) => {
            return (
              <Link key={i} href={data.route} className="capitalize">
                {data.label}
              </Link>
            );
          })}
          <div>
            <Waitlist />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
