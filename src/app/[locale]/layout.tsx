import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import "../globals.css";
import { routing, rtlLocales, type Locale } from "@/i18n/routing";
import { getBodyFontClass, fontDisplay } from "@/fonts";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  const dir = rtlLocales.has(locale as Locale) ? "rtl" : "ltr";
  const bodyFontClass = getBodyFontClass(locale as Locale);

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${bodyFontClass} ${fontDisplay.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased bg-goat-black text-white">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
