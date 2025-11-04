import React from "react";
import LogoType from "@/components/Global/logo-type";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Mail, Phone, Linkedin, Twitter, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-gray-50 px-6 pt-12 tablet:px-12 desktop:px-24">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 tablet:grid-cols-5 laptop:grid-cols-5 desktop:grid-cols-6">
        {/* Brand Column */}
        <div className="redd flex flex-col items-start justify-start text-left">
          <LogoType />
          <p className="mt-1 text-sm text-gray-600">
            A connected health infrastructure platform
          </p>
        </div>

        {/* Product Column */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800">Product</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li className="redd group relative w-fit">
              <Link href="/product/exelth-infrastructure-platform">
                For Facilities
              </Link>
              <div
                id="border-animation-green"
                className="absolute bottom-0 right-0 h-[1px] w-0 bg-green-600 transition-all duration-500 group-hover:left-0 group-hover:w-full"
              />
            </li>
            <li className="group relative w-fit">
              <Link href="/product/exelth-care-app">For Patients</Link>
              <div
                id="border-animation-green"
                className="absolute bottom-0 right-0 h-[1px] w-0 bg-green-600 transition-all duration-500 group-hover:left-0 group-hover:w-full"
              />
            </li>
            <li className="group relative w-fit">
              <Link href="/features">Features</Link>
              <div
                id="border-animation-green"
                className="absolute bottom-0 right-0 h-[1px] w-0 bg-green-600 transition-all duration-500 group-hover:left-0 group-hover:w-full"
              />
            </li>
            {/* <li>
              <Link href="/changelog">Changelog</Link>
            </li> */}
          </ul>
        </div>
        {/* Patient Column */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800">Patient</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li className="group relative w-fit">
              <Link href="/login">Log in / sign up</Link>
              <div
                id="border-animation-green"
                className="absolute bottom-0 right-0 h-[1px] w-0 bg-green-600 transition-all duration-500 group-hover:left-0 group-hover:w-full"
              />
            </li>

            <li className="group relative w-fit">
              <Link href="/patient">Home</Link>
              <div
                id="border-animation-green"
                className="absolute bottom-0 right-0 h-[1px] w-0 bg-green-600 transition-all duration-500 group-hover:left-0 group-hover:w-full"
              />
            </li>
            <li className="group relative w-fit">
              <Link href="/search">Search</Link>
              <div
                id="border-animation-green"
                className="absolute bottom-0 right-0 h-[1px] w-0 bg-green-600 transition-all duration-500 group-hover:left-0 group-hover:w-full"
              />
            </li>
            <li className="group relative w-fit">
              <Link href="/service">Service</Link>
              <div
                id="border-animation-green"
                className="absolute bottom-0 right-0 h-[1px] w-0 bg-green-600 transition-all duration-500 group-hover:left-0 group-hover:w-full"
              />
            </li>
            {/* <li>
              <Link href="/changelog">Changelog</Link>
            </li> */}
          </ul>
        </div>
        {/* Comapany Column */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800">Company</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li className="group relative w-fit">
              <Link href="/homepage">Home</Link>
              <div
                id="border-animation-green"
                className="absolute bottom-0 right-0 h-[1px] w-0 bg-green-600 transition-all duration-500 group-hover:left-0 group-hover:w-full"
              />
            </li>
            <li className="group relative w-fit">
              <Link href="/about">About</Link>
              <div
                id="border-animation-green"
                className="absolute bottom-0 right-0 h-[1px] w-0 bg-green-600 transition-all duration-500 group-hover:left-0 group-hover:w-full"
              />
            </li>
            <li className="group relative w-fit">
              <Link href="/blog">Blog</Link>
              <div
                id="border-animation-green"
                className="absolute bottom-0 right-0 h-[1px] w-0 bg-green-600 transition-all duration-500 group-hover:left-0 group-hover:w-full"
              />
            </li>
            <li className="group relative w-fit">
              <Link href="/changelog">Changelog</Link>
              <div
                id="border-animation-green"
                className="absolute bottom-0 right-0 h-[1px] w-0 bg-green-600 transition-all duration-500 group-hover:left-0 group-hover:w-full"
              />
            </li>
          </ul>
        </div>
        {/* Legal Column */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800">Legal</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li className="group relative w-fit">
              <Link href="/terms">Terms of Conditions</Link>
              <div
                id="border-animation-green"
                className="absolute bottom-0 right-0 h-[1px] w-0 bg-green-600 transition-all duration-500 group-hover:left-0 group-hover:w-full"
              />
            </li>
            <li className="group relative w-fit">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <div
                id="border-animation-green"
                className="absolute bottom-0 right-0 h-[1px] w-0 bg-green-600 transition-all duration-500 group-hover:left-0 group-hover:w-full"
              />
            </li>
            {/* <li>
              <Link href="">About</Link>
            </li> */}
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li className="group relative flex w-fit items-center gap-2">
              <Link href={"mailto:support@exelth.com"}>support@exelth.com</Link>
              <div
                id="border-animation-green"
                className="absolute bottom-0 right-0 h-[1px] w-0 bg-green-600 transition-all duration-500 group-hover:left-0 group-hover:w-full"
              />
            </li>
            <li className="group relative flex w-fit items-center gap-2">
              <Link href={"/contact"}>Contact</Link>
              <div
                id="border-animation-green"
                className="absolute bottom-0 right-0 h-[1px] w-0 bg-green-600 transition-all duration-500 group-hover:left-0 group-hover:w-full"
              />
            </li>
            <li className="flex items-center gap-2">
              <Link target="_blank" href={"https://x.com/exelthcare"}>
                <FaXTwitter className="transition-all duration-500 hover:text-green-600" />
              </Link>
              <Link
                target="_blank"
                href={"https://www.instagram.com/exelthcare/?hl=en"}
              >
                <FaInstagram className="transition-all duration-500 hover:text-green-600" />
              </Link>
              <Link
                target="_blank"
                href={"https://www.facebook.com/people/Exelth/61581196864018/"}
              >
                <FaFacebook className="transition-all duration-500 hover:text-green-600" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
      </div>

      <div className="mt-5 border-t py-2 text-center text-xs text-gray-500">
        <Link href={"https://egostix.com/"}>
          © 2025 Egostix Engineering. All rights reserved.
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
