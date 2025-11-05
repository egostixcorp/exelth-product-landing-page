"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext"; // Adjust based on your context
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LogoType from "@/components/Global/logo-type";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();
  const { signUpWithPhone } = useAuth();

  const [phone, setPhone] = useState("+91");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendOTP = (phone) => {
    router.push(`/verify?phone=${phone}`);
  };

  const handleSignup = async () => {
    if (!phone || !password || !confirmPassword) {
      toast.error("All fields are required");
      return;
    }

    if (!/^\+91\d{10}$/.test(phone)) {
      toast.error("Enter a valid 10-digit phone number");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    try {
      setLoading(true);
      await signUpWithPhone(phone, password);
      toast.success("OTP sent successfully");
      sendOTP(phone);
    } catch (error) {
      toast.error(error.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6">
      {/* --- Header --- */}
      <div className="mb-8 flex flex-col items-center">
        <LogoType />
        <h1 className="text-3xl font-semibold text-gray-900">Create Account</h1>
        <p className="mt-1 text-sm text-gray-500">Sign up to get started</p>
      </div>

      {/* --- Form --- */}
      <div className="w-full max-w-sm rounded-xl border border-gray-100 bg-white space-y-6 p-5 shadow-sm">
        {/* Phone Input */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <div className="flex rounded-lg border border-gray-300 focus-within:ring-1 focus-within:ring-green-500">
            <span className="border-r border-gray-200 bg-gray-50 px-3 py-2 text-gray-700">
              +91
            </span>
            <Input
              type="tel"
              inputMode="numeric"
              placeholder="Phone number"
              maxLength={10}
              className="flex-1 border-0 focus-visible:ring-0"
              value={phone.replace("+91", "")}
              onChange={(e) => setPhone("+91" + e.target.value)}
            />
          </div>
        </div>

        {/* Password */}
        <div className="relative">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Password
          </label>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="pr-10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="pr-10"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {/* Submit */}
        <Button
          onClick={handleSignup}
          disabled={loading}
          className="w-full rounded-lg bg-green-600 py-2 text-base font-medium text-white hover:bg-green-700"
        >
          {loading ? "Creating Account..." : "Sign Up"}
        </Button>
      </div>

      {/* --- Footer --- */}
      <div className="mt-6 text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="text-green-600 font-semibold hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
}
