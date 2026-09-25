import { useState } from "react"

import PersonaLogo from "./PersonaLogo"

interface SignUpScreenProps {
  onLogin: () => void
}

function SignUpScreen({ onLogin }: SignUpScreenProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!name || !email || !password || !confirmPassword) {
      setMessage("Please fill all fields.")
      return
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.")
      return
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.")
      return
    }

    setMessage("Account created successfully! 🎉")

    setTimeout(() => {
      onLogin()
    }, 700)
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

      {/* Signup Card */}
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-[#11182B]/95 p-8 shadow-[0_0_60px_rgba(59,130,246,0.16)] backdrop-blur-xl">

        {/* Top Glow */}
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />

        {/* Logo */}
        <div className="flex justify-center">
          <PersonaLogo size="lg" />
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-center text-3xl font-bold tracking-tight">
          Create Your Account
        </h1>

        <p className="mt-2 text-center text-sm leading-6 text-[#B8C0CC]">
          Join PersonaAI and start your smarter journey.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-7 space-y-4">

          {/* Full Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full rounded-xl border border-white/10 bg-[#0B1020] px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-blue-400/60 focus:bg-[#0D1426] focus:ring-2 focus:ring-blue-500/10"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-xl border border-white/10 bg-[#0B1020] px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-blue-400/60 focus:bg-[#0D1426] focus:ring-2 focus:ring-blue-500/10"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                className="w-full rounded-xl border border-white/10 bg-[#0B1020] px-4 py-3 pr-12 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-blue-400/60 focus:bg-[#0D1426] focus:ring-2 focus:ring-blue-500/10"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={
                  showPassword ? "Hide password" : "Show password"
                }
                className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-gray-400 transition hover:bg-white/5 hover:text-white"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Confirm Password
            </label>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className="w-full rounded-xl border border-white/10 bg-[#0B1020] px-4 py-3 pr-12 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-blue-400/60 focus:bg-[#0D1426] focus:ring-2 focus:ring-blue-500/10"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                aria-label={
                  showConfirmPassword
                    ? "Hide confirm password"
                    : "Show confirm password"
                }
                className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-gray-400 transition hover:bg-white/5 hover:text-white"
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Message */}
          {message && (
            <div
              className={`rounded-xl border px-4 py-3 text-center text-sm ${
                message.includes("successfully")
                  ? "border-green-400/20 bg-green-500/10 text-green-300"
                  : "border-red-400/20 bg-red-500/10 text-red-300"
              }`}
            >
              {message}
            </div>
          )}

          {/* Create Account */}
          <button
            type="submit"
            className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 py-3.5 font-semibold text-white shadow-[0_0_25px_rgba(99,102,241,0.30)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(99,102,241,0.45)] active:translate-y-0"
          >
            <span>Create Account</span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

        </form>

        {/* Login */}
        <div className="mt-6 flex items-center justify-center gap-1 text-sm text-gray-400">
          <span>Already have an account?</span>

          <button
            type="button"
            onClick={onLogin}
            className="font-semibold text-blue-400 transition hover:text-purple-400"
          >
            Login
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

export default SignUpScreen