"use client";

import Image from "next/image";
import GeorgianDivider from "@/components/GeorgianDivider";

const BOTTLES = [
  "/wines/rezos-wine-saperavi.png",
  "/wines/grw-kisi-qvevri.png",
  "/wines/grw-alazani-valley.png",
  "/wines/rezos-wine-kisi.png",
];

interface ShopHeroProps {
  title: string;
  subtitle?: string;
}

export default function ShopHero({ title, subtitle }: ShopHeroProps) {
  return (
    <section className="relative isolate min-h-[22rem] overflow-hidden sm:min-h-[26rem]">
      {/* Building — cropped above the fence so it stays atmosphere */}
      <Image
        src="/banner/office.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_20%] scale-105"
      />

      {/* Soft wash — light on brick, stronger at the base for the bottle stage */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, rgba(26,10,10,0.35) 0%, rgba(26,10,10,0.25) 32%, rgba(26,10,10,0.55) 58%, #1a0a0a 100%)",
        }}
      />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="relative z-20 flex min-h-[22rem] flex-col sm:min-h-[26rem]">
        <div className="mx-auto w-full max-w-3xl flex-1 px-4 pt-12 text-center sm:px-6 sm:pt-14">
          <GeorgianDivider className="mb-5" />
          <h1 className="font-serif text-4xl tracking-wide text-cream-100 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-cream-100/85 sm:text-lg">
              {subtitle}
            </p>
          )}
          <GeorgianDivider className="mt-5" />
        </div>

        {/* Bottles as one centered lineup on the dark stage */}
        <div
          className="pointer-events-none relative z-10 flex items-end justify-center gap-1 px-2 pb-0 sm:gap-3"
          aria-hidden="true"
        >
          {BOTTLES.map((src, i) => (
            <div
              key={src}
              className={`shop-float relative ${
                i === 0 || i === 3
                  ? "h-36 w-auto sm:h-48"
                  : "h-40 w-auto sm:h-56"
              } ${i === 1 || i === 2 ? "hidden sm:block" : ""}`}
              style={{ animationDelay: `${i * 0.4}s` }}
            >
              <Image
                src={src}
                alt=""
                width={200}
                height={480}
                className="h-full w-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.55)]"
                sizes="(max-width: 640px) 28vw, 12vw"
                priority
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-30 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
    </section>
  );
}
