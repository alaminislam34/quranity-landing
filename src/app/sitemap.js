import { locales, baseUrl } from '@/lib/i18n-utils';

export default function sitemap() {
  return locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
    alternates: {
      languages: {
        en: `${baseUrl}/en`,
        ar: `${baseUrl}/ar`,
        sq: `${baseUrl}/sq`,
      },
    },
  }));
}
