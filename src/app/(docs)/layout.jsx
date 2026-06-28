"use client";

import React, { useState } from "react";
import DocsHeader from "@/components/Docs/Header";
import DocsSidebar from "@/components/Docs/Sidebar";

export default function DocsLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50/50">
      {/* Header */}
      <DocsHeader onMenuToggle={toggleSidebar} />

      {/* Main Container */}
      <div className="mx-auto flex w-full  flex-1">
        {/* Sidebar */}
        <DocsSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Mobile Sidebar Backdrop Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-20 bg-slate-900/40 backdrop-blur-xs transition-opacity lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Content Area */}
        <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 lg:max-h-[calc(100vh-4rem)] lg:overflow-y-auto">
          <div className="mx-auto max-w-4xl rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-100/50 sm:p-8 md:p-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
