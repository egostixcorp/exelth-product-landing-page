import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function POST(req: Request) {
  const supabase = await createClient();
  const { email } = await req.json();

  // Check if email already exists
  const { data: existing, error: fetchError } = await supabase
    .from("waitlist")
    .select("email")
    .eq("email", email)
    .single();

  if (existing) {
    return NextResponse.json(
      { error: "Email already joined the waitlist." },
      { status: 400 },
    );
  }

  // Insert into waitlist
  const { error: insertError } = await supabase
    .from("waitlist")
    .insert({ email });

  if (insertError) {
    return NextResponse.json({ error: insertError.message }, { status: 500 });
  }

  return NextResponse.json({ message: "Successfully joined the waitlist!" });
}
