import type { ContactFormData } from "@/types/wine";

const SUBJECT_LABELS: Record<string, string> = {
  general: "General Inquiry",
  orders: "Order Support",
  wholesale: "Wholesale & Partnerships",
  tasting: "Wine Tasting Events",
  "join-club": "Join the Club",
  other: "Other",
};

export function formatContactEmail(data: ContactFormData): string {
  const subjectLabel = SUBJECT_LABELS[data.subject] ?? data.subject;

  return [
    "NEW CONTACT MESSAGE — Georgian Royal Wine",
    "========================================",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    `Subject: ${subjectLabel}`,
    "",
    "MESSAGE",
    "-------",
    data.message,
    "",
    "---",
    "Submitted via georgian-royal-wine website",
  ]
    .filter(Boolean)
    .join("\n");
}
