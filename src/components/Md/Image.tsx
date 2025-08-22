"use client";

import React from "react";
import NextImage from "next/image";

type ImageProps = {
  src: string;
  alt: string;
  caption?: string;
};

export function Image({ src, alt, caption }: ImageProps) {
  return (
    <figure className="my-6 flex flex-col items-center">
      <NextImage
        src={src}
        alt={alt}
        width={800}
        height={500}
        className="rounded-lg shadow-md"
      />
      {caption && (
        <figcaption className="mt-2 text-sm text-gray-600">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
