import { NextIntlClientProvider } from 'next-intl';
import Navbar from '@/app/components/Header/Navbar';
import Footer from '@/app/components/Footer/Footer';
import { locales, baseUrl } from '@/lib/i18n-utils';

export async function generateMetadata({ params }) {
  const { locale: localeParam } = await params;
  const locale = locales.includes(localeParam) ? localeParam : 'en';

  const canonical = `${baseUrl}/${locale}`;

  return {
    title: 'Quranity',
    description: 'Your digital guide to Quranic wisdom',
    alternates: {
      canonical,
      languages: {
        en: `${baseUrl}/en`,
        ar: `${baseUrl}/ar`,
        sq: `${baseUrl}/sq`,
        'x-default': `${baseUrl}/en`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  const { locale: localeParam } = await params;
  const locale = locales.includes(localeParam) ? localeParam : 'en';

  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
