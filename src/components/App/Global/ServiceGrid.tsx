"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceGrid = () => {
  const services = [
    {
      label: "Book Appointment",
      img: "/icon/b.png",
      route: "/search",
      publish: true,
    },
    {
      label: "Lab & Radiology",
      img: "/icon/l.png",
      route: "/search",
      publish: true,
    },
    {
      label: "Ambulance Service",
      img: "/icon/a.png",
      route: "#",
      publish: false,
    },
    {
      label: "Emergency Service",
      img: "/icon/e.png",
      route: "#",
      publish: false,
    },
  ];

  return (
    <section className="mt-4 flex flex-col items-start gap-4">
      <h2 className="text-xl font-semibold text-gray-900">Services</h2>

      <div className="grid w-full grid-cols-2 gap-4 laptop:grid-cols-4">
        {services.map((item, idx) => (
          <Link
            href={item.route}
            key={idx}
            className="group relative flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-green-500 hover:shadow-md"
          >
            {item.publish === false && (
              <div className="absolute right-2 top-2 rounded-3xl bg-green-600 px-2 py-1 text-xs font-semibold text-white">
                Coming soon
              </div>
            )}
            <div className="relative mb-2 size-28">
              <Image
                src={item.img}
                alt={item.label}
                fill
                className="object-contain transition-all duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-center text-sm font-medium text-gray-800 group-hover:text-green-600 tablet:text-base">
              {item.label}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServiceGrid;
