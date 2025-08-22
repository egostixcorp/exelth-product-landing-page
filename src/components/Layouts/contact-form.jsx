"use client";

import React, { useState } from "react";
// import {} from ''
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const body = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="mt-10 w-full max-w-2xl space-y-6 rounded-lg bg-white p-8 shadow-md">
        <h1 className="text-3xl font-bold text-neutral-800">Get in Touch</h1>
        <p className="mt-2 text-gray-600">
          We&apos;d love to hear from you. Whether you have a question about
          features, feedback, or anything else — our team is ready to help.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Your Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Write your message here..."
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-green-600 px-4 py-2 font-medium text-white transition hover:bg-green-700 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status && <p className="mt-4 text-center text-sm">{status}</p>}
      </div>
    </div>
  );
};

export default ContactPage;
