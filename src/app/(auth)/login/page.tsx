"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { ExelthLogo } from "@/components/Exelth/logo";
// import { Colors } from "@/constants/Brand";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import LogoType from "@/components/Global/logo-type";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { signInWithPhone } = useAuth();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!phone || !password) {
      toast.error("Please enter both phone number and password.");
      return;
    }

    setLoading(true);
    try {
      const { error } = await signInWithPhone(`+91${phone}`, password);
      if (error) throw error;

      toast.success("Welcome back!");
      router.replace("/search");
    } catch (err: any) {
      toast.error(err.message || "Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-white px-4">
      {/* --- Header --- */}
      <div className="mb-10 flex flex-col items-center text-center">
        <LogoType />
        <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
        <p className="mt-2 text-gray-600">Login to your account</p>
      </div>

      {/* --- Login Form --- */}
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
      >
        {/* Phone Input */}
        <div className="mb-5">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <div className="flex items-center overflow-hidden rounded-md border border-gray-300 focus-within:ring-2 focus-within:ring-green-500">
            <span className="border-r border-gray-200 bg-gray-50 px-3 py-2 text-gray-700">
              +91
            </span>
            <input
              type="tel"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
              }
              className="w-full bg-white px-3 py-2 text-gray-900 focus:outline-none"
              maxLength={10}
              required
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-3">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Password
          </label>
          <Input
            type="password"
            placeholder="Enter password"
            value={password}
            className="focus-within:ring-2 focus-within:ring-green-500 focus:outline-none"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* <div className="mb-6 flex justify-end">
          <Link
            href="/forgot-password"
            className="text-sm font-medium text-green-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div> */}

        {/* Login Button */}
        <Button
          type="submit"
          className="w-full bg-green-600 text-white hover:bg-green-700"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>

      {/* --- Footer --- */}
      <div className="mt-6 text-sm text-gray-700">
        Don&apos;t have an account?{" "}
        <Link
          href="/signup"
          className="font-semibold text-green-600 hover:underline"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
