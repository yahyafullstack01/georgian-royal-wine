import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Georgian Royal Wine — premium Georgian wines from Kakheti and Racha, bringing authentic Georgian heritage to Europe.",
};

export default function AboutPage() {
  return <AboutContent />;
}
