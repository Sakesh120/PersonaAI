import { useEffect, useState } from "react"

interface IntroVideoProps {
  onComplete: () => void
}

function IntroVideo({ onComplete }: IntroVideoProps) {
  const [fadeOut, setFadeOut] = useState(false)

  const handleVideoEnd = () => {
    // Small delay makes the transition feel intentional
    setFadeOut(true)

    setTimeout(() => {
      onComplete()
    }, 700)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Prevent accidental skipping with Space or Enter
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <main
      className={`fixed inset-0 z-[9999] overflow-hidden bg-[#0B1020] transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <video
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/persona-intro.mp4"
          type="video/mp4"
        />
      </video>

      {/* PersonaAI dark blend */}
      <div className="pointer-events-none absolute inset-0 bg-[#0B1020]/10" />

      {/* Subtle edge blending */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B1020]/20 via-transparent to-[#0B1020]/30" />
    </main>
  )
}

export default IntroVideo