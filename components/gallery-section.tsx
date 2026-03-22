"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Pegunungan Indonesia saat matahari terbit",
    title: "Sunrise di Puncak",
    location: "Jawa Tengah",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Air terjun tropis di hutan Indonesia",
    title: "Air Terjun Tersembunyi",
    location: "Jawa Barat",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Sawah terasering Indonesia",
    title: "Terasering Hijau",
    location: "Bali",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Pendaki di jalur hutan tropis",
    title: "Jejak Petualangan",
    location: "Kalimantan",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Lanskap vulkanik Indonesia",
    title: "Negeri Di Atas Awan",
    location: "Jawa Timur",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Pantai Indonesia saat senja",
    title: "Senja di Pantai",
    location: "NTT",
  },
];

export function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = "";
  }, []);

  const navigate = useCallback(
    (direction: number) => {
      if (selectedIndex === null) return;
      const newIndex = (selectedIndex + direction + images.length) % images.length;
      setSelectedIndex(newIndex);
    },
    [selectedIndex]
  );

  return (
    <section id="galeri" className="relative py-32 md:py-44 px-8 md:px-14">
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
          Galeri
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-serif italic text-[clamp(2.5rem,5vw,4rem)] font-light text-foreground leading-none tracking-wide mb-16 text-balance"
      >
        Jejak <span className="text-primary-light">Perjalanan</span>
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {images.map((image, index) => (
          <motion.button
            key={image.src}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => openLightbox(index)}
            className="group relative aspect-[4/5] overflow-hidden block w-full text-left"
            aria-label={`Lihat foto: ${image.title}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-all duration-500 flex items-end p-6">
              <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="font-serif italic text-xl text-foreground">
                  {image.title}
                </p>
                <p className="font-sans text-[0.6rem] tracking-[0.2em] uppercase text-primary mt-1">
                  {image.location}
                </p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-lg flex items-center justify-center"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`Foto: ${images[selectedIndex].title}`}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-[70] p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Tutup lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(-1);
              }}
              className="absolute left-4 md:left-8 z-[70] p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Foto sebelumnya"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(1);
              }}
              className="absolute right-4 md:right-8 z-[70] p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Foto berikutnya"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-[90vw] h-[80vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <p className="font-serif italic text-xl text-foreground">
                  {images[selectedIndex].title}
                </p>
                <p className="font-sans text-[0.6rem] tracking-[0.2em] uppercase text-primary mt-2">
                  {images[selectedIndex].location}
                </p>
              </div>
            </motion.div>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex(i);
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    i === selectedIndex
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/40"
                  }`}
                  aria-label={`Foto ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
