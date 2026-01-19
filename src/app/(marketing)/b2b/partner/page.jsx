export default function BecomePartnerPage() {
  return (
    <main className="mx-auto h-screen max-w-5xl px-6 flex items-center text-center flex-col justify-center pt-20 ">
      <h1 className="text-3xl font-semibold">Become an Exelth partner</h1>

      <p className="mt-4 max-w-2xl text-gray-600">
        We partner with labs, diagnostic centers, healthcare vendors, and
        regional operators to expand access and efficiency.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border p-6">
          <h3 className="font-medium">Who can partner?</h3>
          <ul className="mt-3 list-disc pl-5 text-sm text-gray-600">
            <li>Diagnostic labs</li>
            <li>Medical device vendors</li>
            <li>Healthcare networks</li>
          </ul>
        </div>

        <div className="rounded-xl border p-6">
          <h3 className="font-medium">Why partner?</h3>
          <ul className="mt-3 list-disc pl-5 text-sm text-gray-600">
            <li>Shared demand</li>
            <li>API & workflow integrations</li>
            <li>Revenue partnerships</li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <button className="rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-700">
          Apply for partnership
        </button>
      </div>
    </main>
  );
}
