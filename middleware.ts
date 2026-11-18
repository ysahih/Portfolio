import { NextResponse, type NextRequest } from 'next/server';
import { defaultLocale, locales } from './app/i18n/config';

/* French is the default: "/" and any path without a locale prefix are
   redirected to /fr. API routes, Next internals and static files are
   excluded by the matcher below. */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip /api, /_next, metadata routes and anything with a file extension.
  matcher: ['/((?!api|_next|robots\\.txt|sitemap\\.xml|.*\\.[^/]+$).*)'],
};
