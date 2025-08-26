"use client";
import gsap from "gsap";
import Image from "next/image";
import React, { useLayoutEffect } from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { Button } from "../ui/button";
import Link from "next/link";
import Icon from "../Global/Icon";
const MobileThumbnailLayout = () => {
  useLayoutEffect(() => {
    const Gctx = gsap.context(() => {
      let tl = gsap.timeline({
        delay: 1,
        autoAlpha: 1, // combines opacity + visibility
      });
      tl.from("#badge", {
        opacity: 0,
        y: 50,
        filter: "blur(10px)",
        duration: 0.5,
      });
      tl.from("#headline", {
        opacity: 0,
        y: 50,
        filter: "blur(10px)",
      });
      tl.from("#desc", {
        opacity: 0,
        y: 50,
        filter: "blur(10px)",
      });
      tl.from("#action-button", {
        opacity: 0,
        y: 50,
        filter: "blur(10px)",
      });
      tl.from("#product-image", {
        opacity: 0,
        y: 50,
        filter: "blur(10px)",
      });
    });
    return () => Gctx.revert();
  }, []);
  return (
    <div id="thumbnail" className="redd mt-16 h-screen w-full desktop:mb-10">
      <div className="relative z-50 size-full">
        <div
          id="image-wrapper"
          className="redd absolute right-0 top-0 z-20 size-full overflow-hidden"
        >
          <div class="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          <div id="product-image" className="redd relative z-50 size-full">
            <div class="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            <div
              id="bottom-blur"
              className="redd absolute bottom-10 right-0 z-50 h-20 w-full bg-white blur-sm tablet:bottom-24 laptop:bottom-36 desktop:-bottom-5"
            ></div>
            <Image
              src={"/assets/product_mobile_cover.png"}
              width={1980}
              height={1080}
              quality={100}
              alt=""
              className="redd size-full -translate-x-5 translate-y-20 scale-[2] object-contain tablet:translate-y-10 tablet:scale-110 laptop:scale-150 desktop:-translate-x-8 desktop:translate-y-32 desktop:scale-105"
            ></Image>
          </div>
        </div>
        <div
          id="content"
          className="redd absolute right-0 top-0 z-[999] flex w-full flex-col items-center justify-center gap-5 pt-10 text-center"
        >
          <p
            id="badge"
            className="redd w-full text-center text-sm text-green-400"
          >
            Introducing Exelth Mobile
          </p>
          <h1
            id="headline"
            className="text-3xl font-semibold leading-tight tablet:text-4xl desktop:text-5xl"
          >
            The mobile companion to your healthcare journey
          </h1>
          <p id="desc" className="text-base text-neutral-500 tablet:text-lg">
            Track appointments, bills, prescriptions, and real-time updates —
            all from your phone.
          </p>
          <div id="action-button" className="space-x-4">
            {/* <Button variant={"exelth"}>
              <FaGooglePlay /> Open Play Store
            </Button> */}
            <Link href={"/product/exelth-care-app/download"}>
              <Button variant={"exelth"}>
                <Icon.Smartphone /> Download Apk
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileThumbnailLayout;
