"use client";

import React from "react";

type HighlightProps = {
  children: React.ReactNode;
};

export function Highlight({ children }: HighlightProps) {
  return (
    <span className="rounded-md bg-yellow-200 px-1 py-0.5 font-semibold text-gray-900">
      {children}
    </span>
  );
}
