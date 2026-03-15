"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const INQUIRY_TYPES = [
  "Demo Request",
  "Pricing & Plans",
  "Partnership",
  "Technical Support",
  "General Inquiry",
];

const ROLES = [
  "Doctor / Physician",
  "Clinic Administrator",
  "Hospital Manager",
  "Healthcare IT",
  "Investor / Partner",
  "Patient",
  "Other",
];

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
      phone: formData.get("phone"),
      organization: formData.get("organization"),
      role: formData.get("role"),
      inquiryType: formData.get("inquiryType"),
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
        setStatus({ type: "success", text: "Message sent! We'll be in touch shortly." });
        form.reset();
      } else {
        setStatus({ type: "error", text: "Failed to send message. Please try again." });
      }
    } catch (error) {
      setStatus({ type: "error", text: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="mt-10 w-full max-w-2xl space-y-6 rounded-lg bg-white p-8 shadow-md">
        <div>
          <h1 className="text-3xl font-bold text-neutral-800">Get in Touch</h1>
          <p className="mt-2 text-gray-600">
            Whether you&apos;re exploring Exelth for your clinic, hospital, or
            practice — our team is ready to help.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name + Email */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
              <Input
                id="name"
                name="name"
                placeholder="Dr. Rajesh Kumar"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@hospital.in"
                required
              />
            </div>
          </div>

          {/* Phone + Organization */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <Label htmlFor="organization">Clinic / Organization</Label>
              <Input
                id="organization"
                name="organization"
                placeholder="City General Hospital"
              />
            </div>
          </div>

          {/* Role + Inquiry Type */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="role">Your Role</Label>
              <select
                id="role"
                name="role"
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select your role</option>
                {ROLES.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
            <div>
              <Label htmlFor="inquiryType">Inquiry Type <span className="text-red-500">*</span></Label>
              <select
                id="inquiryType"
                name="inquiryType"
                required
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select inquiry type</option>
                {INQUIRY_TYPES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us about your needs or questions..."
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

        {status && (
          <p
            className={`mt-4 text-center text-sm font-medium ${
              status.type === "success" ? "text-green-600" : "text-red-500"
            }`}
          >
            {status.text}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
