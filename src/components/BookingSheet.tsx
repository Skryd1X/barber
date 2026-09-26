import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Copy, Phone, Send, X } from 'lucide-react';
import type { Language, Translation } from '@/data/translations';
import { business } from '@/data/business';
import { formatPrice, services } from '@/data/services';

interface BookingSheetProps {
  open: boolean;
  onClose: () => void;
  serviceId: string | null;
  t: Translation;
  language: Language;
}

export function BookingSheet({ open, onClose, serviceId, t, language }: BookingSheetProps) {
  const [copied, setCopied] = useState(false);
  const service = services.find((item) => item.id === serviceId) ?? null;

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const message = useCallback(() => {
    if (!service) return '';
    return t.booking.messageTemplate
      .replace('{service}', service.name[language])
      .replace('{price}', formatPrice(service.price));
  }, [language, service, t.booking.messageTemplate]);

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(message());
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };

  return (
    <AnimatePresence>
      {open && service && (
        <>
          <motion.div className="fixed inset-0 z-[8500] bg-black/70 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />
          <motion.div
            className="fixed inset-x-0 bottom-0 z-[8600] safe-bottom"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          >
            <div className="mx-auto max-w-2xl rounded-t-[30px] border border-white/10 bg-ink-900 px-6 pb-8 pt-4 shadow-2xl">
              <div className="mb-5 flex justify-center"><div className="h-1.5 w-14 rounded-full bg-white/10" /></div>
              <button onClick={onClose} className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/8 bg-white/5 text-cream-100/60">
                <X size={16} />
              </button>

              <p className="text-xs uppercase tracking-[0.35em] text-gold-300">{t.booking.title}</p>
              <h3 className="mt-3 font-display text-4xl text-cream-100">{service.name[language]}</h3>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                <div className="rounded-[22px] border border-white/8 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-cream-200/40">{t.booking.price}</p>
                  <p className="mt-2 font-display text-4xl leading-none gold-text">{formatPrice(service.price)}</p>
                </div>
                <div className="rounded-[22px] border border-white/8 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-cream-200/40">{t.booking.duration}</p>
                  <p className="mt-2 text-2xl text-cream-100">{service.duration[language]}</p>
                </div>
              </div>

              <div className="mt-5 rounded-[22px] border border-gold-400/12 bg-gold-400/[0.04] p-4 text-sm leading-7 text-cream-100/88 whitespace-pre-line">
                {message()}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <button onClick={copyText} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-cream-100">
                  <Copy size={15} />
                  {copied ? t.booking.copied : t.booking.copy}
                </button>
                <a href={`tel:${business.phone}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-cream-100">
                  <Phone size={15} />
                  {t.booking.call}
                </a>
                <a href={business.telegramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full gold-gradient px-5 py-3 text-sm font-semibold text-ink-950">
                  <Send size={15} />
                  {t.booking.telegram}
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
