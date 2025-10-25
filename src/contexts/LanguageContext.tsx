'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations, TranslationKey } from '@/constants/translations';

export type Language = 'en' | 'hi' | 'mr' | 'ta' | 'te' | 'bn' | 'gu' | 'kn' | 'ml' | 'pa';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
  languages: { code: Language; name: string; nativeName: string }[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // Load initial language from localStorage
  const getInitialLanguage = (): Language => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('krishi-shield-language') as Language;
      const languages = [
        { code: 'en' as Language }, { code: 'hi' as Language }, { code: 'mr' as Language },
        { code: 'ta' as Language }, { code: 'te' as Language }, { code: 'bn' as Language },
        { code: 'gu' as Language }, { code: 'kn' as Language }, { code: 'ml' as Language },
        { code: 'pa' as Language }
      ];
      if (savedLanguage && languages.some(lang => lang.code === savedLanguage)) {
        return savedLanguage;
      }
    }
    return 'en';
  };

  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  // Available languages
  const languages = [
    { code: 'en' as Language, name: 'English', nativeName: 'English' },
    { code: 'hi' as Language, name: 'Hindi', nativeName: 'हिंदी' },
    { code: 'mr' as Language, name: 'Marathi', nativeName: 'मराठी' },
    { code: 'ta' as Language, name: 'Tamil', nativeName: 'தமிழ்' },
    { code: 'te' as Language, name: 'Telugu', nativeName: 'తెలుగు' },
    { code: 'bn' as Language, name: 'Bengali', nativeName: 'বাংলা' },
    { code: 'gu' as Language, name: 'Gujarati', nativeName: 'ગુજરાતી' },
    { code: 'kn' as Language, name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
    { code: 'ml' as Language, name: 'Malayalam', nativeName: 'മലയാളം' },
    { code: 'pa' as Language, name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
  ];

  // Save language to localStorage when changed
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('krishi-shield-language', lang);
  };

  // Translation function with fallback
  const t = (key: string, fallback?: string): string => {
    const currentTranslations = translations[language] || translations.en;
    return currentTranslations[key as keyof typeof currentTranslations] || fallback || key;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    languages,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
