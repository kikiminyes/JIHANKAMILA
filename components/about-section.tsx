"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tentang" className="relative py-32 md:py-44 px-8 md:px-14">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="block w-12 h-px bg-primary/40" aria-hidden="true" />
        <span className="font-sans text-[0.6rem] tracking-[0.3em] uppercase text-primary">
          Tentang
        </span>
      </motion.div>

      <div ref={ref} className="flex flex-col lg:flex-row gap-16 lg:gap-24 max-w-6xl mx-auto">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          animate={isInView ? { opacity: 1, clipPath: "inset(0 0% 0 0)" } : {}}
          transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          className="relative w-full lg:w-[45%] aspect-[3/4] flex-shrink-0 vignette overflow-hidden"
        >
          <Image
            src="/images/about.jpg"
            alt="Jihan Kamila di alam"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </motion.div>

        {/* Text */}
        <div className="flex flex-col justify-center lg:w-[55%]">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif italic text-[clamp(2.5rem,5vw,4rem)] font-light text-foreground leading-none tracking-wide mb-8 text-balance"
          >
            Jiwa yang <span className="text-primary-light">Bebas</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            <p className="font-sans text-sm text-muted-foreground leading-relaxed tracking-wide text-pretty">
              Lahir dan besar di Jawa Tengah, Indonesia, saya menemukan panggilan hidup
              di antara puncak gunung dan kedalaman hutan. Setiap langkah di alam adalah
              percakapan sunyi antara jiwa dan semesta.
            </p>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed tracking-wide text-pretty">
              Melalui lensa kamera, saya menangkap keajaiban yang sering terlewat oleh
              mata yang terburu-buru. Setiap foto adalah cerita tentang keindahan yang
              menunggu untuk ditemukan, dari sunrise di puncak gunung hingga senja di
              tepi pantai.
            </p>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed tracking-wide text-pretty">
              Bagi saya, petualangan bukan tentang tujuan, melainkan tentang perjalanan.
              Tentang keberanian untuk melangkah ke yang tidak dikenal dan menemukan
              keindahan di setiap sudut dunia.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex gap-12 mt-12 pt-8 border-t border-border"
          >
            {[
              { number: "50+", label: "Gunung Didaki" },
              { number: "100+", label: "Foto Alam" },
              { number: "15+", label: "Provinsi Dijelajahi" },
            ].map((stat) => (
              <div key={stat.label}>
                <span className="font-serif text-2xl md:text-3xl text-primary-light font-light">
                  {stat.number}
                </span>
                <p className="font-sans text-[0.6rem] tracking-[0.2em] uppercase text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
