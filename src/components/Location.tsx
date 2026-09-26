import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone } from 'lucide-react';
import type { Translation, Language } from '@/data/translations';
import type { BusinessInfo } from '@/data/business';

interface LocationProps {
  t: Translation;
  language: Language;
  business: BusinessInfo;
}

export function Location({ t, language, business }: LocationProps) {
  return (
    <section id="location" className="px-6 py-10 md:px-10 md:py-14">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          className="rounded-[30px] border border-white/8 bg-white/[0.03] p-6 md:p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-2 text-xs uppercase tracking-[0.35em] text-gold-300">{t.nav.location}</p>
          <h2 className="font-display text-4xl text-cream-100 md:text-5xl">{t.location.title}</h2>
          <p className="mt-3 text-cream-200/60">{t.location.subtitle}</p>

          <div className="mt-8 rounded-[24px] border border-gold-400/14 bg-gold-400/5 p-5">
            <div className="flex items-start gap-3">
              <div className="mt-1 text-gold-300"><MapPin size={18} /></div>
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-cream-200/40">{t.location.address}</p>
                <p className="mt-2 text-lg leading-8 text-cream-100">{business.address[language]}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={business.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full gold-gradient px-6 py-3.5 text-sm font-semibold text-ink-950"
            >
              <Navigation size={16} />
              {t.location.route}
            </a>
            <a
              href={`tel:${business.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-cream-100"
            >
              <Phone size={16} />
              {t.contact.call}
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-[30px] border border-white/8 bg-white/[0.03] p-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.06 }}
        >
          <div className="h-full min-h-[320px] rounded-[24px] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_45%),linear-gradient(180deg,#111317,#0b0b0d)] p-6">
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cream-200/70">
                  <MapPin size={14} className="text-gold-300" />
                  Yandex Maps
                </div>
                <h3 className="font-display text-3xl text-cream-100">{business.name}</h3>
                <p className="mt-3 max-w-sm text-cream-200/60">{business.address[language]}</p>
              </div>
              <div className="rounded-[24px] border border-gold-400/12 bg-black/30 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-cream-200/35">{t.location.openMap}</p>
                <p className="mt-2 text-cream-100">{business.mapUrl}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
