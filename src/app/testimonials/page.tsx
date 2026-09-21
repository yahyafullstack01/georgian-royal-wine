import type { Metadata } from "next";
import TestimonialsPageContent from "@/components/TestimonialsPageContent";

export const metadata: Metadata = {
  title: "Opiniones de clientes en España",
  description:
    "Reseñas reales de clientes de Georgian Royal Wine en España: sabor, entrega y auténtico vino georgiano desde Torrevieja.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return <TestimonialsPageContent />;
}
