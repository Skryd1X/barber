import type { ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Clock3, Phone, Send, Sparkles, Star } from 'lucide-react';
import type { Translation, Language } from '@/data/translations';
import type { BusinessInfo } from '@/data/business';
import { formatPrice, services } from '@/data/services';
import heroImage from '@/assets/nizom-hero.webp';

interface HeroProps { t: Translation; language: Language; business: BusinessInfo; isOpen: boolean; }

export function Hero({ t, language, business, isOpen }: HeroProps) {
  const { scrollY } = useScroll();
  const ySoft = useTransform(scrollY, [0, 700], [0, 90]);
  const yReverse = useTransform(scrollY, [0, 700], [0, -60]);

  return (
    <section id="hero" className="relative overflow-hidden px-6 pb-14 pt-32 md:px-10 md:pb-24 md:pt-36">
      <motion.div style={{ y: ySoft }} className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-gold-400/[0.1] blur-[120px]"/>
      <motion.div style={{ y: yReverse }} className="pointer-events-none absolute -right-24 top-44 h-80 w-80 rounded-full bg-gold-400/[0.1] blur-[140px]"/>

      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.96fr_1.04fr] xl:gap-14">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, ease: [0.22,1,.36,1] }}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-400/[0.2] bg-gold-400/[0.05] px-4 py-2 text-xs uppercase tracking-[0.28em] text-gold-300"><Sparkles size={14}/>{t.hero.eyebrow}</div>
          <h1 className="font-display text-5xl leading-[.9] text-cream-100 md:text-7xl lg:text-[5.25rem]">{business.name}</h1>
          <p className="mt-4 max-w-2xl text-lg text-gold-300 md:text-2xl">{business.slogan[language]}</p>
          <p className="mt-6 max-w-xl text-base leading-8 text-cream-200/[0.66] md:text-lg">{business.description[language]}</p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <div className={`rounded-full px-4 py-2 text-sm font-medium ${isOpen ? 'bg-emerald-500/[0.15] text-emerald-300' : 'bg-red-500/[0.15] text-red-300'}`}>{isOpen ? t.hero.open : t.hero.closed}</div>
            <div className="rounded-full border border-white/[0.1] bg-white/[0.05] px-4 py-2 text-sm text-cream-200/[0.7]">{t.hero.daily}</div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={business.telegramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[48px] items-center gap-2 rounded-full gold-gradient px-6 text-sm font-semibold text-ink-950 shadow-lg shadow-gold-500/[0.2] transition hover:translate-y-[-1px] hover:brightness-105"><Send size={16}/>{t.hero.bookNow}</a>
            <a href={`tel:${business.phone}`} className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.05] px-6 text-sm font-semibold text-cream-100 transition hover:border-gold-400/[0.3]"><Phone size={16}/>{t.hero.callNow}</a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <InfoPill icon={<Star size={15} />} label="Premium" value="Barber" />
            <InfoPill icon={<Clock3 size={15} />} label="Open" value="08:00–22:00" />
            <InfoPill icon={<Sparkles size={15} />} label="Telegram" value="@barbernizom" />
          </div>
        </motion.div>

        <BarberVisual language={language} business={business} />
      </div>
    </section>
  );
}

function BarberVisual({ language, business }: { language: Language; business: BusinessInfo }) {
  const preview = services.slice(0, 2);
  return (
    <motion.div className="relative" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1, duration: .7, ease: [0.22,1,.36,1] }}>
      <div className="absolute -inset-5 rounded-[42px] bg-gradient-to-br from-gold-400/[0.16] via-transparent to-transparent blur-2xl"/>
      <div className="relative overflow-hidden rounded-[34px] border border-white/[0.08] bg-[linear-gradient(145deg,rgba(255,255,255,.05),rgba(255,255,255,.015))] p-4 backdrop-blur-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(212,175,55,.14),transparent_24%),linear-gradient(180deg,rgba(255,255,255,.02),transparent_35%)]"/>

        <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-black/[0.22]">
          <img
            src={heroImage}
            alt={business.name}
            className="h-[500px] w-full object-cover object-center md:h-[640px]"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,6,8,.02),rgba(6,6,8,.15)_38%,rgba(6,6,8,.72)_100%)]" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/[0.3] to-transparent" />

          <motion.div
            className="absolute left-4 top-4 rounded-full border border-white/[0.12] bg-black/[0.34] px-4 py-2 backdrop-blur-xl"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <p className="text-[11px] uppercase tracking-[0.28em] text-gold-300">{business.role[language]}</p>
          </motion.div>

          <motion.div
            className="absolute right-4 top-4 rounded-[22px] border border-white/[0.1] bg-black/[0.32] px-4 py-3 backdrop-blur-xl"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <p className="text-[10px] uppercase tracking-[0.22em] text-cream-200/[0.4]">NIZOM</p>
            <p className="mt-1 font-display text-2xl leading-none text-cream-100">Barber</p>
          </motion.div>

          <div className="absolute bottom-4 left-4 right-4 grid gap-3 md:grid-cols-2">
            {preview.map(item => (
              <div key={item.id} className="rounded-[22px] border border-white/[0.09] bg-ink-950/[0.62] p-4 backdrop-blur-xl shadow-lg shadow-black/20">
                <p className="text-[10px] uppercase tracking-[.16em] text-cream-200/[0.4]">{item.name[language]}</p>
                <p className="mt-2 font-display text-3xl leading-none gold-text">{formatPrice(item.price)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function InfoPill({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-[22px] border border-white/[0.08] bg-white/[0.03] p-4 backdrop-blur-xl">
      <div className="flex items-center gap-2 text-gold-300">{icon}<span className="text-[10px] uppercase tracking-[0.22em] text-cream-200/[0.45]">{label}</span></div>
      <p className="mt-2 text-base font-medium text-cream-100">{value}</p>
    </div>
  );
}
