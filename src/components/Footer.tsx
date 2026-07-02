import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-goat-border bg-goat-black px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center">
        <span className="font-display text-xl tracking-wider text-gradient-gold">
          GOAT.10
        </span>
        <p className="max-w-xl text-sm text-white/55">{t("tagline")}</p>
        <p className="text-xs text-white/35">{t("madeWith")}</p>
        <p className="max-w-xl text-xs text-white/25">{t("rights")}</p>
      </div>
    </footer>
  );
}
