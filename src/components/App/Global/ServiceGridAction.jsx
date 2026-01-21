"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceGridAction = () => {
  const services = [
    {
      label: "Book Appointment",
      img: "/icon/b.png",
      route: "/search?service=appointment",
      publish: true,
    },
    {
      label: "Lab & Radiology",
      img: "/icon/l.png",
      route: "/search?service=lab",
      publish: true,
    },
    {
      label: "Ambulance Service",
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
    <section className="flex redd w-full items-center justify-center px-5">
      <div className="grid w-fit grid-cols-3 gap-2 laptop:grid-cols-3">
        {services.map((item, idx) => (
          <Link
            href={item.route}
            key={idx}
            className="group relative flex flex-col items-center justify-center rounded-2xl shadow transition-all hover:-translate-y-1 hover:shadow-green-200"
          >
            {/* {item.publish === false && (
              <div className="absolute right-2 top-2 rounded-3xl bg-green-600 px-2 py-1 text-xs font-semibold text-white">
                Coming soon
              </div>
            )} */}
            <div className="relative mb-2 h-16 w-20 overflow-hidden">
              <Image
                src={item.img}
                alt={item.label}
                width={500}
                height={500}
                className="object-contain transition-all duration-500 group-hover:scale-105"
              />
            </div>
            {/* <h3 className="text-center text-xs font-medium text-gray-800 group-hover:text-green-600">
              {item.label}
            </h3> */}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServiceGridAction;
