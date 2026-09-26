import type { Language } from '@/data/translations';

export function FlagIcon({ code, className = '' }: { code: Language; className?: string }) {
  const common = `h-6 w-9 overflow-hidden rounded-[7px] border border-white/[0.1] shadow-sm ${className}`;
  if (code === 'ru') {
    return <svg viewBox="0 0 36 24" className={common} aria-hidden="true"><rect width="36" height="8" fill="#fff"/><rect y="8" width="36" height="8" fill="#1f4fa3"/><rect y="16" width="36" height="8" fill="#d52b1e"/></svg>;
  }
  if (code === 'en') {
    return <svg viewBox="0 0 36 24" className={common} aria-hidden="true"><rect width="36" height="24" fill="#012169"/><path d="M0 0 36 24M36 0 0 24" stroke="#fff" strokeWidth="5"/><path d="M0 0 36 24M36 0 0 24" stroke="#C8102E" strokeWidth="2.5"/><path d="M18 0v24M0 12h36" stroke="#fff" strokeWidth="7"/><path d="M18 0v24M0 12h36" stroke="#C8102E" strokeWidth="4"/></svg>;
  }
  return <svg viewBox="0 0 36 24" className={common} aria-hidden="true"><rect width="36" height="8" fill="#1EB53A"/><rect y="8" width="36" height="8" fill="#fff"/><rect y="16" width="36" height="8" fill="#0099B5"/><rect y="7.3" width="36" height="1.4" fill="#CE1126"/><rect y="15.3" width="36" height="1.4" fill="#CE1126"/><circle cx="7" cy="4" r="2.2" fill="#fff"/><circle cx="8" cy="4" r="1.8" fill="#1EB53A"/><g fill="#fff"><circle cx="13" cy="2.8" r=".65"/><circle cx="15.4" cy="3.8" r=".65"/><circle cx="13" cy="5.2" r=".65"/><circle cx="17.5" cy="2.8" r=".65"/></g></svg>;
}
