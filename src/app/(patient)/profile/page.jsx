"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { getPatientDetails } from "@/app/actions/user";
import { getInitials } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
// import AvatarUpload from "@/components/Global/AvatarUploader";
import clsx from "clsx";

// type Patient = {
//   id: string;
//   full_name: string;
//   dob?: string;
//   gender?: string;
//   blood_group?: string;
//   phone?: string;
//   email?: string;
//   user?: {
//     avatar_url?: string;
//   };
// };

export default function PatientProfilePage() {
  const { id } = useParams();
  const { user, avatarUrl } = useAuth();
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user.id) return;
    const fetchPatient = async () => {
      const data = await getPatientDetails(user.id);
      setPatient(data);
      setLoading(false);
    };
    fetchPatient();
  }, [id]);

  if (loading) {
    return (
      <div className="flex h-[80vh] w-full items-center justify-center">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  if (!patient) {
    return (
      <div className="flex h-[80vh] w-full items-center justify-center">
        <p className="text-red-500">Patient not found.</p>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col items-center bg-white px-4 py-6 md:px-8">
      {/* --- Header --- */}
      <div className="w-full max-w-xl rounded-xl border bg-white p-6 shadow-lg">
        <div className="flex flex-col items-center">
          {/* --- Avatar --- */}
          <div className="relative mb-5 ">
            {avatarUrl || patient.user?.avatar_url ? (
              <Image
                src={avatarUrl || patient.user?.avatar_url || ""}
                alt={patient.full_name || "Profile"}
                width={120}
                height={120}
                className="h-28 w-28 rounded-full border border-gray-200 object-cover shadow-sm"
              />
            ) : (
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gray-800 text-3xl font-bold text-white">
                {getInitials(patient.full_name)}
              </div>
            )}

            {/* --- Edit Button --- */}
            <div className="absolute bottom-0 right-0">
              {/* <AvatarUpload>
                <Button
                  size="sm"
                  variant="secondary"
                  className="flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-sm shadow-sm"
                >
                  <Camera size={16} className="text-gray-700" />
                  Edit
                </Button>
              </AvatarUpload> */}
            </div>
          </div>

          {/* --- Name --- */}
          <h2 className="text-xl font-semibold text-gray-900">
            {patient.full_name}
          </h2>
        </div>
      </div>

      {/* --- Info Sections --- */}
      <div className="mt-6 w-full max-w-xl space-y-5">
        {/* Basic Info */}
        <div className="rounded-lg border bg-white p-5 shadow-sm">
          <h3 className="mb-3 text-lg font-semibold text-gray-800">
            Basic Information
          </h3>
          <div className="space-y-1.5 text-sm text-gray-600">
            <p>Full Name: {patient.full_name}</p>
            <p>DOB: {patient.dob || "Not provided"}</p>
            <p>Gender: {patient.gender || "Not provided"}</p>
            <p>Blood Group: {patient.blood_group || "Not provided"}</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="rounded-lg border bg-white p-5 shadow-sm">
          <h3 className="mb-3 text-lg font-semibold text-gray-800">Contact</h3>
          <div className="space-y-1.5 text-sm text-gray-600">
            <p>
              Phone:{" "}
              {patient.phone ||
                user?.phone?.replace("91", "") ||
                "Not provided"}
            </p>
            <p>Email: {patient.email || "Not provided"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
