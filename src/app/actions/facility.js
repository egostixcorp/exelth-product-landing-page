"use server";
import { createClient } from "../../utils/supabase/server";
export async function getAllDoctorsByFacilityId(
  f_id,
  // org_id: string,
) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("facility_doctors")
    .select(
      "*,doctor:org_member_id(*,user:user_id(*),department:department_id(*))",
    )
    .eq("facility_id", f_id);
  if (error) {
    return { error: { message: error.message } };
  }
  const doctors = data.map((row) => row.doctor);
  return doctors;
}
export async function getAllFacilityDoctorsByFacilityId(f_id) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("facility_doctors")
    .select(
      "*, doctor:org_member_id(*, user:user_id(*), department:department_id(*))",
    )
    .eq("facility_id", f_id);

  if (error) {
    return { error: { message: error.message } };
  }

  const result = data.map((row) => ({
    doctor: row.doctor,
    facility_doctor: {
      id: row.id,
      facility_id: row.facility_id,
      org_member_id: row.org_member_id,
      // fee: row.appointment_price, // include more fields as needed
      fee: row.appointment_price || row.doctor.appointment_price, // include more fields as needed
      available: row.available,
      created_at: row.created_at,
      show_price: row.show_price,
    },
  }));

  return result;
}

export async function getAllDepartmentsByFacilityId(
  facility_id,
  // org_id: string,
) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("facility_departments")
    .select("*,department:department_id(*)")
    .eq("facility_id", facility_id);
  // .single();
  if (error) {
    return { error: { message: error.message } };
  }
  // Extract only the department objects
  const departments = data.map((row) => row.department);
  return departments;
}
export async function getFacilityDoctorById(doctorId) {
  const supabase = await createClient();
  // const supabase = await createClient();
  const { data, error } = await supabase
    .from("facility_doctors")
    .select(
      "*,doctor:org_member_id(*,user:user_id(*),department:department_id(*))",
    )
    .eq("org_member_id", doctorId);

  if (error) {
    console.error("Failed to fetch doctor", error);
    return null;
  }
  return data[0];
}
export async function getFacilityDoctorFullDetailsById(doctorId) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("facility_doctors")
    .select(
      "*, doctor:org_member_id(*, user:user_id(*), department:department_id(*))",
    )
    .eq("org_member_id", doctorId);

  if (error) {
    return { error: { message: error.message } };
  }

  const result = data.map((row) => ({
    doctor: row.doctor,
    facility_doctor: {
      id: row.id,
      facility_id: row.facility_id,
      org_member_id: row.org_member_id,
      fee: row.appointment_price || row.doctor.appointment_price, // include more fields as needed
      available: row.available,
      created_at: row.created_at,
    },
  }));

  return result;
}
export async function getPublicFacilityDetailsByID(id) {
  const supabase = await createClient();
  // const orgID = await getOrgIdByUserID();
  const { data, error } = await supabase
    .from("org_public_facilities")
    .select("*")
    .eq("id", id);

  if (error) {
    console.error(error.message);
  }
  return data?.[0];
}
