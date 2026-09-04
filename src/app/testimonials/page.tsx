import type { Metadata } from "next";
import TestimonialsPageContent from "@/components/TestimonialsPageContent";

export const metadata: Metadata = {
  title: "Client Reviews",
  description:
    "Real client reviews of Georgian Royal Wine — taste, delivery, and authentic Georgian wines in Spain.",
};

export default function TestimonialsPage() {
  return <TestimonialsPageContent />;
}
