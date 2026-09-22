type PersonaLogoProps = {
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

const sizeClasses = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-24 w-24",
  xl: "h-40 w-40",
}

function PersonaLogo({ size = "md", className = "" }: PersonaLogoProps) {
  return (
    <div
      aria-label="PersonaAI logo"
      className={`shrink-0 ${sizeClasses[size]} ${className}`}
    >
      <svg viewBox="0 0 100 100" role="img" className="h-full w-full">
        <defs>
          <linearGradient id="persona-logo-gradient" x1="15" y1="18" x2="88" y2="82" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D32BD8" />
            <stop offset="0.42" stopColor="#7C43E5" />
            <stop offset="1" stopColor="#14BCEB" />
          </linearGradient>
          <linearGradient id="persona-logo-edge" x1="20" y1="14" x2="85" y2="88" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F064E7" />
            <stop offset="0.5" stopColor="#7967FF" />
            <stop offset="1" stopColor="#52E7FF" />
          </linearGradient>
          <filter id="persona-logo-glow" x="-35%" y="-35%" width="170%" height="170%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <clipPath id="persona-logo-p-clip">
            <path d="M27 84V16h31c17 0 28 9 28 24s-11 24-28 24H43v20H27Zm16-35h14c8 0 13-3 13-9s-5-9-13-9H43v18Z" />
          </clipPath>
        </defs>

        <path
          d="M27 84V16h31c17 0 28 9 28 24s-11 24-28 24H43v20H27Zm16-35h14c8 0 13-3 13-9s-5-9-13-9H43v18Z"
          fill="url(#persona-logo-gradient)"
          stroke="url(#persona-logo-edge)"
          strokeWidth="2.5"
          strokeLinejoin="round"
          filter="url(#persona-logo-glow)"
        />
        <g clipPath="url(#persona-logo-p-clip)" fill="none" stroke="#6CEAFF" strokeWidth="1.2" opacity="0.8">
          <path d="M17 25h20v8h17m-35 0h11v9h28m-38 8h19v-8h21m-39 18h28v-9h18M18 74h22v-9h23M45 14v18m8-18v23m9-22v13m8-8v15M47 59v29m8-31v22m9-27v28m8-36v31" />
          <path d="M18 25h-6m17 17H19m29 17H35m32-35h13M45 14V8m19 8V9m9 23h9M47 88v6m17-7v8m11-38h9" />
        </g>
        <g fill="#7EEBFF" filter="url(#persona-logo-glow)">
          <circle cx="37" cy="25" r="1.8" />
          <circle cx="55" cy="33" r="1.8" />
          <circle cx="72" cy="42" r="1.8" />
          <circle cx="38" cy="58" r="1.8" />
          <circle cx="62" cy="68" r="1.8" />
          <circle cx="73" cy="77" r="1.8" />
        </g>
      </svg>
    </div>
  )
}

export default PersonaLogo