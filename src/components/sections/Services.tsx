'use client';

import { useLanguage } from '@/context/LanguageContext';
import SectionLabel from '@/components/ui/SectionLabel';
import AnimatedLine from '@/components/ui/AnimatedLine';
import Animate from '@/components/ui/Animate';

const serviceIcons = [
  // Drying - sun/heat
  <svg key="drying" viewBox="0 0 48 48" fill="none" className="w-10 h-10">
    <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2" />
    <line x1="24" y1="4" x2="24" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="24" y1="38" x2="24" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="4" y1="24" x2="10" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="38" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="9.86" y1="9.86" x2="14.1" y2="14.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="33.9" y1="33.9" x2="38.14" y2="38.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="9.86" y1="38.14" x2="14.1" y2="33.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="33.9" y1="14.1" x2="38.14" y2="9.86" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>,
  // Procurement - handshake
  <svg key="procurement" viewBox="0 0 48 48" fill="none" className="w-10 h-10">
    <path d="M8 28L16 20L22 24L30 16L40 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="16" cy="20" r="3" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="30" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M4 36H44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 36V32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M36 36V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>,
  // National - map pin
  <svg key="national" viewBox="0 0 48 48" fill="none" className="w-10 h-10">
    <path d="M24 4C16.268 4 10 10.268 10 18C10 28 24 44 24 44C24 44 38 28 38 18C38 10.268 31.732 4 24 4Z" stroke="currentColor" strokeWidth="2" />
    <circle cx="24" cy="18" r="5" stroke="currentColor" strokeWidth="2" />
  </svg>,
  // Export - globe + arrow
  <svg key="export" viewBox="0 0 48 48" fill="none" className="w-10 h-10">
    <circle cx="22" cy="24" r="16" stroke="currentColor" strokeWidth="2" />
    <ellipse cx="22" cy="24" rx="8" ry="16" stroke="currentColor" strokeWidth="1.5" />
    <line x1="6" y1="24" x2="38" y2="24" stroke="currentColor" strokeWidth="1.5" />
    <path d="M34 14L42 14L42 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="42" y1="14" x2="32" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>,
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>{t.services.label}</SectionLabel>
          <Animate type="fadeUp" duration={600}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 leading-tight">
              {t.services.title}
            </h2>
          </Animate>
          <div className="flex justify-center">
            <AnimatedLine />
          </div>
          <Animate type="fadeUp" delay={100} duration={600}>
            <p className="text-stone-600 leading-relaxed">
              {t.services.subtitle}
            </p>
          </Animate>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {t.services.items.map((service, i) => (
            <Animate key={i} type="fadeUp" delay={i * 100} duration={600}>
              <div className="group p-8 border border-stone-200 rounded-sm hover:border-green-800/30 transition-all duration-500 hover:shadow-lg hover:shadow-stone-100">
                <div className="flex items-start gap-6">
                  <div className="shrink-0 text-green-800 group-hover:text-amber-600 transition-colors duration-300">
                    {serviceIcons[i]}
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-stone-900 mb-3 group-hover:text-green-900 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-stone-600 leading-relaxed text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}
