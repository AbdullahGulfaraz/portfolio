// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/data/site";

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

    const apiKey = process.env.RESEND_API_KEY;

    // Graceful fallback if API key is not provided
    if (!apiKey) {
      console.warn("[CONTACT_DEV] Missing RESEND_API_KEY. Simulated submission:", {
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

    // Instantiate Resend at runtime when the key is guaranteed
    const resend = new Resend(apiKey);

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
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