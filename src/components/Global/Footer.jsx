import React from "react";
import LogoType from "@/components/Global/logo-type";
import Link from "next/link";
import { Mail, Phone, Linkedin, Twitter, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-gray-50 px-6 pt-12 tablet:px-12 desktop:px-24">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 tablet:grid-cols-5 laptop:grid-cols-5 desktop:grid-cols-5">
        {/* Brand Column */}
        <div className="redd flex flex-col items-start justify-center text-left">
          <LogoType />
          <p className="mt-2 text-sm text-gray-600">
            A connected health infrastructure platform
          </p>
        </div>

        {/* Product Column */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800">Product</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/product/exelth-infrastructure-platform">
                For Facilities
              </Link>
            </li>
            <li>
              <Link href="/product/exelth-care-app">For Patients</Link>
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
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/changelog">Changelog</Link>
            </li>
          </ul>
        </div>
        {/* Legal Column */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800">Legal</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/terms">Terms of Conditions</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
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
            <li className="flex items-center gap-2">
              <Link href={"mailto:contact@exelth.com"}>contact@exelth.com</Link>
            </li>
            <li className="flex items-center gap-2">
              <Link href={"/contact"}>Contact</Link>
            </li>
            <li className="flex items-center gap-2">
              <Link target="_blank" href={"https://x.com/exelthcare"}>
                X/Twitter
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
