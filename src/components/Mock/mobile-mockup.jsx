import Image from "next/image";
import React from "react";

const MobileMock = ({ screenImage }) => {
  return (
    <div
      id="mobile-frame"
      className="grid h-[42rem] w-80 place-content-center overflow-hidden rounded-2xl border-[5px] border-green-200 shadow-xl"
    >
      <Image
        src={screenImage}
        alt=""
        width={500}
        height={100}
        className="size-full object-contain"
      />
    </div>
  );
};

export default MobileMock;
