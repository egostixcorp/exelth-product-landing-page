"use server";
import { createClient } from "../../utils/supabase/server";

export async function getLabTests(facilityId) {
  const supabase = await createClient();
  let query = supabase
    .from("lab_tests_catalogs")
    .select("*")
    .eq("active", true);

  if (facilityId) {
    query = query.eq("facility_id", facilityId);
  }

  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return data;
}
