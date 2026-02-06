'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ProcessSVG from '@/components/svg/ProcessSVG';
import Animate from '@/components/ui/Animate';

export default function Process() {
  const { t } = useLanguage();
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineVisible, setLineVisible] = useState(false);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLineVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return (
    <section id="process" className="py-24 lg:py-32 bg-green-950 text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Animate type="fadeUp" duration={500}>
            <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-amber-400/80 mb-4">
              {t.process.label}
            </span>
          </Animate>
          <Animate type="fadeUp" duration={600}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight">
              {t.process.title}
            </h2>
          </Animate>
          <div className="flex justify-center">
            <Animate type="scaleIn" duration={800}>
              <div className="w-16 h-[2px] bg-gradient-to-r from-amber-600 to-amber-400 mt-4 mb-6" />
            </Animate>
          </div>
          <Animate type="fadeUp" delay={100} duration={600}>
            <p className="text-stone-300 leading-relaxed">
              {t.process.subtitle}
            </p>
          </Animate>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div
            ref={lineRef}
            className={`hidden lg:block absolute top-[72px] left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-amber-600/30 via-amber-400/50 to-amber-600/30 origin-left transition-transform duration-[1200ms] ease-out ${
              lineVisible ? 'scale-x-100' : 'scale-x-0'
            }`}
            style={{ transitionDelay: '300ms' }}
          />

          {t.process.steps.map((step, i) => (
            <Animate key={i} type="fadeUp" delay={100 + i * 150} duration={600}>
              <div className="text-center relative">
                {/* Step number */}
                <div className="relative mx-auto w-36 h-36 mb-6">
                  <div className="absolute inset-0 rounded-full border border-amber-400/20" />
                  <div className="absolute inset-3 rounded-full border border-amber-400/10 bg-green-900/50 flex items-center justify-center">
                    <ProcessSVG step={i} className="w-20 h-20" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </div>
                </div>

                <h3 className="text-lg font-serif font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-stone-400 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}
