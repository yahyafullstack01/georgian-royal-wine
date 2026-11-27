import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { fulfillCheckoutSession } from "@/lib/stripeFulfillment";

const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;

// Safety net for the success-page confirm call: Stripe calls this directly
// from its own servers once a checkout session completes, so the order still
// gets emailed even if the customer's browser never makes it back to
// /checkout/success (closed tab, lost connection, etc).
export async function POST(request: Request) {
  if (!WEBHOOK_SECRET) {
    console.error("Stripe webhook received but STRIPE_WEBHOOK_SECRET is not set.");
    return NextResponse.json({ error: "Webhook not configured." }, { status: 500 });
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing signature." }, { status: 400 });
  }

  const rawBody = await request.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, WEBHOOK_SECRET);
  } catch (error) {
    console.error("Stripe webhook signature verification failed:", error);
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 });
  }

  if (
    event.type === "checkout.session.completed" ||
    event.type === "checkout.session.async_payment_succeeded"
  ) {
    const session = event.data.object as Stripe.Checkout.Session;
    try {
      await fulfillCheckoutSession(session);
    } catch (error) {
      console.error("Stripe webhook fulfillment error:", error);
      return NextResponse.json({ error: "Fulfillment failed." }, { status: 500 });
    }
  }

  return NextResponse.json({ received: true });
}
