import { useState } from "react"

import PersonaLogo from "./PersonaLogo"

interface ForgotPasswordScreenProps {
  onBackToLogin: () => void
}

function ForgotPasswordScreen({
  onBackToLogin,
}: ForgotPasswordScreenProps) {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!email) {
      setMessage("Please enter your email address.")
      return
    }

    setMessage("Password reset link sent successfully! 📧")
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0B1020] px-6 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(59,130,246,0.20),transparent_35%),radial-gradient(circle_at_15%_80%,rgba(37,99,235,0.14),transparent_30%),radial-gradient(circle_at_85%_75%,rgba(139,92,246,0.16),transparent_30%)]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:50px_50px]" />

      {/* Decorative Glow */}
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[100px]" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md">

        <div className="rounded-3xl border border-white/10 bg-[#11182B]/90 p-8 shadow-[0_0_70px_rgba(59,130,246,0.14)] backdrop-blur-2xl">

          {/* Logo */}
          <div className="flex justify-center">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 shadow-[0_0_30px_rgba(59,130,246,0.12)]">
              <PersonaLogo size="lg" />
            </div>
          </div>

          {/* Heading */}
          <div className="mt-7 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              Account Recovery
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight">
              Forgot Password?
            </h1>

            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#B8C0CC]">
              Enter your email address and we&apos;ll help you reset your
              password.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Email Address
              </label>

              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setMessage("")
                  }}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/10 bg-[#0B1020] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 hover:border-white/20 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>
            </div>

            {/* Message */}
            {message && (
              <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 px-4 py-3 text-center text-sm text-blue-300">
                {message}
              </div>
            )}

            {/* Reset Button */}
            <button
              type="submit"
              className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 py-3.5 font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.30)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(99,102,241,0.45)] active:translate-y-0"
            >
              <span className="relative z-10">
                Send Reset Link
              </span>

              <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-0" />
            </button>

          </form>

          {/* Divider */}
          <div className="my-7 flex items-center gap-3">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-[11px] uppercase tracking-wider text-gray-600">
              or
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Back to Login */}
          <button
            type="button"
            onClick={onBackToLogin}
            className="group mx-auto flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-purple-400"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1">
              ←
            </span>
            Back to Login
          </button>

        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-gray-600">
          Private • Offline • Personal
        </p>

      </div>
    </main>
  )
}

export default ForgotPasswordScreen