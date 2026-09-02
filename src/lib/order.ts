import { CheckoutFormData, BusinessType } from "@/types/wine";
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

export interface StaffOrderEmail {
  subject: string;
  text: string;
  html: string;
}

export type OrderEmail = StaffOrderEmail;

const BUSINESS_TYPE_RU: Record<BusinessType, string> = {
  restaurant: "Ресторан",
  retailer: "Розничный магазин",
  distributor: "Дистрибьютор",
  partner: "Партнёр",
  other: "Другое",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatEur(amount: number): string {
  return `€${amount.toFixed(2)}`;
}

function formatOrderedAt(): string {
  return new Date().toLocaleString("ru-RU", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Europe/Madrid",
  });
}

function customerTypeRu(customer: CheckoutFormData): string {
  return customer.customerType === "business"
    ? "Бизнес / Партнёр"
    : "Частное лицо";
}

function businessTypeRu(type: BusinessType | ""): string | null {
  if (!type) return null;
  return BUSINESS_TYPE_RU[type];
}

export function formatDeliveryAddress(
  customer: CheckoutFormData,
  locale: "ru" | "en" = "ru"
): string[] {
  const streetLine = [customer.address, customer.houseNumber]
    .map((part) => part.trim())
    .filter(Boolean)
    .join(" ");

  const lines = [streetLine];
  const apartment = customer.apartment?.trim();
  if (apartment) {
    lines.push(
      locale === "ru"
        ? `Квартира / Ресторан: ${apartment}`
        : `Apartment / Restaurant: ${apartment}`
    );
  }
  lines.push(`${customer.city}, ${customer.state} ${customer.zip}`);
  lines.push(customer.country);
  return lines;
}

function buildOrderSummary(payload: OrderRequestPayload) {
  const { customer, items, subtotal } = payload;
  const totalBoxes = items.reduce((sum, item) => sum + item.boxes, 0);
  const totalSingleBottles = items.reduce((sum, item) => sum + item.bottles, 0);
  const totalBottlesShipped = items.reduce(
    (sum, item) => sum + item.bottlesTotal,
    0
  );
  const orderedAt = formatOrderedAt();
  const deliveryNote =
    totalBoxes >= 1
      ? "Доставка: БЕСПЛАТНО (в заказе есть минимум 1 коробка)"
      : "Доставка: в Торревьехе, Испания — €3 за 1–4 бутылки (уточнить адрес)";
  const deliveryNoteShort =
    totalBoxes >= 1 ? "Бесплатная доставка" : "€3 в Торревьехе (1–4 бут.)";

  return {
    customer,
    items,
    subtotal,
    totalBoxes,
    totalSingleBottles,
    totalBottlesShipped,
    orderedAt,
    deliveryNote,
    deliveryNoteShort,
  };
}

function formatItemOrderedParts(item: OrderRequestItem): string {
  const parts = [
    item.bottles > 0 ? `${item.bottles} бут.` : null,
    item.boxes > 0
      ? `${item.boxes} кор. (${BOX_PAID_BOTTLES} оплач. + ${BOX_FREE_BOTTLES} беспл. в каждой)`
      : null,
  ].filter(Boolean);
  return parts.join(" + ") || "—";
}

/** Staff notification email — Russian, HTML + plain text. */
export function formatStaffOrderEmail(
  payload: OrderRequestPayload
): StaffOrderEmail {
  const summary = buildOrderSummary(payload);
  const { customer, items, subtotal } = summary;
  const clientName = `${customer.firstName} ${customer.lastName}`;

  const text = [
    "НОВАЯ БРОНЬ ВИНА — Georgian Royal Wine",
    "========================================",
    "",
    `Получен: ${summary.orderedAt}`,
    "",
    "ДАННЫЕ КЛИЕНТА",
    "--------------",
    `Тип: ${customerTypeRu(customer)}`,
    `Имя: ${clientName}`,
    `Email: ${customer.email}`,
    `Телефон: ${customer.phone || "—"}`,
    customer.customerType === "business" && customer.company
      ? `Компания: ${customer.company}`
      : null,
    customer.customerType === "business" && customer.businessType
      ? `Тип бизнеса: ${businessTypeRu(customer.businessType)}`
      : null,
    "",
    "АДРЕС ДОСТАВКИ",
    "---------------",
    ...formatDeliveryAddress(customer),
    "",
    "ЗАКАЗ",
    "-----",
    ...items.map((item, index) => {
      return [
        `${index + 1}. ${item.name}${item.vintage ? ` (${item.vintage})` : ""}`,
        `   Регион: ${item.region}`,
        `   Заказано: ${formatItemOrderedParts(item)}`,
        `   Цена: ${formatEur(item.unitBottlePrice)} / бут. · ${formatEur(item.unitBoxPrice)} / кор.`,
        `   Клиент получит: ${item.bottlesTotal} бут. (${item.bottlesPaid} оплач.${item.bottlesFree ? `, ${item.bottlesFree} беспл.` : ""})`,
        `   Сумма: ${formatEur(item.lineTotal)}`,
      ].join("\n");
    }),
    "",
    "ИТОГО",
    "-----",
    `Подитог (вино): ${formatEur(subtotal)}`,
    summary.deliveryNote,
    "(Стоимость доставки уточняется с клиентом, если не входит в бесплатную)",
    "",
    `ИТОГО ЗАКАЗА (вино): ${formatEur(subtotal)}`,
    "",
    `Всего: ${summary.totalSingleBottles} отд. бут. · ${summary.totalBoxes} кор. · ${summary.totalBottlesShipped} бут. к отправке`,
    "",
    customer.notes ? `ПРИМЕЧАНИЯ КЛИЕНТА\n-----------------\n${customer.notes}` : null,
    "",
    "---",
    "Ответьте на email клиента выше, чтобы подтвердить бронь.",
    "Отправлено с сайта georgian-royal-wine",
  ]
    .filter(Boolean)
    .join("\n");

  const itemRows = items
    .map((item, index) => {
      const title = `${item.name}${item.vintage ? ` (${item.vintage})` : ""}`;
      const freeNote = item.bottlesFree
        ? `, ${item.bottlesFree} беспл.`
        : "";
      return `
        <tr>
          <td style="padding:14px 12px;border-bottom:1px solid #e8e0d8;vertical-align:top;color:#78716c;font-size:13px;">${index + 1}</td>
          <td style="padding:14px 12px;border-bottom:1px solid #e8e0d8;vertical-align:top;">
            <div style="font-weight:600;color:#3d1519;font-size:15px;margin-bottom:4px;">${escapeHtml(title)}</div>
            <div style="color:#78716c;font-size:13px;margin-bottom:2px;">Регион: ${escapeHtml(item.region)}</div>
            <div style="color:#57534e;font-size:13px;">Заказано: ${escapeHtml(formatItemOrderedParts(item))}</div>
            <div style="color:#57534e;font-size:13px;margin-top:4px;">Клиент получит: <strong>${item.bottlesTotal} бут.</strong> (${item.bottlesPaid} оплач.${freeNote})</div>
          </td>
          <td style="padding:14px 12px;border-bottom:1px solid #e8e0d8;vertical-align:top;text-align:right;white-space:nowrap;">
            <div style="color:#78716c;font-size:12px;">${formatEur(item.unitBottlePrice)} / бут.</div>
            <div style="color:#78716c;font-size:12px;margin-bottom:6px;">${formatEur(item.unitBoxPrice)} / кор.</div>
            <div style="font-weight:700;color:#3d1519;font-size:16px;">${formatEur(item.lineTotal)}</div>
          </td>
        </tr>`;
    })
    .join("");

  const clientRows = [
    ["Тип клиента", customerTypeRu(customer)],
    ["Имя", clientName],
    ["Email", customer.email],
    ["Телефон", customer.phone || "—"],
    customer.customerType === "business" && customer.company
      ? ["Компания", customer.company]
      : null,
    customer.customerType === "business" && customer.businessType
      ? ["Тип бизнеса", businessTypeRu(customer.businessType)!]
      : null,
  ]
    .filter(Boolean)
    .map(
      (row) => `
      <tr>
        <td style="padding:8px 0;color:#78716c;font-size:14px;width:140px;vertical-align:top;">${row![0]}</td>
        <td style="padding:8px 0;color:#1c1917;font-size:14px;font-weight:500;">${escapeHtml(String(row![1]))}</td>
      </tr>`
    )
    .join("");

  const addressHtml = formatDeliveryAddress(customer)
    .map((line) => `<div style="margin:0 0 4px;color:#1c1917;font-size:14px;">${escapeHtml(line)}</div>`)
    .join("");

  const notesBlock = customer.notes
    ? `
      <div style="margin-top:24px;padding:16px 18px;background:#fffbeb;border-left:4px solid #b8860b;border-radius:0 8px 8px 0;">
        <div style="font-size:12px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;">Примечания клиента</div>
        <div style="color:#78350f;font-size:14px;line-height:1.5;white-space:pre-wrap;">${escapeHtml(customer.notes)}</div>
      </div>`
    : "";

  const html = `<!DOCTYPE html>
<html lang="ru">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f0eb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f0eb;padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(61,21,25,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#3d1519 0%,#722f37 100%);padding:28px 32px;">
            <div style="font-size:12px;color:#f5d0a9;text-transform:uppercase;letter-spacing:0.12em;margin-bottom:6px;">Georgian Royal Wine</div>
            <div style="font-size:24px;font-weight:700;color:#ffffff;margin-bottom:8px;">Новая бронь вина</div>
            <div style="font-size:14px;color:#e8c4a0;">${escapeHtml(summary.orderedAt)}</div>
          </td>
        </tr>

        <!-- Client -->
        <tr>
          <td style="padding:28px 32px 0;">
            <div style="font-size:13px;font-weight:700;color:#722f37;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:14px;border-bottom:2px solid #f5e6d3;padding-bottom:8px;">Данные клиента</div>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${clientRows}</table>
          </td>
        </tr>

        <!-- Address -->
        <tr>
          <td style="padding:24px 32px 0;">
            <div style="font-size:13px;font-weight:700;color:#722f37;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:14px;border-bottom:2px solid #f5e6d3;padding-bottom:8px;">Адрес доставки</div>
            ${addressHtml}
          </td>
        </tr>

        <!-- Items -->
        <tr>
          <td style="padding:24px 32px 0;">
            <div style="font-size:13px;font-weight:700;color:#722f37;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:14px;border-bottom:2px solid #f5e6d3;padding-bottom:8px;">Состав заказа</div>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8e0d8;border-radius:8px;overflow:hidden;">
              <tr style="background:#faf7f4;">
                <th style="padding:10px 12px;text-align:left;font-size:11px;color:#78716c;text-transform:uppercase;letter-spacing:0.05em;width:32px;">#</th>
                <th style="padding:10px 12px;text-align:left;font-size:11px;color:#78716c;text-transform:uppercase;letter-spacing:0.05em;">Вино</th>
                <th style="padding:10px 12px;text-align:right;font-size:11px;color:#78716c;text-transform:uppercase;letter-spacing:0.05em;">Сумма</th>
              </tr>
              ${itemRows}
            </table>
          </td>
        </tr>

        <!-- Totals -->
        <tr>
          <td style="padding:24px 32px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#faf7f4;border-radius:8px;border:1px solid #e8e0d8;">
              <tr>
                <td style="padding:18px 20px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding:6px 0;color:#57534e;font-size:14px;">Подитог (вино)</td>
                      <td style="padding:6px 0;text-align:right;color:#1c1917;font-size:14px;font-weight:500;">${formatEur(subtotal)}</td>
                    </tr>
                    <tr>
                      <td style="padding:6px 0;color:#57534e;font-size:14px;">Доставка</td>
                      <td style="padding:6px 0;text-align:right;font-size:14px;font-weight:600;color:${summary.totalBoxes >= 1 ? "#15803d" : "#57534e"};">${escapeHtml(summary.deliveryNoteShort)}</td>
                    </tr>
                    <tr><td colspan="2" style="padding:10px 0 6px;"><div style="border-top:2px solid #e8e0d8;"></div></td></tr>
                    <tr>
                      <td style="padding:6px 0;color:#3d1519;font-size:16px;font-weight:700;">Итого заказа (вино)</td>
                      <td style="padding:6px 0;text-align:right;color:#3d1519;font-size:22px;font-weight:700;">${formatEur(subtotal)}</td>
                    </tr>
                  </table>
                  <div style="margin-top:12px;padding-top:12px;border-top:1px dashed #d6d3d1;color:#78716c;font-size:13px;">
                    ${summary.totalSingleBottles} отд. бут. · ${summary.totalBoxes} кор. · ${summary.totalBottlesShipped} бут. к отправке
                  </div>
                  <div style="margin-top:8px;color:#a8a29e;font-size:12px;">Стоимость доставки уточняется с клиентом, если не входит в бесплатную.</div>
                </td>
              </tr>
            </table>
            ${notesBlock}
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 32px 28px;background:#faf7f4;border-top:1px solid #e8e0d8;">
            <div style="color:#57534e;font-size:13px;line-height:1.6;margin-bottom:8px;">
              Ответьте на <a href="mailto:${escapeHtml(customer.email)}" style="color:#722f37;font-weight:600;">${escapeHtml(customer.email)}</a>, чтобы подтвердить бронь.
            </div>
            <div style="color:#a8a29e;font-size:12px;">Отправлено с сайта georgian-royal-wine</div>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  return {
    subject: `Новая бронь — ${clientName} · ${formatEur(subtotal)}`,
    text,
    html,
  };
}

/** @deprecated Use formatStaffOrderEmail */
export function formatOrderRequestEmail(payload: OrderRequestPayload): string {
  return formatStaffOrderEmail(payload).text;
}

function formatItemOrderedPartsEn(item: OrderRequestItem): string {
  const parts = [
    item.bottles > 0 ? `${item.bottles} bottle(s)` : null,
    item.boxes > 0
      ? `${item.boxes} box(es) (${BOX_PAID_BOTTLES} paid + ${BOX_FREE_BOTTLES} free each)`
      : null,
  ].filter(Boolean);
  return parts.join(" + ") || "—";
}

/** Confirmation email sent to the customer — English, HTML + plain text. */
export function formatCustomerConfirmationEmail(
  payload: OrderRequestPayload
): OrderEmail {
  const summary = buildOrderSummary(payload);
  const { customer, items, subtotal } = summary;
  const deliveryNoteEn =
    summary.totalBoxes >= 1
      ? "Free delivery (order includes at least 1 box)"
      : "€3 delivery in Torrevieja, Spain (1–4 bottles)";

  const text = [
    `Dear ${customer.firstName},`,
    "",
    "Thank you for your wine reservation with Georgian Royal Wine (GRW).",
    "We have received your request and our team will contact you shortly to confirm pricing, shipping, and delivery.",
    "",
    "YOUR RESERVATION",
    "----------------",
    ...items.map((item, index) => {
      const freeNote = item.bottlesFree ? `, ${item.bottlesFree} free` : "";
      return [
        `${index + 1}. ${item.name}${item.vintage ? ` (${item.vintage})` : ""}`,
        `   Region: ${item.region}`,
        `   Ordered: ${formatItemOrderedPartsEn(item)}`,
        `   You receive: ${item.bottlesTotal} bottle(s) (${item.bottlesPaid} paid${freeNote})`,
        `   Line total: ${formatEur(item.lineTotal)}`,
      ].join("\n");
    }),
    "",
    `Wine subtotal: ${formatEur(subtotal)}`,
    `Delivery: ${deliveryNoteEn}`,
    "(Final total including shipping will be confirmed by our team.)",
    "",
    "DELIVERY ADDRESS",
    "----------------",
    ...formatDeliveryAddress(customer, "en"),
    "",
    customer.notes ? `YOUR NOTES\n----------\n${customer.notes}\n` : null,
    "If you have any questions, reply to this email or contact us at info@grw-wine.com / +34 607 609 474.",
    "",
    "Kind regards,",
    "Georgian Royal Wine",
  ]
    .filter(Boolean)
    .join("\n");

  const itemRows = items
    .map((item, index) => {
      const title = `${item.name}${item.vintage ? ` (${item.vintage})` : ""}`;
      const freeNote = item.bottlesFree ? `, ${item.bottlesFree} free` : "";
      return `
        <tr>
          <td style="padding:14px 12px;border-bottom:1px solid #e8e0d8;vertical-align:top;color:#78716c;font-size:13px;">${index + 1}</td>
          <td style="padding:14px 12px;border-bottom:1px solid #e8e0d8;vertical-align:top;">
            <div style="font-weight:600;color:#3d1519;font-size:15px;margin-bottom:4px;">${escapeHtml(title)}</div>
            <div style="color:#78716c;font-size:13px;margin-bottom:2px;">Region: ${escapeHtml(item.region)}</div>
            <div style="color:#57534e;font-size:13px;">Ordered: ${escapeHtml(formatItemOrderedPartsEn(item))}</div>
            <div style="color:#57534e;font-size:13px;margin-top:4px;">You receive: <strong>${item.bottlesTotal} bottle(s)</strong> (${item.bottlesPaid} paid${freeNote})</div>
          </td>
          <td style="padding:14px 12px;border-bottom:1px solid #e8e0d8;vertical-align:top;text-align:right;font-weight:700;color:#3d1519;font-size:16px;">${formatEur(item.lineTotal)}</td>
        </tr>`;
    })
    .join("");

  const addressHtml = formatDeliveryAddress(customer, "en")
    .map((line) => `<div style="margin:0 0 4px;color:#1c1917;font-size:14px;">${escapeHtml(line)}</div>`)
    .join("");

  const notesBlock = customer.notes
    ? `
      <div style="margin-top:24px;padding:16px 18px;background:#fffbeb;border-left:4px solid #b8860b;border-radius:0 8px 8px 0;">
        <div style="font-size:12px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;">Your notes</div>
        <div style="color:#78350f;font-size:14px;line-height:1.5;white-space:pre-wrap;">${escapeHtml(customer.notes)}</div>
      </div>`
    : "";

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f0eb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f0eb;padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(61,21,25,0.08);">

        <tr>
          <td style="background:linear-gradient(135deg,#3d1519 0%,#722f37 100%);padding:28px 32px;">
            <div style="font-size:12px;color:#f5d0a9;text-transform:uppercase;letter-spacing:0.12em;margin-bottom:6px;">Georgian Royal Wine</div>
            <div style="font-size:24px;font-weight:700;color:#ffffff;margin-bottom:8px;">Your wine reservation</div>
            <div style="font-size:14px;color:#e8c4a0;">Thank you, ${escapeHtml(customer.firstName)}!</div>
          </td>
        </tr>

        <tr>
          <td style="padding:28px 32px 0;">
            <div style="color:#57534e;font-size:15px;line-height:1.6;margin-bottom:20px;">
              We have received your reservation. Our team will contact you shortly to confirm pricing, shipping, and delivery.
            </div>
            <div style="font-size:13px;font-weight:700;color:#722f37;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:14px;border-bottom:2px solid #f5e6d3;padding-bottom:8px;">Your order</div>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8e0d8;border-radius:8px;overflow:hidden;">
              <tr style="background:#faf7f4;">
                <th style="padding:10px 12px;text-align:left;font-size:11px;color:#78716c;text-transform:uppercase;letter-spacing:0.05em;width:32px;">#</th>
                <th style="padding:10px 12px;text-align:left;font-size:11px;color:#78716c;text-transform:uppercase;letter-spacing:0.05em;">Wine</th>
                <th style="padding:10px 12px;text-align:right;font-size:11px;color:#78716c;text-transform:uppercase;letter-spacing:0.05em;">Total</th>
              </tr>
              ${itemRows}
            </table>
          </td>
        </tr>

        <tr>
          <td style="padding:24px 32px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#faf7f4;border-radius:8px;border:1px solid #e8e0d8;">
              <tr>
                <td style="padding:18px 20px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding:6px 0;color:#57534e;font-size:14px;">Wine subtotal</td>
                      <td style="padding:6px 0;text-align:right;color:#1c1917;font-size:14px;font-weight:500;">${formatEur(subtotal)}</td>
                    </tr>
                    <tr>
                      <td style="padding:6px 0;color:#57534e;font-size:14px;">Delivery</td>
                      <td style="padding:6px 0;text-align:right;font-size:14px;font-weight:600;color:${summary.totalBoxes >= 1 ? "#15803d" : "#57534e"};">${escapeHtml(deliveryNoteEn)}</td>
                    </tr>
                  </table>
                  <div style="margin-top:12px;color:#a8a29e;font-size:12px;">Final total including shipping will be confirmed by our team.</div>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="padding:0 32px 24px;">
            <div style="font-size:13px;font-weight:700;color:#722f37;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:14px;border-bottom:2px solid #f5e6d3;padding-bottom:8px;">Delivery address</div>
            ${addressHtml}
            ${notesBlock}
          </td>
        </tr>

        <tr>
          <td style="padding:20px 32px 28px;background:#faf7f4;border-top:1px solid #e8e0d8;">
            <div style="color:#57534e;font-size:13px;line-height:1.6;margin-bottom:8px;">
              Questions? Reply to this email or contact us at
              <a href="mailto:info@grw-wine.com" style="color:#722f37;font-weight:600;">info@grw-wine.com</a>
              / <a href="tel:+34607609474" style="color:#722f37;font-weight:600;">+34 607 609 474</a>.
            </div>
            <div style="color:#3d1519;font-size:14px;font-weight:600;margin-top:12px;">Kind regards,<br>Georgian Royal Wine</div>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  return {
    subject: "Your wine reservation — Georgian Royal Wine",
    text,
    html,
  };
}

export function formatPriceEur(amount: number): string {
  return new Intl.NumberFormat("en-EU", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}
