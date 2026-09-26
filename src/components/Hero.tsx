import { motion } from 'framer-motion';
import { Phone, Send, Sparkles } from 'lucide-react';
import type { Translation, Language } from '@/data/translations';
import type { BusinessInfo } from '@/data/business';
import { formatPrice, services } from '@/data/services';

interface HeroProps {
  t: Translation;
  language: Language;
  business: BusinessInfo;
  isOpen: boolean;
}

export function Hero({ t, language, business, isOpen }: HeroProps) {
  const previewPrices = services.slice(0, 2);

  return (
    <section id="hero" className="relative overflow-hidden px-6 pb-14 pt-32 md:px-10 md:pb-24 md:pt-36">
      <div className="absolute left-[-120px] top-28 h-72 w-72 rounded-full bg-gold-400/10 blur-[120px]" />
      <div className="absolute right-[-120px] top-40 h-72 w-72 rounded-full bg-gold-400/10 blur-[130px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-400/20 bg-gold-400/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-gold-300">
            <Sparkles size={14} />
            {t.hero.eyebrow}
          </div>

          <h1 className="font-display text-5xl leading-none text-cream-100 md:text-7xl">
            {business.name}
          </h1>
          <p className="mt-3 text-lg text-gold-300 md:text-2xl">{business.slogan[language]}</p>
          <p className="mt-6 max-w-xl text-base leading-8 text-cream-200/68 md:text-lg">
            {business.description[language]}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <div className={`rounded-full px-4 py-2 text-sm font-medium ${isOpen ? 'bg-emerald-500/15 text-emerald-300' : 'bg-red-500/15 text-red-300'}`}>
              {isOpen ? t.hero.open : t.hero.closed}
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cream-200/70">
              {t.hero.daily}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={business.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full gold-gradient px-6 py-3.5 text-sm font-semibold text-ink-950 shadow-lg shadow-gold-500/20"
            >
              <Send size={16} />
              {t.hero.bookNow}
            </a>
            <a
              href={`tel:${business.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-cream-100"
            >
              <Phone size={16} />
              {t.hero.callNow}
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.65 }}
        >
          <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-gold-400/20 via-transparent to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-white/8 bg-white/4 p-3 backdrop-blur-xl">
            <div className="relative overflow-hidden rounded-[26px]">
              <img
                src={business.heroImage}
                alt="Barber tools"
                className="h-[420px] w-full object-cover object-center md:h-[560px]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/18 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3">
                {previewPrices.map((item) => (
                  <div key={item.id} className="rounded-2xl border border-white/10 bg-ink-950/60 p-4 backdrop-blur-xl">
                    <p className="text-xs uppercase tracking-[0.18em] text-cream-200/40">{item.name[language]}</p>
                    <p className="mt-2 font-display text-3xl leading-none gold-text">{formatPrice(item.price)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
