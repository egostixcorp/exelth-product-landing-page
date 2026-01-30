import React from "react";
// import { navigation } from "@/data/navigation";
import MobileNav from "@/components/Global/MobileNav";
import DesktopNav from "@/components/Global/DesktopNav";
// import WaitlistModel from "@/components/Waitlist/WaitlistModel";
import LogoType from "@/components/Global/logo-type";
import Link from "next/link";
import Icon from "./Icon";
import { Button } from "../ui/button";
const Header = () => {
  return (
    <div className="site-header fixed right-0 top-0 z-[99] flex h-16 w-full items-center justify-center bg-white shadow-sm">
      <div className="redd relative flex h-full w-full items-center justify-between p-1 px-[5%] laptop:px-[15%]">
        <div id="logo">
          <Link href={"/"}>
            <LogoType />
          </Link>
        </div>
        <div
          id="menu-desktop"
          className="hidden items-center justify-center gap-2 tablet:flex"
        >
          <DesktopNav />

          <Link href={"/login"}>
            <Button variant={"outline"}>Log in</Button>
          </Link>
          <Link href={"/signup"}>
            <Button variant={"exelth"}>Sign up</Button>
          </Link>
        </div>
        <div
          id="menu-mobile"
          className="redd flex items-center justify-center gap-2 tablet:hidden"
        >
          <Link href={"/signup"}>
            <Button variant={"exelth"}>Sign up</Button>
          </Link>
          <MobileNav>
            <Icon.Menu />
          </MobileNav>
        </div>
      </div>
    </div>
  );
};

export default Header;
