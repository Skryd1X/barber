import { motion } from 'framer-motion';
import { CheckCircle2, Scissors, ShieldCheck } from 'lucide-react';
import type { Translation, Language } from '@/data/translations';
import type { BusinessInfo } from '@/data/business';
import portraitImage from '@/assets/nizom-portrait.webp';

interface AboutProps {
  t: Translation;
  language: Language;
  business: BusinessInfo;
}

export function About({ t, language, business }: AboutProps) {
  const points = [
    { icon: Scissors, text: business.slogan[language] },
    { icon: ShieldCheck, text: t.about.text },
    { icon: CheckCircle2, text: business.description[language] },
  ];

  return (
    <section id="about" className="px-6 py-10 md:px-10 md:py-14">
      <div className="mx-auto max-w-7xl rounded-[30px] border border-white/[0.08] bg-white/[0.03] p-6 md:p-8 lg:p-10">
        <p className="mb-2 text-xs uppercase tracking-[0.35em] text-gold-300">{t.nav.about}</p>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <motion.div
            className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-black/[0.25]"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <img src={portraitImage} alt={business.name} className="h-[360px] w-full object-cover object-center" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h2 className="font-display text-4xl text-cream-100 md:text-5xl">{t.about.title}</h2>
              <p className="mt-2 text-lg text-gold-300">{business.role[language]}</p>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {points.map((point, idx) => (
              <motion.div
                key={idx}
                className="rounded-[24px] border border-gold-400/[0.12] bg-gold-400/[0.03] p-5"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-gold-300"><point.icon size={18} /></div>
                  <p className="leading-8 text-cream-100/[0.88]">{point.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
