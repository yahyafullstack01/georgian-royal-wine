"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import GeorgianDivider from "@/components/GeorgianDivider";

const SLIDES = [
  { src: "/about/vineyard-path.jpg", position: "object-[center_45%]" },
  { src: "/about/shop-shelves.jpg", position: "object-center" },
  { src: "/about/barrels.jpg", position: "object-[center_40%]" },
  { src: "/about/harvest-table.jpg", position: "object-[center_35%]" },
  { src: "/about/chokha-bottles.jpg", position: "object-[center_40%]" },
];

const SLIDE_MS = 4800;

interface ContactHeroProps {
  title: string;
  subtitle: string;
}

export default function ContactHero({ title, subtitle }: ContactHeroProps) {
  const [index, setIndex] = useState(0);

  const goTo = useCallback((next: number) => {
    setIndex(next);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, SLIDE_MS);
    return () => window.clearTimeout(timer);
  }, [index]);

  return (
    <section className="relative isolate min-h-[62vh] overflow-hidden bg-burgundy-950 sm:min-h-[68vh]">
      <div className="absolute inset-0">
        {SLIDES.map((slide, i) => {
          const active = i === index;
          return (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
                active ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              aria-hidden={!active}
            >
              <Image
                src={slide.src}
                alt=""
                fill
                priority={i === 0}
                sizes="100vw"
                className={`object-cover ${slide.position} ${
                  active ? "contact-hero-drift" : ""
                }`}
              />
            </div>
          );
        })}
      </div>

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(26,10,10,0.35) 0%, rgba(26,10,10,0.72) 100%), linear-gradient(90deg, rgba(26,10,10,0.55) 0%, transparent 22%, transparent 78%, rgba(26,10,10,0.55) 100%)",
        }}
      />

      <div
        className="contact-hero-sweep pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />

      <div className="relative z-10 flex min-h-[62vh] flex-col items-center justify-center px-4 py-20 text-center sm:min-h-[68vh] sm:px-6">
        <p className="contact-hero-rise text-xs tracking-[0.45em] text-gold-400 uppercase">
          GRW
        </p>
        <GeorgianDivider className="my-6" />
        <h1 className="contact-hero-rise font-serif text-4xl tracking-wide text-cream-100 sm:text-5xl lg:text-6xl [animation-delay:120ms]">
          {title}
        </h1>
        <p className="contact-hero-rise mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream-100/85 sm:text-lg [animation-delay:220ms]">
          {subtitle}
        </p>

        <div
          className="contact-hero-line mt-10 h-px w-24 bg-gradient-to-r from-transparent via-gold-400 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div
        className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 sm:bottom-8"
        role="tablist"
        aria-label="Contact banner slides"
      >
        {SLIDES.map((slide, i) => {
          const active = i === index;
          return (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={active}
              aria-label={`Show slide ${i + 1}`}
              onClick={() => goTo(i)}
              className="group rounded-full p-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400/80"
            >
              <span
                className={`block h-[2px] rounded-full transition-all duration-500 ${
                  active
                    ? "w-9 bg-gold-400 sm:w-11"
                    : "w-5 bg-cream-100/40 group-hover:bg-cream-100/70 sm:w-6"
                }`}
              />
            </button>
          );
        })}
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />
    </section>
  );
}
