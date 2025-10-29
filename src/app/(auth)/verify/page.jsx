"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext"; // adjust path as needed
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { createClient } from "../../../utils/supabase/client";
import LogoType from "@/components/Global/logo-type";

export default function VerifyPage() {
  const supabase = createClient();
  const router = useRouter();
  const searchParams = useSearchParams();
  const phone = searchParams.get("phone") || "";
  const { verifyOtp } = useAuth();

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    if (!otp) {
      toast.error("Please enter the OTP");
      return;
    }

    setLoading(true);
    try {
      // Step 1: Verify OTP
      const { data, error } = await verifyOtp(phone, otp);
      if (error) throw error;

      // Step 2: Ensure session/user exists
      const { data: userData, error: userError } =
        await supabase.auth.getUser();
      if (userError || !userData?.user) {
        throw new Error("Could not fetch user after OTP verification.");
      }

      console.log("✅ User verified:", userData.user);

      // Step 3: Redirect to registration
      toast.success("OTP verified successfully");
      router.replace("/register");
    } catch (err) {
      console.error("❌ OTP verification failed:", err);
      toast.error(err.message || "Verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6">
      {/* --- Header --- */}
      <div className="mb-8 flex flex-col items-center">
        <LogoType />
        <h1 className="text-3xl font-semibold text-gray-900">Verify OTP</h1>
        <p className="mt-1 text-sm text-gray-500">
          Enter the OTP sent to your phone number
        </p>
        {phone && <p className="mt-1 font-semibold text-gray-700">{phone}</p>}
      </div>

      {/* --- Form --- */}
      <div className="w-full max-w-md space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            OTP
          </label>
          <Input
            type="text"
            inputMode="numeric"
            maxLength={6}
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>

        <Button
          onClick={handleVerify}
          disabled={loading}
          className="w-full rounded-lg bg-green-600 py-2 text-base font-medium text-white hover:bg-green-700"
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </Button>
      </div>

      {/* --- Footer --- */}
      {/* <div className="mt-6 text-center text-sm text-gray-600">
        Didn’t receive the code?{" "}
        <button
          onClick={() => toast.info("Resend OTP feature coming soon")}
          className="text-green-600 hover:underline"
        >
          Resend
        </button>
      </div> */}
    </div>
  );
}
