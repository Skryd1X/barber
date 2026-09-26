import { motion } from 'framer-motion';
import { Clock3, Send } from 'lucide-react';
import type { Translation, Language } from '@/data/translations';
import { formatPrice, services } from '@/data/services';

interface ServicesProps {
  t: Translation;
  language: Language;
  onBook: (serviceId: string) => void;
}

export function Services({ t, language, onBook }: ServicesProps) {
  return (
    <section id="services" className="px-6 py-12 md:px-10 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.35em] text-gold-300">{t.nav.services}</p>
            <h2 className="font-display text-4xl text-cream-100 md:text-5xl">{t.services.title}</h2>
            <p className="mt-3 max-w-xl text-cream-200/60">{t.services.subtitle}</p>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                className="group rounded-[30px] border border-white/8 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:border-gold-400/25 hover:bg-white/[0.05]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-400/25 bg-gold-400/5 text-gold-300">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-display text-3xl text-cream-100">{service.name[language]}</h3>
                    <p className="mt-3 max-w-md text-base leading-7 text-cream-200/60">{service.description[language]}</p>
                    <div className="mt-6 flex items-center gap-2 text-sm text-cream-200/45">
                      <Clock3 size={16} className="text-gold-400" />
                      <span>{t.services.duration}: {service.duration[language]}</span>
                    </div>
                  </div>

                  <div className="md:min-w-[220px] md:text-right">
                    <p className="text-xs uppercase tracking-[0.28em] text-cream-200/40">{t.services.priceLabel}</p>
                    <p className="mt-2 font-display text-4xl md:text-5xl leading-none gold-text">{formatPrice(service.price)}</p>
                    <button
                      onClick={() => onBook(service.id)}
                      className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold-400/25 px-5 py-3 text-sm font-semibold text-cream-100 transition hover:border-gold-400/55 hover:text-gold-300"
                    >
                      <Send size={14} />
                      {t.services.book}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
