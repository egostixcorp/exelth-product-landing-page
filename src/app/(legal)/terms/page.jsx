import React from "react";
import { TermsDate } from "@/data/const";
const TermsConditionsPage = () => {
  return (
    <div className="min-h-screen w-full p-6 md:p-10">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-lg md:p-10">
        <div id="header" className="mb-6">
          <h1 className="text-3xl font-bold text-neutral-800">
            Exelth Terms & Conditions
          </h1>
          <p className="mt-1 text-sm font-semibold text-gray-500">
            Last Updated: {TermsDate}
          </p>
          <p className="mt-1 text-sm font-semibold">
            Welcome to Exelth. By using our mobile app or web platform, you
            agree to these Terms and Conditions. Please read them carefully.
          </p>
        </div>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            1. Introduction
          </h2>
          <p className="text-gray-700">
            Exelth is a digital healthcare platform that helps patients book
            appointments, access medical records, and get real-time updates from
            participating hospitals and clinics. We also provide hospital
            management tools to these facilities.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            2. User Eligibility
          </h2>
          <p className="text-gray-700">
            You must be at least 4+ years old to use Exelth. If you are under 4+
            years old, use must be under the supervision of a parent or legal
            guardian.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            3. Use of the Platform
          </h2>
          <ul className="list-inside list-disc space-y-1 text-gray-700">
            <li>Use Exelth only for lawful purposes.</li>
            <li>
              Do not misuse, disrupt, or attempt unauthorized access to any part
              of the platform.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            4. Account Security
          </h2>
          <ul className="list-inside list-disc space-y-1 text-gray-700">
            <li>You are responsible for keeping your login details private.</li>
            <li>Notify us immediately of any unauthorized access or breach.</li>
            <li>
              All payments for bookings, lab tests, or other services on Exelth
              are processed through secure third-party payment gateways.
            </li>
            <li>
              Exelth does not store your payment card or banking details on its
              servers.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            5. Medical Content
          </h2>
          <p className="text-gray-700">
            Any health-related information available on the platform is{" "}
            <span className="font-bold">for informational purposes only</span>{" "}
            and does not constitute medical advice.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            6. Payments
          </h2>
          <ul className="list-inside list-disc space-y-1 text-gray-700">
            <li>
              Payments for bookings, lab tests, and other services are processed
              through secure third-party gateways.
            </li>
            <li>We do not store your payment card or banking details.</li>
            <li>
              We are not responsible for failed payments, delays, or chargebacks
              unless caused by a confirmed platform error.
            </li>
            <li>
              The Exelth Wallet is available only to partnered clinics and
              hospitals. Patients do not hold wallet balances on Exelth.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            7. Data Handling
          </h2>
          <p className="text-gray-700">
            Data shared on Exelth is handled in according to our{" "}
            <a href="/privacy-policy" className="text-green-600 underline">
              Privacy Policy
            </a>
            .
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            8. Termination
          </h2>
          <p className="text-gray-700">
            We reserve the right to suspend or terminate your access to the
            platform if you violate these terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            9. Limitation of Liability
          </h2>
          <p className="text-gray-700">
            We are not liable for any indirect, incidental, or consequential
            damages resulting from your use of Exelth.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            10. Governing Law
          </h2>
          <p className="text-gray-700">
            These Terms are governed by and construed in accordance with the
            laws of India.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsConditionsPage;
