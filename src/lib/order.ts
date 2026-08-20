import { CheckoutFormData } from "@/types/wine";

export interface OrderRequestItem {
  name: string;
  slug: string;
  vintage?: number;
  region: string;
  bottles: number;
  boxes: number;
  bottlesPaid: number;
  bottlesFree: number;
  bottlesTotal: number;
  unitBottlePrice: number;
  unitBoxPrice: number;
  lineTotal: number;
}

export interface OrderRequestPayload {
  customer: CheckoutFormData;
  items: OrderRequestItem[];
  subtotal: number;
}

export function formatOrderRequestEmail(payload: OrderRequestPayload): string {
  const { customer, items, subtotal } = payload;
  const lines = [
    "NEW ORDER REQUEST — Georgian Royal Wine",
    "========================================",
    "",
    "CUSTOMER",
    `Type: ${customer.customerType === "business" ? "Business / Partner" : "Individual"}`,
    `Name: ${customer.firstName} ${customer.lastName}`,
    `Email: ${customer.email}`,
    `Phone: ${customer.phone}`,
    customer.customerType === "business" && customer.company
      ? `Company: ${customer.company}`
      : null,
    customer.customerType === "business" && customer.businessType
      ? `Business type: ${customer.businessType}`
      : null,
    "",
    "DELIVERY ADDRESS",
    customer.address,
    `${customer.city}, ${customer.state} ${customer.zip}`,
    customer.country,
    "",
    "ORDER ITEMS",
    ...items.map((item) => {
      const parts = [
        item.bottles > 0 ? `${item.bottles} bottle(s)` : null,
        item.boxes > 0
          ? `${item.boxes} box(es) (6 paid + 1 free each)`
          : null,
      ].filter(Boolean);
      return `- ${item.name}${item.vintage ? ` (${item.vintage})` : ""} · ${item.region}\n  ${parts.join(" + ")}\n  Bottles: ${item.bottlesTotal} total (${item.bottlesPaid} paid${item.bottlesFree ? `, ${item.bottlesFree} free` : ""})\n  Line total: €${item.lineTotal.toFixed(2)}`;
    }),
    "",
    `SUBTOTAL: €${subtotal.toFixed(2)}`,
    "",
    customer.notes ? `NOTES:\n${customer.notes}` : null,
    "",
    "---",
    "Submitted via georgian-royal-wine website",
  ];

  return lines.filter(Boolean).join("\n");
}

/** Confirmation email sent to the customer. */
export function formatCustomerConfirmationEmail(
  payload: OrderRequestPayload
): string {
  const { customer, items, subtotal } = payload;
  const lines = [
    `Dear ${customer.firstName},`,
    "",
    "Thank you for your order request with Georgian Royal Wine (GRW).",
    "We have received your request and our team will contact you shortly to confirm pricing, shipping, and delivery.",
    "",
    "YOUR ORDER",
    "----------",
    ...items.map((item) => {
      const parts = [
        item.bottles > 0 ? `${item.bottles} bottle(s)` : null,
        item.boxes > 0
          ? `${item.boxes} box(es) (6 paid + 1 free each)`
          : null,
      ].filter(Boolean);
      return `- ${item.name}${item.vintage ? ` (${item.vintage})` : ""}\n  ${parts.join(" + ")}\n  You receive ${item.bottlesTotal} bottle(s) · €${item.lineTotal.toFixed(2)}`;
    }),
    "",
    `Subtotal: €${subtotal.toFixed(2)}`,
    "(Final total including shipping will be confirmed by our team.)",
    "",
    "DELIVERY ADDRESS",
    customer.address,
    `${customer.city}, ${customer.state} ${customer.zip}`,
    customer.country,
    "",
    customer.notes ? `Your notes:\n${customer.notes}\n` : null,
    "If you have any questions, reply to this email or contact us at info@grw-wine.com / +34 607 609 474.",
    "",
    "Kind regards,",
    "Georgian Royal Wine",
  ];

  return lines.filter((line) => line !== null).join("\n");
}

export function formatPriceEur(amount: number): string {
  return new Intl.NumberFormat("en-EU", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}
