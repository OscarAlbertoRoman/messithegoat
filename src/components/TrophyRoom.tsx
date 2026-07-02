"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Trophy, Star, Flag, Crown, Shield, Award, Footprints, Medal } from "lucide-react";
import { trophyEntries, type TrophyEntry } from "@/data/trophies";
import SectionHeading from "./SectionHeading";

const iconMap: Record<TrophyEntry["icon"], typeof Trophy> = {
  "world-cup": Trophy,
  "ballon-dor": Star,
  "champions": Shield,
  "liga": Crown,
  "copa-america": Flag,
  "cup": Award,
  "medal": Medal,
  "boot": Footprints,
};

export default function TrophyRoom() {
  const t = useTranslations("trophies");

  return (
    <section
      id="trophies"
      className="relative overflow-hidden bg-goat-black px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-goat-gold/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trophyEntries.map((trophy, i) => {
            const Icon = iconMap[trophy.icon];
            return (
              <motion.div
                key={trophy.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl border border-goat-border bg-goat-panel/60 p-6 backdrop-blur-sm transition-colors hover:border-goat-gold/50"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-goat-gold/10 text-goat-gold transition-transform group-hover:scale-110 group-hover:rotate-6">
                    <Icon size={24} strokeWidth={1.75} />
                  </div>
                  <span className="font-display text-3xl text-goat-gold">
                    ×{trophy.count}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-white">
                  {t(`items.${trophy.id}.name`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {t(`items.${trophy.id}.detail`)}
                </p>
                <p className="mt-4 text-xs font-medium uppercase tracking-wider text-goat-celeste/70">
                  {trophy.years}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
