"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { getPatientDetails } from "@/app/actions/user";
import { getPatientAppointments } from "@/app/actions/appointment";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Inbox, CalendarDays, Building2 } from "lucide-react";
import UpcomingAppointments from "../Global/UpcomingAppointments";
import FacilitySuggestionSection from "../Facility/FacilitySuggestionSection";

// import FacilitySuggestionSection from "@/components/Home/FacilitySuggestionSection";
// import ServiceGrid from "@/components/Home/ServiceGrid";
// import SearchCareEntry from "@/components/Home/SearchCareEntry";
// import UpcomingAppointments from "@/components/Home/UpcomingAppointments";

export default function PatientHomePage() {
  const { user } = useAuth();
  const router = useRouter();

  const [appointments, setAppointments] = useState([]);
  const [patientName, setPatientName] = useState("Patient");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      if (!user?.id) return;

      setLoading(true);
      try {
        const profile = await getPatientDetails(user.id);
        if (profile?.full_name) setPatientName(profile.full_name);

        const appt = await getPatientAppointments(profile.id);
        setAppointments(appt || []);
      } catch (err) {
        console.error("Failed to load home data:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [user]);

  return (
    <main className="min-h-screen bg-white ">
      <section className="mx-auto rred max-w-5xl laptop:w-[55rem] tablet:w-[40rem] px-2 py-6">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Welcome, {loading ? "..." : patientName}
            </h1>
            <p className="text-sm text-gray-500">
              Explore care services, appointments & more
            </p>
          </div>

          {/* <Button
            variant="ghost"
            size="icon"
            onClick={() => router.push("/patient/inbox")}
            className="rounded-full"
          >
            <Inbox className="h-5 w-5 text-gray-600" />
          </Button> */}
        </div>

        {/* Search Bar */}
        {/* <SearchCareEntry /> */}

        {/* Upcoming Appointments */}
        <div className="redd mt-6 w-80 tablet:w-auto">
          <UpcomingAppointments appointments={appointments} loading={loading} />
        </div>

        {/* Facility Suggestions */}
        <div className="redd mt-8 w-80 tablet:w-auto">
          <FacilitySuggestionSection />{" "}
        </div>

        {/* Service Grid */}
        <div className="mt-8">{/* <ServiceGrid /> */}</div>
      </section>
    </main>
  );
}
