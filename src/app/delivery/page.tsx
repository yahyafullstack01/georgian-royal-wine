import type { Metadata } from "next";
import DeliveryPageContent from "@/components/DeliveryPageContent";

export const metadata: Metadata = {
  title: "Conditions & Delivery",
  description:
    "Shipping conditions for Georgian Royal Wine — free delivery in Spain only when you order one box or more.",
};

export default function DeliveryPage() {
  return <DeliveryPageContent />;
}
