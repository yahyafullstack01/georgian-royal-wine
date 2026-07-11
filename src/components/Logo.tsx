import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  linked?: boolean;
  badge?: boolean;
  className?: string;
}

const sizes = {
  sm: { width: 140, height: 48, className: "h-10 w-auto sm:h-11" },
  md: { width: 180, height: 62, className: "h-14 w-auto" },
  lg: { width: 280, height: 96, className: "h-24 w-auto sm:h-28" },
};

export default function Logo({
  size = "sm",
  linked = true,
  badge = false,
  className = "",
}: LogoProps) {
  const { width, height, className: sizeClass } = sizes[size];

  const image = (
    <Image
      src="/logo.png"
      alt="Georgian Royal Wine"
      width={width}
      height={height}
      priority={size === "sm"}
      className={`${sizeClass} object-contain ${className}`}
    />
  );

  const content = badge ? (
    <span className="inline-flex rounded-md bg-white px-2.5 py-1 shadow-sm ring-1 ring-brand-500/20 dark:bg-white/95 dark:ring-brand-400/25">
      {image}
    </span>
  ) : (
    image
  );

  if (!linked) return content;

  return (
    <Link href="/" className="inline-flex shrink-0 items-center">
      {content}
    </Link>
  );
}
