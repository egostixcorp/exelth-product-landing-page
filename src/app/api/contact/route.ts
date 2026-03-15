import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, organization, role, inquiryType, message } =
      await req.json();

    if (!name || !email || !inquiryType || !message) {
      return NextResponse.json(
        { error: "Name, email, inquiry type, and message are required." },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Exelth Contact <send@notifications.exelth.com>",
      to: "support@exelth.com",
      replyTo: email,
      subject: `[${inquiryType}] New message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr>
            <td style="font-weight:bold;width:160px;">Name</td>
            <td>${name}</td>
          </tr>
          <tr style="background:#f9f9f9;">
            <td style="font-weight:bold;">Email</td>
            <td><a href="mailto:${email}">${email}</a></td>
          </tr>
          ${phone ? `
          <tr>
            <td style="font-weight:bold;">Phone</td>
            <td>${phone}</td>
          </tr>` : ""}
          ${organization ? `
          <tr style="background:#f9f9f9;">
            <td style="font-weight:bold;">Organization</td>
            <td>${organization}</td>
          </tr>` : ""}
          ${role ? `
          <tr>
            <td style="font-weight:bold;">Role</td>
            <td>${role}</td>
          </tr>` : ""}
          <tr style="background:#f9f9f9;">
            <td style="font-weight:bold;">Inquiry Type</td>
            <td>${inquiryType}</td>
          </tr>
          <tr>
            <td style="font-weight:bold;vertical-align:top;">Message</td>
            <td style="white-space:pre-wrap;">${message}</td>
          </tr>
        </table>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
