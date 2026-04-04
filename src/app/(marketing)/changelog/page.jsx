import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { Suspense } from "react";
import Container from "@/components/Layouts/container-wrapper";
import ChangelogTabs from "@/components/Layouts/changelog-tabs";

export const metadata = {
  title: "Changelog",
};

const PRODUCT_LABELS = {
  "infra-platform": "Infra Platform",
  "care-app": "Care App",
};

const TAG_COLORS = {
  billing: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
  security: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  feature: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  improvement: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  fix: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
  infrastructure: "bg-slate-100 text-slate-700 dark:bg-slate-900/40 dark:text-slate-300",
  dx: "bg-slate-100 text-slate-700 dark:bg-slate-900/40 dark:text-slate-300",
  prescriptions: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  payments: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  settings: "bg-slate-100 text-slate-700 dark:bg-slate-900/40 dark:text-slate-300",
  workflow: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  integrations: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300",
  whatsapp: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  inbox: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300",
  ai: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
  analytics: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  labs: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
};

const DEFAULT_TAG_COLOR =
  "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400";

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
    <div className="min-h-screen w-full pb-24 pt-28">
      <Container>
        <div className="w-full text-2xl font-semibold laptop:text-3xl desktop:text-5xl">
          Changelog
        </div>
        <p className="text-sm text-neutral-500">
          What we&apos;ve shipped across Exelth Infra Platform and Care App.
        </p>

        <Suspense>
          <ChangelogTabs />
        </Suspense>

        {entries.length === 0 ? (
          <p className="mt-12 text-neutral-400">No entries for this product yet.</p>
        ) : (
          <div className="mt-4 w-full">
            {entries.map((entry) => (
              <ChangelogEntry key={entry.slug} entry={entry} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default ChangelogPage;

function ChangelogEntry({ entry }) {
  const { title, date, product, tags = [], summary, content } = entry;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex w-full gap-6 border-b py-10 last:border-b-0 laptop:gap-12">
      {/* Left column — date + product */}
      <div className="hidden w-44 shrink-0 flex-col items-start gap-2 pt-0.5 laptop:flex">
        <span className="text-sm text-neutral-500">{formattedDate}</span>
        <span
          className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
            product === "infra-platform"
              ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
              : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
          }`}
        >
          {PRODUCT_LABELS[product] ?? product}
        </span>
      </div>

      {/* Right column — content */}
      <div className="flex flex-1 flex-col gap-3">
        {/* Mobile: date + product row */}
        <div className="flex items-center gap-2 laptop:hidden">
          <span className="text-xs text-neutral-500">{formattedDate}</span>
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-medium ${
              product === "infra-platform"
                ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
            }`}
          >
            {PRODUCT_LABELS[product] ?? product}
          </span>
        </div>

        <h2 className="text-lg font-semibold leading-snug">{title}</h2>
        <p className="text-sm text-neutral-500">{summary}</p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className={`rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${
                  TAG_COLORS[tag.toLowerCase()] ?? DEFAULT_TAG_COLOR
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* MDX bullet list */}
        <div className="prose prose-sm max-w-none text-neutral-700 dark:prose-invert dark:text-neutral-300 [&_ul]:mt-2 [&_ul]:space-y-1.5 [&_li]:text-sm">
          {content}
        </div>
      </div>
    </div>
  );
}
