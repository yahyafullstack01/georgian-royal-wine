import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { fulfillCheckoutSession } from "@/lib/stripeFulfillment";

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

  const result = await fulfillCheckoutSession(session);
  if (!result) {
    return NextResponse.json({ error: "Order details not found." }, { status: 404 });
  }

  return NextResponse.json(result);
}
