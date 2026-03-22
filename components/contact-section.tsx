"use client";

import { motion } from "framer-motion";
import { Instagram, Mail, MapPin } from "lucide-react";

const socials = [
  {
    icon: Instagram,
    label: "Instagram",
    value: "@jihankamila",
    href: "#",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@jihankamila.com",
    href: "mailto:hello@jihankamila.com",
  },
  {
    icon: MapPin,
    label: "Lokasi",
    value: "Jawa Tengah, Indonesia",
    href: "#",
  },
];

export function ContactSection() {
  return (
    <section id="kontak" className="relative py-32 md:py-44 px-8 md:px-14">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-4 mb-6"
      >
        <span className="block w-12 h-px bg-primary/40" aria-hidden="true" />
        <span className="font-sans text-[0.6rem] tracking-[0.3em] uppercase text-primary">
          Kontak
        </span>
      </motion.div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left: heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2"
        >
          <h2 className="font-serif italic text-[clamp(2.5rem,5vw,4rem)] font-light text-foreground leading-none tracking-wide mb-8 text-balance">
            Mari <span className="text-primary-light">Berkenalan</span>
          </h2>
          <p className="font-sans text-sm text-muted-foreground leading-relaxed tracking-wide text-pretty max-w-md">
            Tertarik untuk berkolaborasi, berpetualang bersama, atau sekadar
            berbagi cerita tentang keindahan alam? Jangan ragu untuk menghubungi
            saya.
          </p>
        </motion.div>

        {/* Right: contact links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:w-1/2 flex flex-col gap-8"
        >
          {socials.map((social, index) => (
            <a
              key={social.label}
              href={social.href}
              className="group flex items-start gap-5 py-5 border-b border-border hover:border-primary/50 transition-colors duration-300"
            >
              <social.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-sans text-[0.6rem] tracking-[0.2em] uppercase text-muted-foreground mb-1">
                  {social.label}
                </p>
                <p className="font-serif italic text-lg text-foreground group-hover:text-primary-light transition-colors duration-300">
                  {social.value}
                </p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
