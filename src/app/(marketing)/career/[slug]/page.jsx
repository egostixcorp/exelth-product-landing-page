"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

const CareerApplyPage = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const body = Object.fromEntries(formData.entries());
    body.role = slug;

    const res = await fetch("/api/career", {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      setStatus("Application submitted!");
      e.target.reset();
    } else {
      setStatus("Failed to submit.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-16 pt-32">
      <div className="mx-auto max-w-xl rounded-lg bg-white p-8 shadow">
        <h1 className="mb-6 text-3xl font-bold capitalize">
          Apply for {slug?.replaceAll("-", " ")}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input name="name" required placeholder="Your name"
            className="w-full rounded border px-3 py-2" />

          <input name="email" type="email" required
            placeholder="Your email"
            className="w-full rounded border px-3 py-2" />

          <input name="phone" required
            placeholder="Your phone number"
            className="w-full rounded border px-3 py-2" />

          <input name="portfolio"
            placeholder="Portfolio / GitHub / LinkedIn"
            className="w-full rounded border px-3 py-2" />

          <textarea name="message"
            placeholder="Tell us about yourself"
            className="w-full rounded border px-3 py-2" />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded bg-green-600 py-2 text-white"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>

        {status && <p className="mt-4 text-center">{status}</p>}
      </div>
    </div>
  );
};

export default CareerApplyPage;