'use client';

export default function CherrySVG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes cherryDrawStem1 {
          from { stroke-dashoffset: 100; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes cherryDrawStem2 {
          from { stroke-dashoffset: 100; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes cherryLeafIn {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes cherryCherryPop {
          0% { transform: scale(0); }
          70% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        @keyframes cherryShineIn {
          from { opacity: 0; }
          to { opacity: 0.5; }
        }
        .cherry-stem-1 {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: cherryDrawStem1 1.2s ease-out forwards;
        }
        .cherry-stem-2 {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: cherryDrawStem2 1.2s ease-out 0.2s forwards;
        }
        .cherry-leaf {
          transform-origin: 60px 10px;
          animation: cherryLeafIn 0.6s ease-out 0.5s both;
        }
        .cherry-left {
          transform-origin: 35px 95px;
          animation: cherryCherryPop 0.8s ease-out 0.8s both;
        }
        .cherry-right {
          transform-origin: 85px 95px;
          animation: cherryCherryPop 0.8s ease-out 1s both;
        }
        .cherry-shine-left {
          animation: cherryShineIn 0.4s ease-out 1.3s both;
        }
        .cherry-shine-right {
          animation: cherryShineIn 0.4s ease-out 1.5s both;
        }
      `}</style>
      {/* Stems */}
      <path
        d="M60 10 C55 30, 40 50, 35 75"
        stroke="#5D4E37"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        className="cherry-stem-1"
      />
      <path
        d="M60 10 C65 30, 80 50, 85 75"
        stroke="#5D4E37"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        className="cherry-stem-2"
      />
      {/* Leaf */}
      <path
        d="M60 10 C70 5, 85 8, 88 20 C85 22, 70 18, 60 10Z"
        fill="#3D6B35"
        className="cherry-leaf"
      />
      {/* Left cherry */}
      <circle
        cx="35"
        cy="95"
        r="22"
        fill="#8B1A1A"
        className="cherry-left"
      />
      <ellipse
        cx="28"
        cy="88"
        rx="6"
        ry="4"
        fill="#A52A2A"
        opacity="0"
        className="cherry-shine-left"
      />
      {/* Right cherry */}
      <circle
        cx="85"
        cy="95"
        r="22"
        fill="#8B1A1A"
        className="cherry-right"
      />
      <ellipse
        cx="78"
        cy="88"
        rx="6"
        ry="4"
        fill="#A52A2A"
        opacity="0"
        className="cherry-shine-right"
      />
    </svg>
  );
}
