import { useState } from "react"

import PersonaLogo from "./PersonaLogo"

interface LoginScreenProps {
  onCreateAccount: () => void
  onForgotPassword: () => void
  onLoginSuccess: () => void
  onHome: () => void
}

function LoginScreen({
  onCreateAccount,
  onForgotPassword,
  onLoginSuccess,
  onHome,
}: LoginScreenProps) {
  const [email, setEmail] = useState("")
  const [contact, setContact] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !contact) {
      setError("Please enter your email and contact number.")
      return
    }

    setError("")

    // Frontend demo login
    onLoginSuccess()
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0B1020] px-6 py-10 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(79,70,229,0.20),transparent_35%),radial-gradient(circle_at_15%_80%,rgba(37,99,235,0.14),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(168,85,247,0.14),transparent_30%)]" />

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:45px_45px]" />

      {/* Ambient Lights */}
      <div className="absolute left-[12%] top-[20%] h-2 w-2 rounded-full bg-blue-400 animate-pulse" />

      <div className="absolute right-[14%] top-[24%] h-3 w-3 rounded-full bg-purple-400 animate-pulse" />

      <div className="absolute bottom-[18%] left-[18%] h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

      <div className="absolute bottom-[22%] right-[18%] h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />

      {/* Home Button */}
      <button
        type="button"
        onClick={onHome}
        aria-label="Go to Home"
        className="group absolute left-6 top-6 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-gray-300 backdrop-blur-xl transition-all duration-300 hover:border-blue-400/20 hover:bg-white/10 hover:text-white"
      >
        <span className="text-lg leading-none transition-transform duration-300 group-hover:-translate-x-1">
          ←
        </span>

        Home
      </button>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-[#11182B]/95 p-8 shadow-[0_0_60px_rgba(59,130,246,0.16)] backdrop-blur-xl">

        {/* Top Glow */}
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />

        {/* Logo */}
        <div className="flex justify-center">
          <PersonaLogo size="lg" />
        </div>

        {/* Small Label */}
        <div className="mt-5 flex items-center justify-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />

          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-500">
            Personal Workspace
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-4 text-center text-3xl font-bold tracking-tight">
          Welcome Back
        </h1>

        <p className="mt-2 text-center text-sm leading-6 text-[#B8C0CC]">
          Login to continue to your PersonaAI workspace.
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="mt-7 space-y-5">

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setError("")
              }}
              placeholder="Enter your email address"
              className="w-full rounded-xl border border-white/10 bg-[#0B1020] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-blue-400/60 focus:bg-[#0D1426] focus:ring-2 focus:ring-blue-500/10"
            />
          </div>

          {/* Contact Number */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-medium text-gray-300">
                Contact Number
              </label>

              <button
                type="button"
                onClick={onForgotPassword}
                className="text-xs font-medium text-blue-400 transition hover:text-purple-400"
              >
                Forgot Password?
              </button>
            </div>

            <input
              type="tel"
              value={contact}
              onChange={(e) => {
                setContact(e.target.value)
                setError("")
              }}
              placeholder="Enter your contact number"
              className="w-full rounded-xl border border-white/10 bg-[#0B1020] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-blue-400/60 focus:bg-[#0D1426] focus:ring-2 focus:ring-blue-500/10"
            />
          </div>

          {/* Error */}
          {error && (
            <div className="flex items-center gap-2 rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              <span>!</span>
              <span>{error}</span>
            </div>
          )}

          {/* Login Button */}
          <button
            type="submit"
            className="group mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 py-3.5 font-semibold text-white shadow-[0_0_25px_rgba(99,102,241,0.30)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(99,102,241,0.45)] active:translate-y-0"
          >
            <span>Login to PersonaAI</span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-white/10" />

          <span className="text-[10px] uppercase tracking-widest text-gray-600">
            or
          </span>

          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Register */}
        <div className="flex items-center justify-center gap-1 text-sm text-gray-400">
          <span>Don't have an account?</span>

          <button
            type="button"
            onClick={onCreateAccount}
            className="font-semibold text-blue-400 transition hover:text-purple-400"
          >
            Create Account
          </button>
        </div>

        {/* Footer */}
        <p className="mt-5 text-center text-[11px] tracking-wide text-gray-600">
          Private • Offline • Personal
        </p>

      </div>

    </main>
  )
}

export default LoginScreen