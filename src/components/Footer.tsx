import type { Translation } from '@/data/translations';
import type { BusinessInfo } from '@/data/business';

interface FooterProps {
  t: Translation;
  business: BusinessInfo;
}

export function Footer({ t, business }: FooterProps) {
  return (
    <footer className="px-6 pb-20 pt-6 md:px-10 md:pb-10 safe-bottom">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 text-center md:flex-row md:text-left">
        <div>
          <p className="font-display text-2xl text-cream-100">{business.name}</p>
          <p className="text-sm text-cream-200/[0.4]">© {new Date().getFullYear()} · {t.footer.rights}</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-cream-200/[0.6] md:justify-end">
          <a href={`tel:${business.phone}`} className="hover:text-gold-300">{business.phoneDisplay}</a>
          <a href={business.telegramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold-300">{business.telegram}</a>
        </div>
      </div>
    </footer>
  );
}
