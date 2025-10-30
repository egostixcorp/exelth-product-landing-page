import LogoType from "@/components/Global/logo-type";
import UserHeaderAvatar from "@/components/App/Avatar/UserHeaderAvatar";
import NavHeader from "@/components/App/Global/NavHeader";
import SearchHeader from "@/components/App/Global/SearchHeader";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="redd sticky right-0 top-0 z-50 flex h-auto w-full flex-col items-center justify-center gap-5 bg-neutral-50 px-10 py-5 shadow transition-all duration-500">
      <div className="redd hidden w-full items-center justify-between md:flex">
        <Link href={"/search"}>
          <LogoType />
        </Link>
        <SearchHeader />
        <UserHeaderAvatar />
      </div>
      {/* <div className="redd flex h-14 w-full items-center justify-center">
        <SearchHeader />
      </div> */}
    </div>
  );
};

export default Header;
