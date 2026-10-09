// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/data/site";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, projectType, message } = await req.json();

    // Input validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Safety fallback: if no API key is configured yet, log to console in dev
    if (!process.env.RESEND_API_KEY) {
      console.warn("[CONTACT_FORM_DEV] Missing RESEND_API_KEY. Simulated submission:", {
        name,
        email,
        projectType,
        message,
      });
      return NextResponse.json(
        { message: "Development simulated submission successful." },
        { status: 200 }
      );
    }

    // Deliver email via Resend
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // replace with your verified domain once configured
      to: siteConfig.contact.email,
      replyTo: email,
      subject: `New Portfolio Inquiry from ${name} [${projectType || "General"}]`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #111;">
          <h2>New Project Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Project Type:</strong> ${projectType || "Not specified"}</p>
          <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 8px;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    console.error("Failed to send contact inquiry:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process inquiry." },
      { status: 500 }
    );
  }
}