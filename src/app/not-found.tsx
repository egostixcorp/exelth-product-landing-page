// app/not-found.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LogoType from "@/components/Global/logo-type";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <div className="absolute left-5 top-5">
        {" "}
        <LogoType />
      </div>
      <div className="max-w-md">
        <h1 className="text-6xl font-bold text-[#16a34a]">404</h1>
        <h2 className="mt-2 text-2xl font-semibold text-gray-900">
          Page Not Found
        </h2>
        <p className="mt-3 text-gray-600">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved. Try searching again or return to our main site.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link href="/search">
            <Button className="w-full bg-[#16a34a] text-white hover:bg-[#138f3f] sm:w-auto">
              Return to Search
            </Button>
          </Link>
          <Link href="/">
            <Button
              variant="outline"
              className="w-full border-[#16a34a] text-[#16a34a] hover:bg-[#e6f8ec] sm:w-auto"
            >
              Visit Landing Page
            </Button>
          </Link>
        </div>
      </div>

      <footer className="absolute bottom-6 text-sm text-gray-400">
        Exelth © {new Date().getFullYear()}
      </footer>
    </main>
  );
}
