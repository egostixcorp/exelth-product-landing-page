"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import LogoType from "@/components/Global/logo-type";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useAuth } from "@/context/AuthContext";
import { createClient } from "../../../utils/supabase/client";
import { setPatientField, setPatientFullName } from "../../../app/actions/user";

export default function RegisterPage() {
  const { user } = useAuth();
  const router = useRouter();
  const supabase = createClient();
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("+91");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user?.phone) setPhone(user.phone);
  }, [user]);

  const handleRegister = async () => {
    if (!fullName.trim()) {
      toast.error("Please enter your full name");
      return;
    }

    if (!dob) {
      toast.error("Please select your date of birth");
      return;
    }

    setLoading(true);
    try {
      // ✅ 1. Save patient info in Supabase
      await setPatientFullName(user?.id, fullName);
      await setPatientField(user?.id, "number", user?.phone);
      await setPatientField(user?.id, "dob", format(dob, "dd/MM/yyyy"));

      // ✅ 2. Update Supabase metadata
      const { error: metadataError } = await supabase.auth.updateUser({
        data: { register_user: true },
      });
      if (metadataError) throw metadataError;

      // ✅ 3. Notify backend (non-blocking)
      fetch("https://api.exelth.com/api/v1/notify-new-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: fullName,
          phone: user?.phone,
          dob: format(dob, "dd-MM-yyyy"),
        }),
      }).catch((err) => console.warn("Notification failed", err));

      // ✅ 4. Redirect to patient dashboard
      toast.success("Registration complete!");
      router.replace("/patient");
    } catch (err) {
      toast.error(err.message || "Registration failed");
      console.error("Registration error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6">
      {/* --- Header --- */}
      <div className="mb-10 flex flex-col items-center">
        <LogoType />
        <h1 className="text-3xl font-semibold text-gray-900">
          Finish Signing Up
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Complete your profile to continue
        </p>
      </div>

      {/* --- Form --- */}
      <div className="w-full max-w-md space-y-5 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
        {/* Full Name */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Full Name</label>
          <Input
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        {/* Date of Birth */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">
            Date of Birth
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                {dob ? (
                  format(dob, "dd/MM/yyyy")
                ) : (
                  <span className="text-gray-500">Select date</span>
                )}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="p-0">
              <Calendar
                mode="single"
                selected={dob}
                onSelect={setDob}
                captionLayout="dropdown"
                fromYear={1950}
                toYear={new Date().getFullYear()}
                disabled={(date) => date > new Date()}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Phone Number */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <div className="flex">
            <span className="flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-700">
              +91
            </span>
            <Input
              type="tel"
              maxLength={10}
              value={phone.replace("91", "")}
              onChange={(e) => setPhone("+91" + e.target.value)}
              className="rounded-l-none"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        {/* Register Button */}
        <Button
          onClick={handleRegister}
          disabled={loading}
          className="w-full rounded-lg bg-green-600 py-2 text-base font-medium text-white hover:bg-green-700"
        >
          {loading ? "Registering..." : "Register"}
        </Button>
      </div>
    </div>
  );
}
