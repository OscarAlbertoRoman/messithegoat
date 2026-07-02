"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import { heroStats } from "@/data/stats";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-goat-black px-4 pt-24 pb-16">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-goat-gold/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-blaugrana-blue/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-goat-celeste/10 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-goat-gold/30 bg-goat-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-goat-gold">
          {t("eyebrow")}
        </span>

        <h1 className="font-display leading-[0.95] tracking-wide text-white">
          <span className="block text-[4rem] sm:text-[7rem] lg:text-[9rem]">
            {t("titleLine1")}
          </span>
          <span className="text-gradient-gold block text-[3rem] sm:text-[5.5rem] lg:text-[7rem]">
            {t("titleLine2")}
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-balance text-base leading-relaxed text-white/65 sm:text-lg">
          {t("subtitle")}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#timeline"
            className="rounded-full bg-goat-gold px-8 py-3 text-sm font-semibold text-goat-black shadow-lg shadow-goat-gold/20 transition-transform hover:scale-105"
          >
            {t("cta1")}
          </a>
          <a
            href="#trophies"
            className="rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-colors hover:border-goat-gold hover:text-goat-gold"
          >
            {t("cta2")}
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative z-10 mt-16 grid w-full max-w-4xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
      >
        {heroStats.map((stat) => (
          <div
            key={stat.id}
            className="group rounded-2xl border border-goat-border bg-goat-panel/50 px-4 py-6 text-center backdrop-blur-sm transition-colors hover:border-goat-gold/40"
          >
            <div className="font-display text-3xl text-goat-gold sm:text-4xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="mt-2 text-xs uppercase tracking-wider text-white/55 sm:text-sm">
              {t(`stats.${stat.id}`)}
            </div>
          </div>
        ))}
      </motion.div>

      <motion.a
        href="#timeline"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 z-10 flex flex-col items-center gap-1 text-xs uppercase tracking-widest text-white/40"
      >
        {t("scroll")}
        <ChevronDown size={18} />
      </motion.a>
    </section>
  );
}
