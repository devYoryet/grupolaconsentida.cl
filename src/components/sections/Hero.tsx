'use client';

import { useLanguage } from '@/context/LanguageContext';
import Animate from '@/components/ui/Animate';

export default function Hero() {
  const { t } = useLanguage();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-950 via-green-900 to-stone-900" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Gradient orbs for depth */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl hero-orb-1"
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-red-900/10 rounded-full blur-3xl hero-orb-2"
      />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes orbPulse1 {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.2); opacity: 0.15; }
        }
        @keyframes orbPulse2 {
          0%, 100% { transform: scale(1.2); opacity: 0.1; }
          50% { transform: scale(1); opacity: 0.15; }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        @keyframes scaleXIn {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .hero-orb-1 {
          animation: orbPulse1 8s ease-in-out infinite;
        }
        .hero-orb-2 {
          animation: orbPulse2 10s ease-in-out infinite;
        }
        .hero-scroll-bounce {
          animation: scrollBounce 2s ease-in-out infinite;
        }
        .hero-line-1 {
          animation: scaleXIn 1s ease-out 0.2s both;
        }
        .hero-line-2 {
          animation: scaleXIn 1s ease-out 1.2s both;
        }
      ` }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Top accent */}
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8 hero-line-1" />

        <Animate type="fadeUp" delay={300} duration={600}>
          <p className="text-amber-400/80 text-sm tracking-[0.3em] uppercase font-medium mb-6">
            Grupo La Consentida
          </p>
        </Animate>

        <Animate type="fadeUp" delay={500} duration={800}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-8 whitespace-pre-line">
            {t.hero.title}
          </h1>
        </Animate>

        <Animate type="fadeUp" delay={700} duration={800}>
          <p className="text-lg sm:text-xl text-stone-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            {t.hero.subtitle}
          </p>
        </Animate>

        {/* CTAs */}
        <Animate type="fadeUp" delay={900} duration={600}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollTo('#contact')}
              className="group relative px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-medium rounded-sm transition-all duration-300 tracking-wide text-sm overflow-hidden"
            >
              <span className="relative z-10">{t.hero.cta}</span>
              <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button
              onClick={() => scrollTo('#products')}
              className="px-8 py-4 border border-white/20 text-white/90 hover:text-white hover:border-white/40 font-medium rounded-sm transition-all duration-300 tracking-wide text-sm"
            >
              {t.hero.ctaSecondary}
            </button>
          </div>
        </Animate>

        {/* Bottom accent */}
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent mx-auto mt-16 hero-line-2" />
      </div>

      {/* Scroll indicator */}
      <Animate type="fadeIn" delay={1500} duration={600} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5 hero-scroll-bounce">
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </div>
      </Animate>
    </section>
  );
}
