import Image from "next/image";
import Link from "next/link";
import React from "react";
import { format } from "date-fns";
const BlogCard = ({ data }) => {
  const { slug, title, desc, publishDate, writer, thumbnail } = data;
  return (
    <Link href={`/blog/${slug}`}>
      <div className="flex h-72 w-96 flex-col items-center justify-between gap-1 rounded-md border p-2">
        <div
          id="thumbnail"
          className="redd h-48 w-full overflow-hidden rounded-md border p-2"
        >
          <Image src={thumbnail} alt={title} width={500} height={500} />
        </div>
        <div id="title" className="w-full text-lg font-semibold">
          {title}
        </div>
        <div id="info" className="flex w-full items-center gap-2">
          <span>{writer}</span>
          <span>{format(publishDate, "PP")}</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
