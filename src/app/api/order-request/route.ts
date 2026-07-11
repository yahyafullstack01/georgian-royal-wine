import { NextResponse } from "next/server";
import {
  formatOrderRequestEmail,
  type OrderRequestPayload,
} from "@/lib/order";

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

    const emailBody = formatOrderRequestEmail(body);
    const resendKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.ORDER_NOTIFICATION_EMAIL;

    if (resendKey && notifyEmail) {
      const fromEmail =
        process.env.ORDER_FROM_EMAIL ?? "onboarding@resend.dev";

      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `GRW Orders <${fromEmail}>`,
          to: [notifyEmail],
          reply_to: body.customer.email,
          subject: `Order request — ${body.customer.firstName} ${body.customer.lastName}`,
          text: emailBody,
        }),
      });

      if (!response.ok) {
        console.error("Resend error:", await response.text());
        return NextResponse.json(
          { error: "Failed to send order request. Please try again." },
          { status: 502 }
        );
      }
    } else {
      console.log("Order request received (email not configured):\n", emailBody);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
