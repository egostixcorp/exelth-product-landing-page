import { cn } from "@/lib/utils";
import React from "react";

const Container = ({ children, className }) => {
  return (
    <div
      className={cn(
        "redd container flex h-full items-center justify-center px-[5%] pt-20 laptop:px-[15%]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
