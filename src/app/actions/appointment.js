"use server";
import { createClient } from "../../utils/supabase/server";

export async function getPatientAppointments(id) {
  const supabase = await createClient();
  // const user = await getUser();
  const { data, error } = await supabase
    .from("patient_appointments")
    .select("*")
    .eq("patient_id", id)
    .order("created_at", { ascending: false });

  if (error) {
    return { error: { message: error?.message } };
  }
  return data;
}
export async function getAppointmentById(appointment_id) {
  const supabase = await createClient();
  const { data: orgData, error: orgError } = await supabase
    .from("org_appointments")
    .select(
      `
      id, appointment_id, date, time, status, doctor_id, department_id,
      patient_id,appointment_seat_id, 
      staff:doctor_id ( user:user_id(*) ),
      department:department_id ( name ),
      patient:patient_id ( full_name, dob )
    `,
    )
    .eq("appointment_id", appointment_id)
    .single();

  const { data: patientData, error: patientError } = await supabase
    .from("patient_appointments")
    .select("cancelled")
    .eq("appointment_id", appointment_id)
    .single();

  if (orgError) throw new Error(orgError.message);

  return {
    ...orgData,
    cancelled: patientData?.cancelled ?? false,
  };
}
export async function getAppointmentSeatsById(seat_id) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("appointment_seats")
    .select("*")
    .eq("id", seat_id);

  if (error) {
    console.error("Error fetching appointment seats:", error);
    throw new Error("Failed to fetch appointment seats");
  }

  return data[0];
}
const generateAppointmentId = () => {
  const randomNum = Math.floor(Math.random() * 1e8); // Max 8-digit
  return `APPT-${randomNum.toString().padStart(8, "0")}`; // e.g. APPT-02345678
};

// TypeScript + Supabase
export async function bookAppointment({
  patient_id,
  doctor_id,
  facility_id,
  department_id,
  date,
  time,
  seat_id,
  fee,
  payment_method,
}) {
  // : {
  //   patient_id: string,
  //   doctor_id: string,
  //   facility_id: string,
  //   date: string,
  //   time: string,
  //   seat_id: string,
  //   fee?: number,
  // }
  const supabase = await createClient();
  const appointment_id = generateAppointmentId();
  // 0. Check if the patient already has an appointment on the same date
  const { data: existingAppointments, error: checkError } = await supabase
    .from("patient_appointments")
    .select("id")
    .eq("patient_id", patient_id)
    .eq("date", date)
    .eq("time", time)
    .eq("cancelled", false);

  if (checkError) {
    console.error("❌ Failed to check existing appointments", checkError);
    throw new Error("Error checking existing appointments.");
  }

  if (existingAppointments && existingAppointments.length > 0) {
    throw new Error("You already have an appointment on this date.");
  }
  // 1. Update appointment_seat to booked
  const { data: seatData, error: seatError } = await supabase
    .from("appointment_seats")
    .update({
      status: "booked",
      patient_id,
      appointment_id,
    })
    .eq("id", seat_id)
    .select("*, start_time, end_time")
    .single();

  if (seatError || !seatData) {
    console.error("❌ Failed to book seat", seatError);
    throw new Error("Failed to book seat.");
  }

  // 2. Insert into org_appointments
  const { error: orgError } = await supabase.from("org_appointments").insert({
    patient_id,
    doctor_id,
    facility_id,
    department_id, // optionally include
    appointment_type: "consultation",
    appointment_reason: "—",
    date,
    time,
    status: "booked",
    appointment_id,
    appointment_seat_id: seat_id,
    payment_method,
    fee,
  });

  if (orgError) {
    console.error("❌ Failed to insert into org_appointments", orgError);
    throw new Error("Failed to save organization-side appointment.");
  }

  // 3. Insert into patient_appointments
  const { error: patientError } = await supabase
    .from("patient_appointments")
    .insert({
      patient_id,
      doctor_id,
      facility_id,
      date,
      time,
      status: "booked",
      appointment_id,
      appointment_seat_id: seat_id,
      cancelled: false,
      payment_method,
      fee,
    });

  if (patientError) {
    console.error(
      "❌ Failed to insert into patient_appointments",
      patientError,
    );
    throw new Error("Failed to save patient-side appointment.");
  }

  return { success: true, appointment_id };
}
export async function requestAppointment({
  patient_id,
  doctor_id,
  facility_id,
  department_id,
  date,
  time,
  seat_id,
  fee,
  payment_method,
}) {
  // : {
  //   patient_id: string,
  //   doctor_id: string,
  //   facility_id: string,
  //   date: string,
  //   time: string,
  //   seat_id: string,
  //   fee?: number,
  // }
  const supabase = await createClient();
  const appointment_id = generateAppointmentId();
  // 0. Check if the patient already has an appointment on the same date
  const { data: existingAppointments, error: checkError } = await supabase
    .from("patient_appointments")
    .select("id")
    .eq("patient_id", patient_id)
    .eq("date", date)
    .eq("time", time)
    .eq("cancelled", false);

  if (checkError) {
    console.error("❌ Failed to check existing appointments", checkError);
    throw new Error("Error checking existing appointments.");
  }

  if (existingAppointments && existingAppointments.length > 0) {
    throw new Error("You already have an appointment on this date.");
  }
  // 1. Update appointment_seat to requested
  const { data: seatData, error: seatError } = await supabase
    .from("appointment_seats")
    .update({
      status: "requested",
      patient_id,
      appointment_id,
    })
    .eq("id", seat_id)
    .select("*, start_time, end_time")
    .single();

  if (seatError || !seatData) {
    console.error("❌ Failed to book seat", seatError);
    throw new Error("Failed to book seat.");
  }

  // 2. Insert into org_appointments
  const { error: orgError } = await supabase.from("org_appointments").insert({
    patient_id,
    doctor_id,
    facility_id,
    department_id, // optionally include
    appointment_type: "consultation",
    appointment_reason: "—",
    date,
    time,
    status: "requested",
    appointment_id,
    appointment_seat_id: seat_id,
    payment_method,
  });

  if (orgError) {
    console.error("❌ Failed to insert into org_appointments", orgError);
    throw new Error("Failed to save organization-side appointment.");
  }

  // 3. Insert into patient_appointments
  const { error: patientError } = await supabase
    .from("patient_appointments")
    .insert({
      patient_id,
      doctor_id,
      facility_id,
      date,
      time,
      status: "requested",
      appointment_id,
      appointment_seat_id: seat_id,
      cancelled: false,
      payment_method,
    });

  if (patientError) {
    console.error(
      "❌ Failed to insert into patient_appointments",
      patientError,
    );
    throw new Error("Failed to save patient-side appointment.");
  }

  return { success: true, appointment_id };
}
export async function cancelAppointmentByPatient(appointment_id) {
  const supabase = await createClient();
  // 1. Get seat ID
  const { data, error } = await supabase
    .from("patient_appointments")
    .select("appointment_seat_id")
    .eq("appointment_id", appointment_id)
    .single();

  if (error || !data?.appointment_seat_id)
    throw new Error("❌ Appointment not found");

  // 2. Update appointment seat to available
  const { error: seatErr } = await supabase
    .from("appointment_seats")
    .update({ status: "available", patient_id: null, appointment_id: null })
    .eq("id", data.appointment_seat_id);

  if (seatErr) throw new Error("❌ Failed to update seat");

  // 3. Mark org_appointments and patient_appointments as cancelled
  await supabase
    .from("patient_appointments")
    .update({ status: "cancelled", cancelled: true })
    .eq("appointment_id", appointment_id);

  await supabase
    .from("org_appointments")
    .update({ status: "cancelled" })
    .eq("appointment_id", appointment_id);

  return { success: true };
}
export async function deletePatientAppointment(appointment_id) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("patient_appointments")
    .delete()
    .eq("appointment_id", appointment_id);

  if (error) throw new Error("❌ Failed to delete patient appointment");

  return { success: true };
}
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
