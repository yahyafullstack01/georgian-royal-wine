import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import {
  decodeOrderPayloadFromMetadata,
  formatCustomerConfirmationEmail,
  formatStaffOrderEmail,
} from "@/lib/order";
import { getNotificationEmail, isMailConfigured, sendMail } from "@/lib/mail";

// Guards against duplicate order emails if the success page is reloaded.
// Resets on cold start, which only risks a rare duplicate email, never a missed one.
const confirmedSessions = new Set<string>();

export async function GET(request: Request) {
  const sessionId = new URL(request.url).searchParams.get("session_id");
  if (!sessionId) {
    return NextResponse.json({ error: "Missing session_id." }, { status: 400 });
  }

  let session;
  try {
    session = await stripe.checkout.sessions.retrieve(sessionId);
  } catch {
    return NextResponse.json({ error: "Order not found." }, { status: 404 });
  }

  if (session.payment_status !== "paid") {
    return NextResponse.json({ error: "Payment not completed." }, { status: 402 });
  }

  const payload = decodeOrderPayloadFromMetadata(
    session.metadata as Record<string, string> | null
  );
  if (!payload) {
    return NextResponse.json({ error: "Order details not found." }, { status: 404 });
  }

  if (!confirmedSessions.has(sessionId)) {
    confirmedSessions.add(sessionId);

    const notifyEmail = getNotificationEmail();
    if (isMailConfigured() && notifyEmail) {
      const staffEmail = formatStaffOrderEmail(payload);
      const customerEmail = formatCustomerConfirmationEmail(payload);

      await sendMail({
        to: notifyEmail,
        replyTo: payload.customer.email,
        subject: `[PAID] ${staffEmail.subject}`,
        text: staffEmail.text,
        html: staffEmail.html,
      });

      await sendMail({
        to: payload.customer.email,
        replyTo: notifyEmail,
        subject: customerEmail.subject,
        text: customerEmail.text,
        html: customerEmail.html,
      });
    } else {
      console.log("Paid order received (email not configured):", payload);
    }
  }

  return NextResponse.json({
    email: payload.customer.email,
    subtotal: payload.subtotal,
  });
}
