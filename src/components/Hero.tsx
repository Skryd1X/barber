import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, Send, Sparkles } from 'lucide-react';
import type { Translation, Language } from '@/data/translations';
import type { BusinessInfo } from '@/data/business';
import { formatPrice, services } from '@/data/services';

interface HeroProps { t: Translation; language: Language; business: BusinessInfo; isOpen: boolean; }

export function Hero({ t, language, business, isOpen }: HeroProps) {
  const { scrollY } = useScroll();
  const ySoft = useTransform(scrollY, [0, 700], [0, 90]);
  const yReverse = useTransform(scrollY, [0, 700], [0, -60]);

  return (
    <section id="hero" className="relative overflow-hidden px-6 pb-14 pt-32 md:px-10 md:pb-24 md:pt-36">
      <motion.div style={{ y: ySoft }} className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-gold-400/[0.1] blur-[120px]"/>
      <motion.div style={{ y: yReverse }} className="pointer-events-none absolute -right-24 top-44 h-80 w-80 rounded-full bg-gold-400/[0.1] blur-[140px]"/>

      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, ease: [0.22,1,.36,1] }}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-400/[0.2] bg-gold-400/[0.05] px-4 py-2 text-xs uppercase tracking-[0.28em] text-gold-300"><Sparkles size={14}/>{t.hero.eyebrow}</div>
          <h1 className="font-display text-5xl leading-[.9] text-cream-100 md:text-7xl lg:text-8xl">{business.name}</h1>
          <p className="mt-4 max-w-2xl text-lg text-gold-300 md:text-2xl">{business.slogan[language]}</p>
          <p className="mt-6 max-w-xl text-base leading-8 text-cream-200/[0.66] md:text-lg">{business.description[language]}</p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <div className={`rounded-full px-4 py-2 text-sm font-medium ${isOpen ? 'bg-emerald-500/[0.15] text-emerald-300' : 'bg-red-500/[0.15] text-red-300'}`}>{isOpen ? t.hero.open : t.hero.closed}</div>
            <div className="rounded-full border border-white/[0.1] bg-white/[0.05] px-4 py-2 text-sm text-cream-200/[0.7]">{t.hero.daily}</div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={business.telegramUrl} className="inline-flex min-h-[48px] items-center gap-2 rounded-full gold-gradient px-6 text-sm font-semibold text-ink-950 shadow-lg shadow-gold-500/[0.2] transition hover:translate-y-[-1px] hover:brightness-105"><Send size={16}/>{t.hero.bookNow}</a>
            <a href={`tel:${business.phone}`} className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.05] px-6 text-sm font-semibold text-cream-100 transition hover:border-gold-400/[0.3]"><Phone size={16}/>{t.hero.callNow}</a>
          </div>
        </motion.div>

        <BarberVisual language={language} />
      </div>
    </section>
  );
}

function BarberVisual({ language }: { language: Language }) {
  const preview = services.slice(0, 2);
  return (
    <motion.div className="relative" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1, duration: .7, ease: [0.22,1,.36,1] }}>
      <div className="absolute -inset-5 rounded-[42px] bg-gradient-to-br from-gold-400/[0.16] via-transparent to-transparent blur-2xl"/>
      <div className="relative min-h-[480px] overflow-hidden rounded-[34px] border border-white/[0.08] bg-[linear-gradient(145deg,rgba(255,255,255,.05),rgba(255,255,255,.015))] p-4 backdrop-blur-xl md:min-h-[570px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_26%,rgba(212,175,55,.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,.02),transparent_35%)]"/>
        <motion.div className="absolute right-10 top-14 h-64 w-64 rounded-full border border-white/[0.05]" animate={{ rotate: 360 }} transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}/>
        <motion.div className="absolute right-20 top-24 h-48 w-48 rounded-full border border-gold-400/[0.1]" animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}/>

        <div className="relative flex min-h-[448px] flex-col justify-between md:min-h-[538px]">
          <div className="flex items-center justify-between rounded-[24px] border border-white/[0.08] bg-black/[0.2] px-5 py-4 backdrop-blur-xl">
            <span className="text-xs uppercase tracking-[.28em] text-cream-200/[0.4]">NIZOM · BARBER</span>
            <span className="h-2 w-2 rounded-full bg-gold-400 shadow-[0_0_24px_rgba(212,175,55,.65)]"/>
          </div>

          <div className="relative mx-auto my-4 h-64 w-full max-w-sm">
            <motion.svg viewBox="0 0 360 270" className="h-full w-full" fill="none" aria-hidden="true" animate={{ y: [0,-7,0] }} transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}>
              <defs><linearGradient id="heroSteel" x1="70" y1="30" x2="292" y2="235"><stop stopColor="#F9F9F6"/><stop offset=".4" stopColor="#8D939B"/><stop offset=".7" stopColor="#E8E8E3"/><stop offset="1" stopColor="#5E6268"/></linearGradient><linearGradient id="heroGold" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#F8E8AF"/><stop offset=".5" stopColor="#D4AF37"/><stop offset="1" stopColor="#7D5918"/></linearGradient></defs>
              <g opacity=".95">
                <path d="M167 137 73 225c-13 12-33 11-44-2-10-13-8-32 5-42l115-72Z" fill="url(#heroSteel)" stroke="#4B4D53" strokeWidth="2"/>
                <path d="M193 137 287 225c13 12 33 11 44-2 10-13 8-32-5-42l-115-72Z" fill="url(#heroSteel)" stroke="#4B4D53" strokeWidth="2"/>
                <path d="m165 132-53-53" stroke="#8E949C" strokeWidth="13" strokeLinecap="round"/>
                <path d="m195 132 53-53" stroke="#8E949C" strokeWidth="13" strokeLinecap="round"/>
                <circle cx="92" cy="58" r="35" stroke="url(#heroGold)" strokeWidth="10" fill="#0B0B0D"/>
                <circle cx="268" cy="58" r="35" stroke="url(#heroGold)" strokeWidth="10" fill="#0B0B0D"/>
                <circle cx="180" cy="137" r="14" fill="url(#heroGold)"/><circle cx="180" cy="137" r="5" fill="#0B0B0D"/>
              </g>
            </motion.svg>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {preview.map(item => <div key={item.id} className="rounded-[22px] border border-white/[0.09] bg-ink-950/[0.6] p-4 backdrop-blur-xl"><p className="text-[10px] uppercase tracking-[.16em] text-cream-200/[0.4]">{item.name[language]}</p><p className="mt-2 font-display text-3xl leading-none gold-text">{formatPrice(item.price)}</p></div>)}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
