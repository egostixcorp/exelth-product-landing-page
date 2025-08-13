import Link from "next/link";

export default function AccountDeletionPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-4 tablet:text-3xl text-2xl font-bold text-gray-900">
        Exelth Account Deletion
      </h1>

      <p className="mb-6 text-gray-700">
        At Exelth, we respect your privacy and give you full control over your
        personal data. If you wish to delete your account, please follow the
        steps below. Deleting your account will permanently remove your profile,
        appointments, medical records, and all related data from our systems.
      </p>

      <h2 className="mb-2 text-xl font-semibold text-gray-800">
        How to Request Account Deletion
      </h2>
      <ol className="mb-6 list-inside list-decimal space-y-2 text-gray-700">
        <li>Log in to the Exelth app.</li>
        <li>
          Go to <strong>Profile → Account Settings</strong>.
        </li>
        <li>
          Tap on <strong>Delete Account</strong>.
        </li>
        <li>Follow the on-screen confirmation steps.</li>
      </ol>

      <h2 className="mb-2 text-xl font-semibold text-gray-800">
        Request via Email
      </h2>
      <p className="mb-6 text-gray-700">
        You can also request deletion by emailing us at{" "}
        <a href="mailto:support@exelth.com" className="text-blue-600 underline">
          support@exelth.com
        </a>{" "}
        from your registered email address with the subject line{" "}
        <strong>&quot;Account Deletion Request&quot;</strong>.
      </p>

      <h2 className="mb-2 text-xl font-semibold text-gray-800">
        What Happens Next
      </h2>
      <ul className="mb-6 list-inside list-disc space-y-2 text-gray-700">
        <li>
          We will verify your identity to ensure the security of your account.
        </li>
        <li>
          Once verified, your account and all associated data will be deleted
          within <strong>7 business days</strong>.
        </li>
        <li>
          You will receive a confirmation email once the deletion is complete.
        </li>
      </ul>

      <p className="text-sm text-gray-600">
        Note: Account deletion is irreversible. Once deleted, your data cannot
        be recovered.
      </p>

      <div className="mt-8 flex justify-center">
        <Link
          href="/"
          className="inline-block rounded-lg bg-green-600 px-6 py-3 font-medium text-white transition-colors hover:bg-green-700"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
}
