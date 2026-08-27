"use client";

import Image from "next/image";
import GeorgianDivider from "@/components/GeorgianDivider";

const PANELS = [
  {
    src: "/about/vineyard-path.jpg",
    position: "object-[center_40%]",
    delay: "0s",
  },
  {
    src: "/about/tanks-golden.jpg",
    position: "object-center",
    delay: "0.4s",
  },
  {
    src: "/about/office.jpg",
    position: "object-[center_25%]",
    delay: "0.8s",
  },
];

interface AboutHeroProps {
  title: string;
  subtitle: string;
}

export default function AboutHero({ title, subtitle }: AboutHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-burgundy-950">
      <div className="grid min-h-[72vh] grid-cols-1 sm:min-h-[80vh] sm:grid-cols-3">
        {PANELS.map((panel) => (
          <div
            key={panel.src}
            className="relative min-h-[26vh] overflow-hidden border-b border-gold-500/25 last:border-b-0 sm:min-h-0 sm:border-b-0 sm:border-r sm:border-gold-500/25 sm:last:border-r-0"
          >
            <Image
              src={panel.src}
              alt=""
              fill
              priority
              sizes="(max-width: 640px) 100vw, 33vw"
              className={`about-hero-ken object-cover ${panel.position}`}
              style={{ animationDelay: panel.delay }}
            />
          </div>
        ))}
      </div>

      {/* Center focus — vignette, not a card */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 50% 48%, rgba(26,10,10,0.78) 0%, rgba(26,10,10,0.35) 55%, rgba(26,10,10,0.15) 100%)",
        }}
      />

      <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
        <div className="w-full max-w-2xl text-center">
          <Image
            src="/grw-logo.png"
            alt="Georgian Royal Wine"
            width={220}
            height={76}
            className="about-hero-rise mx-auto h-14 w-auto object-contain sm:h-16"
            priority
          />
          <GeorgianDivider className="my-6 sm:my-8" />
          <h1 className="about-hero-rise font-serif text-4xl tracking-wide text-cream-100 sm:text-5xl lg:text-6xl [animation-delay:100ms]">
            {title}
          </h1>
          <p className="about-hero-rise mx-auto mt-4 max-w-lg text-base leading-relaxed text-cream-100/85 sm:mt-5 sm:text-lg [animation-delay:200ms]">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="absolute inset-x-0 top-0 z-30 h-px bg-gradient-to-r from-transparent via-gold-500/55 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-30 h-px bg-gradient-to-r from-transparent via-gold-500/55 to-transparent" />
    </section>
  );
}
