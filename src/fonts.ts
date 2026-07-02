import {
  Inter,
  Bebas_Neue,
  Noto_Sans_Arabic,
  Noto_Sans_Bengali,
  Noto_Sans_Devanagari,
  Noto_Sans_SC,
  Noto_Sans_JP,
  Noto_Sans_KR,
} from "next/font/google";
import type { Locale } from "@/i18n/routing";

// Latin / Cyrillic body font — covers en, es, fr, pt, it, de, id, ru
export const fontLatin = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  display: "swap",
});

// Decorative display font used for the "MESSI" brand mark (kept in Latin
// across all locales, similar to how brand wordmarks aren't translated)
export const fontDisplay = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const fontArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-body",
  display: "swap",
});

export const fontBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-body",
  display: "swap",
});

export const fontDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-body",
  display: "swap",
});

export const fontZh = Noto_Sans_SC({
  weight: ["400", "500", "700", "900"],
  variable: "--font-body",
  display: "swap",
});

export const fontJa = Noto_Sans_JP({
  weight: ["400", "500", "700", "900"],
  variable: "--font-body",
  display: "swap",
});

export const fontKo = Noto_Sans_KR({
  weight: ["400", "500", "700", "900"],
  variable: "--font-body",
  display: "swap",
});

export function getBodyFontClass(locale: Locale): string {
  switch (locale) {
    case "ar":
      return fontArabic.variable;
    case "bn":
      return fontBengali.variable;
    case "hi":
      return fontDevanagari.variable;
    case "zh":
      return fontZh.variable;
    case "ja":
      return fontJa.variable;
    case "ko":
      return fontKo.variable;
    default:
      return fontLatin.variable;
  }
}
