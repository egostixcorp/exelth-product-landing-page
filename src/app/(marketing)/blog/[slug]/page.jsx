import React from "react";
import { notFound } from "next/navigation";
import { ExelthBlogs } from "@/data/blogs";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
// ✅ Dynamic metadata function
export async function generateMetadata({ params }) {
  const blog = ExelthBlogs.find((it) => it.slug === params.slug);
  if (!blog) return {};
  return {
    title: blog.title,
    description: blog.desc,
  };
}
const Blog = ({ params }) => {
  const blog = ExelthBlogs.find((it) => it.slug === params.slug);

  if (!blog) return notFound();

  return (
    <main className="min-h-screen w-full dark:bg-black dark:text-white">
      <section className="mx-auto max-w-3xl px-4 pb-10 pt-28 text-center">
        {/* Date */}
        <p className="mb-2 text-sm text-gray-400">
          {new Date(blog.publishDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        {/* Title */}
        <h1 className="mb-4 text-4xl font-bold">{blog.title}</h1>

        {/* Description */}
        <p className="mb-6 text-lg dark:text-gray-300">{blog.desc}</p>

        {/* Author */}
        <div className="text-sm font-semibold dark:text-white">
          By {blog.writer}
        </div>
      </section>

      {/* Thumbnail */}
      {blog.thumbnail && (
        <div className="relative mx-auto mb-16 max-w-5xl overflow-hidden rounded-md border px-4">
          <Image
            src={blog.thumbnail}
            alt={blog.title}
            width={1000}
            height={500}
            className="w-full rounded-xl object-cover"
          />
        </div>
      )}

      {/* MDX content placeholder */}
      <section className="prose prose-invert mx-auto max-w-3xl px-4 pb-24">
        {/* Later this can be dynamically replaced with MDX content */}
        <MDXRemote source={blog.body} />
      </section>
    </main>
  );
};

export default Blog;
