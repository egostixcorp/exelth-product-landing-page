"use client";

import { useState } from "react";
import DocsHeader from "@/components/Docs/Header";
import { createClient } from "@/utils/supabase/client";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Icon from "../Global/Icon";

export default function DocsPlaceholder() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const supabase = createClient();

  const handleNotify = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setStatus("error");
      return;
    }

    // ✅ Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      // Send email to API route (handles DB insert + email sending)
      const res = await fetch("/api/docs-waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      setEmail("");
      setStatus("success");
    } catch (err) {
      console.error("Notify error:", err);
      setStatus("error");
    }
  };

  if (
    process.env.NODE_ENV === "production" ||
    process.env.NODE_ENV === "development"
  ) {
    return (
      <div className="flex min-h-screen flex-col bg-gray-50">
        <DocsHeader />
        <main className="flex flex-1 items-center justify-center p-6">
          <div className="max-w-lg rounded-lg border border-green-300 bg-green-50 px-6 py-6 text-center shadow-sm">
            <h2 className="flex items-center justify-center gap-5 text-lg font-semibold text-green-800">
              <Icon.Construction className="text-black" /> Exelth Docs Under
              Construction
            </h2>
            <p className="mt-2 text-sm text-green-700">
              We&apos;re currently building this help center to make your Exelth
              B2B experience even smoother. Enter your email below to get
              notified when we launch.
            </p>

            <form
              onSubmit={handleNotify}
              className="mt-4 flex flex-col sm:flex-row sm:items-center sm:space-x-2"
            >
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                // className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:outline-none"
                required
              />
              <Button
                type="submit"
                variant={"exelth"}
                disabled={status === "loading"}
                // className="mt-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 disabled:opacity-50 sm:mt-0"
              >
                {status === "loading" ? "Sending..." : "Notify Me"}
              </Button>
            </form>

            {status === "success" && (
              <p className="mt-3 text-sm text-green-700">
                You&apos;ll be notified when our docs go live!
              </p>
            )}
            {status === "error" && (
              <p className="mt-3 text-sm text-red-700">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </main>
      </div>
    );
  }

  return null;
}
