"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Waitlist = () => {
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
    <div className="relative">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-2"
      >
        <Input
          placeholder="Email address.."
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-12 w-72 focus:border-green-500 focus-visible:ring-green-500 laptop:w-96"
        />
        <Button
          type="submit"
          disabled={loading}
          className="right-1 top-1 h-10 w-full bg-green-500 hover:bg-green-600 laptop:absolute laptop:w-fit"
        >
          {loading ? "Joining..." : "Join Waitlist"}
        </Button>
        {status && <p className="mt-2 text-center text-sm p-0.5 bg-green-100 px-1 rounded-md">{status}</p>}
      </form>
    </div>
  );
};

export default Waitlist;
