"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { getPatientDetails } from "@/app/actions/user";
import { getInitials } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import clsx from "clsx";
import { toast } from "sonner";
import BackButton from "@/components/App/Button/BackButton";

const patientProfileNav = [
  { label: "Personal information", route: "" },
  { label: "View profile", route: "" },
  { label: "Account settings", route: "" },
  { label: "Get help", route: "" },
  { label: "Give us feedback", route: "" },
  { label: "Payments", route: "" },
  { label: "Legal", route: "" },
];
const profile = [
  { label: "About me", route: "/profile", icon: "/icon/" },
  { label: "Family Sharing", route: "/profile/family", icon: "/icon/fp.png" },
];
// type Patient = {
//   full_name: string;
//   user: {
//     avatar_url: string | null;
//   };
// };

export default function ProfileLayout({ children }) {
  const { user, avatarUrl, logout } = useAuth();
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const activeTab = profile.find((tab) => pathname === tab.route);
  const currentLabel = activeTab?.label ?? "Profile";
  const fetchPatient = useCallback(async () => {
    if (!user?.id) return;
    try {
      const data = await getPatientDetails(user?.id);
      setPatient(data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch profile");
    } finally {
      setLoading(false);
    }
  }, [user?.id]);

  useEffect(() => {
    fetchPatient();
  }, [fetchPatient]);
  console.log(Boolean(avatarUrl));
  console.log(Boolean(patient?.user?.avatar_url));

  if (loading)
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-green-600" />
      </div>
    );

  return (
    <div className="min-h-screen w-full bg-white px-4 md:px-8">
      <div id="mobile-layout" className="block size-full p-2 tablet:hidden">
        {/* Profile Card */}
        <div
          onClick={() => router.push(`/profile/view-profile?id=${user?.id}`)}
          className="mx-auto mb-6 flex w-full max-w-md flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
        >
          {avatarUrl || patient?.user?.avatar_url ? (
            <Image
              src={avatarUrl || patient?.user?.avatar_url || ""}
              alt="Avatar"
              width={96}
              height={96}
              className="mb-3 h-24 w-24 rounded-full object-cover shadow-sm"
            />
          ) : (
            <div className="mb-3 flex h-24 w-24 items-center justify-center rounded-full bg-black text-3xl font-bold text-white shadow-sm">
              {getInitials(patient?.full_name)}
            </div>
          )}

          <h2 className="text-xl font-semibold text-gray-900">
            {patient?.full_name ?? "Unknown"}
          </h2>
        </div>

        {/* Action Cards */}
        <div className="mx-auto mb-8 grid max-w-md grid-cols-2 gap-4">
          {/* Refer a Friend */}
          <div className="relative flex flex-col items-center justify-center rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-md">
            <Image
              src="/icon/rf.png"
              alt="Refer"
              width={80}
              height={80}
              className="mb-2"
            />
            <span className="text-sm font-medium text-gray-800">
              Refer a Friend
            </span>
          </div>

          {/* Family Sharing */}
          <div className="relative flex flex-col items-center justify-center rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-md">
            <div className="absolute right-2 top-2 rounded-md bg-green-600 px-2 py-0.5 text-[10px] font-semibold text-white">
              Coming Soon
            </div>
            <Image
              src="/icon/fp.png"
              alt="Family"
              width={80}
              height={80}
              className="mb-2"
            />
            <span className="text-sm font-medium text-gray-800">
              Family Sharing
            </span>
          </div>
        </div>

        {/* Developer Card (optional) */}
        {/* {process.env.NODE_ENV === "development" && (
        <button
          onClick={() => router.push("/models/doctor-verify")}
          className="mx-auto mb-6 flex w-full max-w-md items-center gap-3 rounded-xl border border-gray-100 bg-white p-4 text-left shadow-sm transition hover:shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#16a34a"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          <div>
            <h3 className="text-base font-semibold text-gray-900">
              Are you a doctor?
            </h3>
            <p className="text-sm text-gray-500">Verify your identity</p>
          </div>
        </button>
      )} */}

        {/* Navigation List */}
        <div className="mx-auto w-full max-w-md space-y-1">
          {patientProfileNav.map((item) => (
            <Link
              key={item.route}
              href={item.route}
              className={clsx(
                "flex w-full items-center justify-between rounded-lg bg-white px-4 py-3 text-base font-medium text-gray-800 transition",
              )}
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Logout */}
        <div className="mx-auto mt-8 w-full max-w-md">
          <Button
            onClick={logout}
            className="w-full rounded-xl bg-red-600 text-white hover:bg-red-700"
          >
            Logout
          </Button>
        </div>
      </div>
      <div
        id="desktop-layout"
        className="hidden h-full items-start justify-center tablet:flex"
      >
        <aside className="hidden h-full w-80 flex-shrink-0 border-r bg-white p-6 md:flex md:flex-col">
          <h1 className="mb-6 text-2xl font-semibold text-gray-800">Profile</h1>

          <nav className="redd flex flex-col gap-1">
            {profile.map(({ route, label, icon: Icon }) => {
              const isActive = pathname === route;
              {
                /* const avatarSrc = label === "About me" ?
                    patient?.user?.avatar_url : Icon; */
              }
              const avatarSrc =
                label === "About me" ? patient?.user?.avatar_url : Icon;
              return (
                <Link
                  key={route}
                  href={route}
                  className={clsx(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-base font-medium transition-colors",
                    isActive
                      ? "bg-neutral-100"
                      : "text-black hover:bg-gray-100 hover:text-gray-900",
                  )}
                >
                  <div className="redd flex size-10 items-center justify-center overflow-hidden rounded-full">
                    {avatarSrc ? (
                      <Image
                        src={
                          label === "About me"
                            ? patient?.user?.avatar_url
                              ? patient?.user?.avatar_url
                              : Icon
                            : Icon
                        }
                        alt={label}
                        width={32}
                        height={32}
                        className="size-full object-cover"
                      />
                    ) : (
                      <div className="size-8 rounded-full bg-gray-300" />
                    )}
                  </div>
                  <span>{label}</span>
                </Link>
              );
            })}
          </nav>
        </aside>
        <main className="relative flex-1 flex-col items-center justify-center overflow-y-auto p-4 md:flex md:p-8">
          <div className="absolute left-2 top-2 block tablet:hidden">
            <BackButton />
          </div>
          <h2 className="sticky mb-4 w-full pl-10 text-left text-lg font-semibold text-gray-900 md:text-xl">
            {currentLabel}
          </h2>
          {children}
        </main>
      </div>
    </div>
  );
}
