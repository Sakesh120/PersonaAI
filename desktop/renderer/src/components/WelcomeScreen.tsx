import type { ReactNode } from "react"

import PersonaLogo from "./PersonaLogo"

function WelcomeScreen({
  onGetStarted,
  onLogin,
  onSignUp,
  onOpenChat,
  onOpenDashboard,
}: {
  onGetStarted: () => void
  onLogin: () => void
  onSignUp: () => void
  onOpenChat: () => void
  onOpenDashboard: () => void
}) {
  const features = [
    { label: "Manage your files", icon: "files" },
    { label: "Keep track of your tasks", icon: "tasks" },
    { label: "Chat and get help", icon: "chat" },
    { label: "Everything in one place", icon: "workspace" },
  ]

  const featureIcons: Record<string, ReactNode> = {
    files: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
        <path d="M7 4.75h6.5L18 8.25v10A1.75 1.75 0 0 1 16.25 20h-9.5A1.75 1.75 0 0 1 5 18.25v-11A1.75 1.75 0 0 1 6.75 5.5H7Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.5 4.75V8.5h3.75" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.25 11.5h7.5M8.25 15h7.5" strokeLinecap="round" />
      </svg>
    ),
    tasks: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
        <path d="M8.75 6.5h9.5M8.75 12h9.5M8.75 17.5h9.5" strokeLinecap="round" />
        <path d="M5 6.5h.01M5 12h.01M5 17.5h.01" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    chat: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
        <path d="M5.5 17.5V7.75A1.75 1.75 0 0 1 7.25 6h9.5A1.75 1.75 0 0 1 18.5 7.75v6.5A1.75 1.75 0 0 1 16.75 16H9l-3.5 3.5Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.5 10.5h7M8.5 13.5h4.5" strokeLinecap="round" />
      </svg>
    ),
    workspace: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
        <rect x="4.5" y="5.5" width="15" height="10.5" rx="2.25" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 19.5h5M12 16v3.5" strokeLinecap="round" />
      </svg>
    ),
  }

  return (
    <main className="min-h-screen bg-[#0B1220] text-slate-50">
      <div className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-5 py-5 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-500/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
              <div className="h-2.5 w-2.5 rounded-full bg-[#38BDF8] shadow-[0_0_16px_rgba(56,189,248,0.8)]" />
            </div>
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-slate-200">
              PersonaAI
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-end gap-1.5 sm:gap-2" aria-label="Primary navigation">
            <button
              type="button"
              onClick={onOpenDashboard}
              className="rounded-lg border border-slate-700 bg-slate-900/40 px-2.5 py-2 text-xs font-medium text-slate-300 transition hover:border-sky-400/40 hover:bg-slate-800 hover:text-white sm:px-3"
            >
              Dashboard
            </button>
            <button
              type="button"
              onClick={onOpenChat}
              className="rounded-lg border border-slate-700 bg-slate-900/40 px-2.5 py-2 text-xs font-medium text-slate-300 transition hover:border-sky-400/40 hover:bg-slate-800 hover:text-white sm:px-3"
            >
              AI Chat
            </button>
            <button
              type="button"
              onClick={onLogin}
              className="rounded-lg border border-slate-700 px-2.5 py-2 text-xs font-medium text-slate-200 transition hover:border-sky-400/40 hover:bg-slate-800 hover:text-white sm:px-3"
            >
              Login
            </button>
            <button
              type="button"
              onClick={onSignUp}
              className="rounded-lg bg-[#2563EB] px-2.5 py-2 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(37,99,235,0.22)] transition hover:bg-[#1D4ED8] sm:px-3"
            >
              Sign Up
            </button>
          </nav>
        </header>

        <section className="grid flex-1 items-center gap-8 pb-8 pt-6 lg:grid-cols-1">
          <div className="max-w-xl lg:pl-4">
            <div className="relative mb-7 h-24 w-24">
              <div className="absolute -inset-4 rounded-full bg-blue-500/15 blur-2xl" />
              <PersonaLogo
                size={96}
                className="relative h-full w-full object-contain drop-shadow-[0_0_18px_rgba(59,130,246,0.4)]"
              />
            </div>

            <p className="text-sm font-medium uppercase tracking-[0.32em] text-sky-300">
              Welcome to
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-slate-50 sm:text-5xl lg:text-[4.25rem]">
              <span className="block">PersonaAI</span>
              <span className="mt-2 block bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Work smarter.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
              Your personal workspace for better productivity.
            </p>

            <button
              type="button"
              onClick={onGetStarted}
              className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-[#2563EB] px-6 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_rgba(37,99,235,0.35)] transition-colors duration-200 hover:bg-[#1D4ED8] active:translate-y-px"
            >
              <span>Get Started</span>
              <span className="text-lg transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </button>

            <ul className="mt-8 grid max-w-md gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <li
                  key={feature.label}
                  className="flex items-center gap-3 rounded-xl border border-slate-700 bg-[#111827]/80 px-3 py-2.5 text-sm text-slate-200 shadow-[0_8px_18px_rgba(15,23,42,0.18)]"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-sky-400/20 bg-sky-500/10 text-sky-300">
                    {featureIcons[feature.icon]}
                  </span>
                  <span className="leading-5">{feature.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden">
            <div className="absolute left-[8%] top-[16%] h-24 w-20">
              <div className="absolute left-1/2 top-0 h-10 w-7 -translate-x-1/2 rounded-t-full rounded-b-md border border-slate-600 bg-slate-800/70" />
              <div className="absolute left-1/2 top-7 h-12 w-14 -translate-x-1/2 rounded-t-[18px] rounded-b-md border border-slate-600 bg-gradient-to-b from-[#273349] to-[#1A2332]" />
              <div className="absolute left-1/2 top-10 h-3 w-10 -translate-x-1/2 rounded-full bg-slate-700" />
              <div className="absolute left-1/2 top-6 h-10 w-[2px] -translate-x-1/2 bg-slate-600" />
            </div>

            <div className="absolute left-[10%] bottom-[12%] h-20 w-16">
              <div className="absolute bottom-0 left-4 h-10 w-8 rounded-t-xl rounded-b-md border border-emerald-500/30 bg-emerald-500/10" />
              <div className="absolute bottom-7 left-0 h-8 w-6 rounded-full bg-emerald-400/20" />
              <div className="absolute bottom-7 right-0 h-7 w-5 rounded-full bg-emerald-400/20" />
              <div className="absolute bottom-9 left-5 h-6 w-5 rounded-full bg-emerald-400/20" />
            </div>

            <div className="absolute right-[8%] bottom-[12%] h-10 w-14 rounded-full border border-slate-600 bg-slate-800/80 shadow-[inset_0_2px_6px_rgba(255,255,255,0.04)]" />

            <div className="absolute right-[9%] bottom-[17%] h-4 w-7 rounded-full border border-slate-600 bg-slate-700/80" />

            <div className="absolute left-[14%] bottom-[12%] h-14 w-20 rounded-2xl border border-slate-700 bg-[#101827] shadow-[0_18px_25px_rgba(15,23,42,0.28)]">
              <div className="flex items-center gap-2 border-b border-slate-700 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                <span className="h-2 w-2 rounded-full bg-slate-500" />
                <span className="h-2 w-2 rounded-full bg-slate-500" />
              </div>
              <div className="space-y-2 px-3 py-2">
                <div className="h-2 w-10 rounded-full bg-slate-700" />
                <div className="h-2 w-14 rounded-full bg-slate-700" />
                <div className="h-2 w-12 rounded-full bg-slate-700" />
              </div>
            </div>

            <div className="relative w-[100%] max-w-[720px]">
              <div className="relative overflow-hidden rounded-[30px] border border-slate-700 bg-[#0F172A] p-4 shadow-[0_30px_80px_rgba(2,6,23,0.7)]">
                <div className="mb-4 flex items-center justify-between border-b border-slate-700 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#F87171]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FBBF24]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#4ADE80]" />
                  </div>
                  <div className="rounded-full border border-sky-400/25 bg-sky-500/10 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-sky-300">
                    Workspace
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-700 bg-[#111827] p-3">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-16 rounded-full bg-slate-700" />
                      <span className="h-2.5 w-14 rounded-full bg-slate-800" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-slate-700 bg-[#162033] p-3">
                      <div className="mb-3 h-2.5 w-20 rounded-full bg-slate-600" />
                      <div className="space-y-2">
                        <div className="h-2 w-full rounded-full bg-slate-700" />
                        <div className="h-2 w-11/12 rounded-full bg-slate-700" />
                        <div className="h-2 w-10/12 rounded-full bg-slate-700" />
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-700 bg-[#162033] p-3">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="h-2.5 w-12 rounded-full bg-slate-600" />
                        <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
                      </div>
                      <div className="flex h-16 items-end gap-2">
                        <span className="w-1/5 rounded-t-md bg-sky-400/60" style={{ height: "35%" }} />
                        <span className="w-1/5 rounded-t-md bg-sky-400/70" style={{ height: "60%" }} />
                        <span className="w-1/5 rounded-t-md bg-sky-400/85" style={{ height: "80%" }} />
                        <span className="w-1/5 rounded-t-md bg-sky-400/70" style={{ height: "58%" }} />
                        <span className="w-1/5 rounded-t-md bg-sky-400/60" style={{ height: "42%" }} />
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 rounded-xl border border-slate-700 bg-[#0F172A] p-3">
                    <div className="flex items-center justify-between">
                      <span className="h-2.5 w-16 rounded-full bg-slate-600" />
                      <span className="h-2.5 w-10 rounded-full bg-sky-500/40" />
                    </div>
                    <div className="mt-3 grid grid-cols-[1.3fr_0.7fr] gap-2">
                      <div className="space-y-2 rounded-lg border border-slate-700 bg-[#111827] p-2">
                        <div className="h-2.5 w-20 rounded-full bg-slate-600" />
                        <div className="h-2 w-24 rounded-full bg-slate-700" />
                        <div className="h-2 w-12 rounded-full bg-slate-700" />
                      </div>
                      <div className="flex items-center justify-center rounded-lg border border-slate-700 bg-[#111827]">
                        <div className="h-10 w-10 rounded-full border border-sky-400/30 bg-sky-500/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-auto mt-[-4px] h-3 w-[82%] rounded-b-[18px] border border-slate-700 bg-[#111827] shadow-[0_10px_22px_rgba(15,23,42,0.6)]" />
              <div className="mx-auto h-4 w-[92%] rounded-b-2xl bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700" />
            </div>

            <div className="absolute bottom-0 left-1/2 h-14 w-[90%] -translate-x-1/2 rounded-[28px] border border-slate-700/70 bg-[#111827] shadow-[0_24px_36px_rgba(2,6,23,0.7)]" />

          </div>
        </section>
      </div>
    </main>
  )
}

export default WelcomeScreen
