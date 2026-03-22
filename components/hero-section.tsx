"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Full-screen photo */}
      <motion.div
        initial={{ clipPath: "inset(100% 0 0 0)" }}
        animate={{ clipPath: "inset(0% 0 0 0)" }}
        transition={{ duration: 1.8, ease: [0.77, 0, 0.175, 1] }}
        className="absolute inset-0 vignette"
      >
        <Image
          src="/images/hero.jpg"
          alt="Jihan Kamila - portrait di alam"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Large watermark name */}
      <div className="absolute inset-0 z-[8] flex items-center justify-center pointer-events-none">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
          className="font-serif italic text-[clamp(5rem,14vw,13rem)] font-light leading-none whitespace-nowrap"
          style={{
            color: "rgba(255,255,255,0.0)",
            WebkitTextStroke: "1px rgba(255,255,255,0.18)",
            letterSpacing: "0.05em",
          }}
        >
          Jihan
        </motion.h1>
      </div>

      {/* Decorative center line */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 80 }}
        transition={{ duration: 2, delay: 2.2, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[5] pointer-events-none w-px"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(201,169,110,0.3), transparent)",
        }}
      />

      {/* Overlay UI */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-end p-8 md:p-14 pb-12 md:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="font-serif text-foreground text-[clamp(2rem,4vw,3.2rem)] font-light tracking-[0.12em] leading-none text-balance">
              Jihan <span className="italic text-primary-light">Kamila</span>
            </h2>
            <div className="flex items-center gap-2.5 mt-2">
              <span className="block w-6 h-px bg-primary/60" aria-hidden="true" />
              <span className="font-sans text-[0.65rem] tracking-[0.28em] uppercase text-primary">
                Petualang Alam
              </span>
            </div>
          </div>
          <div className="text-right hidden md:block">
            <p className="font-serif italic text-[clamp(0.85rem,1.5vw,1.05rem)] text-muted-foreground leading-relaxed">
              Jiwa bebas yang menemukan
            </p>
            <p className="font-serif italic text-[clamp(0.85rem,1.5vw,1.05rem)] text-muted-foreground leading-relaxed">
              ketenangan di alam terbuka
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 pointer-events-none"
      >
        <span className="font-sans text-[0.55rem] tracking-[0.3em] uppercase text-muted-foreground">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-8 bg-primary/40"
        />
      </motion.div>
    </section>
  );
}
