"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { recordStats } from "@/data/stats";
import SectionHeading from "./SectionHeading";

export default function GoatStats() {
  const t = useTranslations("stats");
  const [active, setActive] = useState<string | null>(null);

  return (
    <section
      id="stats"
      className="relative bg-goat-charcoal px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mt-16 space-y-6">
          {recordStats.map((stat, i) => {
            const pct = Math.max(6, Math.round((stat.value / stat.max) * 100));
            const isActive = active === stat.id;
            return (
              <div
                key={stat.id}
                className="group relative"
                onMouseEnter={() => setActive(stat.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(stat.id)}
                onBlur={() => setActive(null)}
                tabIndex={0}
                role="img"
                aria-label={`${t(`items.${stat.id}.label`)}: ${stat.value}`}
              >
                <div className="mb-2 flex items-baseline justify-between gap-4">
                  <span className="text-sm font-semibold text-white/85 sm:text-base">
                    {t(`items.${stat.id}.label`)}
                  </span>
                  <span className="font-display text-2xl text-goat-gold sm:text-3xl">
                    {stat.value.toLocaleString()}
                  </span>
                </div>

                <div className="h-2.5 w-full overflow-hidden rounded-full bg-goat-panel">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${pct}%` }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 1, ease: "easeOut", delay: (i % 8) * 0.06 }}
                    className="h-full rounded-full bg-gradient-to-r from-goat-gold-dim via-goat-gold to-goat-gold-light"
                  />
                </div>

                <div
                  className={`mt-2 overflow-hidden text-xs leading-relaxed text-white/50 transition-all duration-300 sm:text-sm ${
                    isActive ? "max-h-10 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {t(`items.${stat.id}.context`)}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-12 text-center text-xs uppercase tracking-wider text-white/35">
          {t("note")}
        </p>
      </div>
    </section>
  );
}
