import { NextResponse } from "next/server";
import {
  formatCustomerConfirmationEmail,
  formatStaffOrderEmail,
  type OrderRequestPayload,
} from "@/lib/order";
import { getNotificationEmail, isMailConfigured, sendMail } from "@/lib/mail";

function isValidPayload(body: unknown): body is OrderRequestPayload {
  if (!body || typeof body !== "object") return false;
  const payload = body as OrderRequestPayload;
  return (
    Array.isArray(payload.items) &&
    payload.items.length > 0 &&
    typeof payload.subtotal === "number" &&
    payload.customer !== undefined &&
    typeof payload.customer.email === "string" &&
    payload.customer.email.length > 0 &&
    typeof payload.customer.firstName === "string" &&
    typeof payload.customer.lastName === "string"
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!isValidPayload(body)) {
      return NextResponse.json(
        { error: "Invalid order request." },
        { status: 400 }
      );
    }

    const staffEmail = formatStaffOrderEmail(body);
    const customerEmail = formatCustomerConfirmationEmail(body);
    const notifyEmail = getNotificationEmail();

    if (!isMailConfigured()) {
      console.log("Order request received (email not configured):\n", staffEmail.text);
      return NextResponse.json(
        {
          error:
            "Email is not configured on the server. Please contact us by phone or email.",
        },
        { status: 503 }
      );
    }

    if (!notifyEmail) {
      console.error("NOTIFICATION_EMAIL is not set — cannot notify company inbox.");
      return NextResponse.json(
        { error: "Failed to send order request. Please try again." },
        { status: 502 }
      );
    }

    const staffResult = await sendMail({
      to: notifyEmail,
      replyTo: body.customer.email,
      subject: staffEmail.subject,
      text: staffEmail.text,
      html: staffEmail.html,
    });

    if (!staffResult.ok) {
      return NextResponse.json(
        { error: "Failed to send order request. Please try again." },
        { status: 502 }
      );
    }

    const customerResult = await sendMail({
      to: body.customer.email,
      replyTo: notifyEmail,
      subject: customerEmail.subject,
      text: customerEmail.text,
      html: customerEmail.html,
    });

    if (!customerResult.ok) {
      console.error("Customer confirmation email error:", customerResult.error);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
