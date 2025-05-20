import React from "react";
import Link from "next/link";
import { Mail, Phone, Linkedin, Twitter, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-gray-50 px-6 pt-12 tablet:px-12 desktop:px-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 tablet:grid-cols-2 desktop:grid-cols-4">
        {/* Brand Column */}
        <div>
          <h2 className="text-green-600 text-xl font-bold ">Exelth</h2>
          <p className="mt-2 text-sm text-gray-600">
            A connected health infrastructure platform by Egostix Engineering.
          </p>
        </div>

        {/* Navigation Column */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800">Product</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/features">Features</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/build">Our Vision</Link>
            </li>
            <li>
              <Link href="https://egostix.com" target="_blank">
                Company Site
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <Mail size={16} /> contact@egostix.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 98765 43210
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800">Follow Us</h3>
          <div className="mt-3 flex space-x-4 text-gray-600">
            <a
              href="https://linkedin.com/company/egostix"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com/exelth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://egostix.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-5 border-t py-2 text-center text-xs text-gray-500">
        © 2025 Egostix Engineering. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
