import {getRequestConfig} from 'next-intl/server';
import {defaultLocale, routing} from './routing';

export default getRequestConfig(async ({locale}) => {
  const resolvedLocale =
    locale && routing.locales.includes(locale as (typeof routing.locales)[number])
      ? locale
      : defaultLocale;

  return {
    locale: resolvedLocale,
    messages: (await import(`../messages/${resolvedLocale}.json`)).default
  };
});
