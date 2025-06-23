import Image from "next/image";
import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
const MobileThumbnailLayout = () => {
  return (
    <div
      id="thumbnail"
      className="redd absolute right-0 top-0 mt-16 h-[55vh] w-full"
    >
      <div className="relative z-50 size-full">
        <div class="absolute inset-0 z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#16a34a_100%)]"></div>
        <div
          id="image-wrapper"
          className="absolute right-0 top-0 z-20 size-full overflow-hidden"
        >
          <div class="absolute inset-0 z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,#16a34a_100%)]"></div>
          <Image
            src={"/assets/product_mobile_cover.png"}
            width={1980}
            height={1080}
            alt=""
            className="size-full translate-x-8 scale-150 object-contain tablet:translate-x-12 laptop:translate-x-0"
          ></Image>
        </div>
        <div
          id="content"
          className="redd absolute -bottom-72 z-50 flex w-full items-end justify-center px-[5%] backdrop-blur tablet:-bottom-36 laptop:-bottom-36 laptop:px-[15%] desktop:-bottom-32"
        >
          <div
            id="container"
            className="redd container flex flex-col items-center justify-between gap-10 tablet:flex-row"
          >
            <div id="right" className="">
              <p className="mb-2 text-sm text-green-600">
                Introducing Exelth Mobile
              </p>
              <h1 className="text-3xl font-semibold leading-tight tablet:text-4xl desktop:text-5xl">
                Exelth Patient Care
              </h1>
              <p className="text-base tablet:mr-[10%] tablet:text-lg laptop:mr-[15%] desktop:mr-[20%]">
                Track appointments, bills, prescriptions, and real-time updates
                — all from your phone. Available for iOS and Android.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-3">
                <a
                  href="https://apps.apple.com/" // Replace with your real app link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="redc flex size-28 flex-col items-center justify-between gap-2 rounded-lg bg-green-500 p-4 text-white transition"
                >
                  <div className="flex w-full items-center justify-between">
                    <FaApple size={18} />
                    <MdArrowOutward />
                  </div>
                  <p className="text-sm">
                    Open <br /> App Store
                  </p>
                </a>
                <a
                  href="https://play.google.com/store" // Replace with your real app link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-28 flex-col items-center justify-between gap-2 rounded-lg bg-green-500 p-4 text-white transition"
                >
                  <div className="flex w-full items-center justify-between">
                    <FaGooglePlay size={18} />
                    <MdArrowOutward />
                  </div>
                  <p className="text-sm">
                    Open <br /> Play Store
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileThumbnailLayout;
