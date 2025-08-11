// '/api/waitlist/route.ts'
import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const supabase = await createClient();
  const { email } = await req.json();

  // ✅ Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email.trim())) {
    return NextResponse.json(
      { error: "Invalid email format." },
      { status: 400 }
    );
  }

  // Check if email already exists
  const { data: existing, error: fetchError } = await supabase
    .from("waitlist")
    .select("email")
    .eq("email", email.trim())
    .single();

  if (fetchError && fetchError.code !== "PGRST116") {
    // Only throw if it's not "no rows found"
    return NextResponse.json({ error: fetchError.message }, { status: 500 });
  }

  if (existing) {
    return NextResponse.json(
      { error: "Email already joined the waitlist." },
      { status: 400 }
    );
  }

  // Insert into waitlist
  const { error: insertError } = await supabase
    .from("waitlist")
    .insert({ email: email.trim() });

  if (insertError) {
    return NextResponse.json({ error: insertError.message }, { status: 500 });
  }

  try {
    // 1️⃣ Notify Exelth Team
    await resend.emails.send({
      from: "Exelth Waitlist <send@notifications.exelth.com>",
      to: process.env.TEAM_EMAIL!,
      subject: "📩 New Waitlist Signup",
      text: `A new user joined the waitlist:\n\n${email}`,
    });

    // 2️⃣ Send Branded Confirmation Email to User
    await resend.emails.send({
      from: "Exelth Waitlist <send@notifications.exelth.com>",
      to: email.trim(),
      subject: "Welcome to the Exelth Waitlist!",
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 40px; text-align: center;">
          <img src="https://www.exelth.com/brand/exelth-green.png" alt="Exelth Logo" style="height: 50px; margin-bottom: 20px;" />
          <div style="background-color: white; padding: 30px; border-radius: 8px; max-width: 500px; margin: auto; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
            <h2 style="color: #16a34a; margin-bottom: 10px;">You're on the list! 🎉</h2>
            <p style="color: #374151; font-size: 16px;">
              Thanks for joining the <strong>Exelth Waitlist</strong>!
            </p>
            <p style="color: #4b5563; font-size: 14px; line-height: 1.6;">
              We’re working hard to bring you an exceptional B2B experience.
              You’ll be the first to know when we launch 🚀
            </p>
            <a href="https://exelth.com" 
               style="display: inline-block; margin-top: 20px; background-color: #16a34a; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
              Visit Exelth
            </a>
          </div>
          <p style="margin-top: 30px; color: #9ca3af; font-size: 12px;">
            © ${new Date().getFullYear()} Exelth. All rights reserved.
          </p>
        </div>
      `,
    });
  } catch (err) {
    console.error("Email send error:", err);
    // We still return success here so the user doesn't see an error even if email fails
  }

  return NextResponse.json({
    message: "Successfully joined the waitlist!",
  });
}
