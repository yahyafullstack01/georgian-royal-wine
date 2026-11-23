import { NextResponse, type NextRequest } from "next/server";

function buildCsp(nonce: string) {
  // React dev mode needs eval() for its debugging features; it never uses
  // eval() in production, so only allow it outside production builds.
  const devEval =
    process.env.NODE_ENV === "development" ? " 'unsafe-eval'" : "";

  return [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${devEval} https://www.googletagmanager.com`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self' data:",
    "connect-src 'self' https:",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join("; ");
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const csp = buildCsp(nonce);

  const headers = new Headers(request.headers);
  headers.set("x-nonce", nonce);
  if (pathname === "/ru" || pathname.startsWith("/ru/")) {
    headers.set("x-locale", "ru");
  }

  const response = NextResponse.next({ request: { headers } });
  response.headers.set("Content-Security-Policy", csp);
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
