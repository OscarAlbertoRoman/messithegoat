"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Globe, Check } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, localeNames, localeFlags, type Locale } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const t = useTranslations("nav");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  function selectLocale(next: Locale) {
    setOpen(false);
    router.replace(pathname, { locale: next });
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("languageLabel")}
        className="flex items-center gap-1.5 rounded-full border border-goat-border bg-goat-panel/80 px-3 py-1.5 text-sm text-white/90 transition-colors hover:border-goat-gold/60 hover:text-goat-gold"
      >
        <Globe size={16} className="text-goat-gold" />
        <span className="hidden sm:inline">{localeFlags[locale]}</span>
        <span className="font-medium">{localeNames[locale]}</span>
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 z-50 mt-2 max-h-80 w-56 overflow-y-auto rounded-xl border border-goat-border bg-goat-panel/95 p-1.5 shadow-2xl shadow-black/50 backdrop-blur-xl"
        >
          {locales.map((l) => (
            <button
              key={l}
              role="option"
              aria-selected={l === locale}
              onClick={() => selectLocale(l)}
              className="flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-sm text-white/85 transition-colors hover:bg-goat-gold/10 hover:text-goat-gold"
            >
              <span className="flex items-center gap-2">
                <span>{localeFlags[l]}</span>
                <span>{localeNames[l]}</span>
              </span>
              {l === locale && <Check size={14} className="text-goat-gold" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
