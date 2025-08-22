"use client";

import React from "react";

type QuoteProps = {
  children: React.ReactNode;
  author?: string;
};

export function Quote({ children, author }: QuoteProps) {
  return (
    <blockquote className="my-6 border-l-4 border-green-600 pl-4 italic text-gray-800">
      {children}
      {author && (
        <footer className="mt-2 text-sm text-gray-600">— {author}</footer>
      )}
    </blockquote>
  );
}
