import { defaultLocale, hasLocale, locales } from "@/constants/cv-data";
import { NextRequest, NextResponse } from "next/server";

function detectLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language");

  if (!acceptLanguage) {
    return defaultLocale;
  }

  const preferredLocales = acceptLanguage
    .split(",")
    .map((entry) => entry.trim().split(";")[0]?.toLowerCase())
    .filter(Boolean);

  for (const preferredLocale of preferredLocales) {
    if (hasLocale(preferredLocale)) {
      return preferredLocale;
    }

    const baseLocale = preferredLocale.split("-")[0];

    if (baseLocale && hasLocale(baseLocale)) {
      return baseLocale;
    }
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const detectedLocale = detectLocale(request);
  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = pathname === "/" ? `/${detectedLocale}` : `/${detectedLocale}${pathname}`;

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
