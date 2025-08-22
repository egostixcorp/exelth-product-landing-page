"use client";

import React from "react";
import { AlertTriangle, Info, CheckCircle2 } from "lucide-react";

type CalloutProps = {
  type?: "info" | "success" | "warning";
  title?: string;
  children: React.ReactNode;
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const icons = {
    info: <Info className="h-5 w-5 text-blue-600" />,
    success: <CheckCircle2 className="h-5 w-5 text-green-600" />,
    warning: <AlertTriangle className="h-5 w-5 text-yellow-600" />,
  };

  const bgColors = {
    info: "bg-blue-50 border-blue-200",
    success: "bg-green-50 border-green-200",
    warning: "bg-yellow-50 border-yellow-200",
  };

  return (
    <div
      className={`my-6 flex items-start gap-3 rounded-md border p-4 ${bgColors[type]}`}
    >
      {icons[type]}
      <div>
        {title && <h4 className="font-medium">{title}</h4>}
        <div className="mt-1 text-gray-700">{children}</div>
      </div>
    </div>
  );
}
