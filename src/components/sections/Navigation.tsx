'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from '@/components/ui/LanguageToggle';

export default function Navigation() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Trigger mount animation
    const timer = setTimeout(() => setIsMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.products, href: '#products' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.process, href: '#process' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isMounted ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-stone-200/50'
            : 'bg-transparent'
        }`}
        style={{ transitionProperty: 'transform, background-color, box-shadow, backdrop-filter' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24 lg:h-28">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 transition-all duration-300 hover:opacity-80"
            >
              <div className="relative h-14 sm:h-16 lg:h-20 w-auto">
                <Image
                  src={isScrolled ? '/logo.png' : '/logo_sin_fondo.png'}
                  alt="Grupo La Consentida"
                  width={240}
                  height={80}
                  priority
                  className="h-full w-auto object-contain"
                />
              </div>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-amber-600 ${
                    isScrolled ? 'text-stone-700' : 'text-white/90'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <LanguageToggle />
            </div>

            {/* Mobile: Language + Menu */}
            <div className="flex items-center gap-3 lg:hidden">
              <LanguageToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 transition-colors ${
                  isScrolled ? 'text-stone-800' : 'text-white'
                }`}
                aria-label="Toggle menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {isMobileMenuOpen ? (
                    <path d="M6 6L18 18M6 18L18 6" strokeLinecap="round" />
                  ) : (
                    <>
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white/98 backdrop-blur-lg pt-20 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-5 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-8">
          {navItems.map((item, i) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-lg font-serif text-stone-800 hover:text-green-800 transition-all duration-300"
              style={{
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(10px)',
                transitionDelay: isMobileMenuOpen ? `${i * 50}ms` : '0ms',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
