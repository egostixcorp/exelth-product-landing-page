// "use client";

import React from "react";
import PriceCard from "@/components/Cards/PriceCard";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export const metadata = {
  title: "Pricing & Fees",
};

const PricingPage = () => {
  return (
    <div className="flex w-full justify-center px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex w-full max-w-7xl flex-col items-center">
        {/* ================= Header ================= */}
        <div className="max-w-2xl text-center">
          <Badge
            variant="outline"
            className="mb-4 rounded-3xl px-4 py-1 text-sm"
          >
            Exelth Infrastructure Pricing
          </Badge>

          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Infrastructure for modern
            <span className="block text-green-600">healthcare facilities</span>
          </h1>

          <p className="mt-4 text-sm text-neutral-600 sm:text-base">
            Large hospitals run on powerful healthcare infrastructure. <br />
            <span className="font-medium text-neutral-900">
              Exelth brings the same operational technology to clinics and
              diagnostic centers.
            </span>
          </p>
        </div>

        {/* ================= Pricing Cards ================= */}
        <div className="mt-14 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <PriceCard
            title="Foundation"
            description="Digital foundation for small clinics"
            price="Free"
            note="Free for the first 20 total visits"
            features={[
              "Appointment calendar & scheduling",
              "Basic patient records",
              "Reception workspace",
              "Queue management",
              "Basic notifications",
            ]}
            buttonText="Start Free"
            buttonLink="https://app.exelth.com/auth/sign-up"
          />

          <PriceCard
            title="Core"
            recommended
            description="Operational system for growing clinics"
            price="₹1999"
            priceSuffix="/ month"
            features={[
              "All Foundation features +",
              "Up to 10 doctors",
              "Unlimited visits",
              "Patient history & e-prescriptions",
              "Tasks & coordination",
              "Billing workflows",
              "Analytics dashboard",
              "Integrations & notifications",
            ]}
            buttonText="Get Started"
            buttonLink="https://app.exelth.com/auth/sign-up"
          />

          <PriceCard
            title="Infrastructure"
            description="Advanced operations with diagnostics"
            price="₹4999"
            priceSuffix="/ month"
            features={[
              "All Core features +",
              "Unlimited doctors",
              "Full lab management",
              "Lab tracking workflows",
              "Advanced analytics",
              "Workflow automation",
              "Priority support",
            ]}
            buttonText="Contact Sales"
            buttonLink="/contact"
          />

          <PriceCard
            title="Enterprise"
            description="For hospitals & healthcare networks"
            price="Custom"
            features={[
              "All Infrastructure features +",
              "Multi-facility support",
              "Governance & security",
              "Custom integrations",
              "SLA support",
              "Data migration",
            ]}
            buttonText="Contact Sales"
            buttonLink="/contact"
          />
        </div>

        {/* ================= Add-Ons ================= */}
        <div className="mt-20 w-full max-w-4xl rounded-2xl border bg-white p-6 shadow-sm sm:p-8">
          <h3 className="text-center text-xl font-semibold sm:text-2xl">
            Add-ons & Pay-as-you-go
          </h3>

          <p className="mt-2 text-center text-sm text-neutral-600">
            Activate additional capabilities only when needed.
          </p>

          <div className="mt-8 grid gap-4 text-sm sm:grid-cols-2">
            {[
              "AI clinical documentation (pay per usage)",
              "Automated reminders (SMS / WhatsApp)",
              "Digital patient registration & check-in",
              "Online payments & invoicing",
              "Diagnostics workflow integrations",
              "Advanced performance analytics",
            ].map((item) => (
              <div key={item} className="flex gap-2">
                <Check className="mt-0.5 size-4 text-green-600" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* ================= Comparison Table ================= */}
        <div className="mt-20 w-full overflow-x-auto">
          <h3 className="mb-6 text-center text-xl font-semibold sm:text-2xl">
            Compare Plans
          </h3>

          <table className="w-full min-w-[700px] border text-sm">
            <thead className="bg-neutral-50">
              <tr>
                <th className="p-3 text-left">Capability</th>
                <th className="p-3">Foundation</th>
                <th className="p-3">Core</th>
                <th className="p-3">Infrastructure</th>
                <th className="p-3">Enterprise</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["Appointment Management", "✓", "✓", "✓", "✓"],
                ["Patient Records", "✓", "✓", "✓", "✓"],
                ["Tasks & Coordination", "—", "✓", "✓", "✓"],
                ["Billing & Payments", "—", "✓", "✓", "✓"],
                ["Lab Management", "—", "—", "✓", "✓"],
                ["Multi-Doctor Support", "Limited", "✓", "✓", "✓"],
                ["Multi-Facility Support", "—", "—", "Limited", "✓"],
                ["Custom Integrations", "—", "—", "—", "✓"],
                ["Dedicated Support", "—", "—", "Priority", "SLA"],
              ].map((row) => (
                <tr key={row[0]} className="border-t">
                  <td className="p-3">{row[0]}</td>
                  {row.slice(1).map((cell, i) => (
                    <td key={i} className="p-3 text-center">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ================= Fine Print ================= */}
        <p className="mx-auto mt-10 max-w-xl text-center text-xs text-neutral-500">
          Foundation plan is free for the first 20 total visits. Add-ons are
          optional and charged based on usage. Enterprise pricing varies based
          on organization size and requirements.
        </p>
      </div>
    </div>
  );
};

export default PricingPage;
