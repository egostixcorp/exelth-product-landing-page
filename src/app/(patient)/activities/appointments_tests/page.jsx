"use client";
import AppointmentCard from "@/components/App/Card/AppointmentCard";
import FallBackScreen from "@/components/App/Skeleton/FallBackScreen";
import React, { useEffect, useState } from "react";
import { getPatientAppointments } from "@/app/actions/appointment";
import { useAuth } from "@/context/AuthContext";
import { getPatientID } from "@/app/actions/user";
const AppointmentPage = () => {
  const { user } = useAuth();
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
        icon={"calneder"}
        title={"You don't have any appointment yet."}
        subtitle={"Start by booking your first one!."}
        actionText="Book Now"
        // onPress={handleBookNow}
      />
    );
  }

  return (
    <div className="redd flex min-h-screen w-full items-center justify-center">
      {/* Appointment & test */}

      <div className="min-h-95 mx-auto h-full max-w-3xl space-y-4 overflow-scroll p-4">
        {appointments.map((appt) => (
          <AppointmentCard key={appt.id} {...appt} />
        ))}
      </div>
    </div>
  );
};

export default AppointmentPage;
