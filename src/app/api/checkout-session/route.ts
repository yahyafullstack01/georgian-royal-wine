import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";
import {
  encodeOrderPayloadForMetadata,
  isValidOrderRequestPayload,
  type OrderRequestItem,
} from "@/lib/order";

function describeItem(item: OrderRequestItem): string {
  const parts = [
    item.bottles > 0 ? `${item.bottles} bottle(s)` : null,
    item.boxes > 0 ? `${item.boxes} box(es)` : null,
  ].filter(Boolean);
  return parts.join(" + ") || `${item.bottlesTotal} bottle(s)`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!isValidOrderRequestPayload(body)) {
      return NextResponse.json(
        { error: "Invalid order request." },
        { status: 400 }
      );
    }

    const origin =
      request.headers.get("origin") ?? (await headers()).get("origin");
    if (!origin) {
      return NextResponse.json(
        { error: "Unable to determine site origin." },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: body.customer.email,
      line_items: body.items.map((item) => ({
        price_data: {
          currency: "eur",
          product_data: {
            name: `${item.name}${item.vintage ? ` (${item.vintage})` : ""}`,
            description: describeItem(item),
          },
          unit_amount: Math.round(item.lineTotal * 100),
        },
        quantity: 1,
      })),
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout`,
      metadata: encodeOrderPayloadForMetadata(body),
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Failed to create checkout session." },
        { status: 502 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout session error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
