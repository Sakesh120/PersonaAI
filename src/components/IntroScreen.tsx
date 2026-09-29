interface IntroVideoProps {
  onComplete: () => void
}

function IntroVideo({ onComplete }: IntroVideoProps) {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#0B1020] overflow-hidden">
      
      <video
        autoPlay
        muted
        playsInline
        onEnded={onComplete}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/persona-intro.mp4" type="video/mp4" />
      </video>

      {/* Soft overlay to blend video with PersonaAI UI */}
      <div className="absolute inset-0 bg-[#0B1020]/10 pointer-events-none" />

    </div>
  )
}

export default IntroVideo