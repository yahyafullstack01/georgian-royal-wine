import { NextResponse } from "next/server";
import {
  formatCustomerConfirmationEmail,
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

async function sendResendEmail(options: {
  apiKey: string;
  from: string;
  to: string[];
  replyTo?: string;
  subject: string;
  text: string;
}): Promise<{ ok: boolean; errorText?: string }> {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${options.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: options.from,
      to: options.to,
      reply_to: options.replyTo,
      subject: options.subject,
      text: options.text,
    }),
  });

  if (!response.ok) {
    return { ok: false, errorText: await response.text() };
  }
  return { ok: true };
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

    const staffBody = formatOrderRequestEmail(body);
    const customerBody = formatCustomerConfirmationEmail(body);
    const resendKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.ORDER_NOTIFICATION_EMAIL;
    const fromEmail =
      process.env.ORDER_FROM_EMAIL ?? "onboarding@resend.dev";
    const from = `Georgian Royal Wine <${fromEmail}>`;

    if (!resendKey) {
      console.log("Order request received (email not configured):\n", staffBody);
      return NextResponse.json({ success: true });
    }

    // 1) Notify GRW team
    if (notifyEmail) {
      const staffResult = await sendResendEmail({
        apiKey: resendKey,
        from,
        to: [notifyEmail],
        replyTo: body.customer.email,
        subject: `Order request — ${body.customer.firstName} ${body.customer.lastName}`,
        text: staffBody,
      });

      if (!staffResult.ok) {
        console.error("Resend staff email error:", staffResult.errorText);
        return NextResponse.json(
          { error: "Failed to send order request. Please try again." },
          { status: 502 }
        );
      }
    }

    // 2) Confirm to the client
    const customerResult = await sendResendEmail({
      apiKey: resendKey,
      from,
      to: [body.customer.email],
      replyTo: notifyEmail || undefined,
      subject: "We received your order request — Georgian Royal Wine",
      text: customerBody,
    });

    if (!customerResult.ok) {
      console.error("Resend customer email error:", customerResult.errorText);
      // Staff already notified — still report success so checkout is not blocked,
      // but log the customer email failure.
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
