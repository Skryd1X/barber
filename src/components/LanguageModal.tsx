import { AnimatePresence, motion } from 'framer-motion';
import { Check, Languages } from 'lucide-react';
import type { Language } from '@/data/translations';
import { FlagIcon } from './FlagIcon';

interface LanguageModalProps {
  open: boolean;
  onSelect: (lang: Language) => void;
  title: string;
  subtitle: string;
}

const languages: Array<{ code: Language; native: string; detail: string }> = [
  { code: 'uz', native: "O‘zbekcha", detail: 'Asosiy til' },
  { code: 'ru', native: 'Русский', detail: 'Русский язык' },
  { code: 'en', native: 'English', detail: 'English language' },
];

export function LanguageModal({ open, onSelect, title, subtitle }: LanguageModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[9000] flex items-center justify-center px-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="absolute inset-0 bg-ink-950/[0.86] backdrop-blur-2xl" />
          <motion.div
            className="relative w-full max-w-md overflow-hidden rounded-[32px] border border-white/[0.1] bg-ink-900/[0.94] p-6 shadow-2xl md:p-8"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: 'spring', stiffness: 240, damping: 24 }}
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold-400/[0.1] blur-3xl" />
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-400/[0.2] bg-gold-400/[0.08] text-gold-300"><Languages size={24}/></div>
              <div>
                <h2 className="font-display text-3xl text-cream-100">{title}</h2>
                <p className="mt-1 text-sm text-cream-200/[0.45]">{subtitle}</p>
              </div>
            </div>

            <div className="grid gap-3">
              {languages.map((lang, index) => (
                <motion.button
                  key={lang.code}
                  type="button"
                  onClick={() => onSelect(lang.code)}
                  className="group flex min-h-[72px] items-center gap-4 rounded-[22px] border border-white/[0.08] bg-white/[0.035] px-4 py-3 text-left transition hover:border-gold-400/[0.3] hover:bg-gold-400/[0.05]"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + index * 0.06 }}
                  whileTap={{ scale: 0.985 }}
                >
                  <FlagIcon code={lang.code} className="h-8 w-12" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-base font-semibold text-cream-100">{lang.native}</span>
                    <span className="mt-0.5 block text-xs text-cream-200/[0.4]">{lang.detail}</span>
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-cream-200/[0.3] transition group-hover:border-gold-400/[0.25] group-hover:text-gold-300"><Check size={16}/></span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
