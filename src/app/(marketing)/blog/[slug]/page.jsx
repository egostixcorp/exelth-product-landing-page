import React from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import { promises as fs } from "fs";
import path from "path";

// Optional: import your custom MDX components
import { Quote } from "@/components/Md/Quote";
import { Callout } from "@/components/Md/Callout";
import { Highlight } from "@/components/Md/Highlight";
import { Image } from "@/components/Md/Image";
import { Video } from "@/components/Md/Video";
import { notFound } from "next/navigation";
import { ExelthBlogs } from "@/data/blogs";
import NextImage from "next/image";
import BlogBackButton from "@/components/Buttons/blog-back-button";
// import { MDXRemote } from "next-mdx-remote/rsc";
// ✅ Dynamic metadata function
export async function generateMetadata({ params }) {
  const filePath = path.join(
    process.cwd(),
    "src/contents",
    `${params.slug}.mdx`,
  );
  const fileContent = await fs.readFile(filePath, "utf-8");

  const { frontmatter } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    // openGraph: {
    //   title: frontmatter.title,
    //   description: frontmatter.description,
    //   url: `https://yourdomain.com/view/${params.slug}`,
    //   images: [
    //     {
    //       url: frontmatter.image || "/default-og.png",
    //       width: 1200,
    //       height: 630,
    //       alt: frontmatter.title,
    //     },
    //   ],
    // },
    // twitter: {
    //   card: "summary_large_image",
    //   title: frontmatter.title,
    //   description: frontmatter.description,
    //   images: [frontmatter.image || "/default-og.png"],
    // },
  };
}
const Blog = async ({ params }) => {
  const { slug } = params;

  const filePath = path.join(process.cwd(), "src/contents", `${slug}.mdx`);
  const fileContent = await fs.readFile(filePath, "utf-8");

  const { content, frontmatter } = await compileMDX({
    source: fileContent,
    options: {
      parseFrontmatter: true,
    },
    components: {
      Quote,
      Callout,
      Highlight,
      Image,
      Video,
    },
  });

  return (
    <main className="relative min-h-screen w-full dark:bg-black dark:text-white">
      <div className="redd absolute right-0 top-28 mx-auto flex w-full items-center justify-center">
        <div className="redd w-full max-w-5xl">
          <BlogBackButton />
        </div>
      </div>
      <section className="mx-auto max-w-3xl px-4 pb-10 pt-28 text-center">
        {/* Date */}
        <p className="mb-2 text-sm text-gray-400">
          {new Date(frontmatter.publishDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        {/* Title */}
        <h1 className="mb-4 text-4xl font-bold">{frontmatter.title}</h1>

        {/* Description */}
        <p className="mb-6 text-lg dark:text-gray-300">{frontmatter.desc}</p>

        {/* Author */}
        <div className="text-sm font-semibold dark:text-white">
          By {frontmatter.writer}
        </div>
      </section>

      {/* Thumbnail */}
      {frontmatter.thumbnail && (
        <div className="relative mx-auto mb-16 max-w-5xl overflow-hidden rounded-md border px-4">
          <NextImage
            src={frontmatter.thumbnail}
            alt={frontmatter.title}
            width={1000}
            height={500}
            className="w-full rounded-xl object-cover"
          />
        </div>
      )}

      {/* MDX content placeholder */}
      <section className="prose prose-invert mx-auto max-w-3xl space-y-1.5 px-4 pb-24">
        {/* Later this can be dynamically replaced with MDX content */}
        {content}
      </section>
    </main>
  );
};

export default Blog;
