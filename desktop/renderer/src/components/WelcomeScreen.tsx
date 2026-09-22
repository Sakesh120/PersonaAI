function WelcomeScreen({
  onGetStarted,
}: {
  onGetStarted: () => void
}) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0B1020] text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(79,70,229,0.22),transparent_35%),radial-gradient(circle_at_15%_75%,rgba(37,99,235,0.16),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(168,85,247,0.16),transparent_30%)]" />

      {/* Ambient Grid */}
      <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:45px_45px]" />

      {/* Floating Lights */}
      <div className="absolute left-[12%] top-[20%] h-2 w-2 rounded-full bg-blue-400 animate-pulse" />

      <div className="absolute right-[15%] top-[25%] h-3 w-3 rounded-full bg-purple-400 animate-pulse" />

      <div className="absolute left-[20%] bottom-[22%] h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />

      <div className="absolute right-[20%] bottom-[20%] h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">

        {/* Robot */}
        <div className="relative mb-8 h-44 w-48">

          {/* Robot Glow */}
          <div className="absolute -inset-10 rounded-full bg-blue-500/15 blur-3xl animate-pulse" />

          {/* Antenna Line */}
          <div className="absolute left-1/2 top-[-20px] h-8 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-300 to-blue-500" />

          {/* Antenna Light */}
          <div className="absolute left-1/2 top-[-28px] h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.9)] animate-pulse" />

          {/* Robot Head */}
          <div className="absolute left-1/2 top-2 h-32 w-40 -translate-x-1/2 rounded-[34px] border border-blue-400/40 bg-gradient-to-br from-[#1B2948] via-[#111B34] to-[#0B1226] shadow-[0_0_50px_rgba(59,130,246,0.35)]">

            {/* Head Highlight */}
            <div className="absolute left-5 right-5 top-3 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent" />

            {/* Left Eye */}
            <div className="absolute left-9 top-11 h-4 w-4 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)] animate-pulse" />

            {/* Right Eye */}
            <div className="absolute right-9 top-11 h-4 w-4 rounded-full bg-purple-300 shadow-[0_0_18px_rgba(216,180,254,0.9)] animate-pulse" />

            {/* Mouth */}
            <div className="absolute bottom-8 left-1/2 h-1.5 w-12 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 shadow-[0_0_10px_rgba(129,140,248,0.5)]" />

          </div>

          {/* Neck */}
          <div className="absolute bottom-3 left-1/2 h-5 w-12 -translate-x-1/2 rounded-b-lg bg-gradient-to-r from-[#16213B] to-[#202C4A]" />

          {/* Shoulder Glow */}
          <div className="absolute bottom-0 left-1/2 h-2 w-24 -translate-x-1/2 rounded-full bg-blue-500/20 blur-md" />

        </div>

        {/* Welcome Label */}
        <p className="text-sm font-medium uppercase tracking-[0.4em] text-blue-300">
          Welcome to
        </p>

        {/* Logo Name */}
        <h1 className="mt-3 text-5xl font-bold tracking-tight md:text-6xl">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            PersonaAI
          </span>
        </h1>

        {/* Tagline */}
        <p className="mt-4 text-xl font-medium text-[#B8C0CC]">
          Your Personal AI Assistant
        </p>

        {/* Main Description */}
        <p className="mt-7 text-lg leading-8 text-gray-400">
          Smarter Conversations.
          <br />
          Better Productivity.
          <br />
          All in One Place.
        </p>

        {/* Get Started Button */}
        <button
          type="button"
          onClick={onGetStarted}
          className="group mt-9 flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-10 py-4 font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(99,102,241,0.55)] active:translate-y-0"
        >
          <span>Get Started</span>

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>

        {/* Bottom Hint */}
        <p className="mt-6 text-xs tracking-wide text-gray-600">
          Your private desktop AI experience
        </p>

      </div>

    </main>
  )
}

export default WelcomeScreen
