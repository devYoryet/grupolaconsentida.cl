'use client';

import Animate from './Animate';

interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <Animate type="fadeUp" duration={500}>
      <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-amber-700/80 mb-4">
        {children}
      </span>
    </Animate>
  );
}
