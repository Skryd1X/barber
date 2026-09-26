import { motion } from 'framer-motion';
import { Clock3 } from 'lucide-react';
import type { Translation, Language } from '@/data/translations';
import type { BusinessInfo } from '@/data/business';

interface WorkingHoursProps { t: Translation; language: Language; business: BusinessInfo; isOpen: boolean; }

export function WorkingHours({ t, business, isOpen }: WorkingHoursProps) {
  return (
    <section id="hours" className="px-6 py-10 md:px-10 md:py-14">
      <motion.div className="mx-auto max-w-7xl rounded-[30px] border border-white/[0.08] bg-white/[0.03] p-6 md:p-8" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"><div><p className="mb-2 text-xs uppercase tracking-[.35em] text-gold-300">{t.nav.hours}</p><h2 className="font-display text-4xl text-cream-100 md:text-5xl">{t.hours.title}</h2><p className="mt-3 text-cream-200/[0.6]">{t.hours.subtitle}</p></div><div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm ${isOpen ? 'bg-emerald-500/[0.15] text-emerald-300' : 'bg-red-500/[0.15] text-red-300'}`}><Clock3 size={15}/>{isOpen ? t.hours.currentOpen : t.hours.currentClosed}</div></div>
        <div className="grid gap-4 md:grid-cols-3"><div className="rounded-[24px] border border-white/[0.08] bg-black/[0.2] p-5"><p className="text-sm uppercase tracking-[.18em] text-cream-200/[0.4]">{t.hours.everyday}</p><p className="mt-3 font-display text-4xl text-cream-100">08:00–22:00</p></div><div className="rounded-[24px] border border-white/[0.08] bg-black/[0.2] p-5"><p className="text-sm uppercase tracking-[.18em] text-cream-200/[0.4]">{t.hours.open}</p><p className="mt-3 font-display text-4xl text-cream-100">{business.workingHours.daily.open}</p></div><div className="rounded-[24px] border border-white/[0.08] bg-black/[0.2] p-5"><p className="text-sm uppercase tracking-[.18em] text-cream-200/[0.4]">{t.hours.close}</p><p className="mt-3 font-display text-4xl text-cream-100">{business.workingHours.daily.close}</p></div></div>
      </motion.div>
    </section>
  );
}
