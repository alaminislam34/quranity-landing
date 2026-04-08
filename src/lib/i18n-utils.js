import { routing } from '../../i18n/routing';

export const locales = routing.locales;
export const defaultLocale = routing.defaultLocale;
export const rtlLocales = ['ar'];

export const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://quranity.com';

export function localizeRoute(path, locale) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `/${locale}${normalizedPath === '/' ? '' : normalizedPath}`;
}

export function isRTL(locale) {
  return rtlLocales.includes(locale);
}
