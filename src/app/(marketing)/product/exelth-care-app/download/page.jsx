// app/download/page.tsx (Next.js 14 App Router)
import Icon from "@/components/Global/Icon";
import Image from "next/image";

export default function DownloadPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6 pt-20">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 text-center shadow-lg">
        {/* Logo */}
        <Image
          src="/brand/exelth-green.png" // Replace with your logo path
          alt="Exelth Logo"
          width={80}
          height={80}
          className="mx-auto mb-4"
        />

        <h1 className="mb-2 text-2xl font-bold text-gray-800">
          Download Exelth App
        </h1>
        <p className="mb-6 text-sm text-gray-600">
          You&apos;re about to try our early-access version before it&apos;s on
          Google Play. Your feedback will help us shape the future of
          healthcare.
        </p>

        {/* QR Code */}
        <div className="mb-6 flex flex-col rounded-lg bg-gray-100 p-4">
          <Image
            src="/qr-code.png" // Replace with your QR code image
            alt="QR Code to download Exelth"
            width={180}
            height={180}
          />
        </div>

        {/* Download Button */}
        <a
          href="/apk/exelth.apk" // Replace with your APK file path
          className="flex items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3 font-medium text-white transition hover:bg-green-700"
        >
          <Icon.Smartphone /> Download APK
        </a>

        {/* Safety Section */}
        <div className="mt-8 text-left">
          <h2 className="mb-2 text-lg font-semibold text-gray-800">
            Why This is Safe
          </h2>
          <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
            <li>Official build provided directly by the Exelth team.</li>
            <li>
              No ads, no hidden fees — 100% focused on your healthcare
              experience.
            </li>
            <li>
              Secure & private — we never sell or share your personal data.
            </li>
          </ul>
        </div>

        {/* Installation Steps */}
        <div className="mt-6 text-left">
          <h2 className="mb-2 text-lg font-semibold text-gray-800">
            How to Install
          </h2>
          <ol className="list-inside list-decimal space-y-1 text-sm text-gray-600">
            <li>Download the APK using the button above.</li>
            <li>
              If prompted, allow{" "}
              <strong>&quot;Install from Unknown Sources&quot;</strong> in your
              device settings.
            </li>
            <li>
              Open the file and tap <strong>Install</strong>.
            </li>
            <li>Launch Exelth from your app list and start exploring.</li>
          </ol>
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-xs text-gray-500">
          Disclaimer: This pre-release version is for testing only. Use at your
          own discretion. Features may change before our public release.
        </p>

        {/* Contact */}
        <p className="mt-2 text-xs text-gray-500">
          Contact:{" "}
          <a href="mailto:support@exelth.com" className="text-green-600">
            support@exelth.com
          </a>
        </p>
      </div>
    </main>
  );
}
