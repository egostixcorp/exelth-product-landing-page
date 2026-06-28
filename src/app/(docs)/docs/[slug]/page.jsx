import React from "react";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";


import { docsList } from "@/data/docs";
import Mermaid, {
  ClinicLifecycleTimelineUI,
  MarketingSetupStepperUI,
  SidebarNavigationMockupUI,
  PatientCareWorkflowUI
} from "@/components/Md/Mermaid";
import CodeBlock, {
  DirectoryExplorer,
  SpecimenTrackerUI,
  ArchitectureVisualizer
} from "@/components/Md/CodeBlock";
import { Callout } from "@/components/Md/Callout";
import { Highlight } from "@/components/Md/Highlight";
import { Quote } from "@/components/Md/Quote";
import { Image } from "@/components/Md/Image";

// Helper to look up a page by slug
const getDocPage = (slug) => {
  for (const category of docsList) {
    const page = category.pages.find((p) => p.slug === slug);
    if (page) return { page, category };
  }
  return null;
};

// Generate static params for Next.js to pre-render routes if needed
export async function generateStaticParams() {
  return docsList.flatMap((category) =>
    category.pages.map((page) => ({
      slug: page.slug,
    }))
  );
}

// Generate metadata for the document page
export async function generateMetadata({ params }) {
  const result = getDocPage(params.slug);
  if (!result) return { title: "Not Found" };
  return {
    title: `${result.page.name} | Exelth Docs`,
    description: `Read the Exelth documentation guide for ${result.page.name} under the ${result.category.title} module.`,
  };
}

export default async function DocSlugPage({ params }) {
  const result = getDocPage(params.slug);

  if (!result) {
    notFound();
  }

  const { page, category } = result;
  const docsDirectory = path.join(process.cwd(), "docs");
  const filePath = path.join(docsDirectory, page.file);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  // Read and parse markdown content
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  // Flattened pages list for previous/next pagination
  const allPages = docsList.flatMap((cat) => cat.pages);
  const currentIndex = allPages.findIndex((p) => p.slug === page.slug);
  const prevPage = currentIndex > 0 ? allPages[currentIndex - 1] : null;
  const nextPage = currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null;

  // Custom components to override default MDX rendering
  const mdxComponents = {
    h1: (props) => (
      <h1 className="mt-8 mb-4 text-3xl font-extrabold tracking-tight text-slate-900 border-b border-slate-100 pb-2 first:mt-0" {...props} />
    ),
    h2: (props) => (
      <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-slate-800 border-b border-slate-50 pb-1" {...props} />
    ),
    h3: (props) => (
      <h3 className="mt-6 mb-3 text-xl font-bold tracking-tight text-slate-800" {...props} />
    ),
    h4: (props) => (
      <h4 className="mt-4 mb-2 text-lg font-semibold tracking-tight text-slate-850" {...props} />
    ),
    p: (props) => (
      <p className="my-4 text-base leading-relaxed text-slate-650" {...props} />
    ),
    ul: (props) => (
      <ul className="my-4 ml-6 list-disc space-y-2 text-slate-650" {...props} />
    ),
    ol: (props) => (
      <ol className="my-4 ml-6 list-decimal space-y-2 text-slate-650" {...props} />
    ),
    li: (props) => (
      <li className="text-base leading-relaxed" {...props} />
    ),
    a: ({ href, ...props }) => {
      // Clean up local system/file urls if they are in the reference docs
      const isFileUrl = href && href.startsWith("file:///");
      const cleanHref = isFileUrl ? "#" : href;
      return (
        <a
          href={cleanHref}
          className="font-medium text-green-600 underline underline-offset-4 decoration-green-500/35 hover:text-green-700 transition-colors"
          {...props}
        />
      );
    },
    blockquote: (props) => (
      <blockquote className="my-6 border-l-4 border-green-500 bg-green-50/20 px-4 py-3 italic text-slate-700 rounded-r-lg" {...props} />
    ),
    code: (props) => {
      return (
        <code className="rounded-md bg-slate-100 px-1.5 py-0.5 font-mono text-xs font-semibold text-slate-800 border border-slate-200/40" {...props} />
      );
    },
    pre: (props) => {
      const childrenArray = React.Children.toArray(props.children);
      const codeElement = childrenArray.find(
        (child) => React.isValidElement(child) && child.type === "code"
      );

      if (codeElement) {
        const codeContent = codeElement.props.children;
        const className = codeElement.props.className || "";
        const matches = className.match(/language-(.*)/);
        const language = matches ? matches[1] : "";
        
        let codeText = "";
        if (typeof codeContent === "string") {
          codeText = codeContent;
        } else if (Array.isArray(codeContent)) {
          codeText = codeContent.join("");
        } else if (codeContent && typeof codeContent === "object") {
          codeText = codeContent.toString();
        }

        if (language === "mermaid") {
          return <Mermaid chart={codeText.trim()} />;
        }

        return <CodeBlock code={codeText.trim()} language={language} />;
      }

      return (
        <div className="not-prose">
          <pre className="my-6 overflow-x-auto rounded-lg bg-slate-900 p-4 font-mono text-sm text-slate-200">
            <code>{props.children}</code>
          </pre>
        </div>
      );
    },
    hr: (props) => <hr className="my-8 border-slate-150" {...props} />,
    table: (props) => (
      <div className="my-6 w-full overflow-x-auto border border-slate-150 rounded-xl shadow-xs bg-white">
        <table className="w-full text-left border-collapse text-sm" {...props} />
      </div>
    ),
    thead: (props) => <thead className="bg-slate-50 border-b border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-500" {...props} />,
    tbody: (props) => <tbody className="divide-y divide-slate-100" {...props} />,
    tr: (props) => <tr className="hover:bg-slate-50/30 transition-colors" {...props} />,
    th: (props) => <th className="px-4 py-3 font-semibold text-slate-700" {...props} />,
    td: (props) => <td className="px-4 py-3 text-slate-650" {...props} />,
    Callout,
    Highlight,
    Quote,
    Image,
    ClinicLifecycleTimeline: ClinicLifecycleTimelineUI,
    MarketingSetupStepper: MarketingSetupStepperUI,
    SidebarNavigationMockup: SidebarNavigationMockupUI,
    PatientCareWorkflow: PatientCareWorkflowUI,
    DirectoryExplorer,
    ArchitectureVisualizer,
    SpecimenTracker: SpecimenTrackerUI,
  };

  return (
    <article className="space-y-8">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
        <Link href="/docs" className="hover:text-slate-600 transition-colors">
          Docs
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span>{category.title}</span>
        <ChevronRight className="h-3 w-3" />
        <span className="text-slate-600">{page.name}</span>
      </div>

      {/* Render Markdown using RSC next-mdx-remote */}
      <div className="prose prose-slate max-w-none prose-headings:font-bold prose-a:text-green-600 dark:prose-invert">
        <MDXRemote 
          source={content} 
          components={mdxComponents} 
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </div>

      {/* Pagination Footer */}
      <div className="mt-12 flex flex-col gap-4 border-t border-slate-100 pt-8 sm:flex-row sm:justify-between">
        {prevPage ? (
          <Link
            href={`/docs/${prevPage.slug}`}
            className="group flex flex-1 flex-col items-start gap-1 rounded-xl border border-slate-100 bg-white p-4 text-left shadow-xs transition-all hover:border-green-500/20 hover:shadow-sm hover:shadow-green-50/50 active:scale-98"
          >
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400">
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              <span>Previous</span>
            </span>
            <span className="font-bold text-slate-700 group-hover:text-green-600 transition-colors truncate max-w-[280px]">
              {prevPage.name}
            </span>
          </Link>
        ) : (
          <div className="hidden flex-1 sm:block" />
        )}

        {nextPage ? (
          <Link
            href={`/docs/${nextPage.slug}`}
            className="group flex flex-1 flex-col items-end gap-1 rounded-xl border border-slate-100 bg-white p-4 text-right shadow-xs transition-all hover:border-green-500/20 hover:shadow-sm hover:shadow-green-50/50 active:scale-98"
          >
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400">
              <span>Next</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="font-bold text-slate-700 group-hover:text-green-600 transition-colors truncate max-w-[280px]">
              {nextPage.name}
            </span>
          </Link>
        ) : (
          <div className="hidden flex-1 sm:block" />
        )}
      </div>
    </article>
  );
}
