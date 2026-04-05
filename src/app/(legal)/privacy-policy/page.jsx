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
            At Exelth, we take your privacy seriously. This policy explains
            what data we collect, how we use it, who we share it with, and
            the rights you have over your information — for both patients and
            clinic or hospital users.
          </p>
        </div>

        {/* 1. Information We Collect */}
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            1. Information We Collect
          </h2>
          <p className="mb-2 text-sm font-semibold text-gray-700">
            For Patients (Exelth Care App)
          </p>
          <ul className="list-inside list-disc space-y-1 text-gray-700">
            <li>Personal information (name, phone number, email address)</li>
            <li>
              Health data (medical records, prescriptions, lab reports,
              visit history)
            </li>
            <li>
              Location — used to help you find nearby hospitals and clinics
            </li>
            <li>Device information (for app performance and analytics)</li>
          </ul>
          <p className="mb-2 mt-4 text-sm font-semibold text-gray-700">
            For Clinics & Hospitals (Exelth Platform)
          </p>
          <ul className="list-inside list-disc space-y-1 text-gray-700">
            <li>
              Facility information (clinic/hospital name, address, registration
              details, services offered)
            </li>
            <li>
              Staff account data (name, role, email, login activity)
            </li>
            <li>
              Patient visit records created or managed through the platform
            </li>
            <li>
              Subscription and billing records (plan details, payment
              transaction history — no card or banking credentials)
            </li>
            <li>Usage data and activity logs within the platform</li>
          </ul>
        </section>

        {/* 2. How We Use Your Information */}
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            2. How We Use Your Information
          </h2>
          <p className="mb-1 text-sm">For patients, we use your data to:</p>
          <ul className="list-inside list-disc space-y-1 text-gray-700">
            <li>Book appointments and manage your care schedule</li>
            <li>
              Provide real-time updates about appointments, prescriptions, and
              lab results
            </li>
            <li>
              Allow your doctors and care providers to access relevant health
              data during treatment
            </li>
            <li>
              Show you nearby clinics and hospitals within the Exelth network
            </li>
          </ul>
          <p className="mb-1 mt-4 text-sm">
            For clinics and hospitals, we use your data to:
          </p>
          <ul className="list-inside list-disc space-y-1 text-gray-700">
            <li>
              Power your clinic&apos;s operations — visit management, billing,
              prescriptions, and clinical records
            </li>
            <li>
              Provide operational analytics and performance dashboards for
              your facility
            </li>
            <li>
              Send notifications and updates related to your account and
              subscription
            </li>
          </ul>
          <p className="mb-1 mt-4 text-sm">For all users:</p>
          <ul className="list-inside list-disc space-y-1 text-gray-700">
            <li>
              Improve the platform&apos;s features, reliability, and user
              experience
            </li>
            <li>Comply with legal obligations under applicable Indian law</li>
          </ul>
        </section>

        {/* 3. Sharing Your Information */}
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            3. Sharing Your Information
          </h2>
          <p className="text-sm">
            We share data only when necessary to deliver our services:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-gray-700">
            <li>
              With clinics, hospitals, doctors, and authorized staff as part
              of patient care — only the data relevant to the visit or
              treatment
            </li>
            <li>
              With payment processors to handle subscription billing and
              patient payment transactions securely
            </li>
            <li>
              With cloud infrastructure providers that host and store our
              platform data
            </li>
            <li>
              With analytics service providers to help us understand platform
              usage and improve our product
            </li>
            <li>
              With legal or regulatory authorities if required by law or a
              valid government order
            </li>
            <li>
              We never sell your personal or health information to
              advertisers or any third party for commercial purposes
            </li>
          </ul>
        </section>

        {/* 4. Data Security */}
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            4. Data Security
          </h2>
          <p className="text-gray-700">
            We take the security of your data seriously. Our safeguards
            include:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-gray-700">
            <li>
              Encryption in transit — all data is transmitted over secure
              HTTPS/TLS connections
            </li>
            <li>
              End-to-end encryption for sensitive medical records and health
              data stored in the platform
            </li>
            <li>
              Role-based access control — clinic staff can only access data
              relevant to their assigned role
            </li>
            <li>
              Secure authentication for all platform accounts
            </li>
            <li>
              Regular security reviews and infrastructure monitoring
            </li>
          </ul>
          <p className="mt-2 text-gray-700">
            Despite these measures, no system is completely immune to risk.
            We will notify affected users promptly in the event of a data
            breach that may affect their personal or health information.
          </p>
        </section>

        {/* 5. Data Retention */}
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            5. Data Retention
          </h2>
          <ul className="list-inside list-disc space-y-1 text-gray-700">
            <li>
              Patient health data is retained for as long as the patient
              account is active and for a reasonable period thereafter to
              support continuity of care.
            </li>
            <li>
              Clinic and hospital operational data is retained for the
              duration of the active subscription and a grace period following
              expiry or account closure.
            </li>
            <li>
              When you request deletion of your account, we will remove your
              personal data within a reasonable time, subject to any legal or
              regulatory obligations that require us to retain certain records.
            </li>
          </ul>
        </section>

        {/* 6. Your Rights */}
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            6. Your Rights
          </h2>
          <p className="text-sm">You have the right to:</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-gray-700">
            <li>Access your personal data held by Exelth</li>
            <li>
              Correct or update inaccurate personal information in your
              account
            </li>
            <li>Delete your account and associated personal data</li>
            <li>
              Request data portability — receive a copy of your data in a
              structured format
            </li>
            <li>
              Limit data sharing where possible, without affecting core
              service delivery
            </li>
            <li>
              Withdraw consent for optional data processing at any time
            </li>
          </ul>
          <p className="mt-2 text-gray-700">
            To exercise any of these rights, contact us at{" "}
            <a
              href="mailto:support@exelth.com"
              className="text-green-600 underline"
            >
              support@exelth.com
            </a>
            .
          </p>
        </section>

        {/* 7. Cookies & Analytics */}
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            7. Cookies & Analytics
          </h2>
          <p className="text-gray-700">
            The Exelth website and platform may use cookies and similar
            tracking technologies to:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-gray-700">
            <li>Keep you logged in and remember your preferences</li>
            <li>
              Understand how users navigate the platform so we can improve it
            </li>
            <li>Measure the performance and reliability of our services</li>
          </ul>
          <p className="mt-2 text-gray-700">
            You can manage or disable cookies through your browser settings.
            Disabling cookies may affect some features of the platform.
          </p>
        </section>

        {/* 8. Children's Privacy */}
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            8. Children&apos;s Privacy
          </h2>
          <p className="text-gray-700">
            Users under the age of 18 may use the Exelth Care App only with
            the consent and supervision of a parent or legal guardian. The
            parent or guardian is responsible for overseeing their
            child&apos;s use and consents to this Privacy Policy on their
            behalf.
          </p>
          <p className="mt-2 text-gray-700">
            We encourage parents and guardians to monitor their
            children&apos;s online activities. If we discover that personal
            data has been collected from a minor without proper parental
            consent, we will delete it promptly.
          </p>
        </section>

        {/* 9. DPDP Act 2023 */}
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            9. Compliance with the Digital Personal Data Protection Act, 2023
          </h2>
          <p className="text-gray-700">
            Exelth is committed to complying with India&apos;s{" "}
            <span className="font-semibold">
              Digital Personal Data Protection (DPDP) Act, 2023
            </span>
            . Under this Act:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-gray-700">
            <li>
              We collect and process personal data only for specified,
              legitimate purposes with your consent.
            </li>
            <li>
              We take reasonable security safeguards to prevent personal data
              breaches.
            </li>
            <li>
              In the event of a data breach that is likely to affect you, we
              will notify you and the Data Protection Board of India as
              required.
            </li>
            <li>
              You have the right to access, correct, and erase your personal
              data as outlined in Section 6 of this policy.
            </li>
            <li>
              If you have a grievance related to your personal data, you may
              contact our support team. If unresolved, you may approach the
              Data Protection Board of India.
            </li>
          </ul>
        </section>

        {/* 10. Updates to Policy */}
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            10. Updates to This Policy
          </h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. If we make
            significant changes, we will notify you through the app, the
            platform, or by email. The effective date at the top of this
            policy will always reflect the most recent version.
          </p>
        </section>

        {/* 11. Contact Us */}
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            11. Contact Us
          </h2>
          <p className="mb-2 text-gray-700">
            If you have questions, concerns, or requests related to your
            privacy or personal data, please reach us at:
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
            <li>
              <strong>Company:</strong> Egostix Engineering Private Limited
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
