'use client';

import { useLanguage } from '@/context/LanguageContext';
import SectionLabel from '@/components/ui/SectionLabel';
import AnimatedLine from '@/components/ui/AnimatedLine';
import Animate from '@/components/ui/Animate';

function StatCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <Animate type="fadeUp" delay={delay} duration={500}>
      <div className="text-center p-6">
        <div className="text-3xl sm:text-4xl font-serif font-bold text-green-900 mb-2">{value}</div>
        <div className="text-sm text-stone-500 tracking-wide uppercase">{label}</div>
      </div>
    </Animate>
  );
}

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text content */}
          <div>
            <SectionLabel>{t.about.label}</SectionLabel>
            <Animate type="fadeUp" delay={100} duration={600}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 leading-tight">
                {t.about.title}
              </h2>
            </Animate>
            <AnimatedLine />
            <Animate type="fadeUp" delay={200} duration={600}>
              <p className="text-stone-600 leading-relaxed mb-6">
                {t.about.description}
              </p>
            </Animate>
            <Animate type="fadeUp" delay={300} duration={600}>
              <p className="text-stone-600 leading-relaxed">
                {t.about.description2}
              </p>
            </Animate>
          </div>

          {/* Visual - elegant abstract representation */}
          <Animate type="scaleIn" delay={200} duration={800}>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-green-900 via-green-800 to-stone-800 rounded-sm overflow-hidden relative">
                {/* Decorative elements inside */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white/90 px-8">
                    <Animate type="fadeIn" delay={600} duration={500}>
                      <div>
                        <div className="w-16 h-[1px] bg-amber-400/60 mx-auto mb-6" />
                        <p className="text-sm tracking-[0.25em] uppercase text-amber-400/70 mb-3">
                          Valle Central
                        </p>
                        <p className="text-3xl sm:text-4xl font-serif font-bold mb-3">Chile</p>
                        <p className="text-sm text-white/50 tracking-wide max-w-xs mx-auto">
                          {t.about.stat3Value} {t.about.stat3Label}
                        </p>
                        <div className="w-16 h-[1px] bg-amber-400/60 mx-auto mt-6" />
                      </div>
                    </Animate>
                  </div>
                </div>
                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-amber-400/30" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-amber-400/30" />
              </div>
            </div>
          </Animate>
        </div>

        {/* Stats */}
        <Animate type="fadeIn" delay={400} duration={600}>
          <div className="mt-20 border-t border-stone-200 pt-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard value={t.about.stat1Value} label={t.about.stat1Label} delay={100} />
              <StatCard value={t.about.stat2Value} label={t.about.stat2Label} delay={200} />
              <StatCard value={t.about.stat3Value} label={t.about.stat3Label} delay={300} />
              <StatCard value={t.about.stat4Value} label={t.about.stat4Label} delay={400} />
            </div>
          </div>
        </Animate>
      </div>
    </section>
  );
}
