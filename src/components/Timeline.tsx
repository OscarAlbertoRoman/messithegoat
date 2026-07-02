"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { timelineEntries } from "@/data/timeline";
import SectionHeading from "./SectionHeading";

export default function Timeline() {
  const t = useTranslations("timeline");

  return (
    <section
      id="timeline"
      className="relative bg-goat-charcoal px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="relative mt-20">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-goat-gold/50 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="flex flex-col gap-10 md:gap-4">
            {timelineEntries.map((entry, i) => {
              const isLeft = entry.side === "left";
              return (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: (i % 3) * 0.05 }}
                  className="relative grid grid-cols-1 gap-4 pl-12 md:grid-cols-2 md:gap-8 md:pl-0"
                >
                  <span className="absolute left-2.5 top-1.5 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-goat-gold bg-goat-black shadow-[0_0_12px_2px_rgba(212,175,55,0.5)] md:left-1/2" />

                  <div
                    className={
                      isLeft
                        ? "md:col-start-1 md:pr-12 md:text-right"
                        : "md:col-start-2 md:pl-12"
                    }
                  >
                    <div className="group rounded-2xl border border-goat-border bg-goat-panel/60 p-6 backdrop-blur-sm transition-colors hover:border-goat-gold/40">
                      <span className="font-display text-lg tracking-wide text-goat-gold">
                        {entry.period}
                      </span>
                      <h3 className="mt-1 text-xl font-bold text-white">
                        {t(`items.${entry.id}.title`)}
                      </h3>
                      <p className="mt-1 text-sm font-medium uppercase tracking-wide text-white/40">
                        {t(`items.${entry.id}.club`)}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-white/60">
                        {t(`items.${entry.id}.description`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
