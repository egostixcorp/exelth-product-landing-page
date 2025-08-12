import React from "react";
import { PrivacyDate } from "@/data/const";
const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen w-full p-6 md:p-10">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-lg md:p-10">
        <div id="header" className="mb-6">
          <h1 className="text-3xl font-bold text-neutral-800">
            Exelth Privacy Policy
          </h1>
          <p className="mt-1 text-sm font-semibold text-gray-500">
            Effective Date: {PrivacyDate}
          </p>
        </div>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            1. Information We Collect
          </h2>
          <ul className="list-inside list-disc space-y-1 text-gray-700">
            <li>Personal Info (Name, Phone, Email)</li>
            <li>Health Data (Medical Records, Prescriptions, Lab Reports)</li>
            <li>Device Information (for analytics)</li>
            <li>
              Location – We use your location to help you find nearby hospitals
              and clinics
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            2. How We Use It
          </h2>
          <ul className="list-inside list-disc space-y-1 text-gray-700">
            <li>Book appointments and manage schedules</li>
            <li>Share updates with patients and family</li>
            <li>
              Enable doctors and hospitals to access real-time health data
            </li>
            <li>Improve our platform experience</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            3. Sharing Data
          </h2>
          <ul className="list-inside list-disc space-y-1 text-gray-700">
            <li>
              With hospitals, doctors, and staff as part of the service delivery
            </li>
            <li>
              With authorized third-party services (e.g., payment processors,
              analytics)
            </li>
            <li>
              <strong>Never</strong> sold to advertisers
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            4. Data Security
          </h2>
          <p className="text-gray-700">
            Your data is encrypted and securely stored. Only authorized hospital
            staff and caregivers can access it.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            5. Your Rights
          </h2>
          <ul className="list-inside list-disc space-y-1 text-gray-700">
            <li>Right to access your data</li>
            <li>Right to delete your account and data</li>
            <li>
              Right to restrict data sharing (except where the service requires
              it)
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            6. Children’s Privacy
          </h2>
          <p className="text-gray-700">
            We do not knowingly collect data from individuals under 16 without
            parental consent.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            7. Updates
          </h2>
          <p className="text-gray-700">
            We may update this Privacy Policy and will notify users of major
            changes.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            8. Contact Us
          </h2>
          <p className="mb-2 text-gray-700">If you have questions, contact:</p>
          <ul className="text-gray-700">
            <li>
              <a
                href="mailto:support@exelth.com"
                className="text-black underline"
              >
                support@exelth.com
              </a>
            </li>
            <li>
              <a
                href="https://www.exelth.com"
                className="text-black underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.exelth.com
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
