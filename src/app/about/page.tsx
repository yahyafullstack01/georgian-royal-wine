import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Georgian Royal Wine and our passion for exceptional wine.",
};

export default function AboutPage() {
  return <AboutContent />;
}
