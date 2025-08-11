import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "../../../utils/supabase/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  const supabase = await createClient();

  // ✅ Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  // Check if email already exists
  const { data: existing, error: fetchError } = await supabase
    .from("docs_waitlist")
    .select("email")
    .eq("email", email.trim())
    .single();

  if (fetchError && fetchError.code !== "PGRST116") {
    // Only throw if it's not "no rows found"
    return NextResponse.json({ error: fetchError.message }, { status: 500 });
  }

  if (existing) {
    return NextResponse.json(
      { error: "Email already joined the Docs Waitlist." },
      { status: 400 },
    );
  }
  // 1️⃣ Save email in Supabase
  const { error } = await supabase.from("docs_waitlist").insert({ email });
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  try {
    // 2️⃣ Notify Exelth Team
    await resend.emails.send({
      from: "Exelth Docs <send@notifications.exelth.com>",
      to: process.env.TEAM_EMAIL!,
      subject: "📩 New Docs Waitlist Signup",
      text: `A new user joined the Docs Waitlist:\n\n${email}`,
    });

    // 3️⃣ Send Confirmation Email to User
    await resend.emails.send({
      from: "Exelth Docs <send@notifications.exelth.com>",
      to: email,
      subject: "You're on the Exelth Docs Waitlist!",
      html: `
    <div style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 40px; text-align: center;">
      <!-- Logo -->
      <img src="https://www.exelth.com/brand/exelth-green.png" alt="Exelth Logo" style="height: 50px; margin-bottom: 20px;" />

      <!-- Card -->
      <div style="background-color: white; padding: 30px; border-radius: 8px; max-width: 500px; margin: auto; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
        <h2 style="color: #16a34a; margin-bottom: 10px;">You're on the list! 🎉</h2>
        <p style="color: #374151; font-size: 16px;">
          Thanks for joining the <strong>Exelth Docs Waitlist</strong>!
        </p>
        <p style="color: #4b5563; font-size: 14px; line-height: 1.6;">
          We’re working hard to bring you step-by-step guides, tutorials, and FAQs 
          to make your B2B experience even smoother.
        </p>
        <p style="color: #4b5563; font-size: 14px;">
          You'll be the first to know when the docs go live 🚀
        </p>

        <!-- Button -->
        <a href="https://exelth.com" 
           style="display: inline-block; margin-top: 20px; background-color: #16a34a; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
          Visit Exelth
        </a>
      </div>

      <!-- Footer -->
      <p style="margin-top: 30px; color: #9ca3af; font-size: 12px;">
        © ${new Date().getFullYear()} Exelth. All rights reserved.
      </p>
    </div>
  `,
    });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
