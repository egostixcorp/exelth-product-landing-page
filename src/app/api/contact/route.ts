import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      name,
      email,
      phone,
      country,
      city,
      inquiryType,
      message,
      ownClinic,
      userType,
    } = data;

    if (!inquiryType) {
      return NextResponse.json(
        { error: "Inquiry type required" },
        { status: 400 },
      );
    }

    const { error } = await resend.emails.send({
      from: "Exelth Contact <send@notifications.exelth.com>",
      to: "support@exelth.com",
      replyTo: email,
      subject: `[${inquiryType}] New Contact Request`,
      html: `
        <h2>New Contact Form Submission</h2>

        <table cellpadding="8" style="border-collapse:collapse;">
          ${name ? `<tr><td><b>Name</b></td><td>${name}</td></tr>` : ""}
          ${email ? `<tr><td><b>Email</b></td><td>${email}</td></tr>` : ""}
          ${phone ? `<tr><td><b>Phone</b></td><td>${phone}</td></tr>` : ""}
          ${country ? `<tr><td><b>Country</b></td><td>${country}</td></tr>` : ""}
          ${city ? `<tr><td><b>City</b></td><td>${city}</td></tr>` : ""}
          ${
            userType
              ? `<tr><td><b>User Type</b></td><td>${userType}</td></tr>`
              : ""
          }
          ${
            ownClinic
              ? `<tr><td><b>Own Clinic</b></td><td>${ownClinic}</td></tr>`
              : ""
          }

          <tr>
            <td><b>Inquiry Type</b></td>
            <td>${inquiryType}</td>
          </tr>

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
