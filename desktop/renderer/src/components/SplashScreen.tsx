import { useEffect } from "react"

import PersonaLogo from "./PersonaLogo"

function SplashScreen({ onFinish }: { onFinish?: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish?.()
    }, 2000)

    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0B1020] text-white">
      {/* Dark Mesh Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(37,99,235,0.20),transparent_30%),radial-gradient(circle_at_15%_60%,rgba(59,130,246,0.14),transparent_30%),radial-gradient(circle_at_85%_60%,rgba(139,92,246,0.18),transparent_30%)]" />

      {/* Floating Dots */}
      <div className="absolute left-[15%] top-[20%] h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
      <div className="absolute right-[15%] top-[25%] h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
      <div className="absolute left-[20%] bottom-[25%] h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
      <div className="absolute right-[20%] bottom-[20%] h-2 w-2 rounded-full bg-pink-400 animate-pulse" />

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Glowing PersonaAI Logo */}
        <div className="relative h-[clamp(180px,25vw,240px)] w-[clamp(180px,25vw,240px)]">
          <div className="absolute -inset-8 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
          <PersonaLogo
            size={240}
            className="relative h-full w-full object-contain drop-shadow-[0_0_24px_rgba(59,130,246,0.45)]"
          />
        </div>

        {/* PersonaAI */}
        <h1 className="mt-8 text-5xl font-bold">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            PersonaAI
          </span>
        </h1>

        {/* Tagline */}
        <p className="mt-4 text-xl text-[#B8C0CC]">
          Your Personal AI Assistant
        </p>

        {/* Loading */}
        <div className="mt-10 flex flex-col items-center">
          <div className="flex gap-3">
            <span className="h-3 w-3 rounded-full bg-blue-400 animate-bounce" />
            <span className="h-3 w-3 rounded-full bg-purple-400 animate-bounce [animation-delay:150ms]" />
            <span className="h-3 w-3 rounded-full bg-pink-400 animate-bounce [animation-delay:300ms]" />
          </div>

          {/* Lines */}
          <div className="relative mt-5 h-10 w-56">
            <div className="absolute left-1/2 top-0 h-10 w-px -translate-x-1/2 bg-gradient-to-b from-purple-400 to-transparent" />
            <div className="absolute left-1/2 top-2 h-px w-40 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
            <div className="absolute left-8 top-2 h-7 w-12 border-b border-l border-blue-400/60" />
            <div className="absolute right-8 top-2 h-7 w-12 border-b border-r border-purple-400/60" />
          </div>

          <p className="mt-1 text-xs tracking-[0.3em] text-gray-500">
            Loading...
          </p>
        </div>
      </div>
    </main>
  )
}

export default SplashScreen