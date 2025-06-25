import Container from "@/components/Layouts/container-wrapper";
import React from "react";
import BlogCard from "@/components/Cards/blog-card";
import { ExelthBlogs } from "@/data/blogs";
import { TooltipProvider } from "@/components/ui/tooltip";
export const metadata = {
  title: "Blog",
};
const BlogListsPage = () => {
  return (
    <TooltipProvider>
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
            {ExelthBlogs.length > 0 ? (
              ExelthBlogs.map((data, i) => <BlogCard key={i} data={data} />)
            ) : (
              <BlogCardSoon />
            )}

            {/* <p>Writing please wait</p> */}
          </div>
        </Container>
      </div>
    </TooltipProvider>
  );
};

export default BlogListsPage;
function BlogCardSoon() {
  return (
    <div className="flex h-72 w-96 flex-col items-center justify-between gap-4 rounded-md border p-2">
      <div
        id="thumbnail"
        className="redd flex h-48 w-full animate-pulse items-center justify-center overflow-hidden rounded-md border bg-neutral-200 p-2"
      >
        {/* <Image src={thumbnail} alt={title} width={500} height={500} /> */}
        Coming soon
      </div>
      <div
        id="title"
        className="h-10 w-full animate-pulse rounded-md bg-neutral-200 text-lg font-semibold"
      >
        {/* {title} */}
      </div>
      <div id="info" className="flex w-full items-center gap-2">
        <span className="h-6 w-full animate-pulse rounded-md bg-neutral-200">
          {/* {writer} */}
        </span>
        <span className="h-6 w-full animate-pulse rounded-md bg-neutral-200">
          {/* {format(publishDate, "PP")} */}
        </span>
      </div>
    </div>
  );
}
