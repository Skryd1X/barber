import { useEffect, useMemo, useState } from 'react';
import { business } from '@/data/business';
import { services, formatPrice } from '@/data/services';
import { useLanguage } from '@/hooks/useLanguage';
import { useOpenStatus } from '@/hooks/useOpenStatus';
import { Loader } from '@/components/Loader';
import { LanguageModal } from '@/components/LanguageModal';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { ActionStrip } from '@/components/ActionStrip';
import { Location } from '@/components/Location';
import { About } from '@/components/About';
import { WorkingHours } from '@/components/WorkingHours';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { FloatingBookButton } from '@/components/FloatingBookButton';

export default function App() {
  const { language, t, changeLanguage, hasStoredLang } = useLanguage();
  const [loading, setLoading] = useState(true);
  const [showLangModal, setShowLangModal] = useState(false);
  const [showFloatingBook, setShowFloatingBook] = useState(false);
  const openStatus = useOpenStatus(business.workingHours.daily.open, business.workingHours.daily.close);

  useEffect(() => { if (!loading && !hasStoredLang) setShowLangModal(true); }, [loading, hasStoredLang]);

  useEffect(() => {
    const onScroll = () => setShowFloatingBook(window.scrollY > 520);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const el = event.target as HTMLElement | null;
      if (el?.closest('button,a') && 'vibrate' in navigator) navigator.vibrate?.(8);
    };
    document.addEventListener('click', onClick, { passive: true });
    return () => document.removeEventListener('click', onClick);
  }, []);

  const bookingMessages = useMemo(() => {
    return Object.fromEntries(services.map(service => [service.id, t.booking.messageTemplate.replace('{service}', service.name[language]).replace('{price}', formatPrice(service.price))]));
  }, [language, t.booking.messageTemplate]);

  const openServiceTelegram = async (serviceId: string) => {
    const message = bookingMessages[serviceId] ?? '';
    if (!message) return;
    try {
      if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(message);
      else fallbackCopy(message);
    } catch { fallbackCopy(message); }
    const url = `${business.telegramUrl}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  };

  const openGenericTelegram = () => { window.location.href = business.telegramUrl; };

  return (
    <>
      <div className="grain-overlay" />
      <div className="ambient-grid" aria-hidden="true" />
      {loading && <Loader tagline={t.loader.tagline} onComplete={() => setLoading(false)} />}
      <LanguageModal open={showLangModal} onSelect={(lang) => { changeLanguage(lang); setShowLangModal(false); }} title={t.languageModal.title} subtitle={t.languageModal.subtitle} />

      <div className="relative min-h-screen overflow-hidden">
        <Header t={t} language={language} onLanguageChange={changeLanguage} telegramUrl={business.telegramUrl} phone={business.phone} masterName={business.name} />
        <main>
          <Hero t={t} language={language} business={business} isOpen={openStatus.isOpen} />
          <Services t={t} language={language} onBook={openServiceTelegram} />
          <ActionStrip t={t} business={business} />
          <Location t={t} language={language} business={business} />
          <About t={t} language={language} business={business} />
          <WorkingHours t={t} language={language} business={business} isOpen={openStatus.isOpen} />
          <Contact t={t} language={language} business={business} />
        </main>
        <Footer t={t} business={business} />
      </div>
      <FloatingBookButton t={t} visible={showFloatingBook} onBook={openGenericTelegram} />
    </>
  );
}

function fallbackCopy(text: string) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
}
