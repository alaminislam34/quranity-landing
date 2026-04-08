import {defineRouting} from 'next-intl/routing';

export const locales = ['en', 'ar', 'sq'] as const;
export const defaultLocale = 'en';

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: 'always'
});
