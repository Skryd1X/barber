import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Phone, Send } from 'lucide-react';
import type { Language, Translation } from '@/data/translations';

interface HeaderProps {
  t: Translation;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  telegramUrl: string;
  phone: string;
  masterName: string;
}

const langLabels: Record<Language, { flag: string; label: string }> = {
  uz: { flag: '🇺🇿', label: 'UZ' },
  ru: { flag: '🇷🇺', label: 'RU' },
  en: { flag: '🇬🇧', label: 'EN' },
};

export function Header({ t, language, onLanguageChange, telegramUrl, phone, masterName }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const nav = [
    ['#services', t.nav.services],
    ['#location', t.nav.location],
    ['#about', t.nav.about],
    ['#hours', t.nav.hours],
    ['#contact', t.nav.contact],
  ] as const;

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-[8000] safe-top"
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55 }}
    >
      <div className={`mx-3 mt-3 rounded-[24px] border transition-all duration-300 ${scrolled ? 'glass border-white/10' : 'bg-black/20 border-white/5 backdrop-blur-md'}`}>
        <div className="flex items-center justify-between gap-3 px-4 py-3 md:px-6">
          <a href="#hero" className="flex items-center gap-3 min-w-0">
            <div className="flex h-11 w-11 items-center justify-center rounded-full gold-gradient shadow-lg shadow-gold-500/15">
              <span className="font-display text-xl font-semibold text-ink-950">N</span>
            </div>
            <div className="min-w-0">
              <div className="font-display text-xl text-cream-100">{masterName}</div>
              <div className="hidden text-xs text-cream-200/40 md:block">{t.hero.role}</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {nav.map(([href, label]) => (
              <a key={href} href={href} className="text-sm text-cream-200/70 transition hover:text-gold-300">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-2 rounded-full border border-white/8 bg-white/5 px-3 py-2 text-sm text-cream-100 backdrop-blur-xl"
              >
                <span>{langLabels[language].flag}</span>
                <span>{langLabels[language].label}</span>
                <ChevronDown size={14} className={`transition ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    className="absolute right-0 top-full mt-2 w-40 overflow-hidden rounded-2xl border border-white/10 bg-ink-900/95 shadow-2xl"
                    initial={{ opacity: 0, y: -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.96 }}
                  >
                    {(Object.keys(langLabels) as Language[]).map((code) => (
                      <button
                        key={code}
                        onClick={() => {
                          onLanguageChange(code);
                          setLangOpen(false);
                        }}
                        className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition hover:bg-white/5 ${code === language ? 'text-gold-300' : 'text-cream-200/70'}`}
                      >
                        <span>{langLabels[code].flag}</span>
                        <span>{code === 'uz' ? "O‘zbekcha" : code === 'ru' ? 'Русский' : 'English'}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href={`tel:${phone}`}
              className="hidden rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-cream-100 transition hover:border-gold-400/40 hover:text-gold-300 md:inline-flex items-center gap-2"
            >
              <Phone size={14} />
              {t.hero.callNow}
            </a>
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full gold-gradient px-4 py-2 text-sm font-semibold text-ink-950 shadow-lg shadow-gold-500/20 transition hover:scale-[1.02]"
            >
              <Send size={14} />
              <span className="hidden sm:inline">{t.hero.bookNow}</span>
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
