import Link from "next/link";

export default function B2BRegisterPage() {
  return (
    <main className="mx-auto flex h-screen max-w-5xl flex-col items-center justify-center px-6 py-20 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">
        List your clinic or hospital on Exelth
      </h1>

      <p className="mt-4 max-w-2xl text-center text-gray-600">
        Exelth helps clinics and hospitals manage appointments, staff,
        prescriptions, labs, and patient flow — without chaos.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          "Centralized operations",
          "Doctor & staff scheduling",
          "Patient flow & visit tracking",
        ].map((item) => (
          <div key={item} className="rounded-xl border border-gray-200 p-5">
            <p className="font-medium">{item}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex gap-4">
        <Link
          href="https://app.exelth.com/auth/sign-up"
          className="rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-700"
        >
          Get started
        </Link>

        <Link
          href="/contact"
          className="rounded-lg border px-6 py-3 text-gray-700 hover:bg-gray-50"
        >
          Talk to sales
        </Link>
      </div>
    </main>
  );
}
