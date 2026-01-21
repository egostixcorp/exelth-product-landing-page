// "use client";
import LogoType from "@/components/Global/logo-type";
import ProviderNav from "@/components/Global/ProviderNav";
import UserHeaderAvatar from "@/components/App/Avatar/UserHeaderAvatar";
import NavHeader from "@/components/App/Global/NavHeader";
import SearchHeader from "@/components/App/Global/SearchHeader";
import PatientSearchBar from "@/components/App/Global/PatientSearchBar";
import React from "react";
import Link from "next/link";
import ServiceGridAction from "./ServiceGridAction";

const Header = () => {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-neutral-50 shadow">
        <div className="mx-auto max-w-7xl space-y-4 px-6 py-4">
          {/* Top Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/search">
                <LogoType />
              </Link>
              <ProviderNav />
            </div>

            <div className="hidden tablet:block">
              <UserHeaderAvatar />
            </div>
          </div>

          {/* Service Grid */}
          <ServiceGridAction />

          {/* Search */}
          <SearchHeader />
        </div>
      </header>

      {/* Header spacer */}
      <div className="h-[220px]" />
    </>
  );
};

export default Header;
