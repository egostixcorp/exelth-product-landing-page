"use client";

import AppointmentCard from "@/components/App/Card/AppointmentCard";
import FallBackScreen from "@/components/App/Skeleton/FallBackScreen";
import React, { useEffect, useState } from "react";
import { getPatientAppointments } from "@/app/actions/appointment";
import { useAuth } from "@/context/AuthContext";
import { getPatientID } from "@/app/actions/user";
import { useRouter } from "next/navigation";

const AppointmentPage = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const patient_id = await getPatientID(user?.id);
        const data = await getPatientAppointments(patient_id);
        setAppointments(data ?? []);
      } catch (error) {
        console.error("Failed to fetch appointments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [user?.id]);

  if (loading) {
    return (
      <FallBackScreen
        icon="calendar"
        title="Loading appointments..."
        subtitle="Please wait"
      />
    );
  }

  if (!appointments.length) {
    return (
      <FallBackScreen
        icon="calendar"
        title="No appointments yet."
        subtitle="Start by booking your first one!"
        actionText="Refresh"
        onPress={() => router.refresh()}
      />
    );
  }

  return (
    <div className="w-full max-w-3xl space-y-4">
      {appointments.map((appt) => (
        <AppointmentCard key={appt.id} {...appt} />
      ))}
    </div>
  );
};

export default AppointmentPage;
