import "server-only";

import type Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import {
  decodeOrderPayloadFromMetadata,
  formatCustomerConfirmationEmail,
  formatStaffOrderEmail,
} from "@/lib/order";
import { getNotificationEmail, isMailConfigured, sendMail } from "@/lib/mail";

const FULFILLED_FLAG = "order_emailed";

export interface FulfillResult {
  email: string;
  subtotal: number;
}

/**
 * Sends the staff + customer order emails for a paid checkout session, exactly
 * once. Uses the session's own Stripe metadata as the idempotency lock (set
 * after sending) so the success-page confirm call and the webhook — which run
 * as separate, possibly concurrent serverless invocations — never double-send.
 */
export async function fulfillCheckoutSession(
  session: Stripe.Checkout.Session
): Promise<FulfillResult | null> {
  if (session.payment_status !== "paid") return null;

  const metadata = (session.metadata ?? null) as Record<string, string> | null;
  const payload = decodeOrderPayloadFromMetadata(metadata);
  if (!payload) return null;

  const result: FulfillResult = {
    email: payload.customer.email,
    subtotal: payload.subtotal,
  };

  if (metadata?.[FULFILLED_FLAG] === "true") {
    return result;
  }

  // Claim the lock first so a concurrent call sees it immediately. Stripe
  // metadata updates aren't atomic compare-and-swap, so a tiny race window
  // remains, but it only risks a rare duplicate email, never a missed one.
  await stripe.checkout.sessions.update(session.id, {
    metadata: { ...metadata, [FULFILLED_FLAG]: "true" },
  });

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

  return result;
}
