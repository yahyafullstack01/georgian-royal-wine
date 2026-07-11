import type { Metadata } from "next";
import ContactPageContent from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Georgian Royal Wine for orders, tastings, and partnerships.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
