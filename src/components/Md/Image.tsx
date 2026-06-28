"use client";

import React, { useState } from "react";
import { ImageIcon, HelpCircle } from "lucide-react";

type ImageProps = {
  src: string;
  alt: string;
  caption?: string;
};

export function Image({ src, alt, caption }: ImageProps) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const showPlaceholder = error || !loaded;

  return (
    <figure className="my-6 flex flex-col items-center w-full">
      {/* Real Image (hidden until loaded successfully) */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`rounded-2xl border border-slate-100 shadow-md max-h-[480px] w-full object-contain bg-white ${
          showPlaceholder ? "hidden" : "block"
        }`}
      />

      {/* Placeholder Card (rendered if there's an error or if not loaded yet) */}
      {showPlaceholder && (
        <div className="flex flex-col items-center justify-center gap-3 w-full max-w-2xl min-h-[200px] rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50 p-6 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-slate-150 text-slate-400 shadow-sm">
            <ImageIcon className="h-6 w-6" />
          </span>
          <div className="space-y-1">
            <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Documentation Screenshot Placeholder</h5>
            <p className="text-sm font-bold text-slate-700">{alt}</p>
          </div>
          {caption && (
            <div className="flex items-start gap-2 rounded-xl bg-green-50/30 border border-green-100/40 p-3 max-w-lg text-left text-xs text-green-700">
              <HelpCircle className="h-4 w-4 shrink-0 mt-0.5 text-green-600" />
              <span>{caption}</span>
            </div>
          )}
        </div>
      )}

      {/* Caption for the real image when displayed */}
      {!showPlaceholder && caption && (
        <figcaption className="mt-2 text-xs font-semibold text-slate-500 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
