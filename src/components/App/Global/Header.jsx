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
        <div className="max-w-8xl mx-auto space-y-4 px-8 py-4">
          {/* Top Row */}
          <div className="redd place-items-centerr grid grid-cols-1 place-content-evenly items-center tablet:grid-cols-3">
            <div className="redd flex items-center justify-start gap-4">
              <Link href="/search" className="redd">
                <LogoType />
              </Link>
              <ProviderNav />
            </div>
            {/* Service Grid */}
            <div className="redd flex items-center justify-center">
              <ServiceGridAction />
            </div>
            <div className="hidden tablet:flex tablet:items-center tablet:justify-end">
              <UserHeaderAvatar />
            </div>
          </div>

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
