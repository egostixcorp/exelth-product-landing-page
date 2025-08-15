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

const WaitlistModel = ({ children }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const res = await fetch("/api/waitlist", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (res.ok) {
      setStatus("Successfully joined the waitlist!");
      setEmail("");
    } else {
      setStatus(data.error);
    }

    setLoading(false);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-80 rounded-md tablet:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold">
            Join Our Waitlist
          </DialogTitle>
          <DialogDescription className="text-center">
            For clinics & hospitals — be the first to get early access to the
            Exelth platform.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col items-center gap-4"
        >
          <Input
            placeholder="Enter your email address"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 w-full focus:border-green-500 focus-visible:ring-green-500"
          />
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-600"
          >
            {loading ? "Joining..." : "Join Waitlist"}
          </Button>
          {status && <p className="mt-2 text-center text-sm">{status}</p>}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModel;
