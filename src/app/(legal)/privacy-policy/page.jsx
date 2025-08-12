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
          <p className="mt-1 text-sm font-semibold">
            At Exelth, we value your privacy and are committed to protecting
            your personal and health information. This policy explains what we
            collect, how we use it, and your rights regarding your data.
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
            2. How We Use Your Information
          </h2>
          <p className="text-sm">We use your data to:</p>
          <ul className="list-inside list-disc space-y-1 text-gray-700">
            <li>Book appointments and manage schedules</li>
            <li>Provide real-time updates to patients and family members</li>
            <li>Allow doctors and hospitals to access relevant health data</li>
            <li>Improve our platform&apos;s features and user experience</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            3. Sharing Your Information
          </h2>
          <p className="text-sm">
            We share data only when necessary to deliver our services:
          </p>
          <ul className="list-inside list-disc space-y-1 text-gray-700">
            <li>
              With clinics, hospitals, doctors, and authorized staff as part of
              patient care
            </li>
            <li>
              With approved third-party providers, such as payment processors
              and analytics services
            </li>
            <li>
              We never sell your personal or health information to advertisers
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            4. Data Security
          </h2>
          <p className="text-gray-700">
            We encrypt and securely store your information. Only authorized
            clinic & hospital staff and caregivers have access to it.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            5. Your Rights
          </h2>
          <p className="text-sm">You have the right to:</p>
          <ul className="list-inside list-disc space-y-1 text-gray-700">
            <li>Access your personal data</li>
            <li>Delete your account and data</li>
            <li>
              Limit data sharing (where possible without affecting service
              delivery)
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            6. Children&apos;s Privacy
          </h2>
          <p className="text-gray-700">
            Exelth is not intended for use by minors. We encourage parents and
            guardians to supervise their children&apos;s online activities. If
            we discover that a minor has provided personal information, we will
            delete it promptly.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            7. Updates to This Policy
          </h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. If we make
            significant changes, we will notify you through the app or email.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            8. Contact Us
          </h2>
          <p className="mb-2 text-gray-700">
            If you have questions or concerns, you can reach us at:
          </p>
          <ul className="text-gray-700">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@exelth.com"
                className="text-green-600 underline"
              >
                support@exelth.com
              </a>
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <a
                href="https://www.exelth.com"
                className="text-green-600 underline"
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
