"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <span className="inline-block rounded-full border border-goat-gold/30 bg-goat-gold/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-goat-gold">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-4xl tracking-wide text-white sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-balance text-base leading-relaxed text-white/60 sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
