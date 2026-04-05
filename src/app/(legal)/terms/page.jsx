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
            Welcome to Exelth. By using our platform or mobile app, you agree
            to these Terms and Conditions. Please read them carefully before
            using any part of the service.
          </p>
        </div>

        {/* 1. Introduction */}
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            1. Introduction
          </h2>
          <p className="text-gray-700">
            Exelth is a healthcare infrastructure platform operated by{" "}
            <span className="font-semibold">
              Egostix Engineering Private Limited
            </span>
            . We offer two connected products:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-gray-700">
            <li>
              <span className="font-semibold">Exelth Platform</span> — a
              web-based management system for clinics and hospitals to handle
              patient visits, appointments, billing, prescriptions, clinical
              records, staff management, and operational analytics.
            </li>
            <li>
              <span className="font-semibold">Exelth Care App</span> — a
              mobile application for patients to book appointments, access
              medical records, receive real-time health updates, and connect
              with their care providers.
            </li>
          </ul>
          <p className="mt-2 text-gray-700">
            These Terms apply to all users of both products — including clinic
            owners, hospital administrators, doctors, authorized staff, and
            patients.
          </p>
        </section>

        {/* 2. User Eligibility */}
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            2. User Eligibility
          </h2>
          <ul className="list-inside list-disc space-y-1 text-gray-700">
            <li>
              You must be at least <span className="font-semibold">18 years old</span>{" "}
              to create an account or use Exelth independently.
            </li>
            <li>
              Patients under 18 may use the Exelth Care App only under the
              supervision and with the consent of a parent or legal guardian,
              who accepts these Terms on their behalf.
            </li>
            <li>
              Clinics and hospitals registering on the Exelth Platform must be
              legally constituted entities and may only be registered by an
              authorized representative.
            </li>
          </ul>
        </section>

        {/* 3. Clinic & Hospital Accounts */}
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            3. Clinic & Hospital Accounts
          </h2>
          <ul className="list-inside list-disc space-y-1 text-gray-700">
            <li>
              Clinics and hospitals must complete a registration and ownership
              verification process before listing their facility on Exelth.
            </li>
            <li>
              The registered account owner is responsible for all activity that
              occurs under the facility account, including actions taken by
              staff members added to the account.
            </li>
            <li>
              Facility listing on Exelth is free. Access to advanced platform
              features is subject to the applicable subscription plan.
            </li>
            <li>
              You are responsible for ensuring that your facility information —
              including services, doctor profiles, and availability — is
              accurate and kept up to date.
            </li>
            <li>
              Exelth reserves the right to verify facility details and may
              suspend or remove listings that contain false or misleading
              information.
            </li>
          </ul>
        </section>

        {/* 4. Use of the Platform */}
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            4. Use of the Platform
          </h2>
          <ul className="list-inside list-disc space-y-1 text-gray-700">
            <li>Use Exelth only for lawful purposes.</li>
            <li>
              Do not misuse, disrupt, or attempt unauthorized access to any
              part of the platform.
            </li>
            <li>
              Do not use the platform to store, share, or transmit information
              that is false, harmful, or violates the rights of others.
            </li>
            <li>
              Clinic and hospital accounts must use the platform only for
              managing their own facility operations and authorized patient
              care.
            </li>
          </ul>
        </section>

        {/* 5. Account Security */}
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            5. Account Security
          </h2>
          <ul className="list-inside list-disc space-y-1 text-gray-700">
            <li>You are responsible for keeping your login credentials private.</li>
            <li>
              Notify us immediately at{" "}
              <a
                href="mailto:support@exelth.com"
                className="text-green-600 underline"
              >
                support@exelth.com
              </a>{" "}
              if you become aware of any unauthorized access to your account.
            </li>
            <li>
              Clinic administrators are responsible for managing staff access
              levels and revoking access promptly when staff members leave or
              change roles.
            </li>
          </ul>
        </section>

        {/* 6. Role-Based Access & Staff Accounts */}
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            6. Role-Based Access & Staff Accounts
          </h2>
          <p className="text-gray-700">
            The Exelth Platform supports multiple roles including clinic
            administrators, doctors, reception staff, billing staff, and
            others. The following applies:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-gray-700">
            <li>
              Each staff member accesses only the features and patient data
              permitted by their assigned role.
            </li>
            <li>
              The clinic or hospital account owner is responsible for ensuring
              that staff members use the platform in accordance with these
              Terms and applicable laws.
            </li>
            <li>
              Misuse of access by any staff member is the responsibility of
              the registered clinic or hospital account.
            </li>
          </ul>
        </section>

        {/* 7. Medical Content */}
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            7. Medical Content
          </h2>
          <p className="text-gray-700">
            Any health-related information available on the platform is{" "}
            <span className="font-bold">for informational purposes only</span>{" "}
            and does not constitute medical advice. Clinical decisions,
            diagnoses, and treatments are made solely by licensed healthcare
            providers. Exelth is a platform that connects patients and
            providers — it does not practice medicine.
          </p>
        </section>

        {/* 8. Copyright & IP */}
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            8. Copyright & Intellectual Property
          </h2>
          <p className="text-gray-700">
            All content, software, branding elements, logos, designs, and code
            within the Exelth platform are the intellectual property of
            Egostix Engineering Private Limited. You may not copy, reproduce,
            redistribute, sell, or exploit any part of the app without
            explicit written permission.
          </p>
          <p className="mt-2 text-gray-700">
            &ldquo;Exelth&rdquo; and its logo are trademarks of Egostix
            Engineering Private Limited. Unauthorized use is strictly
            prohibited.
          </p>
        </section>

        {/* 9. Payments */}
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            9. Payments
          </h2>
          <p className="mb-2 text-gray-700 font-semibold">Patient Payments</p>
          <ul className="list-inside list-disc space-y-1 text-gray-700">
            <li>
              Payments for appointments and other patient services are
              processed through secure third-party payment gateways.
            </li>
            <li>
              Exelth does not store your payment card or banking details on
              its servers.
            </li>
            <li>
              Exelth is not responsible for failed payments, delays, or
              chargebacks unless caused by a confirmed platform error.
            </li>
          </ul>
          <p className="mb-2 mt-4 text-gray-700 font-semibold">
            Clinic & Hospital Subscriptions
          </p>
          <ul className="list-inside list-disc space-y-1 text-gray-700">
            <li>
              Access to paid features on the Exelth Platform is subject to the
              subscription plan selected during onboarding.
            </li>
            <li>
              Subscription fees are billed in advance on a monthly or annual
              basis as selected. Fees are non-refundable except where required
              by law or where a platform error is confirmed.
            </li>
            <li>
              Failure to renew a subscription may result in restricted access
              to platform features. Patient data will remain accessible to
              the facility for the grace period outlined at the time of
              expiry.
            </li>
            <li>
              The Exelth Wallet is available only to partnered clinics and
              hospitals for operational purposes. Patients do not hold wallet
              balances on Exelth.
            </li>
          </ul>
        </section>

        {/* 10. Data Handling */}
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            10. Data Handling
          </h2>
          <p className="text-gray-700">
            All data shared on Exelth is handled in accordance with our{" "}
            <a href="/privacy-policy" className="text-green-600 underline">
              Privacy Policy
            </a>
            .
          </p>
        </section>

        {/* 11. Data Ownership */}
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            11. Data Ownership
          </h2>
          <ul className="list-inside list-disc space-y-1 text-gray-700">
            <li>
              Patient health data — including medical records, prescriptions,
              and visit history — belongs to the patient. Exelth stores and
              processes this data on behalf of the patient and the treating
              facility.
            </li>
            <li>
              Clinic and hospital operational data — including visit records,
              billing data, and staff activity — belongs to the registered
              facility.
            </li>
            <li>
              Exelth may use aggregated, anonymized, non-identifiable data to
              improve its platform and services.
            </li>
          </ul>
        </section>

        {/* 12. Platform Availability */}
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            12. Platform Availability
          </h2>
          <p className="text-gray-700">
            Exelth aims to provide reliable and continuous access to the
            platform. However, we do not guarantee uninterrupted availability.
            Scheduled maintenance, technical incidents, or factors outside our
            control may occasionally affect access. We will communicate planned
            downtime in advance where possible.
          </p>
        </section>

        {/* 13. Termination */}
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            13. Termination
          </h2>
          <p className="text-gray-700">
            We reserve the right to suspend or terminate your access to the
            platform if you violate these Terms. For clinic and hospital
            accounts, we will provide notice before termination unless the
            violation is severe or involves active harm to patients or data
            security.
          </p>
        </section>

        {/* 14. Disclaimer */}
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            14. Disclaimer
          </h2>
          <p className="text-gray-700">
            The information on the Exelth platform — including medical records,
            prescriptions, lab results, and healthcare updates — is provided
            for general informational purposes only. It is not medical advice,
            diagnosis, or treatment.
          </p>
          <p className="mt-2 text-gray-700">
            Always consult a licensed physician or qualified healthcare provider
            with any questions about a medical condition or before making
            healthcare decisions. Never disregard professional medical advice
            or delay seeking it because of something you read or see on Exelth.
          </p>
          <p className="mt-2 text-gray-700">
            Exelth is not responsible for decisions made based on information
            in the app. While we make reasonable efforts to keep information
            accurate and up to date, Exelth does not guarantee that all content
            is complete, reliable, current, or error-free.
          </p>
          <p className="mt-2 text-gray-700">
            We are not responsible for inaccuracies, delays, or omissions,
            including those caused by data provided by hospitals, clinics, or
            other third parties.
          </p>
          <p className="mt-2 text-gray-700">
            To the fullest extent permitted by law, Exelth will not be liable
            for any injury, loss, or damage, whether direct or indirect,
            arising from your access to, use of, or reliance on any
            information or services on the platform.
          </p>
          <p className="mt-2 text-gray-700">
            In a medical emergency, call your local emergency number
            immediately.
          </p>
        </section>

        {/* 15. Limitation of Liability */}
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            15. Limitation of Liability
          </h2>
          <p className="text-gray-700">
            To the fullest extent permitted by applicable law, Exelth and
            Egostix Engineering Private Limited shall not be liable for any
            indirect, incidental, special, or consequential damages arising
            from your use of the platform, including but not limited to loss
            of data, loss of revenue, or interruption of operations.
          </p>
        </section>

        {/* 16. Governing Law */}
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            16. Governing Law & Disputes
          </h2>
          <p className="text-gray-700">
            These Terms are governed by and construed in accordance with the
            laws of India. Any disputes arising out of or in connection with
            these Terms shall be subject to the exclusive jurisdiction of the
            courts of India. We encourage users to contact us first to resolve
            any concern before pursuing legal action.
          </p>
        </section>

        {/* 17. Contact & Grievance */}
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-800">
            17. Contact & Grievance
          </h2>
          <p className="mb-2 text-gray-700">
            For questions, concerns, or grievances related to these Terms,
            please reach us at:
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

export default TermsConditionsPage;
