import Container from "@/components/Layouts/container-wrapper";
import React from "react";
import BlogCard from "@/components/Cards/blog-card";
import { ExelthBlogs } from "@/data/blogs";
export const metadata = {
  title: "Blog",
};
const BlogListsPage = () => {
  return (
    <div className="redd mt-24 flex h-screen w-full flex-col items-center justify-center">
      <Container>
        <div
          id="header"
          className="w-full text-2xl font-semibold laptop:text-3xl desktop:text-5xl"
        >
          Blog
        </div>
        <div
          id="grid"
          className="redd grid h-full w-full gap-5 desktop:grid-cols-3"
        >
          {ExelthBlogs.map((data, i) => {
            return <BlogCard key={i} data={data} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default BlogListsPage;
