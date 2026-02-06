"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { createClient } from "@/utils/supabase/client";
import clsx from "clsx";

type WaitlistVariant = "exelth" | "bw";

interface WaitlistModalProps {
  children: React.ReactNode;
  joinFor: string;
  title: string;
  description: string;
  successMessage?: string;
  variant?: WaitlistVariant;
}

const WaitlistModal = ({
  children,
  joinFor,
  title,
  description,
  successMessage = "You’ve been added to the waitlist.",
  variant = "exelth",
}: WaitlistModalProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const supabase = createClient();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const { error } = await supabase.from("waitlist").insert({
      email,
      join_for: joinFor,
    });

    if (error) {
      if (error.code === "23505") {
        setStatus("You’re already on this waitlist.");
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } else {
      setStatus(successMessage);
      setEmail("");
    }

    setLoading(false);
  };

  const isExelth = variant === "exelth";

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent
        className={clsx(
          "max-w-80 rounded-md tablet:max-w-md",
          isExelth ? "bg-white" : "border border-black bg-white",
        )}
      >
        <DialogHeader>
          <DialogTitle
            className={clsx(
              "text-center text-xl font-semibold",
              isExelth ? "text-green-600" : "text-black",
            )}
          >
            {title}
          </DialogTitle>

          <DialogDescription className="text-center">
            {description}
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col items-center gap-4"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={clsx(
              "h-12 w-full",
              isExelth
                ? "focus:border-green-500 focus-visible:ring-green-500"
                : "border-black focus:border-black focus-visible:ring-black",
            )}
          />

          <Button
            type="submit"
            disabled={loading}
            className={clsx(
              "w-full",
              isExelth
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-black text-white hover:bg-neutral-800",
            )}
          >
            {loading ? "Joining..." : "Join Waitlist"}
          </Button>

          {status && (
            <p className="mt-2 text-center text-sm text-neutral-700">
              {status}
            </p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;
