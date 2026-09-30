import personaLogo from "../assets/persona-logo.png"

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
    <img
      src={personaLogo}
      width={dimension}
      height={dimension}
      className={className}
      alt="PersonaAI human neural network shield logo"
      role="img"
    />
  )
}

export default PersonaLogo