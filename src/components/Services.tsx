import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import type { Translation, Language } from '@/data/translations';
import { formatPrice, services } from '@/data/services';

interface ServicesProps { t: Translation; language: Language; onBook: (serviceId: string) => void; }

export function Services({ t, language, onBook }: ServicesProps) {
  return (
    <section id="services" className="px-6 py-12 md:px-10 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8"><p className="mb-2 text-xs uppercase tracking-[0.35em] text-gold-300">{t.nav.services}</p><h2 className="font-display text-4xl text-cream-100 md:text-5xl">{t.services.title}</h2><p className="mt-3 max-w-xl text-cream-200/[0.6]">{t.services.subtitle}</p></div>
        <div className="grid gap-5 lg:grid-cols-2">
          {services.map((service, idx) => { const Icon = service.icon; return (
            <motion.article key={service.id} className="group relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-xl transition hover:border-gold-400/[0.25] hover:bg-white/[0.045]" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: .5, delay: idx*.05 }}>
              <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full border border-gold-400/[0.08] transition duration-500 group-hover:scale-110"/>
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="min-w-0 flex-1"><div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-400/[0.22] bg-gold-400/[0.05] text-gold-300"><Icon size={24}/></div><h3 className="font-display text-3xl text-cream-100">{service.name[language]}</h3><p className="mt-3 max-w-md text-base leading-7 text-cream-200/[0.58]">{service.description[language]}</p></div>
                <div className="md:min-w-[220px] md:text-right"><p className="text-xs uppercase tracking-[.28em] text-cream-200/[0.35]">{t.services.priceLabel}</p><p className="mt-2 font-display text-4xl leading-none gold-text md:text-5xl">{formatPrice(service.price)}</p><button type="button" onClick={() => onBook(service.id)} className="mt-6 inline-flex min-h-[46px] items-center gap-2 rounded-full border border-gold-400/[0.25] px-5 text-sm font-semibold text-cream-100 transition hover:border-gold-400/[0.55] hover:bg-gold-400/[0.05] hover:text-gold-300 active:scale-[.98]"><Send size={14}/>{t.services.book}</button></div>
              </div>
            </motion.article>
          )})}
        </div>
      </div>
    </section>
  );
}
