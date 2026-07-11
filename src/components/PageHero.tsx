import GeorgianDivider from "@/components/GeorgianDivider";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  compact?: boolean;
}

export default function PageHero({
  title,
  subtitle,
  compact = false,
}: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden bg-burgundy-950 ${compact ? "py-14 sm:py-16" : "py-20 sm:py-24"}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a84c' fill-opacity='1'%3E%3Cpath d='M30 0l5 10 10 5-10 5-5 10-5-10-10-5 10-5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <GeorgianDivider className="mb-6" />
        <h1 className="font-serif text-4xl tracking-wide text-cream-100 sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-base text-cream-200/75 sm:text-lg">
            {subtitle}
          </p>
        )}
        <GeorgianDivider className="mt-6" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />
    </section>
  );
}
