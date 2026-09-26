import { motion } from 'framer-motion';
import { CarFront, Map, MapPin, Navigation2 } from 'lucide-react';
import type { Translation, Language } from '@/data/translations';
import type { BusinessInfo } from '@/data/business';

interface LocationProps { t: Translation; language: Language; business: BusinessInfo; }

export function Location({ t, language, business }: LocationProps) {
  return (
    <section id="location" className="px-6 py-10 md:px-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7"><p className="mb-2 text-xs uppercase tracking-[.35em] text-gold-300">{t.nav.location}</p><h2 className="font-display text-4xl text-cream-100 md:text-5xl">{t.location.title}</h2><p className="mt-3 text-cream-200/[0.6]">{t.location.subtitle}</p></div>

        <motion.div className="overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.03] p-3 md:p-4" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="overflow-hidden rounded-[25px] border border-white/[0.08] bg-ink-900">
            <iframe
              src={business.mapEmbedUrl}
              title={business.address[language]}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[360px] w-full border-0 md:h-[430px]"
              allowFullScreen
            />
          </div>

          <div className="grid gap-4 p-3 pt-5 md:grid-cols-[1fr_auto] md:items-center md:p-5 md:pt-6">
            <div className="flex items-start gap-3"><div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-gold-400/[0.18] bg-gold-400/[0.06] text-gold-300"><MapPin size={18}/></div><div><p className="text-xs uppercase tracking-[.18em] text-cream-200/[0.35]">{t.location.address}</p><p className="mt-1 text-lg font-medium text-cream-100 md:text-xl">{business.address[language]}</p></div></div>
          </div>

          <div className="grid gap-3 px-3 pb-3 sm:grid-cols-3 md:px-5 md:pb-5">
            <a href={business.mapUrl} className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.05] px-4 text-center text-sm font-semibold text-cream-100 transition hover:border-gold-400/[0.3] hover:text-gold-300"><Map size={16}/>{t.location.yandexMaps}</a>
            <a href={business.yandexGoUrl} className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full gold-gradient px-4 text-center text-sm font-semibold text-ink-950 transition hover:brightness-105"><CarFront size={16}/>{t.location.yandexGo}</a>
            <a href={business.twoGisUrl} className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.05] px-4 text-center text-sm font-semibold text-cream-100 transition hover:border-gold-400/[0.3] hover:text-gold-300"><Navigation2 size={16}/>{t.location.twoGis}</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
