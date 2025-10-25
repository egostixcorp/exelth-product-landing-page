"use server";
import { createClient } from "@/utils/supabase/server";
export const getPatientID = async (user_id) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("patient_users")
    .select("id")
    .eq("user_id", user_id)
    .single();

  if (error) {
    console.error("Error fetching patient ID:", error.message);
    return null;
  }

  return data?.id ?? null;
};

export const getPatientDetails = async (user_id) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("patient_users")
    .select("*,user:user_id(*)")
    .eq("user_id", user_id);

  if (error) {
    console.error("Error fetching patient details:", error.message);
    return null;
  }

  return data[0] ?? null;
};
export const RegisterPatientUser = async (user_id) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("patient_users")
    .select("*,user:user_id(*)")
    .eq("user_id", user_id);

  if (error) {
    console.error("Error fetching patient details:", error.message);
    return null;
  }

  return data[0] ?? null;
};
export const setPatientFullName = async (user_id, full_name) => {
  const supabase = await createClient();
  const { error } = await supabase
    .from("patient_users")
    .insert({ user_id, full_name })
    .eq("user_id", user_id);

  if (error) {
    console.error("Error setting full_name:", error.message);
    return { success: false, error: error.message };
  }

  return { success: true };
};
export const setPatientField = async (user_id, field, value) => {
  const supabase = await createClient();
  const { error } = await supabase
    .from("patient_users")
    .update({ [field]: value })
    .eq("user_id", user_id);

  if (error) {
    console.error(`Error setting ${field}:`, error.message);
    return { success: false, error: error.message };
  }

  return { success: true };
};
