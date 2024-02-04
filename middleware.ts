import createMiddleware from 'next-intl/middleware';
import { locales } from './navigation';
import { NextResponse, type NextRequest } from 'next/server';
import { ResponseCookies, RequestCookies } from 'next/dist/server/web/spec-extension/cookies';

// const I18nMiddleware = createI18nMiddleware({
//   locales: ['en', 'zh', 'vi'],
//   defaultLocale: 'en'
// })

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'en',

  localePrefix: 'as-needed'
  // localePrefix: 'always'
});

// export function middleware(request: NextRequest) {
//   return I18nMiddleware(request)
// }


export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)']
};
