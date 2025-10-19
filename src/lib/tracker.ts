"use server";

import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
// ✅ You can list multiple founder emails here
const FOUNDERS_EMAILS = [
  "support@exelth.com",
  "arunroy@egostix.com",
  "the@titasghosh.com",
];
/**
 * Tracks button clicks with visitor_id + user_id,
 * and sends an email to Exelth team when a new user
 * clicks the Download button for the first time.
 */
export async function trackButtonClick(label: string) {
  const supabase = await createClient();
  const cookieStore = cookies();
  //   const visitor_id = cookieStore.get("visitor_id")?.value;

  //   if (!visitor_id) return { success: false, message: "No visitor ID" };

  // Optional: get logged-in user
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const user_id = user?.id ?? null;

  // Check if click record exists
  const { data: existing } = await supabase
    .from("click_events")
    .select("id, click_count")
    .eq("visitor_id", "visitor_id")
    .eq("button_label", label)
    .maybeSingle();

  let isNewClick = false;

  if (existing) {
    await supabase
      .from("click_events")
      .update({
        click_count: existing.click_count + 1,
        last_clicked_at: new Date(),
      })
      .eq("id", existing.id);
  } else {
    await supabase.from("click_events").insert({
      visitor_id: "visitor_id",
      user_id,
      button_label: label,
      click_count: 1,
    });
    isNewClick = true;
  }

  // ✅ Send email only for first-time "download_apk" clicks
  if (isNewClick && label === "download_apk") {
    await sendExelthTeamEmail("visitor_id", user_id);
  }

  revalidatePath("/");
  return { success: true };
}

// 📧 Resend email helper
async function sendExelthTeamEmail(visitor_id: string, user_id: string | null) {
  try {
    await resend.emails.send({
      from: "Exelth Tracker <send@notifications.exelth.com>",
      to: FOUNDERS_EMAILS,
      subject: "📲 New App Download Interest",
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 40px; text-align: center;">
          <img src="https://www.exelth.com/brand/exelth-green.png" alt="Exelth Logo" style="height: 50px; margin-bottom: 20px;" />
          <div style="background-color: white; padding: 30px; border-radius: 8px; max-width: 500px; margin: auto; box-shadow: 0 4px 8px rgba(0,0,0,0.05); text-align: left;">
            <h2 style="color: #16a34a; margin-bottom: 10px;">New App Download Click 📲</h2>
            <p style="color: #374151; font-size: 15px; line-height: 1.6;">
              A new user clicked the <strong>Download APK</strong> button for the first time.
            </p>
            <ul style="color: #4b5563; font-size: 14px; line-height: 1.6;">
              <li><b>Visitor ID:</b> ${visitor_id}</li>
              <li><b>User ID:</b> ${user_id ?? "Anonymous"}</li>
              <li><b>Timestamp:</b> ${new Date().toLocaleString()}</li>
            </ul>
            <p style="margin-top: 20px; font-size: 13px; color: #6b7280;">
              View full click logs in Exelth Internal Tools.
            </p>
          </div>
          <p style="margin-top: 30px; color: #9ca3af; font-size: 12px;">
            © ${new Date().getFullYear()} Exelth. Internal Notification.
          </p>
        </div>
      `,
    });

    console.log("✅ Exelth team notified via Resend");
  } catch (err) {
    console.error("❌ Failed to send Resend notification:", err);
  }
}
