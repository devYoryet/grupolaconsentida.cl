'use client';

export default function PruneSVG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Prune body gradient - rich dark plum */}
        <radialGradient id="pruneGrad" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.3" />
          <stop offset="15%" stopColor="#581c87" />
          <stop offset="45%" stopColor="#3b0764" />
          <stop offset="75%" stopColor="#2e1065" />
          <stop offset="100%" stopColor="#1e0533" />
        </radialGradient>
        {/* Inner glow for dried texture */}
        <radialGradient id="pruneInner" cx="45%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.15" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        {/* Warm highlight */}
        <radialGradient id="pruneHighlight" cx="30%" cy="25%" r="35%">
          <stop offset="0%" stopColor="#c084fc" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
        </radialGradient>
        {/* Stem gradient */}
        <linearGradient id="pruneStemGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#92400e" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
        {/* Leaf gradient */}
        <linearGradient id="pruneLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="50%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>
        {/* Amber particle gradient */}
        <radialGradient id="amberGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="1" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
        </radialGradient>
        {/* Aura glow */}
        <radialGradient id="pruneAura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#d97706" stopOpacity="0.08" />
          <stop offset="60%" stopColor="#d97706" stopOpacity="0.03" />
          <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
        </radialGradient>
        {/* Soft glow filter */}
        <filter id="pruneGlowFilter">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="particleGlow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="steamBlur">
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
      </defs>

      <style>{`
        @keyframes pruneBreathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.025); }
        }
        @keyframes pruneGlowPulse {
          0%, 100% { opacity: 0.08; transform: scale(1); }
          50% { opacity: 0.18; transform: scale(1.08); }
        }
        @keyframes pruneHighlightPulse {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.6; }
        }
        @keyframes steam1 {
          0% { opacity: 0; transform: translateY(0) scaleX(1); }
          20% { opacity: 0.4; transform: translateY(-8px) scaleX(1.1); }
          60% { opacity: 0.25; transform: translateY(-25px) scaleX(1.4); }
          100% { opacity: 0; transform: translateY(-45px) scaleX(0.8); }
        }
        @keyframes steam2 {
          0% { opacity: 0; transform: translateY(0) scaleX(1); }
          25% { opacity: 0.35; transform: translateY(-10px) scaleX(0.9); }
          65% { opacity: 0.2; transform: translateY(-30px) scaleX(1.3); }
          100% { opacity: 0; transform: translateY(-50px) scaleX(0.6); }
        }
        @keyframes steam3 {
          0% { opacity: 0; transform: translateY(0) scaleX(1); }
          15% { opacity: 0.3; transform: translateY(-5px) scaleX(1.2); }
          55% { opacity: 0.2; transform: translateY(-22px) scaleX(1.5); }
          100% { opacity: 0; transform: translateY(-42px) scaleX(0.7); }
        }
        @keyframes particleFloat1 {
          0% { opacity: 0; transform: translate(0, 0) scale(0); }
          15% { opacity: 0.9; transform: translate(-5px, -8px) scale(1); }
          50% { opacity: 0.7; transform: translate(-15px, -25px) scale(0.9); }
          85% { opacity: 0.3; transform: translate(-10px, -45px) scale(0.5); }
          100% { opacity: 0; transform: translate(-8px, -55px) scale(0); }
        }
        @keyframes particleFloat2 {
          0% { opacity: 0; transform: translate(0, 0) scale(0); }
          20% { opacity: 1; transform: translate(8px, -10px) scale(1); }
          60% { opacity: 0.6; transform: translate(18px, -30px) scale(0.8); }
          100% { opacity: 0; transform: translate(22px, -50px) scale(0); }
        }
        @keyframes particleFloat3 {
          0% { opacity: 0; transform: translate(0, 0) scale(0); }
          25% { opacity: 0.8; transform: translate(-3px, -12px) scale(1.1); }
          70% { opacity: 0.4; transform: translate(5px, -35px) scale(0.6); }
          100% { opacity: 0; transform: translate(8px, -48px) scale(0); }
        }
        @keyframes particleFloat4 {
          0% { opacity: 0; transform: translate(0, 0) scale(0); }
          20% { opacity: 0.7; transform: translate(12px, -6px) scale(0.9); }
          55% { opacity: 0.5; transform: translate(20px, -22px) scale(0.7); }
          100% { opacity: 0; transform: translate(15px, -40px) scale(0); }
        }
        @keyframes particleFloat5 {
          0% { opacity: 0; transform: translate(0, 0) scale(0); }
          18% { opacity: 0.85; transform: translate(-10px, -5px) scale(1); }
          65% { opacity: 0.35; transform: translate(-18px, -28px) scale(0.7); }
          100% { opacity: 0; transform: translate(-14px, -42px) scale(0); }
        }
        @keyframes leafFloat {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(4deg); }
        }
        @keyframes wrinkleShimmer {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.45; }
        }
        .prune-body-group {
          transform-origin: 90px 110px;
          animation: pruneBreathe 4s ease-in-out infinite;
        }
        .prune-aura {
          transform-origin: 90px 110px;
          animation: pruneGlowPulse 4s ease-in-out infinite;
        }
        .prune-highlight {
          animation: pruneHighlightPulse 3.5s ease-in-out infinite;
        }
        .prune-steam1 {
          transform-origin: center bottom;
          animation: steam1 4s ease-out infinite;
        }
        .prune-steam2 {
          transform-origin: center bottom;
          animation: steam2 4.5s ease-out 1.2s infinite;
        }
        .prune-steam3 {
          transform-origin: center bottom;
          animation: steam3 5s ease-out 2.5s infinite;
        }
        .prune-particle1 {
          animation: particleFloat1 4s ease-out 0.3s infinite;
        }
        .prune-particle2 {
          animation: particleFloat2 4.5s ease-out 1s infinite;
        }
        .prune-particle3 {
          animation: particleFloat3 3.8s ease-out 2s infinite;
        }
        .prune-particle4 {
          animation: particleFloat4 4.2s ease-out 3s infinite;
        }
        .prune-particle5 {
          animation: particleFloat5 3.5s ease-out 0.8s infinite;
        }
        .prune-leaf {
          transform-origin: 90px 48px;
          animation: leafFloat 3s ease-in-out infinite;
        }
        .prune-wrinkle {
          animation: wrinkleShimmer 4s ease-in-out infinite;
        }
        .prune-wrinkle2 {
          animation: wrinkleShimmer 4s ease-in-out 1s infinite;
        }
        .prune-wrinkle3 {
          animation: wrinkleShimmer 4s ease-in-out 2s infinite;
        }
      `}</style>

      {/* Warm aura behind the prune */}
      <ellipse
        cx="90"
        cy="115"
        rx="65"
        ry="70"
        fill="url(#pruneAura)"
        className="prune-aura"
      />

      {/* Steam/aroma lines */}
      <g filter="url(#steamBlur)">
        <path
          d="M75 68 C72 55, 78 48, 75 35"
          stroke="#d97706"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0"
          className="prune-steam1"
        />
        <path
          d="M90 65 C93 50, 87 42, 90 28"
          stroke="#b45309"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
          opacity="0"
          className="prune-steam2"
        />
        <path
          d="M105 68 C108 52, 102 45, 105 32"
          stroke="#d97706"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0"
          className="prune-steam3"
        />
      </g>

      {/* Stem */}
      <path
        d="M90 48 L90 70"
        stroke="url(#pruneStemGrad)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Stem highlight */}
      <path
        d="M89 50 L89 68"
        stroke="#b45309"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />

      {/* Leaf */}
      <g className="prune-leaf">
        <path
          d="M90 48 C100 36, 118 34, 125 45 C120 48, 105 46, 90 48Z"
          fill="url(#pruneLeafGrad)"
        />
        <path
          d="M90 48 C105 40, 118 38, 125 45"
          stroke="#15803d"
          strokeWidth="0.8"
          fill="none"
          opacity="0.5"
        />
      </g>

      {/* Main prune body */}
      <g className="prune-body-group" filter="url(#pruneGlowFilter)">
        {/* Base shape */}
        <ellipse cx="90" cy="118" rx="42" ry="52" fill="url(#pruneGrad)" />

        {/* Inner glow */}
        <ellipse cx="90" cy="115" rx="35" ry="45" fill="url(#pruneInner)" />

        {/* Wrinkle details - artistic curves */}
        <path
          d="M62 95 C70 102, 75 115, 68 135"
          stroke="#581c87"
          strokeWidth="1.2"
          fill="none"
          className="prune-wrinkle"
        />
        <path
          d="M78 82 C82 95, 85 110, 80 140"
          stroke="#4c1d95"
          strokeWidth="0.8"
          fill="none"
          className="prune-wrinkle2"
        />
        <path
          d="M102 85 C106 100, 108 118, 105 145"
          stroke="#581c87"
          strokeWidth="1"
          fill="none"
          className="prune-wrinkle3"
        />
        <path
          d="M115 92 C112 105, 110 120, 113 138"
          stroke="#4c1d95"
          strokeWidth="0.7"
          fill="none"
          className="prune-wrinkle"
        />

        {/* Subtle horizontal wrinkles */}
        <path
          d="M58 105 C70 108, 110 108, 122 105"
          stroke="#3b0764"
          strokeWidth="0.5"
          fill="none"
          opacity="0.3"
        />
        <path
          d="M55 125 C68 128, 112 128, 125 125"
          stroke="#3b0764"
          strokeWidth="0.5"
          fill="none"
          opacity="0.25"
        />

        {/* Bottom shadow */}
        <ellipse cx="90" cy="165" rx="30" ry="6" fill="#1e0533" opacity="0.3" />
      </g>

      {/* Highlight/shine on prune */}
      <ellipse
        cx="78"
        cy="98"
        rx="15"
        ry="18"
        fill="url(#pruneHighlight)"
        className="prune-highlight"
      />
      {/* Small bright spot */}
      <ellipse
        cx="74"
        cy="92"
        rx="5"
        ry="4"
        fill="#c084fc"
        opacity="0.2"
        className="prune-highlight"
      />

      {/* Floating amber/golden particles */}
      <g filter="url(#particleGlow)">
        <circle cx="60" cy="100" r="2.5" fill="#fbbf24" className="prune-particle1" />
        <circle cx="120" cy="105" r="2" fill="#f59e0b" className="prune-particle2" />
        <circle cx="90" cy="90" r="1.8" fill="#fde68a" className="prune-particle3" />
        <circle cx="130" cy="120" r="2.2" fill="#fbbf24" className="prune-particle4" />
        <circle cx="55" cy="120" r="1.5" fill="#fcd34d" className="prune-particle5" />
      </g>

      {/* Star sparkles */}
      <g className="prune-particle1" filter="url(#particleGlow)">
        <path d="M50 115 L51.5 112 L53 115 L51.5 118 Z" fill="#fef3c7" />
        <path d="M50 115 L47 116.5 L50 118 L53 116.5 Z" fill="#fef3c7" opacity="0.5" />
      </g>
      <g className="prune-particle3" filter="url(#particleGlow)">
        <path d="M135 110 L136.5 107 L138 110 L136.5 113 Z" fill="#fef3c7" />
        <path d="M135 110 L132 111.5 L135 113 L138 111.5 Z" fill="#fef3c7" opacity="0.5" />
      </g>
      <g className="prune-particle5" filter="url(#particleGlow)">
        <path d="M95 80 L96 78 L97 80 L96 82 Z" fill="#fef3c7" opacity="0.8" />
      </g>
    </svg>
  );
}
