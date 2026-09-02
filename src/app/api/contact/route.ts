import { NextResponse } from "next/server";
import { formatContactEmail } from "@/lib/contact";
import { getNotificationEmail, isMailConfigured, sendMail } from "@/lib/mail";
import type { ContactFormData } from "@/types/wine";

function isValidContact(body: unknown): body is ContactFormData {
  if (!body || typeof body !== "object") return false;
  const data = body as ContactFormData;
  return (
    typeof data.name === "string" &&
    data.name.trim().length > 0 &&
    typeof data.email === "string" &&
    data.email.trim().length > 0 &&
    typeof data.subject === "string" &&
    data.subject.length > 0 &&
    typeof data.message === "string" &&
    data.message.trim().length > 0
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!isValidContact(body)) {
      return NextResponse.json({ error: "Invalid message." }, { status: 400 });
    }

    const text = formatContactEmail(body);
    const notifyEmail = getNotificationEmail();

    if (!isMailConfigured()) {
      console.log("Contact message received (email not configured):\n", text);
      return NextResponse.json({ success: true });
    }

    if (!notifyEmail) {
      console.log("Contact message received (no NOTIFICATION_EMAIL):\n", text);
      return NextResponse.json({ success: true });
    }

    const result = await sendMail({
      to: notifyEmail,
      replyTo: body.email,
      subject: `Contact — ${body.name}`,
      text,
    });

    if (!result.ok) {
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
