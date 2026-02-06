'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-stone-300/50 bg-white/80 backdrop-blur-sm px-1 py-1">
      <button
        onClick={() => setLocale('es')}
        className={`relative px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 ${
          locale === 'es'
            ? 'bg-green-900 text-white'
            : 'text-stone-600 hover:text-stone-800'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLocale('en')}
        className={`relative px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 ${
          locale === 'en'
            ? 'bg-green-900 text-white'
            : 'text-stone-600 hover:text-stone-800'
        }`}
      >
        EN
      </button>
    </div>
  );
}
