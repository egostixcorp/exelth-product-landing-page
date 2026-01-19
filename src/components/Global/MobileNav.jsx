"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { navigation } from "../../data/navigation";
// import Waitlist from "../Waitlist/Waitlist";
import Link from "next/link";
import { Button } from "../ui/button";
import Icon from "./Icon";
const MobileNav = ({ children }) => {
  const [close, setClose] = useState(false);
  return (
    <Sheet open={close} onOpenChange={setClose}>
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
              <Link
                onClick={() => setClose(false)}
                key={i}
                href={data.route}
                className="capitalize"
              >
                {data.label}
              </Link>
            );
          })}
          <div className="w-full">
            <Link href={"/login"} className="w-full">
              <Button className="w-full" variant={"exelth"}>
                <Icon.UserCircle /> Log in
              </Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
