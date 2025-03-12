import React from "react";
import { navigation } from "@/data/navigation";
import Link from "next/link";
const Header = () => {
  return (
    <div className="fixed right-0 top-0 flex h-16 w-full items-center justify-center">
      <div className="redd container relative flex h-full items-center justify-between bg-white p-1 px-[15%]">
        <div id="logo">
          <Link href={"/"}>
            <h1 className="text-2xl font-extrabold text-green-600">Exelth</h1>
          </Link>
        </div>
        <div
          id="menu-desktop"
          className="tablet:flex hidden items-center justify-center gap-5"
        >
          {navigation.map((data, i) => {
            return (
              <Link key={i} href={data.route} className="capitalize">
                {data.label}
              </Link>
            );
          })}
        </div>
        <div id="menu-mobile" className="tablet:hidden block">
        
        </div>
      </div>
    </div>
  );
};

export default Header;
