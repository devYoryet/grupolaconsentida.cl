'use client';

import { useLanguage } from '@/context/LanguageContext';
import SectionLabel from '@/components/ui/SectionLabel';
import AnimatedLine from '@/components/ui/AnimatedLine';
import CherrySVG from '@/components/svg/CherrySVG';
import PruneSVG from '@/components/svg/PruneSVG';
import Animate from '@/components/ui/Animate';

function ProductCard({
  product,
  svg,
  bgGradient,
  delay,
}: {
  product: { name: string; description: string; features: readonly string[] };
  svg: React.ReactNode;
  bgGradient: string;
  delay: number;
}) {
  return (
    <Animate type="fadeUp" delay={delay} duration={700}>
      <div className="group">
        <div className="relative overflow-hidden rounded-sm">
          {/* SVG Visual area */}
          <div className={`${bgGradient} p-12 flex items-center justify-center relative overflow-hidden`}>
            <div className="relative z-10 w-32 h-36">{svg}</div>
            {/* Corner accents */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-white/20" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-white/20" />
          </div>

          {/* Content */}
          <div className="p-8 bg-white border border-t-0 border-stone-200">
            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">{product.name}</h3>
            <p className="text-stone-600 leading-relaxed mb-6">{product.description}</p>
            <ul className="space-y-3">
              {product.features.map((feature, i) => (
                <Animate key={i} type="fadeLeft" delay={delay + 100 * i} duration={300}>
                  <li className="flex items-center gap-3 text-sm text-stone-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    {feature}
                  </li>
                </Animate>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Animate>
  );
}

export default function Products() {
  const { t } = useLanguage();

  return (
    <section id="products" className="py-24 lg:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>{t.products.label}</SectionLabel>
          <Animate type="fadeUp" duration={600}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 leading-tight">
              {t.products.title}
            </h2>
          </Animate>
          <div className="flex justify-center">
            <AnimatedLine />
          </div>
          <Animate type="fadeUp" delay={100} duration={600}>
            <p className="text-stone-600 leading-relaxed">
              {t.products.subtitle}
            </p>
          </Animate>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <ProductCard
            product={t.products.cherry}
            svg={<CherrySVG className="w-full h-full" />}
            bgGradient="bg-gradient-to-br from-red-900 via-red-800 to-stone-800"
            delay={100}
          />
          <ProductCard
            product={t.products.prune}
            svg={<PruneSVG className="w-full h-full" />}
            bgGradient="bg-gradient-to-br from-stone-800 via-stone-700 to-amber-900"
            delay={200}
          />
        </div>
      </div>
    </section>
  );
}
