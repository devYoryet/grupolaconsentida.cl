'use client';

export default function CherrySVG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 220" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Cherry gradient - deep realistic red */}
        <radialGradient id="cherryGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="40%" stopColor="#dc2626" />
          <stop offset="70%" stopColor="#991b1b" />
          <stop offset="100%" stopColor="#7f1d1d" />
        </radialGradient>
        <radialGradient id="cherryGrad2" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#f87171" />
          <stop offset="35%" stopColor="#ef4444" />
          <stop offset="70%" stopColor="#b91c1c" />
          <stop offset="100%" stopColor="#7f1d1d" />
        </radialGradient>
        {/* Highlight shine */}
        <radialGradient id="cherryShine" cx="30%" cy="25%" r="30%">
          <stop offset="0%" stopColor="white" stopOpacity="0.7" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        {/* Leaf gradient */}
        <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="50%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>
        <linearGradient id="leafGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="50%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#166534" />
        </linearGradient>
        {/* Water droplet */}
        <radialGradient id="dropGrad" cx="40%" cy="30%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="100%" stopColor="white" stopOpacity="0.3" />
        </radialGradient>
        {/* Soft glow */}
        <filter id="cherryGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Sparkle glow */}
        <filter id="sparkleGlow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <style>{`
        @keyframes cherrySwing {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        @keyframes cherryPulse {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.08); }
        }
        @keyframes shinePulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        @keyframes leafSway {
          0%, 100% { transform: rotate(-3deg) scaleX(1); }
          50% { transform: rotate(3deg) scaleX(0.95); }
        }
        @keyframes sparkle1 {
          0% { opacity: 0; transform: translate(0, 0) scale(0); }
          20% { opacity: 1; transform: translate(-8px, -12px) scale(1); }
          80% { opacity: 1; transform: translate(-18px, -35px) scale(0.8); }
          100% { opacity: 0; transform: translate(-22px, -45px) scale(0); }
        }
        @keyframes sparkle2 {
          0% { opacity: 0; transform: translate(0, 0) scale(0); }
          20% { opacity: 1; transform: translate(10px, -15px) scale(1); }
          80% { opacity: 1; transform: translate(20px, -40px) scale(0.7); }
          100% { opacity: 0; transform: translate(25px, -50px) scale(0); }
        }
        @keyframes sparkle3 {
          0% { opacity: 0; transform: translate(0, 0) scale(0); }
          25% { opacity: 1; transform: translate(5px, -10px) scale(1.2); }
          75% { opacity: 0.8; transform: translate(12px, -30px) scale(0.6); }
          100% { opacity: 0; transform: translate(15px, -42px) scale(0); }
        }
        @keyframes sparkle4 {
          0% { opacity: 0; transform: translate(0, 0) scale(0); }
          30% { opacity: 1; transform: translate(-12px, -8px) scale(1); }
          70% { opacity: 0.6; transform: translate(-20px, -28px) scale(0.5); }
          100% { opacity: 0; transform: translate(-24px, -38px) scale(0); }
        }
        @keyframes dropSlide {
          0% { opacity: 0; transform: translateY(0) scale(0.5); }
          15% { opacity: 0.8; transform: translateY(2px) scale(1); }
          85% { opacity: 0.6; transform: translateY(12px) scale(0.7); }
          100% { opacity: 0; transform: translateY(18px) scale(0.3); }
        }
        @keyframes dropSlide2 {
          0% { opacity: 0; transform: translateY(0) scale(0.4); }
          20% { opacity: 0.7; transform: translateY(1px) scale(0.9); }
          80% { opacity: 0.5; transform: translateY(10px) scale(0.6); }
          100% { opacity: 0; transform: translateY(15px) scale(0.2); }
        }
        .cherry-group {
          transform-origin: 100px 30px;
          animation: cherrySwing 4s ease-in-out infinite;
        }
        .cherry-body-left {
          animation: cherryPulse 3s ease-in-out infinite;
        }
        .cherry-body-right {
          animation: cherryPulse 3s ease-in-out 0.5s infinite;
        }
        .cherry-shine-anim {
          animation: shinePulse 3s ease-in-out infinite;
        }
        .cherry-shine-anim2 {
          animation: shinePulse 3s ease-in-out 0.5s infinite;
        }
        .cherry-leaf1 {
          transform-origin: 100px 30px;
          animation: leafSway 3.5s ease-in-out infinite;
        }
        .cherry-leaf2 {
          transform-origin: 100px 30px;
          animation: leafSway 3.5s ease-in-out 0.3s infinite;
        }
        .cherry-sparkle1 {
          animation: sparkle1 3s ease-out infinite;
        }
        .cherry-sparkle2 {
          animation: sparkle2 3.5s ease-out 0.8s infinite;
        }
        .cherry-sparkle3 {
          animation: sparkle3 4s ease-out 1.5s infinite;
        }
        .cherry-sparkle4 {
          animation: sparkle4 3.2s ease-out 2.2s infinite;
        }
        .cherry-drop1 {
          animation: dropSlide 4s ease-in 0.5s infinite;
        }
        .cherry-drop2 {
          animation: dropSlide2 5s ease-in 2s infinite;
        }
        .cherry-drop3 {
          animation: dropSlide 4.5s ease-in 3.5s infinite;
        }
      `}</style>

      <g className="cherry-group">
        {/* Stems */}
        <path
          d="M100 30 C95 55, 78 80, 68 110"
          stroke="#5D4E37"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M100 30 C108 60, 122 85, 132 110"
          stroke="#5D4E37"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        {/* Stem highlight */}
        <path
          d="M100 32 C96 55, 80 78, 70 105"
          stroke="#8B7355"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
        />

        {/* Leaves */}
        <g className="cherry-leaf1">
          <path
            d="M100 30 C110 18, 130 15, 140 25 C138 30, 120 28, 100 30Z"
            fill="url(#leafGrad)"
          />
          <path
            d="M100 30 C115 22, 132 20, 140 25"
            stroke="#15803d"
            strokeWidth="0.8"
            fill="none"
            opacity="0.6"
          />
        </g>
        <g className="cherry-leaf2">
          <path
            d="M100 30 C88 20, 70 18, 62 28 C65 32, 82 30, 100 30Z"
            fill="url(#leafGrad2)"
          />
          <path
            d="M100 30 C85 23, 72 22, 62 28"
            stroke="#166534"
            strokeWidth="0.8"
            fill="none"
            opacity="0.6"
          />
        </g>

        {/* Left cherry */}
        <g className="cherry-body-left" filter="url(#cherryGlow)">
          <circle cx="68" cy="145" r="35" fill="url(#cherryGrad)" />
          {/* Shadow at bottom */}
          <ellipse cx="68" cy="168" rx="20" ry="5" fill="#450a0a" opacity="0.3" />
          {/* Surface detail */}
          <path
            d="M50 135 C55 140, 62 142, 68 138"
            stroke="#7f1d1d"
            strokeWidth="0.5"
            fill="none"
            opacity="0.3"
          />
        </g>
        {/* Left cherry highlights */}
        <ellipse cx="56" cy="132" rx="12" ry="10" fill="url(#cherryShine)" className="cherry-shine-anim" />
        <ellipse cx="52" cy="128" rx="4" ry="3" fill="white" opacity="0.4" className="cherry-shine-anim" />
        {/* Left cherry bottom crease */}
        <path
          d="M68 175 C66 180, 70 180, 68 175"
          stroke="#450a0a"
          strokeWidth="1"
          fill="none"
          opacity="0.4"
        />

        {/* Right cherry */}
        <g className="cherry-body-right" filter="url(#cherryGlow)">
          <circle cx="132" cy="145" r="35" fill="url(#cherryGrad2)" />
          <ellipse cx="132" cy="168" rx="20" ry="5" fill="#450a0a" opacity="0.3" />
          <path
            d="M115 138 C120 142, 128 143, 135 140"
            stroke="#7f1d1d"
            strokeWidth="0.5"
            fill="none"
            opacity="0.3"
          />
        </g>
        {/* Right cherry highlights */}
        <ellipse cx="120" cy="132" rx="12" ry="10" fill="url(#cherryShine)" className="cherry-shine-anim2" />
        <ellipse cx="116" cy="128" rx="4" ry="3" fill="white" opacity="0.4" className="cherry-shine-anim2" />

        {/* Water droplets */}
        <ellipse cx="80" cy="140" rx="2.5" ry="3.5" fill="url(#dropGrad)" className="cherry-drop1" />
        <ellipse cx="142" cy="148" rx="2" ry="3" fill="url(#dropGrad)" className="cherry-drop2" />
        <ellipse cx="55" cy="152" rx="2" ry="2.5" fill="url(#dropGrad)" className="cherry-drop3" />

        {/* Sparkle particles */}
        <g filter="url(#sparkleGlow)">
          <circle cx="45" cy="130" r="2" fill="#fbbf24" className="cherry-sparkle1" />
          <circle cx="155" cy="125" r="1.8" fill="#fbbf24" className="cherry-sparkle2" />
          <circle cx="100" cy="115" r="1.5" fill="#fde68a" className="cherry-sparkle3" />
          <circle cx="160" cy="155" r="2.2" fill="#fbbf24" className="cherry-sparkle4" />
        </g>

        {/* Small star sparkles */}
        <g className="cherry-sparkle1" filter="url(#sparkleGlow)">
          <path d="M40 145 L41.5 142 L43 145 L41.5 148 Z" fill="#fef3c7" />
          <path d="M40 145 L37 146.5 L40 148 L43 146.5 Z" fill="#fef3c7" opacity="0.6" />
        </g>
        <g className="cherry-sparkle3" filter="url(#sparkleGlow)">
          <path d="M165 140 L166.5 137 L168 140 L166.5 143 Z" fill="#fef3c7" />
          <path d="M165 140 L162 141.5 L165 143 L168 141.5 Z" fill="#fef3c7" opacity="0.6" />
        </g>
      </g>
    </svg>
  );
}
