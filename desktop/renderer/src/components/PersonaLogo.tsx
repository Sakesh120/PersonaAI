type PersonaLogoSize = number | "sm" | "md" | "lg" | "xl"

const sizeMap = {
  sm: 36,
  md: 44,
  lg: 96,
  xl: 160,
} as const

function PersonaLogo({
  size = 220,
  className = "",
}: {
  size?: PersonaLogoSize
  className?: string
}) {
  const dimension = typeof size === "number" ? size : sizeMap[size]

  return (
    <svg
      width={dimension}
      height={dimension}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="PersonaAI human neural network shield logo"
    >
      <defs>
        {/* Shield Gradient */}
        <linearGradient
          id="shieldGradient"
          x1="70"
          y1="100"
          x2="430"
          y2="420"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00BFFF" />
          <stop offset="0.5" stopColor="#1877F2" />
          <stop offset="1" stopColor="#7B2CFF" />
        </linearGradient>

        {/* Head Gradient */}
        <linearGradient
          id="headGradient"
          x1="140"
          y1="150"
          x2="370"
          y2="400"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00AFFF" />
          <stop offset="0.55" stopColor="#1769E8" />
          <stop offset="1" stopColor="#6D28D9" />
        </linearGradient>

        {/* Glow */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Shield */}
      <path
        d="M250 35
           L445 105
           L435 280
           C430 365 365 430 250 475
           C135 430 70 365 65 280
           L55 105
           Z"
        stroke="url(#shieldGradient)"
        strokeWidth="25"
        strokeLinejoin="round"
        filter="url(#glow)"
      />

      {/* Head */}
      <path
        d="M250 105
           C170 105 115 160 115 235
           C115 275 130 300 150 320
           C145 350 160 390 205 410
           C235 425 270 430 305 415
           C345 398 365 360 365 315
           C390 280 390 220 365 175
           C340 130 300 105 250 105Z"
        fill="url(#headGradient)"
      />

      {/* Face Cut */}
      <path
        d="M145 275
           C125 290 125 315 145 325
           L165 330
           L150 350
           L175 350
           C190 390 225 410 260 415"
        fill="url(#headGradient)"
      />

      {/* Neural Network Lines */}
      <g
        stroke="white"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="205" y1="170" x2="270" y2="125" />
        <line x1="270" y1="125" x2="335" y2="170" />
        <line x1="205" y1="170" x2="230" y2="250" />
        <line x1="270" y1="125" x2="250" y2="250" />
        <line x1="335" y1="170" x2="250" y2="250" />
        <line x1="230" y1="250" x2="250" y2="330" />
        <line x1="250" y1="250" x2="315" y2="300" />
        <line x1="250" y1="330" x2="315" y2="300" />
        <line x1="205" y1="170" x2="315" y2="300" />
        <line x1="230" y1="250" x2="335" y2="170" />
      </g>

      {/* Neural Nodes */}
      <g fill="white">
        <circle cx="205" cy="170" r="18" />
        <circle cx="270" cy="125" r="18" />
        <circle cx="335" cy="170" r="18" />
        <circle cx="230" cy="250" r="18" />
        <circle cx="250" cy="250" r="20" />
        <circle cx="315" cy="300" r="18" />
        <circle cx="250" cy="330" r="18" />
      </g>

      {/* Metallic Accent */}
      <path
        d="M145 385 L215 390 L185 420 Z"
        fill="#A7A9AC"
        opacity="0.9"
      />
    </svg>
  )
}

export default PersonaLogo