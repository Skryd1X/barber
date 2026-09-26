import { motion, AnimatePresence } from 'framer-motion';
import type { Language } from '@/data/translations';

interface LanguageModalProps {
  open: boolean;
  onSelect: (lang: Language) => void;
  title: string;
  subtitle: string;
}

const languages: {
  code: Language;
  native: string;
  english: string;
  flag: string;
}[] = [
  { code: 'uz', native: "O'zbekcha", english: 'Uzbek', flag: 'uz' },
  { code: 'ru', native: 'Русский', english: 'Russian', flag: 'ru' },
  { code: 'en', native: 'English', english: 'English', flag: 'gb' },
];

export function LanguageModal({ open, onSelect, title, subtitle }: LanguageModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9000] flex items-center justify-center px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-ink-950/85 backdrop-blur-xl" />

          {/* Modal content */}
          <motion.div
            className="relative w-full max-w-sm"
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 30, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glass-gold rounded-3xl p-8 text-center">
              {/* Decorative scissors icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center gold-border">
                  <svg width="28" height="28" viewBox="0 0 120 120" fill="none">
                    <defs>
                      <linearGradient id="modalGold" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#f5ead0" />
                        <stop offset="100%" stopColor="#a87d22" />
                      </linearGradient>
                    </defs>
                    <path d="M60 60 L20 25 L25 20 L65 55 Z" fill="url(#modalGold)" />
                    <path d="M60 60 L100 25 L95 20 L55 55 Z" fill="url(#modalGold)" />
                    <circle cx="28" cy="30" r="10" fill="none" stroke="url(#modalGold)" strokeWidth="2.5" />
                    <circle cx="92" cy="30" r="10" fill="none" stroke="url(#modalGold)" strokeWidth="2.5" />
                    <circle cx="60" cy="60" r="3" fill="url(#modalGold)" />
                  </svg>
                </div>
              </div>

              <h2 className="font-display text-3xl text-cream-100 mb-2">{title}</h2>
              <p className="text-cream-200/40 text-sm mb-8">{subtitle}</p>

              {/* Language buttons */}
              <div className="space-y-3">
                {languages.map((lang, idx) => (
                  <motion.button
                    key={lang.code}
                    onClick={() => onSelect(lang.code)}
                    className="w-full group flex items-center gap-4 rounded-2xl glass px-5 py-4 hover:gold-border transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + idx * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FlagSVG code={lang.flag} />
                    <div className="flex-1 text-left">
                      <p className="text-cream-100 font-medium text-base">{lang.native}</p>
                      <p className="text-cream-200/40 text-xs">{lang.english}</p>
                    </div>
                    <span className="text-gold-400 text-sm font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                      {lang.code}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function FlagSVG({ code }: { code: string }) {
  if (code === 'uz') {
    return (
      <svg width="40" height="28" viewBox="0 0 40 28" className="rounded-md overflow-hidden flex-shrink-0 shadow-lg">
        <rect width="40" height="9.33" fill="#1eb53a" />
        <rect y="9.33" width="40" height="9.33" fill="#fff" />
        <rect y="18.66" width="40" height="9.34" fill="#0099b5" />
        <circle cx="9" cy="4.67" r="2.5" fill="#fff" />
        <circle cx="15" cy="4.67" r="2.5" fill="#fff" />
        <circle cx="9" cy="14" r="2.5" fill="#fff" />
        <circle cx="15" cy="14" r="2.5" fill="#fff" />
      </svg>
    );
  }
  if (code === 'ru') {
    return (
      <svg width="40" height="28" viewBox="0 0 40 28" className="rounded-md overflow-hidden flex-shrink-0 shadow-lg">
        <rect width="40" height="9.33" fill="#fff" />
        <rect y="9.33" width="40" height="9.33" fill="#0039a6" />
        <rect y="18.66" width="40" height="9.34" fill="#d52b1e" />
      </svg>
    );
  }
  return (
    <svg width="40" height="28" viewBox="0 0 40 28" className="rounded-md overflow-hidden flex-shrink-0 shadow-lg">
      <rect width="40" height="28" fill="#012169" />
      <path d="M0 0 L40 28 M40 0 L0 28" stroke="#fff" strokeWidth="4" />
      <path d="M0 0 L40 28 M40 0 L0 28" stroke="#C8102E" strokeWidth="2" />
      <path d="M20 0 V28 M0 14 H40" stroke="#fff" strokeWidth="6" />
      <path d="M20 0 V28 M0 14 H40" stroke="#C8102E" strokeWidth="3" />
    </svg>
  );
}
