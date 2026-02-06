'use client';

export default function PruneSVG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes pruneDrawStem {
          from { stroke-dashoffset: 30; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes pruneLeafIn {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes pruneBodyPop {
          0% { transform: scale(0); }
          70% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        @keyframes pruneWrinkle {
          from { stroke-dashoffset: 60; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes pruneShineIn {
          from { opacity: 0; }
          to { opacity: 0.4; }
        }
        .prune-stem {
          stroke-dasharray: 30;
          stroke-dashoffset: 30;
          animation: pruneDrawStem 0.6s ease-out forwards;
        }
        .prune-leaf {
          transform-origin: 50px 15px;
          animation: pruneLeafIn 0.5s ease-out 0.3s both;
        }
        .prune-body {
          transform-origin: 50px 70px;
          animation: pruneBodyPop 0.8s ease-out 0.5s both;
        }
        .prune-wrinkle-1 {
          stroke-dasharray: 60;
          stroke-dashoffset: 60;
          animation: pruneWrinkle 0.8s ease-out 1.2s forwards;
        }
        .prune-wrinkle-2 {
          stroke-dasharray: 60;
          stroke-dashoffset: 60;
          animation: pruneWrinkle 0.8s ease-out 1.4s forwards;
        }
        .prune-shine {
          animation: pruneShineIn 0.5s ease-out 1.3s both;
        }
      `}</style>
      {/* Stem */}
      <path
        d="M50 8 L50 30"
        stroke="#5D4E37"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="prune-stem"
      />
      {/* Leaf */}
      <path
        d="M50 15 C58 8, 72 10, 70 22 C68 20, 55 16, 50 15Z"
        fill="#3D6B35"
        className="prune-leaf"
      />
      {/* Prune body */}
      <ellipse
        cx="50"
        cy="70"
        rx="30"
        ry="38"
        fill="#3D1F1F"
        className="prune-body"
      />
      {/* Wrinkle details */}
      <path
        d="M32 55 C38 60, 42 65, 35 80"
        stroke="#2A1515"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
        className="prune-wrinkle-1"
      />
      <path
        d="M55 45 C60 55, 62 65, 58 85"
        stroke="#2A1515"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
        className="prune-wrinkle-2"
      />
      {/* Shine */}
      <ellipse
        cx="40"
        cy="58"
        rx="8"
        ry="10"
        fill="#5D3030"
        opacity="0"
        className="prune-shine"
      />
    </svg>
  );
}
