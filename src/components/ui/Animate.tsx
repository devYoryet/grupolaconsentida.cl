'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

type AnimationType = 'fadeUp' | 'fadeIn' | 'fadeLeft' | 'fadeRight' | 'scaleIn' | 'slideUp';

interface AnimateProps {
  children: ReactNode;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  as?: keyof HTMLElementTagNameMap;
}

const animations: Record<AnimationType, { from: string; to: string }> = {
  fadeUp: {
    from: 'opacity-0 translate-y-8',
    to: 'opacity-100 translate-y-0',
  },
  fadeIn: {
    from: 'opacity-0',
    to: 'opacity-100',
  },
  fadeLeft: {
    from: 'opacity-0 -translate-x-8',
    to: 'opacity-100 translate-x-0',
  },
  fadeRight: {
    from: 'opacity-0 translate-x-8',
    to: 'opacity-100 translate-x-0',
  },
  scaleIn: {
    from: 'opacity-0 scale-95',
    to: 'opacity-100 scale-100',
  },
  slideUp: {
    from: 'opacity-0 translate-y-12',
    to: 'opacity-100 translate-y-0',
  },
};

export default function Animate({
  children,
  type = 'fadeUp',
  delay = 0,
  duration = 700,
  className = '',
  once = true,
}: AnimateProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [once]);

  const anim = animations[type];

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${isVisible ? anim.to : anim.from} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
