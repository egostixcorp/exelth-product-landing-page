"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  BookOpen, 
  Layers, 
  Users, 
  Cpu, 
  Terminal, 
  Search, 
  FileText,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { docsList } from "@/data/docs";

// Icon mapping dictionary
const iconMap = {
  BookOpen: BookOpen,
  Layers: Layers,
  Users: Users,
  Cpu: Cpu,
  Terminal: Terminal,
};

export default function DocsSidebar({ isOpen, onClose }) {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDocs, setFilteredDocs] = useState(docsList);

  // Filter docs list based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredDocs(docsList);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = docsList.map(category => {
      const matchingPages = category.pages.filter(page => 
        page.name.toLowerCase().includes(query) || 
        page.slug.toLowerCase().includes(query)
      );
      return {
        ...category,
        pages: matchingPages
      };
    }).filter(category => category.pages.length > 0);

    setFilteredDocs(filtered);
  }, [searchQuery]);

  return (
    <aside 
      className={`
        fixed inset-y-0 left-0 z-30 flex w-64 flex-col border-r border-slate-100 bg-white pt-10 transition-transform duration-300 ease-in-out lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:translate-x-0
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      {/* Search Input */}
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search documentation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm placeholder:text-slate-400 focus:border-green-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
      </div>

      {/* Docs Navigation List */}
      <div className="flex-1 overflow-y-auto px-4 pb-6 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
        {filteredDocs.length === 0 ? (
          <div className="py-8 text-center text-sm text-slate-400">
            No pages found for &quot;{searchQuery}&quot;
          </div>
        ) : (
          <nav className="space-y-6">
            {filteredDocs.map((section) => {
              const SectionIcon = iconMap[section.icon] || FileText;
              return (
                <div key={section.title} className="space-y-2">
                  <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    <SectionIcon className="h-3.5 w-3.5 text-slate-400" />
                    <span>{section.title}</span>
                  </h3>
                  <ul className="space-y-1">
                    {section.pages.map((page) => {
                      const href = `/docs/${page.slug}`;
                      const isActive = pathname === href;
                      return (
                        <li key={page.slug}>
                          <Link
                            href={href}
                            onClick={onClose}
                            className={`
                              flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition-all duration-150
                              ${
                                isActive
                                  ? "bg-green-50/80 text-green-600 shadow-sm shadow-green-100/50"
                                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                              }
                            `}
                          >
                            <ChevronRight 
                              className={`h-3 w-3 transition-transform duration-200 ${
                                isActive ? "rotate-90 text-green-500" : "text-slate-400"
                              }`} 
                            />
                            <span className="truncate">{page.name}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </nav>
        )}
      </div>
    </aside>
  );
}
