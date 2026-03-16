"use client";

import React from "react";
import { useRouter } from "next/navigation";

const ROLES = [
  {
    title: "Marketing Specialist",
    slug: "marketing-specialist",
    type: "Full-time",
    description:
      "Drive awareness, growth, and customer acquisition through digital marketing.",
  },
  {
    title: "Product Designer (UI/UX)",
    slug: "product-designer",
    type: "Full-time",
    description: "Design intuitive interfaces for web and mobile products.",
  },
  {
    title: "Frontend Developer",
    slug: "frontend-developer",
    type: "Full-time",
    description: "Build interfaces using React and Next.js.",
  },
  {
    title: "Backend Developer",
    slug: "backend-developer",
    type: "Full-time",
    description: "Design APIs and backend systems.",
  },
  {
    title: "Full Stack Developer",
    slug: "full-stack-developer",
    type: "Full-time",
    description: "Work across frontend and backend.",
  },
  {
    title: "Mobile App Developer",
    slug: "mobile-app-developer",
    type: "Full-time",
    description: "Build iOS & Android apps.",
  },
  {
    title: "Sales Executive",
    slug: "sales-executive",
    type: "Full-time",
    description: "Drive customer acquisition.",
  },
  {
    title: "Customer Support Specialist",
    slug: "customer-support",
    type: "Full-time",
    description: "Assist customers and resolve issues.",
  },
  {
    title: "AI Engineer",
    slug: "ai-engineer",
    type: "Full-time",
    description: "Build AI-powered features.",
  },
];

const CareerPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-16 pt-32">
      <div className="mx-auto max-w-5xl space-y-6">
        <h1 className="text-center text-4xl font-bold">Careers at Exelth</h1>

        {ROLES.map((role) => (
          <div key={role.slug} className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-xl font-semibold">{role.title}</h3>
            <p className="text-sm text-gray-500">{role.type}</p>
            <p className="mt-2 text-gray-700">{role.description}</p>

            <button
              onClick={() => router.push(`/career/${role.slug}`)}
              className="mt-4 rounded-md bg-green-600 px-5 py-2 text-white hover:bg-green-700"
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerPage;
