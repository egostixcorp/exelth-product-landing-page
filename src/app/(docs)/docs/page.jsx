import React from "react";
import Link from "next/link";
import { 
  BookOpen, 
  Layers, 
  Users, 
  Cpu, 
  Terminal, 
  ArrowRight,
  ArrowUpRight
} from "lucide-react";
import { docsList } from "@/data/docs";

export const metadata = {
  title: "Documentation Hub | Exelth",
  description: "Exelth B2B Clinic Management Platform developer guides, feature manuals, and API setup guidelines.",
};

const iconMap = {
  BookOpen: BookOpen,
  Layers: Layers,
  Users: Users,
  Cpu: Cpu,
  Terminal: Terminal,
};

const colorClasses = {
  BookOpen: "bg-blue-50 text-blue-600 border-blue-100",
  Layers: "bg-emerald-50 text-emerald-600 border-emerald-100",
  Users: "bg-indigo-50 text-indigo-600 border-indigo-100",
  Cpu: "bg-purple-50 text-purple-600 border-purple-100",
  Terminal: "bg-amber-50 text-amber-600 border-amber-100",
};

export default function DocPage() {
  return (
    <div className="space-y-10 py-4">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-transparent p-6 sm:p-8 md:p-10 border border-green-500/10">
        <div className="absolute right-0 top-0 -mr-6 -mt-6 h-36 w-36 rounded-full bg-green-400/10 blur-2xl"></div>
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Developer & Operator Hub</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Exelth Documentation
          </h1>
          <p className="text-base leading-relaxed text-slate-600">
            Welcome to the central resource for Exelth Clinic Management System. Explore our modular guides, understand roles and workflows, or look up code architecture details.
          </p>
          <div className="pt-2">
            <Link
              href="/docs/getting-started"
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-green-200 transition-all hover:bg-green-700 hover:shadow active:scale-95"
            >
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Grid of Sections */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold tracking-tight text-slate-900">
          Browse by Category
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {docsList.map((section) => {
            const SectionIcon = iconMap[section.icon] || BookOpen;
            const themeColors = colorClasses[section.icon] || "bg-slate-50 text-slate-600 border-slate-100";
            return (
              <div 
                key={section.title}
                className="group relative flex flex-col justify-between rounded-xl border border-slate-100 bg-white p-5 shadow-xs transition-all duration-300 hover:border-green-500/20 hover:shadow-md hover:shadow-green-50/50"
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-lg border text-lg font-bold ${themeColors}`}>
                      <SectionIcon className="h-5 w-5" />
                    </span>
                    <h3 className="font-bold text-slate-800 group-hover:text-green-600 transition-colors">
                      {section.title}
                    </h3>
                  </div>

                  {/* List of Pages */}
                  <ul className="space-y-2.5 pl-1">
                    {section.pages.slice(0, 4).map((page) => (
                      <li key={page.slug}>
                        <Link
                          href={`/docs/${page.slug}`}
                          className="group/item flex items-center justify-between text-sm text-slate-500 hover:text-slate-900"
                        >
                          <span className="truncate group-hover/item:underline">{page.name}</span>
                          <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover/item:opacity-100 text-slate-400 group-hover/item:text-green-500" />
                        </Link>
                      </li>
                    ))}
                    {section.pages.length > 4 && (
                      <li className="text-xs font-semibold text-slate-400 pl-1 pt-1">
                        + {section.pages.length - 4} more articles
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-50">
                  <Link
                    href={`/docs/${section.pages[0].slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-600 hover:text-green-700 hover:underline"
                  >
                    <span>View all {section.pages.length} articles</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
