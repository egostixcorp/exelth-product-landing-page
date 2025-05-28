import React from "react";
import { cn } from "../../lib/utils";
const ContainerWrapper = ({ children, className }) => {
  return (
    <div
      id="container"
      className={cn(
        "redd flex h-full w-full flex-col items-start justify-center gap-5 overflow-hidden px-[5%] laptop:px-[15%]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default ContainerWrapper;
