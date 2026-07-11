import { CheckoutFormData } from "@/types/wine";

export interface OrderRequestItem {
  name: string;
  slug: string;
  vintage: number;
  region: string;
  quantity: number;
  unitPrice: number;
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
    ...items.map(
      (item) =>
        `- ${item.name} (${item.vintage}) · ${item.region}\n  Qty: ${item.quantity} × €${item.unitPrice.toFixed(2)} = €${item.lineTotal.toFixed(2)}`
    ),
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

export function formatPriceEur(amount: number): string {
  return new Intl.NumberFormat("en-EU", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}
