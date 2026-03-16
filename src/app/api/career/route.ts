import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, portfolio, message, role } = await req.json();

    if (!name || !email || !phone || !role) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const { error } = await resend.emails.send({
      from: "Exelth Careers <send@notifications.exelth.com>",
      to: "careers@exelth.com",
      replyTo: email,
      subject: `New Application — ${role}`,
      html: `
        <h2>New Job Application</h2>

        <table cellpadding="8" style="border-collapse:collapse;">
          <tr><td><b>Role</b></td><td>${role}</td></tr>
          <tr><td><b>Name</b></td><td>${name}</td></tr>
          <tr><td><b>Email</b></td><td>${email}</td></tr>
          <tr><td><b>Phone</b></td><td>${phone}</td></tr>

          ${
            portfolio
              ? `<tr><td><b>Portfolio</b></td><td>${portfolio}</td></tr>`
              : ""
          }

          ${
            message ? `<tr><td><b>Message</b></td><td>${message}</td></tr>` : ""
          }
        </table>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
