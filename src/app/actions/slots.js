"use server";
import { createClient } from "../../utils/supabase/server";

export async function getDoctorAvailabilityByDoctorId(doctor_id) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("doctor_availability")
    .select("*")
    .eq("facility_doctor_id", doctor_id); // assuming `facility_doctor_id` is correct

  if (error) {
    console.error("Error fetching doctor availability:", error);
    throw new Error("Failed to fetch doctor availability");
  }

  return data;
}
export async function getAppointmentSeatsByDoctorId(doctor_id) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("appointment_seats")
    .select("*")
    .eq("doctor_id", doctor_id);

  if (error) {
    console.error("Error fetching appointment seats:", error);
    throw new Error("Failed to fetch appointment seats");
  }

  return data;
}
