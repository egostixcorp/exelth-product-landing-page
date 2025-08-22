"use client";

import React from "react";

type VideoProps = {
  src: string;
  title?: string;
};

export function Video({ src, title }: VideoProps) {
  return (
    <div className="my-6 overflow-hidden rounded-lg shadow-md">
      <video src={src} title={title} controls className="w-full rounded-lg" />
    </div>
  );
}
