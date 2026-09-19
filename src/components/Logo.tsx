interface LogoProps {
  className?: string;
}

export default function Logo({ className = 'w-10 h-10' }: LogoProps) {
  return (
    <svg viewBox="0 0 512 512" role="img" aria-label="Valor Boom" className={className}>
      <rect width="512" height="512" rx="110" fill="#10b981" />
      <path
        d="M128,148 L256,336 L384,148"
        fill="none"
        stroke="#1c1917"
        strokeWidth="92"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M236,261 L211.57,249.03 A26,35 0 0,1 260.43,249.03 Z" fill="#f0fdf4" />
      <path d="M276,261 L251.57,249.03 A26,35 0 0,1 300.43,249.03 Z" fill="#f0fdf4" />
      <line x1="256" y1="266" x2="256" y2="294" stroke="#f0fdf4" strokeWidth="10" strokeLinecap="round" />
    </svg>
  );
}
