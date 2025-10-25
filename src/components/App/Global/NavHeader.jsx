import React from "react";
import Link from "next/link";
import { RiLayoutMasonryFill } from "react-icons/ri";
import { MdHomeFilled, MdViewTimeline } from "react-icons/md";

const NavHeader = () => {
  const Navigation = [
    // { name: "Home", link: "/search", icon: <MdHomeFilled size={22} /> },
    { name: "Home", link: "/patient", icon: <MdHomeFilled size={22} /> },
    {
      name: "Service",
      link: "/service",
      icon: <RiLayoutMasonryFill size={22} />,
    },
    {
      name: "Activities",
      link: "/activities",
      icon: <MdViewTimeline size={22} />,
    },
  ];

  return (
    <nav className="redd flex items-center justify-center gap-6 rounded-3xl border border-gray-100 bg-white px-5 py-2 shadow">
      {Navigation.map((navItem, index) => (
        <Link
          key={index}
          href={navItem.link}
          className="group flex items-center justify-center gap-1 text-gray-600 transition-colors hover:text-green-600"
        >
          <div className="text-xl transition-all duration-500 group-hover:scale-125">
            {navItem.icon}
          </div>
          <p className="font-semibold">{navItem.name}</p>
        </Link>
      ))}
    </nav>
  );
};

export default NavHeader;
