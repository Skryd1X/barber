import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Translation } from '@/data/translations';
import { galleryImages } from '@/data/business';

interface GalleryProps {
  t: Translation;
}

export function Gallery({ t }: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % galleryImages.length));
  }, []);
  const prevImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + galleryImages.length) % galleryImages.length
    );
  }, []);

  return (
    <section id="gallery" className="relative py-20 md:py-32 px-6 md:px-10 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-12 md:mb-16">
        <motion.p
          className="text-gold-400 text-sm tracking-[0.3em] uppercase mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t.gallery.title}
        </motion.p>
        <motion.h2
          className="font-display text-4xl md:text-6xl text-cream-100 mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          {t.gallery.subtitle}
        </motion.h2>
        <motion.p
          className="text-cream-200/40 text-sm md:hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {t.gallery.tapToView}
        </motion.p>
      </div>

      {/* Mobile: horizontal scroll */}
      <div
        ref={scrollRef}
        className="md:hidden flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-6 px-6 pb-2"
      >
        {galleryImages.map((img, idx) => (
          <div
            key={idx}
            onClick={() => openLightbox(idx)}
            className="relative flex-shrink-0 w-[75%] aspect-[3/4] rounded-2xl overflow-hidden glass snap-center cursor-pointer active:scale-95 transition-transform"
          >
            <img
              src={img}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent" />
          </div>
        ))}
      </div>

      {/* Desktop: masonry grid */}
      <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((img, idx) => (
          <motion.div
            key={idx}
            onClick={() => openLightbox(idx)}
            className={`relative rounded-2xl overflow-hidden glass cursor-pointer group ${
              idx % 5 === 0 ? 'row-span-2 aspect-[3/4]' : 'aspect-square'
            }`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: (idx % 4) * 0.08, duration: 0.5 }}
          >
            <img
              src={img}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 gold-border rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[9500] flex items-center justify-center bg-ink-950/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 w-11 h-11 rounded-full glass-gold flex items-center justify-center z-10 safe-top"
            >
              <X size={20} className="text-cream-100" />
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-5 glass rounded-full px-4 py-2 text-cream-200/60 text-sm safe-top">
              {lightboxIndex + 1} / {galleryImages.length}
            </div>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 md:left-5 w-11 h-11 rounded-full glass-gold flex items-center justify-center z-10"
            >
              <ChevronLeft size={22} className="text-cream-100" />
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              src={galleryImages[lightboxIndex]}
              alt={`Gallery ${lightboxIndex + 1}`}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              drag
              dragSnapToOrigin
              onDragEnd={(_, info) => {
                if (Math.abs(info.offset.x) > 100) {
                  if (info.offset.x > 0) prevImage();
                  else nextImage();
                }
              }}
            />

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 md:right-5 w-11 h-11 rounded-full glass-gold flex items-center justify-center z-10"
            >
              <ChevronRight size={22} className="text-cream-100" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
