"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceGridAction = () => {
  const services = [
    {
      label: "Appointment",
      img: "/icon/b.png",
      route: "/search?service=appointment",
      publish: true,
    },
    {
      label: "Labs",
      img: "/icon/l.png",
      route: "/search?service=lab",
      publish: true,
    },
    {
      label: "Ambulance",
      img: "/icon/a.png",
      route: "/search?service=ambulance",
      publish: false,
    },
    // {
    //   label: "Emergency Service",
    //   img: "/icon/e.png",
    //   route: "#",
    //   publish: false,
    // },
  ];

  return (
    <section className="redd flex w-fit items-center justify-center px-5">
      <div className="grid w-fit grid-cols-3 gap-2 laptop:grid-cols-3">
        {services.map((item, idx) => (
          <Link
            href={item.route}
            key={idx}
            className="group relative flex flex-col items-center justify-start rounded-lg p-1 px-1.5 shadow transition-all hover:-translate-y-1 hover:shadow-green-200 desktop:flex-row"
          >
            {item.publish === false && (
              <span className="absolute right-1 top-1 rounded-md bg-green-600 p-0.5 px-1 text-xs font-light text-white">
                soon
              </span>
            )}
            <div className="relative mb-2 h-16 w-20 overflow-hidden">
              <Image
                src={item.img}
                alt={item.label}
                width={500}
                height={500}
                className="object-contain transition-all duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="block text-center text-sm font-semibold text-gray-800 group-hover:text-green-600 tablet:hidden laptop:block desktop:block">
              {item.label}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServiceGridAction;
