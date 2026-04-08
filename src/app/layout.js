import "./globals.css";
import { defaultLocale } from "../../i18n/routing";

export const metadata = {
  title: "Quranity",
  description: "Your digital guide to Quranic wisdom",
};

export default async function RootLayout({ children, params }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || defaultLocale;
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
