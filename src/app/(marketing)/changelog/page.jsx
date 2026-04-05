import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { Suspense } from "react";
import Container from "@/components/Layouts/container-wrapper";
import ChangelogTabs from "@/components/Layouts/changelog-tabs";
import { Instrument_Serif } from "next/font/google";

export const metadata = {
  title: "Changelog",
};

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const PRODUCT_META = {
  "infra-platform": {
    label: "Infra Platform",
    dot: "bg-blue-500",
    badge:
      "bg-blue-50 text-blue-600 ring-1 ring-blue-200 dark:bg-blue-950/50 dark:text-blue-300 dark:ring-blue-800",
  },
  "care-app": {
    label: "Care App",
    dot: "bg-[#2ab95a]",
    badge:
      "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:ring-emerald-800",
  },
};

const TAG_COLORS = {
  billing:
    "bg-violet-50 text-violet-600 ring-violet-200 dark:bg-violet-950/50 dark:text-violet-300 dark:ring-violet-800",
  security:
    "bg-red-50 text-red-600 ring-red-200 dark:bg-red-950/50 dark:text-red-300 dark:ring-red-800",
  feature:
    "bg-sky-50 text-sky-600 ring-sky-200 dark:bg-sky-950/50 dark:text-sky-300 dark:ring-sky-800",
  improvement:
    "bg-amber-50 text-amber-600 ring-amber-200 dark:bg-amber-950/50 dark:text-amber-300 dark:ring-amber-800",
  fix: "bg-rose-50 text-rose-600 ring-rose-200 dark:bg-rose-950/50 dark:text-rose-300 dark:ring-rose-800",
  infrastructure:
    "bg-slate-100 text-slate-600 ring-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:ring-slate-700",
  dx: "bg-slate-100 text-slate-600 ring-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:ring-slate-700",
  prescriptions:
    "bg-green-50 text-green-700 ring-green-200 dark:bg-green-950/50 dark:text-green-300 dark:ring-green-800",
  payments:
    "bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:ring-emerald-800",
  settings:
    "bg-slate-100 text-slate-600 ring-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:ring-slate-700",
  workflow:
    "bg-purple-50 text-purple-600 ring-purple-200 dark:bg-purple-950/50 dark:text-purple-300 dark:ring-purple-800",
  integrations:
    "bg-cyan-50 text-cyan-700 ring-cyan-200 dark:bg-cyan-950/50 dark:text-cyan-300 dark:ring-cyan-800",
  whatsapp:
    "bg-green-50 text-green-700 ring-green-200 dark:bg-green-950/50 dark:text-green-300 dark:ring-green-800",
  inbox:
    "bg-sky-50 text-sky-600 ring-sky-200 dark:bg-sky-950/50 dark:text-sky-300 dark:ring-sky-800",
  ai: "bg-indigo-50 text-indigo-600 ring-indigo-200 dark:bg-indigo-950/50 dark:text-indigo-300 dark:ring-indigo-800",
  analytics:
    "bg-orange-50 text-orange-600 ring-orange-200 dark:bg-orange-950/50 dark:text-orange-300 dark:ring-orange-800",
  labs: "bg-teal-50 text-teal-700 ring-teal-200 dark:bg-teal-950/50 dark:text-teal-300 dark:ring-teal-800",
};

const DEFAULT_TAG =
  "bg-neutral-100 text-neutral-600 ring-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:ring-neutral-700";

async function getEntries(productFilter) {
  const dir = path.join(process.cwd(), "src/changelog");
  const files = await fs.readdir(dir);

  const entries = await Promise.all(
    files
      .filter((f) => f.endsWith(".mdx"))
      .map(async (filename) => {
        const filePath = path.join(dir, filename);
        const source = await fs.readFile(filePath, "utf-8");
        const { content, frontmatter } = await compileMDX({
          source,
          options: { parseFrontmatter: true },
        });
        return { slug: filename.replace(".mdx", ""), content, ...frontmatter };
      }),
  );

  const sorted = entries.sort((a, b) => new Date(b.date) - new Date(a.date));
  if (productFilter && productFilter !== "all") {
    return sorted.filter((e) => e.product === productFilter);
  }
  return sorted;
}

const ChangelogPage = async ({ searchParams }) => {
  const product = searchParams?.product || "all";
  const entries = await getEntries(product);

  return (
    <div className="min-h-screen w-full antialiased">
      {/* Header */}
      <div className="border-b border-neutral-100 pb-10 pt-28 dark:border-neutral-900">
        <Container>
          <div className="flex w-full flex-col gap-5 laptop:flex-row laptop:items-end laptop:justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                Product Updates
              </p>
              <h1
                className={`text-5xl leading-none text-neutral-900 dark:text-white laptop:text-6xl desktop:text-7xl`}
                style={{ textWrap: "balance" }}
              >
                Changelog
              </h1>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                Everything we&apos;ve shipped for Exelth Infra Platform and Care
                App.
              </p>
            </div>

            <Suspense>
              <ChangelogTabs />
            </Suspense>
          </div>
        </Container>
      </div>

      {/* Entries */}
      <Container className="py-0">
        {entries.length === 0 ? (
          <div className="flex h-64 items-center justify-center">
            <p className="text-sm text-neutral-400">
              No entries for this product yet.
            </p>
          </div>
        ) : (
          <div className="relative w-full">
            {/* Timeline line — desktop only */}
            <div className="absolute left-[152px] top-0 hidden h-full w-px bg-neutral-100 dark:bg-neutral-900 laptop:block" />

            {entries.map((entry, index) => (
              <ChangelogEntry
                key={entry.slug}
                entry={entry}
                index={index}
                isLast={index === entries.length - 1}
              />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default ChangelogPage;

function ChangelogEntry({ entry, index, isLast }) {
  const { title, date, product, tags = [], summary, content } = entry;
  const meta = PRODUCT_META[product] ?? PRODUCT_META["care-app"];

  const formatted = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // Cap stagger at 7 so long lists don't feel slow (40ms × 7 = 280ms max)
  const delay = `${Math.min(index, 7) * 40}ms`;

  return (
    <div className="animate-fade-up" style={{ animationDelay: delay }}>
      <div
        className={`flex gap-0 py-10 ${!isLast ? "border-b border-neutral-100 dark:border-neutral-900" : ""}`}
      >
        {/* Left column — desktop metadata */}
        <div className="relative hidden w-[152px] shrink-0 flex-col items-end gap-2 pr-8 pt-0.5 laptop:flex">
          <time className="font-mono text-[11px] tabular-nums text-neutral-400 dark:text-neutral-500">
            {formatted}
          </time>
          <span
            className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ring-1 ${meta.badge}`}
          >
            {meta.label}
          </span>

          {/* Timeline dot */}
          <div
            className={`absolute -right-[4.5px] top-1 h-2.5 w-2.5 rounded-full ring-2 ring-white dark:ring-black ${meta.dot}`}
          />
        </div>

        {/* Right column — content */}
        <div className="flex flex-1 flex-col gap-3 laptop:pl-8">
          {/* Mobile: date + badge */}
          <div className="flex flex-wrap items-center gap-2 laptop:hidden">
            <time className="font-mono text-[11px] tabular-nums text-neutral-400 dark:text-neutral-500">
              {formatted}
            </time>
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ring-1 ${meta.badge}`}
            >
              {meta.label}
            </span>
          </div>

          {/* Title */}
          <h2
            className={`text-2xl leading-snug text-neutral-900 dark:text-white laptop:text-[26px]`}
            style={{ textWrap: "balance" }}
          >
            {title}
          </h2>

          {/* Summary */}
          <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
            {summary}
          </p>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide ring-1 ${
                    TAG_COLORS[tag.toLowerCase()] ?? DEFAULT_TAG
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* MDX content */}
          <div
            className={`prose prose-sm prose-p:text-neutral-700 prose-p:leading-relaxed prose-li:text-neutral-700 prose-li:leading-relaxed prose-strong:text-neutral-900 prose-strong:font-semibold prose-ul:my-0 prose-ul:space-y-1.5 prose-ul:pl-4 dark:prose-p:text-neutral-300 dark:prose-li:text-neutral-300 dark:prose-strong:text-white max-w-none marker:text-neutral-400`}
          >
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}
