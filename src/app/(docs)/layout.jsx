// app/docs/layout.tsx
import Link from "next/link";
import { docsList } from "@/data/docs";
import DocsHeader from "@/components/Docs/Header";
import DocsPlaceholder from "@/components/Layouts/docs-placeholder";

export default function DocsLayout({ children }) {
  if (process.env.NODE_ENV === "production") {
    return <DocsPlaceholder />;
  }
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <DocsHeader />

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="redd h-screen w-64 space-y-2 border-r bg-gray-50 p-4">
          {/* <h2 className="mb-4 text-lg font-bold">Exelth Docs</h2> */}
          {docsList.map((section) => (
            <div key={section.title}>
              <h3 className="mb-1 text-sm font-semibold text-neutral-800">
                {section.title}
              </h3>
              <ul className="">
                {section.pages.map((page) => (
                  <li key={page.slug}>
                    <Link
                      href={`/docs/${page.slug}`}
                      className="text-sm text-gray-500 hover:underline"
                    >
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
