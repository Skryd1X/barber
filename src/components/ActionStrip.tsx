import { motion } from 'framer-motion';
import { Phone, Send } from 'lucide-react';
import type { Translation } from '@/data/translations';
import type { BusinessInfo } from '@/data/business';

interface ActionStripProps {
  t: Translation;
  business: BusinessInfo;
}

export function ActionStrip({ t, business }: ActionStripProps) {
  return (
    <section className="px-6 pb-10 md:px-10 md:pb-14">
      <motion.div
        className="mx-auto max-w-7xl rounded-[30px] border border-gold-400/[0.15] bg-[linear-gradient(135deg,rgba(212,175,55,0.08),rgba(255,255,255,0.03))] p-6 md:p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-gold-300">{t.nav.contact}</p>
            <h3 className="mt-2 font-display text-3xl text-cream-100 md:text-4xl">{t.actions.title}</h3>
            <p className="mt-2 max-w-xl text-cream-200/[0.6]">{t.actions.subtitle}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={business.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full gold-gradient px-6 py-3.5 text-sm font-semibold text-ink-950"
            >
              <Send size={15} />
              {t.actions.book}
            </a>
            <a
              href={`tel:${business.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-cream-100"
            >
              <Phone size={15} />
              {t.actions.call}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
