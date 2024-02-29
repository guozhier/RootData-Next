import { createLocalizedPathnamesNavigation, Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'zh', 'vi'] as const;

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  // If all locales use the same pathname, a
  // single external path can be provided.

  '/': '/'
  // If locales use different paths, you can
  // specify each external path per locale.


  // Dynamic params are supported via square brackets


  // Also (optional) catch-all segments are supported

} satisfies Pathnames<typeof locales>

export const { Link, redirect, usePathname, useRouter } = createLocalizedPathnamesNavigation({ locales, pathnames });