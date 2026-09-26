import { useEffect, useState } from 'react';
import { business } from '@/data/business';
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
import { BookingSheet } from '@/components/BookingSheet';
import { Footer } from '@/components/Footer';
import { FloatingBookButton } from '@/components/FloatingBookButton';

export default function App() {
  const { language, t, changeLanguage, hasStoredLang } = useLanguage();
  const [loading, setLoading] = useState(true);
  const [showLangModal, setShowLangModal] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState<string | null>(null);
  const [showFloatingBook, setShowFloatingBook] = useState(false);

  const openStatus = useOpenStatus(business.workingHours.daily.open, business.workingHours.daily.close);

  useEffect(() => {
    if (!loading && !hasStoredLang) setShowLangModal(true);
  }, [loading, hasStoredLang]);

  useEffect(() => {
    const onScroll = () => setShowFloatingBook(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openBooking = (serviceId?: string) => {
    setBookingService(serviceId ?? 'haircut');
    setBookingOpen(true);
  };

  return (
    <>
      <div className="grain-overlay" />
      {loading && <Loader tagline={t.loader.tagline} onComplete={() => setLoading(false)} />}
      <LanguageModal
        open={showLangModal}
        onSelect={(lang) => {
          changeLanguage(lang);
          setShowLangModal(false);
        }}
        title={t.languageModal.title}
        subtitle={t.languageModal.subtitle}
      />

      <div className="relative min-h-screen overflow-hidden">
        <Header
          t={t}
          language={language}
          onLanguageChange={changeLanguage}
          telegramUrl={business.telegramUrl}
          phone={business.phone}
          masterName={business.name}
        />

        <main>
          <Hero t={t} language={language} business={business} isOpen={openStatus.isOpen} />
          <Services t={t} language={language} onBook={(id) => openBooking(id)} />
          <ActionStrip t={t} business={business} />
          <Location t={t} language={language} business={business} />
          <About t={t} language={language} business={business} />
          <WorkingHours t={t} language={language} business={business} isOpen={openStatus.isOpen} closesIn={null as never} opensIn={null as never} />
          <Contact t={t} language={language} business={business} onBook={() => openBooking()} />
        </main>

        <Footer t={t} business={business} />
      </div>

      <BookingSheet
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        serviceId={bookingService}
        t={t}
        language={language}
      />
      <FloatingBookButton t={t} visible={showFloatingBook && !bookingOpen} onBook={() => openBooking()} />
    </>
  );
}
