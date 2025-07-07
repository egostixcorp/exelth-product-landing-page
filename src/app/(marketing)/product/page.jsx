"use client";
import React, { useLayoutEffect } from "react";
import { Badge } from "@/components/ui/badge";
import Container from "@/components/Global/Container";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
const ProductPage = () => {
  const Products = [
    {
      label: "Exelth for Hospitals & Clinics",
      image: "/assets/product-b2b.png",
      route: "/product/exelth-infrastructure-platform",
      headline:
        "Coordinate care, staff, and operations — all in one powerful B2B platform.",
    },
    {
      label: "Exelth for Patients",
      image: "/assets/product-b2c.png",
      route: "/product/exelth-care-app",
      headline:
        "Manage appointments, records, and billing from a single, patient-first mobile app.",
    },
  ];
  useLayoutEffect(() => {
    const Gctx = gsap.context(() => {
      let tl = gsap.timeline({
        delay: 1,
        autoAlpha: 1, // combines opacity + visibility
      });
      tl.from("#logo", {
        opacity: 0,
        x: -80,
        filter: "blur(10px)",
        duration: 0.5,
      });
      tl.from("#header-title", {
        opacity: 0,
        y: 10,
        filter: "blur(10px)",
      });
      tl.from("#header-desc", {
        opacity: 0,
        y: 10,
        filter: "blur(50px)",
      });
      tl.from("#product-0", {
        opacity: 0,
        y: 10,
        filter: "blur(10px)",
      });
      tl.from("#product-1", {
        opacity: 0,
        y: 10,
        filter: "blur(10px)",
      });
    });
    return () => Gctx.revert();
  }, []);
  return (
    <div className="my-20 flex min-h-screen w-full items-center justify-center">
      <Container className={"redd"}>
        <div
          id="content"
          className="redd flex size-full flex-col items-center justify-center gap-10"
        >
          <div
            id="header-content"
            className="relative flex size-full flex-col items-center justify-center gap-5"
          >
            <div class="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            <div
              id="header-image"
              className="redd flex items-center justify-center"
            >
              <div
                id="logo"
                className="mt-14 rounded-2xl border border-neutral-100 bg-white p-2 shadow-inner"
              >
                <Image
                  src={"/brand/exelth-green.png"}
                  width={100}
                  height={100}
                  alt="Exelth"
                />
              </div>
            </div>
            <h1
              id="header-title"
              className="text-center text-3xl pt-2 font-semibold laptop:text-6xl"
            >
              Seamless Care Coordination <br /> that Puts People First
            </h1>
            <p
              id="header-desc"
              className="text-center text-xs font-medium text-neutral-700 laptop:px-[15%] laptop:text-base"
            >
              With a patient-centered design, real-time coordination, and
              intelligent role-based workflows, Exelth helps hospitals and
              clinics deliver faster, more efficient, and connected care. Built
              for modern healthcare teams, it streamlines operations, enhances
              collaboration, and drives better outcomes at every stage of the
              care journey.
            </p>
          </div>
          <div
            id="product-content"
            className="my-5 grid size-full grid-cols-1 place-items-center gap-5 tablet:grid-cols-2"
          >
            {Products.map((data, i) => {
              return (
                <Link id={`product-${i}`} key={i} href={data.route}>
                  <ProductCard {...data} />
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
function ProductCard({ label, image, headline }) {
  return (
    <div className="group relative flex h-96 w-full flex-col items-center justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-md">
      {/* Label */}
      <div className="text-sm font-semibold uppercase tracking-wide text-green-600">
        {label}
      </div>

      {/* Image */}
      <div className="redd relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={label}
          width={1980}
          height={1080}
          className="z-50 h-full w-full object-contain transition-all duration-500 group-hover:scale-110"
        />
      </div>

      {/* Headline */}
      <div className="text-center text-base font-semibold text-gray-800">
        {headline}
      </div>
    </div>
  );
}
