import { CheckoutFormData } from "@/types/wine";
import { BOX_FREE_BOTTLES, BOX_PAID_BOTTLES } from "@/lib/packing";

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

export function formatDeliveryAddress(customer: CheckoutFormData): string[] {
  const streetLine = [customer.address, customer.houseNumber]
    .map((part) => part.trim())
    .filter(Boolean)
    .join(" ");

  const lines = [streetLine];
  const apartment = customer.apartment?.trim();
  if (apartment) {
    lines.push(`Apartment / Restaurant: ${apartment}`);
  }
  lines.push(`${customer.city}, ${customer.state} ${customer.zip}`);
  lines.push(customer.country);
  return lines;
}

export function formatOrderRequestEmail(payload: OrderRequestPayload): string {
  const { customer, items, subtotal } = payload;
  const totalBoxes = items.reduce((sum, item) => sum + item.boxes, 0);
  const totalSingleBottles = items.reduce((sum, item) => sum + item.bottles, 0);
  const totalBottlesShipped = items.reduce(
    (sum, item) => sum + item.bottlesTotal,
    0
  );
  const orderedAt = new Date().toLocaleString("en-GB", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Europe/Madrid",
  });

  const deliveryNote =
    totalBoxes >= 1
      ? "Delivery: FREE (order includes at least 1 box)"
      : "Delivery: In Torrevieja, Spain — €3 for 1–4 bottles (confirm address)";

  const lines = [
    "NEW WINE RESERVATION — Georgian Royal Wine",
    "==========================================",
    "",
    `Received: ${orderedAt}`,
    "",
    "CLIENT DETAILS",
    "--------------",
    `Type: ${customer.customerType === "business" ? "Business / Partner" : "Individual"}`,
    `Name: ${customer.firstName} ${customer.lastName}`,
    `Email: ${customer.email}`,
    `Phone: ${customer.phone || "—"}`,
    customer.customerType === "business" && customer.company
      ? `Company: ${customer.company}`
      : null,
    customer.customerType === "business" && customer.businessType
      ? `Business type: ${customer.businessType}`
      : null,
    "",
    "DELIVERY ADDRESS",
    "----------------",
    ...formatDeliveryAddress(customer),
    "",
    "RESERVATION / ORDER",
    "-------------------",
    ...items.map((item, index) => {
      const parts = [
        item.bottles > 0 ? `${item.bottles} bottle(s)` : null,
        item.boxes > 0
          ? `${item.boxes} box(es) (${BOX_PAID_BOTTLES} paid + ${BOX_FREE_BOTTLES} free each)`
          : null,
      ].filter(Boolean);

      return [
        `${index + 1}. ${item.name}${item.vintage ? ` (${item.vintage})` : ""}`,
        `   Region: ${item.region}`,
        `   Ordered: ${parts.join(" + ") || "—"}`,
        `   Unit price: €${item.unitBottlePrice.toFixed(2)} / bottle · €${item.unitBoxPrice.toFixed(2)} / box`,
        `   Client receives: ${item.bottlesTotal} bottle(s) (${item.bottlesPaid} paid${item.bottlesFree ? `, ${item.bottlesFree} free` : ""})`,
        `   Line total: €${item.lineTotal.toFixed(2)}`,
      ].join("\n");
    }),
    "",
    "PRICING SUMMARY",
    "---------------",
    `Wine subtotal: €${subtotal.toFixed(2)}`,
    deliveryNote,
    `(Shipping cost to be confirmed with client if outside free delivery)`,
    "",
    `ORDER TOTAL (wines): €${subtotal.toFixed(2)}`,
    "",
    `Totals: ${totalSingleBottles} single bottle(s) · ${totalBoxes} box(es) · ${totalBottlesShipped} bottle(s) to ship`,
    "",
    customer.notes ? `CLIENT NOTES\n------------\n${customer.notes}` : null,
    "",
    "---",
    "Reply directly to the client email above to confirm the reservation.",
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
          ? `${item.boxes} box(es) (${BOX_PAID_BOTTLES} paid + ${BOX_FREE_BOTTLES} free each)`
          : null,
      ].filter(Boolean);
      return `- ${item.name}${item.vintage ? ` (${item.vintage})` : ""}\n  ${parts.join(" + ")}\n  You receive ${item.bottlesTotal} bottle(s) · €${item.lineTotal.toFixed(2)}`;
    }),
    "",
    `Subtotal: €${subtotal.toFixed(2)}`,
    "(Final total including shipping will be confirmed by our team.)",
    "",
    "DELIVERY ADDRESS",
    ...formatDeliveryAddress(customer),
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
