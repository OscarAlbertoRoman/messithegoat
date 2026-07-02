import { defineRouting } from "next-intl/routing";

export const locales = [
  "en",
  "zh",
  "hi",
  "es",
  "fr",
  "ar",
  "bn",
  "pt",
  "ru",
  "id",
  "it",
  "de",
  "ja",
  "ko",
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  zh: "中文",
  hi: "हिन्दी",
  es: "Español",
  fr: "Français",
  ar: "العربية",
  bn: "বাংলা",
  pt: "Português",
  ru: "Русский",
  id: "Indonesia",
  it: "Italiano",
  de: "Deutsch",
  ja: "日本語",
  ko: "한국어",
};

export const localeFlags: Record<Locale, string> = {
  en: "🇬🇧",
  zh: "🇨🇳",
  hi: "🇮🇳",
  es: "🇪🇸",
  fr: "🇫🇷",
  ar: "🇸🇦",
  bn: "🇧🇩",
  pt: "🇵🇹",
  ru: "🇷🇺",
  id: "🇮🇩",
  it: "🇮🇹",
  de: "🇩🇪",
  ja: "🇯🇵",
  ko: "🇰🇷",
};

export const rtlLocales: ReadonlySet<Locale> = new Set(["ar"]);

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
});
