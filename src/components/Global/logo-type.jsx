import Image from "next/image";
import React from "react";

const LogoType = () => {
  return (
    <div className="flex items-center justify-center">
      <Image
        alt="exelth logo"
        src={"/brand/exelth-icon-app.svg"}
        width={64}
        height={64}
        className="size-8 laptop:size-9"
      />
      <h1 className="text-exelth_logo text-xl font-extrabold laptop:text-2xl">
        Exelth
      </h1>
    </div>
  );
};

export default LogoType;
