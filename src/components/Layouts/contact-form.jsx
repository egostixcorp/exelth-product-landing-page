"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";

const INQUIRY_TYPES = [
  "Free trial for clinic software",
  "Software for clinic/hospital(s)",
  "Software for multi-centre clinics",
  "Channel partnerships",
  "Support for existing subscription",
  "Create a free profile",
  "Career opportunities",
];

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [type, setType] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const body = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus({ type: "success", text: "Message sent!" });
        form.reset();
      } else {
        setStatus({ type: "error", text: "Failed to send." });
      }
    } catch {
      setStatus({ type: "error", text: "Something went wrong." });
    } finally {
      setLoading(false);
    }
  };

  const showBasicFields =
    type !== "Career opportunities" && type !== "Create a free profile";

  const showClinicOwnership = type === "Free trial for clinic software";

  const showDoctorPatient = type === "Support for existing subscription";

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="mt-10 w-full max-w-2xl space-y-6 rounded-lg bg-white p-8 shadow-md">
        <h1 className="text-3xl font-bold">Contact Us</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Interested in */}
          <div>
            <Label>Interested in *</Label>
            <select
              name="inquiryType"
              required
              value={type}
              onChange={(e) => {
                const selected = e.target.value;
                setType(selected);

                if (selected === "Create a free profile") {
                  router.push("/b2b/register");
                }

                if (selected === "Career opportunities") {
                  router.push("/career");
                }
              }}
              className="mt-1 w-full rounded-md border px-3 py-2"
            >
              <option value="">Select option</option>
              {INQUIRY_TYPES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>

          {/* Basic fields */}
          {showBasicFields && (
            <>
              <div>
                <Label>Name *</Label>
                <Input name="name" required placeholder="Your name" />
              </div>

              <div>
                <Label>Mobile Number *</Label>
                <Input name="phone" required placeholder="Your mobile number" />
              </div>

              <div>
                <Label>Email *</Label>
                <Input
                  name="email"
                  type="email"
                  required
                  placeholder="Your email"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Country</Label>
                  <Input
                    name="country"
                    defaultValue="India"
                    placeholder="Your country"
                  />
                </div>
                <div>
                  <Label>City *</Label>
                  <Input name="city" required placeholder="Your city" />
                </div>
              </div>

              <div>
                <Label>Message</Label>
                <Textarea name="message" rows={4} placeholder="Your message" />
              </div>
            </>
          )}

          {/* Doctor / Patient */}
          {showDoctorPatient && (
            <div>
              <Label>I am a</Label>
              <div className="mt-2 flex gap-4">
                <label>
                  <input type="radio" name="userType" value="Doctor" /> Doctor
                </label>
                <label>
                  <input type="radio" name="userType" value="Patient" /> Patient
                </label>
              </div>
            </div>
          )}

          {/* Own clinic */}
          {showClinicOwnership && (
            <div>
              <Label>Do you own a clinic?</Label>
              <div className="mt-2 flex gap-4">
                <label>
                  <input type="radio" name="ownClinic" value="Yes" /> Yes
                </label>
                <label>
                  <input type="radio" name="ownClinic" value="No" /> No
                </label>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-green-600 px-4 py-2 text-white"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>

        {status && <p className="text-center">{status.text}</p>}
      </div>
    </div>
  );
};

export default ContactPage;
