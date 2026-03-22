"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative py-12 px-8 md:px-14 border-t border-border"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-serif italic text-sm text-muted-foreground">
          {"Jihan Kamila \u00A9 2026"}
        </p>
        <p className="font-sans text-[0.55rem] tracking-[0.25em] uppercase text-muted-foreground">
          Jiwa bebas di alam terbuka
        </p>
      </div>
    </motion.footer>
  );
}
