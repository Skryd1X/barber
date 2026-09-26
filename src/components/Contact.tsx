import { motion } from 'framer-motion';
import { MapPin, Phone, Send } from 'lucide-react';
import type { Translation, Language } from '@/data/translations';
import type { BusinessInfo } from '@/data/business';

interface ContactProps {
  t: Translation;
  language: Language;
  business: BusinessInfo;
  onBook?: () => void;
}

export function Contact({ t, language, business }: ContactProps) {
  return (
    <section id="contact" className="px-6 py-10 md:px-10 md:py-14">
      <motion.div
        className="mx-auto max-w-7xl rounded-[30px] border border-white/8 bg-white/[0.03] p-6 md:p-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="mb-2 text-xs uppercase tracking-[0.35em] text-gold-300">{t.nav.contact}</p>
        <h2 className="font-display text-4xl text-cream-100 md:text-5xl">{t.contact.title}</h2>
        <p className="mt-3 text-cream-200/60">{t.contact.subtitle}</p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <a href={`tel:${business.phone}`} className="rounded-[24px] border border-white/8 bg-black/20 p-5 transition hover:border-gold-400/25">
            <Phone size={18} className="text-gold-300" />
            <p className="mt-4 text-sm uppercase tracking-[0.18em] text-cream-200/40">{t.contact.phone}</p>
            <p className="mt-2 text-xl text-cream-100">{business.phoneDisplay}</p>
          </a>
          <a href={business.telegramUrl} target="_blank" rel="noopener noreferrer" className="rounded-[24px] border border-white/8 bg-black/20 p-5 transition hover:border-gold-400/25">
            <Send size={18} className="text-gold-300" />
            <p className="mt-4 text-sm uppercase tracking-[0.18em] text-cream-200/40">{t.contact.telegram}</p>
            <p className="mt-2 text-xl text-cream-100">{business.telegram}</p>
          </a>
          <a href={business.mapUrl} target="_blank" rel="noopener noreferrer" className="rounded-[24px] border border-white/8 bg-black/20 p-5 transition hover:border-gold-400/25">
            <MapPin size={18} className="text-gold-300" />
            <p className="mt-4 text-sm uppercase tracking-[0.18em] text-cream-200/40">{t.location.address}</p>
            <p className="mt-2 text-lg leading-7 text-cream-100">{business.address[language]}</p>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
