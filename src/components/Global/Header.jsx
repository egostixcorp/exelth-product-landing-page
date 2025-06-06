import React from "react";
import { navigation } from "@/data/navigation";
import MobileNav from "@/components/Global/MobileNav";
import DesktopNav from "@/components/Global/DesktopNav";
import WaitlistModel from "@/components/Waitlist/WaitlistModel";
import Link from "next/link";
import Icon from "./Icon";
import { Button } from "../ui/button";
const Header = () => {
  return (
    <div className="fixed right-0 top-0 flex h-16 w-full items-center justify-center z-40 shadow-sm bg-white">
      <div className="redd relative flex h-full w-full items-center justify-between p-1 px-[5%] laptop:px-[15%]">
        <div id="logo">
          <Link href={"/"}>
            <h1 className="text-2xl font-extrabold text-green-600">Exelth</h1>
          </Link>
        </div>
        <div
          id="menu-desktop"
          className="hidden items-center justify-center gap-5 tablet:flex"
        >
          {/* {navigation.map((data, i) => {
            return (
              <Link key={i} href={data.route} className="capitalize">
                {data.label}
              </Link>
            );
          })} */}
          <DesktopNav />
          <WaitlistModel>
            <Button variant={"exelth"}>Join Waitlist</Button>
          </WaitlistModel>
        </div>
        <div
          id="menu-mobile"
          className="redd flex items-center justify-center gap-2 tablet:hidden"
        >
          <WaitlistModel>
            <Button variant={"exelth"}>Join Waitlist</Button>
          </WaitlistModel>
          <MobileNav>
            <Icon.Menu />
          </MobileNav>
        </div>
      </div>
    </div>
  );
};

export default Header;
