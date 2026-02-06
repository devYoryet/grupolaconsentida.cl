'use client';

import { useEffect, useRef, useState } from 'react';

export default function AnimatedLine() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.unobserve(el);
  }, []);

  return (
    <div
      ref={ref}
      className="h-[2px] bg-gradient-to-r from-amber-600 to-amber-400 mt-4 mb-6 origin-left transition-transform duration-800 ease-out"
      style={{ transform: visible ? 'scaleX(1)' : 'scaleX(0)', width: '4rem' }}
    />
  );
}
