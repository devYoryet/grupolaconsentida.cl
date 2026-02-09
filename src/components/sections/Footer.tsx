'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-stone-900 text-stone-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <div className="mb-3">
              <Image
                src="/logo_blanco.png"
                alt="Grupo La Consentida"
                width={200}
                height={60}
                className="h-12 w-auto object-contain mx-auto md:mx-0"
              />
            </div>
            <p className="text-sm text-stone-500">{t.footer.tagline}</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#about" className="hover:text-white transition-colors">
              {t.nav.about}
            </a>
            <a href="#products" className="hover:text-white transition-colors">
              {t.nav.products}
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              {t.nav.services}
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              {t.nav.contact}
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-stone-800 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">{t.footer.rights}</p>
          <a
            href={`mailto:${t.contact.info.email}`}
            className="text-xs text-stone-500 hover:text-amber-400 transition-colors"
          >
            {t.contact.info.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
