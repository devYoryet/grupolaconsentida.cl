'use client';

interface ProcessSVGProps {
  step: number;
  className?: string;
}

export default function ProcessSVG({ step, className = '' }: ProcessSVGProps) {
  const icons: Record<number, React.ReactNode> = {
    0: (
      // Selection - magnifying glass over fruit
      <>
        <style>{`
          @keyframes processDrawPath0 {
            from { stroke-dashoffset: 200; }
            to { stroke-dashoffset: 0; }
          }
          @keyframes processPopIn0 {
            0% { transform: scale(0); }
            70% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          .process0-glass {
            stroke-dasharray: 200;
            stroke-dashoffset: 200;
            animation: processDrawPath0 0.8s ease-out forwards;
          }
          .process0-handle {
            stroke-dasharray: 30;
            stroke-dashoffset: 30;
            animation: processDrawPath0 0.4s ease-out 0.6s forwards;
          }
          .process0-fruit {
            transform-origin: 42px 42px;
            animation: processPopIn0 0.5s ease-out 0.8s both;
          }
          .process0-stem {
            stroke-dasharray: 10;
            stroke-dashoffset: 10;
            animation: processDrawPath0 0.3s ease-out 1.1s forwards;
          }
        `}</style>
        <circle
          cx="42"
          cy="42"
          r="22"
          stroke="#3D6B35"
          strokeWidth="3"
          fill="none"
          className="process0-glass"
        />
        <line
          x1="58"
          y1="58"
          x2="75"
          y2="75"
          stroke="#3D6B35"
          strokeWidth="3"
          strokeLinecap="round"
          className="process0-handle"
        />
        <circle
          cx="42"
          cy="42"
          r="8"
          fill="#8B1A1A"
          className="process0-fruit"
        />
        <path
          d="M42 34 L42 28"
          stroke="#5D4E37"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="process0-stem"
        />
      </>
    ),
    1: (
      // Quality - checkmark shield
      <>
        <style>{`
          @keyframes processDrawPath1 {
            from { stroke-dashoffset: 300; }
            to { stroke-dashoffset: 0; }
          }
          .process1-shield {
            stroke-dasharray: 300;
            stroke-dashoffset: 300;
            animation: processDrawPath1 1s ease-out forwards;
          }
          .process1-check {
            stroke-dasharray: 60;
            stroke-dashoffset: 60;
            animation: processDrawPath1 0.6s ease-out 0.8s forwards;
          }
        `}</style>
        <path
          d="M45 10 L15 25 L15 50 C15 68, 45 82, 45 82 C45 82, 75 68, 75 50 L75 25 Z"
          stroke="#3D6B35"
          strokeWidth="3"
          fill="none"
          className="process1-shield"
        />
        <path
          d="M30 45 L40 55 L62 33"
          stroke="#8B1A1A"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="process1-check"
        />
      </>
    ),
    2: (
      // Processing - gears
      <>
        <style>{`
          @keyframes processGearSpin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes processGearSpinReverse {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          @keyframes processScaleIn2 {
            from { transform: scale(0); }
            to { transform: scale(1); }
          }
          .process2-gear1 {
            transform-origin: 35px 40px;
            animation: processGearSpin 8s linear infinite;
          }
          .process2-gear2 {
            transform-origin: 62px 55px;
            animation: processGearSpinReverse 6s linear infinite;
          }
          .process2-center1 {
            transform-origin: 35px 40px;
            animation: processScaleIn2 0.3s ease-out 0.3s both;
          }
          .process2-center2 {
            transform-origin: 62px 55px;
            animation: processScaleIn2 0.3s ease-out 0.5s both;
          }
        `}</style>
        <circle
          cx="35"
          cy="40"
          r="18"
          stroke="#3D6B35"
          strokeWidth="2.5"
          fill="none"
          strokeDasharray="8 4"
          className="process2-gear1"
        />
        <circle cx="35" cy="40" r="5" fill="#3D6B35" className="process2-center1" />
        <circle
          cx="62"
          cy="55"
          r="14"
          stroke="#8B1A1A"
          strokeWidth="2.5"
          fill="none"
          strokeDasharray="6 3"
          className="process2-gear2"
        />
        <circle cx="62" cy="55" r="4" fill="#8B1A1A" className="process2-center2" />
      </>
    ),
    3: (
      // Logistics - globe with path
      <>
        <style>{`
          @keyframes processDrawPath3 {
            from { stroke-dashoffset: 200; }
            to { stroke-dashoffset: 0; }
          }
          @keyframes processPopIn3 {
            0% { transform: scale(0); }
            70% { transform: scale(1.2); }
            100% { transform: scale(1); }
          }
          .process3-globe {
            stroke-dasharray: 200;
            stroke-dashoffset: 200;
            animation: processDrawPath3 0.8s ease-out forwards;
          }
          .process3-meridian {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
            animation: processDrawPath3 0.6s ease-out 0.4s forwards;
          }
          .process3-equator {
            stroke-dasharray: 60;
            stroke-dashoffset: 60;
            animation: processDrawPath3 0.4s ease-out 0.6s forwards;
          }
          .process3-route {
            stroke-dasharray: 60;
            stroke-dashoffset: 60;
            animation: processDrawPath3 0.6s ease-out 1s forwards;
          }
          .process3-dot {
            transform-origin: 65px 28px;
            animation: processPopIn3 0.4s ease-out 1.5s both;
          }
        `}</style>
        <circle
          cx="45"
          cy="45"
          r="28"
          stroke="#3D6B35"
          strokeWidth="2.5"
          fill="none"
          className="process3-globe"
        />
        <ellipse
          cx="45"
          cy="45"
          rx="12"
          ry="28"
          stroke="#3D6B35"
          strokeWidth="1.5"
          fill="none"
          className="process3-meridian"
        />
        <line
          x1="17"
          y1="45"
          x2="73"
          y2="45"
          stroke="#3D6B35"
          strokeWidth="1.5"
          className="process3-equator"
        />
        <path
          d="M25 35 C35 30, 50 38, 65 28"
          stroke="#8B1A1A"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          className="process3-route"
        />
        <circle
          cx="65"
          cy="28"
          r="4"
          fill="#8B1A1A"
          className="process3-dot"
        />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 90 90" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {icons[step]}
    </svg>
  );
}
