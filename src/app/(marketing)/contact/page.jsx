import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
const ContactPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-2xl space-y-6 mt-10 tablet:mt-0 rounded-lg bg-white p-8 shadow-md">
        <div>
          <h1 className="text-3xl font-bold text-neutral-800">Get in Touch</h1>
          <p className="mt-2 text-gray-600">
            We&apos;d love to hear from you. Whether you have a question about
            features, feedback, or anything else — our team is ready to help.
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <Label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </Label>
            <Input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>

          <div>
            <Label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>

          <div>
            <Label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </Label>
            <Textarea
              id="message"
              rows={4}
              placeholder="Write your message here..."
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            ></Textarea>
          </div>

          <button
            type="button"
            className="w-full rounded-md bg-green-600 px-4 py-2 font-medium text-white transition hover:bg-green-700"
          >
            Send Message
          </button>
        </form>

        <div className="border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-600">
            Or reach us directly at{" "}
            <a
              href="mailto:support@exelth.com"
              className="text-green-600 underline"
            >
              support@exelth.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
