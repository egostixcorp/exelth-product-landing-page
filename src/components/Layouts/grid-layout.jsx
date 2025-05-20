import React from "react";
import { Stethoscope, Users, ShieldCheck, ActivitySquare } from "lucide-react";

const features = [
  {
    title: "Connected Care",
    description:
      "Seamlessly unify hospitals, clinics, and health workers into a single interoperable ecosystem.",
    icon: Stethoscope,
  },
  {
    title: "Collaborative Teams",
    description:
      "Enable real-time collaboration between care teams, departments, and facilities for better outcomes.",
    icon: Users,
  },
  {
    title: "Privacy-First Architecture",
    description:
      "Built with end-to-end encryption, granular access control, and full compliance with data laws.",
    icon: ShieldCheck,
  },
  {
    title: "Insight-Driven Workflows",
    description:
      "Leverage analytics, wait-time optimization, and actionable alerts to streamline operations.",
    icon: ActivitySquare,
  },
];

const GridLayout = () => {
  return (
    <section className="w-full px-4 py-16 tablet:px-8 desktop:px-16">
      <div className="mx-auto mb-12 max-w-6xl text-center">
        <h2 className="text-EgostixBlue text-3xl font-extrabold tablet:text-4xl">
          Core Features of Exelth
        </h2>
        <p className="mt-2 text-sm text-gray-600 tablet:text-base">
          Purpose-built for modern healthcare providers.
        </p>
      </div>

      <div className="grid gap-6 tablet:grid-cols-2 desktop:grid-cols-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="h-96 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-600">
              <feature.icon size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GridLayout;
