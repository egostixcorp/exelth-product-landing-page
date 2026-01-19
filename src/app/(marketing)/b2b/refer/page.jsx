export default function ReferHealthcareCentrePage() {
  return (
    <main className="mx-auto h-screen max-w-4xl text-center flex-col flex items-center justify-center px-6 py-20">
      <h1 className="text-3xl font-semibold">
        Refer a clinic or hospital to Exelth
      </h1>

      <p className="mt-4 px-10 text-gray-600 text-center">
        Know a healthcare center struggling with operations? Refer them to
        Exelth and help them modernize care delivery.
      </p>

      <div className="mt-10 rounded-xl border p-6">
        <p className="font-medium">How it works</p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-600">
          <li>You submit clinic details</li>
          <li>Our team validates and onboards them</li>
          <li>You receive referral benefits</li>
        </ul>
      </div>

      <div className="mt-8">
        <button className="rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-700">
          Submit a referral
        </button>
      </div>
    </main>
  );
}
