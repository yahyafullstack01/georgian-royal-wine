import type { Locale } from "@/lib/i18n/translations";

const PREFIXABLE_PREFIXES = ["/wines/", "/vino/", "/guias/"];
const PREFIXABLE_EXACT = ["/", "/shop", "/vino", "/guias"];

/**
 * Paths that have a real, indexable Russian route under /ru.
 * Keep in sync with src/app/ru/**.
 */
export function localizedHref(path: string, locale: Locale): string {
  if (locale !== "ru") return path;

  const [pathname, query] = path.split("?");
  let prefixed = pathname;

  if (pathname === "/") prefixed = "/ru";
  else if (PREFIXABLE_EXACT.includes(pathname)) prefixed = `/ru${pathname}`;
  else if (PREFIXABLE_PREFIXES.some((p) => pathname.startsWith(p)))
    prefixed = `/ru${pathname}`;

  if (prefixed === pathname) return path;
  return query ? `${prefixed}?${query}` : prefixed;
}

/** Strips a /ru prefix to get the default (Spanish) equivalent path. */
export function unlocalizedHref(path: string): string {
  if (path === "/ru") return "/";
  if (path.startsWith("/ru/")) return path.slice("/ru".length);
  return path;
}

/** True if this pathname has a dedicated Russian route. */
export function hasRussianRoute(pathname: string): boolean {
  return (
    PREFIXABLE_EXACT.includes(pathname) ||
    PREFIXABLE_PREFIXES.some((p) => pathname.startsWith(p))
  );
}
