"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const IMAGE_DURATION_MS = 5500;

type HeroSlide =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string };

const HERO_SLIDES: HeroSlide[] = [
  { type: "image", src: "/banner/Home2.jpg", alt: "Georgian Royal Wine" },
  { type: "video", src: "/banner/Home.MP4" },
  { type: "image", src: "/banner/Home1.jpg", alt: "Georgian Royal Wine" },
  { type: "image", src: "/banner/Home3.jpg", alt: "Georgian Royal Wine" },
];

export default function HomeHeroMedia() {
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const slide = HERO_SLIDES[index];

  const goTo = useCallback((next: number) => {
    setIndex(next);
  }, []);

  useEffect(() => {
    if (slide.type === "video") {
      const video = videoRef.current;
      if (!video) return;

      video.currentTime = 0;
      void video.play().catch(() => {
        // Autoplay may be blocked; still advance after fallback delay.
      });

      const onEnded = () => {
        setIndex((i) => (i + 1) % HERO_SLIDES.length);
      };
      video.addEventListener("ended", onEnded);

      const fallback = window.setTimeout(() => {
        setIndex((i) => (i + 1) % HERO_SLIDES.length);
      }, 20000);

      return () => {
        video.pause();
        video.removeEventListener("ended", onEnded);
        window.clearTimeout(fallback);
      };
    }

    const timer = window.setTimeout(() => {
      setIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, IMAGE_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, [index, slide.type]);

  return (
    <>
      <div className="absolute inset-0">
        {HERO_SLIDES.map((item, i) => {
          const active = i === index;
          return (
            <div
              key={`${item.type}-${item.src}`}
              className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
                active ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              aria-hidden={!active}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  priority={i === 0}
                  className="object-cover"
                  sizes="100vw"
                />
              ) : (
                <video
                  ref={videoRef}
                  muted
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 h-full w-full object-cover"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              )}
            </div>
          );
        })}
      </div>

      <div
        className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 sm:bottom-8 sm:gap-2.5"
        role="tablist"
        aria-label="Hero slides"
      >
        {HERO_SLIDES.map((item, i) => {
          const active = i === index;
          return (
            <button
              key={`dash-${item.src}`}
              type="button"
              role="tab"
              aria-selected={active}
              aria-label={`Show slide ${i + 1}`}
              onClick={() => goTo(i)}
              className="group rounded-full p-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400/80"
            >
              <span
                className={`block h-[2px] w-7 rounded-full transition-all duration-500 sm:w-9 ${
                  active
                    ? "bg-gold-400 opacity-100"
                    : "bg-cream-100/45 group-hover:bg-cream-100/75"
                }`}
              />
            </button>
          );
        })}
      </div>
    </>
  );
}
