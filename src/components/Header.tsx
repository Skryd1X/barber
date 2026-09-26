import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Check, Phone, Send } from 'lucide-react';
import type { Language, Translation } from '@/data/translations';
import { FlagIcon } from './FlagIcon';

interface HeaderProps {
  t: Translation;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  telegramUrl: string;
  phone: string;
  masterName: string;
}

const labels: Record<Language, string> = { uz: 'UZ', ru: 'RU', en: 'EN' };
const names: Record<Language, string> = { uz: "O‘zbekcha", ru: 'Русский', en: 'English' };

export function Header({ t, language, onLanguageChange, telegramUrl, phone, masterName }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: PointerEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener('pointerdown', onClick);
    return () => document.removeEventListener('pointerdown', onClick);
  }, []);

  const nav = [[ '#services', t.nav.services ], [ '#location', t.nav.location ], [ '#about', t.nav.about ], [ '#hours', t.nav.hours ], [ '#contact', t.nav.contact ]] as const;

  return (
    <motion.header className="fixed inset-x-0 top-0 z-[8000] safe-top" initial={{ y: -70, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .55 }}>
      <div className={`mx-3 mt-3 rounded-[24px] border transition-all duration-300 ${scrolled ? 'glass border-white/[0.1] shadow-2xl shadow-black/[0.2]' : 'border-white/[0.05] bg-black/[0.2] backdrop-blur-md'}`}>
        <div className="flex items-center justify-between gap-3 px-4 py-3 md:px-6">
          <a href="#hero" className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full gold-gradient shadow-lg shadow-gold-500/[0.15]"><span className="font-display text-xl font-semibold text-ink-950">N</span></div>
            <div className="min-w-0"><div className="font-display text-xl text-cream-100">{masterName}</div><div className="hidden text-xs text-cream-200/[0.4] md:block">{t.hero.role}</div></div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">{nav.map(([href,label]) => <a key={href} href={href} className="text-sm text-cream-200/[0.65] transition hover:text-gold-300">{label}</a>)}</nav>

          <div className="flex items-center gap-2 md:gap-3">
            <div ref={langRef} className="relative">
              <button type="button" onClick={() => setLangOpen(v => !v)} aria-expanded={langOpen} className="flex min-h-[42px] items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.05] px-3 text-sm text-cream-100 backdrop-blur-xl transition hover:border-gold-400/[0.25]">
                <FlagIcon code={language} className="h-5 w-7"/><span className="font-semibold">{labels[language]}</span><ChevronDown size={14} className={`transition duration-300 ${langOpen ? 'rotate-180 text-gold-300' : 'text-cream-200/[0.35]'}`}/>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div className="absolute right-0 top-full mt-2 w-52 overflow-hidden rounded-[22px] border border-white/[0.1] bg-ink-900/[0.96] p-2 shadow-2xl backdrop-blur-2xl" initial={{ opacity: 0, y: -8, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: .96 }} transition={{ duration: .18 }}>
                    {(Object.keys(labels) as Language[]).map(code => (
                      <button key={code} type="button" onClick={() => { onLanguageChange(code); setLangOpen(false); }} className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left text-sm transition ${code === language ? 'bg-gold-400/[0.08] text-gold-300' : 'text-cream-200/[0.7] hover:bg-white/[0.05]'}`}>
                        <FlagIcon code={code}/><span className="flex-1">{names[code]}</span>{code === language && <Check size={15}/>} 
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href={`tel:${phone}`} className="hidden min-h-[42px] items-center gap-2 rounded-full border border-white/[0.1] px-4 text-sm font-medium text-cream-100 transition hover:border-gold-400/[0.4] hover:text-gold-300 md:inline-flex"><Phone size={14}/>{t.hero.callNow}</a>
            <a href={telegramUrl} className="inline-flex min-h-[42px] items-center gap-2 rounded-full gold-gradient px-4 text-sm font-semibold text-ink-950 shadow-lg shadow-gold-500/[0.2] transition hover:brightness-105"><Send size={14}/><span className="hidden sm:inline">{t.hero.bookNow}</span></a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
