import { useState, useEffect, useCallback } from 'react';
import type { Language } from '@/data/translations';
import { translations } from '@/data/translations';

const STORAGE_KEY = 'barber-lang';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('uz');
  const [hasStoredLang, setHasStoredLang] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored && ['uz', 'ru', 'en'].includes(stored)) {
      setLanguage(stored);
      setHasStoredLang(true);
    }
  }, []);

  const changeLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    setHasStoredLang(true);
  }, []);

  return {
    language,
    t: translations[language],
    changeLanguage,
    hasStoredLang,
  };
}

export type { Language };
