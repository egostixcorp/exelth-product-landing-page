"use client";

import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import LogoType from "../Global/logo-type";

const DocsHeader = ({ onMenuToggle }) => {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-slate-100 bg-white px-4 py-3 shadow-sm sm:px-6">
      <div className="flex items-center gap-3">
        {/* Mobile Hamburger menu */}
        <button
          onClick={onMenuToggle}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 active:bg-slate-200 lg:hidden"
          aria-label="Toggle sidebar"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Logo / Title */}
        <Link href="/docs" className="flex items-center space-x-2">
          <LogoType />
          <span className="hidden h-5 w-px bg-slate-200 sm:inline"></span>
          <span className="hidden text-sm font-semibold text-slate-500 sm:inline uppercase tracking-wider">Docs</span>
        </Link>
      </div>

      {/* Support Link */}
      <Link
        href="/contact"
        className="rounded-lg bg-green-600 px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-green-200 transition-all hover:bg-green-700 hover:shadow active:scale-95 sm:text-sm"
      >
        Contact Support
      </Link>
    </header>
  );
};

export default DocsHeader;
