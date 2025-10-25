"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function LoginDialog({
  triggerLabel = "Login",
  redirectTo = "/search",
}: {
  triggerLabel?: string;
  redirectTo?: string;
}) {
  const [open, setOpen] = useState(false);
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
      setOpen(false);
      router.replace(redirectTo);
    } catch (err: any) {
      toast.error(err.message || "Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className="mt-1 rounded-md px-3 py-2 text-left text-sm text-gray-700 transition hover:bg-gray-50 hover:text-green-600"
        //   variant="outline"
        >
          {triggerLabel}
        </button>
      </DialogTrigger>

      <DialogContent className="p-6 sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-semibold text-gray-900">
            Welcome Back
          </DialogTitle>
          <p className="text-center text-sm text-gray-600">
            Login to your account
          </p>
        </DialogHeader>

        <form onSubmit={handleLogin} className="mt-4 space-y-4">
          {/* Phone Input */}
          <div>
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
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Password
            </label>
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="focus-within:ring-2 focus-within:ring-green-500 focus:outline-none"
            />
          </div>

          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-sm font-medium text-green-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            className="w-full bg-green-600 text-white hover:bg-green-700"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>

          <div className="text-center text-sm text-gray-700">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              onClick={() => setOpen(false)}
              className="font-semibold text-green-600 hover:underline"
            >
              Sign up
            </Link>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
