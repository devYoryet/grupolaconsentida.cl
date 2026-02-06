'use client';

import { useLanguage } from '@/context/LanguageContext';
import SectionLabel from '@/components/ui/SectionLabel';
import AnimatedLine from '@/components/ui/AnimatedLine';
import Animate from '@/components/ui/Animate';

const trustIcons = [
  // Shield - food safety
  <svg key="safety" viewBox="0 0 40 40" fill="none" className="w-8 h-8">
    <path d="M20 4L6 10V20C6 28 20 36 20 36C20 36 34 28 34 20V10L20 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M14 20L18 24L26 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Link chain - traceability
  <svg key="trace" viewBox="0 0 40 40" fill="none" className="w-8 h-8">
    <path d="M16 24L24 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M22 28L26 24C28.2 21.8 28.2 18.2 26 16L24 14C21.8 11.8 18.2 11.8 16 14L12 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M18 12L14 16C11.8 18.2 11.8 21.8 14 24L16 26C18.2 28.2 21.8 28.2 24 26L28 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>,
  // Leaf - sustainability
  <svg key="sustain" viewBox="0 0 40 40" fill="none" className="w-8 h-8">
    <path d="M8 32C8 32 12 16 28 8C28 8 28 24 16 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 28C18 22 22 18 28 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  // Globe - global markets
  <svg key="global" viewBox="0 0 40 40" fill="none" className="w-8 h-8">
    <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2" />
    <ellipse cx="20" cy="20" rx="7" ry="14" stroke="currentColor" strokeWidth="1.5" />
    <line x1="6" y1="20" x2="34" y2="20" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 13H32" stroke="currentColor" strokeWidth="1" />
    <path d="M8 27H32" stroke="currentColor" strokeWidth="1" />
  </svg>,
];

export default function Trust() {
  const { t } = useLanguage();

  return (
    <section className="py-24 lg:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>{t.trust.label}</SectionLabel>
          <Animate type="fadeUp" duration={600}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 leading-tight">
              {t.trust.title}
            </h2>
          </Animate>
          <div className="flex justify-center">
            <AnimatedLine />
          </div>
          <Animate type="fadeUp" delay={100} duration={600}>
            <p className="text-stone-600 leading-relaxed">
              {t.trust.subtitle}
            </p>
          </Animate>
        </div>

        {/* Trust Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.trust.items.map((item, i) => (
            <Animate key={i} type="fadeUp" delay={i * 100} duration={500}>
              <div className="group bg-white p-8 rounded-sm border border-stone-200 hover:border-green-800/20 transition-all duration-500 hover:shadow-lg hover:shadow-stone-100 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-50 flex items-center justify-center text-green-800 group-hover:bg-green-800 group-hover:text-white transition-all duration-500">
                  {trustIcons[i]}
                </div>
                <h3 className="text-lg font-serif font-bold text-stone-900 mb-3">{item.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{item.description}</p>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}
