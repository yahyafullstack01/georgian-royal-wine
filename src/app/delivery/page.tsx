import type { Metadata } from "next";
import DeliveryPageContent from "@/components/DeliveryPageContent";

export const metadata: Metadata = {
  title: "Conditions & Delivery",
  description:
    "Shipping conditions for Georgian Royal Wine — Torrevieja, Spain, and Europe.",
};

export default function DeliveryPage() {
  return <DeliveryPageContent />;
}
