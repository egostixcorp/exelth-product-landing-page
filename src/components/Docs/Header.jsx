import React from "react";
import Link from "next/link";
import LogoType from "../Global/logo-type";

const DocsHeader = () => {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b bg-white px-6 py-3 shadow-sm">
      {/* Logo / Title */}
      <Link href="/docs" className="flex items-center space-x-2">
        <LogoType />
        {/* <span className="text-xl font-bold text-green-600">Exelth</span> */}
        <span className="hidden text-gray-500 sm:inline">Docs</span>
      </Link>

      {/* Search Bar */}
      {/* <div className="relative w-64">
        <input
          type="text"
          placeholder="Search docs..."
          className="w-full rounded-lg border px-3 py-2 text-sm focus:border-green-500 focus:outline-none"
        />
        <span className="absolute right-3 top-2.5 text-sm text-gray-400">
          ⌘K
        </span>
      </div> */}

      {/* Support Link */}
      <Link
        href="/support"
        className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
      >
        Contact Support
      </Link>
    </header>
  );
};

export default DocsHeader;
