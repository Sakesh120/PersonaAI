import type { ReactNode } from "react"

import PersonaLogo from "./PersonaLogo"

const VIZ_NODE = { x: 360, y: 278 }
const VIZ_CARD = { w: 76, h: 94 }

const VIZ_DOCS = [
  { id: "1", x: 88, y: 44, variant: "lines" as const, className: "persona-viz-doc" },
  { id: "2", x: 512, y: 30, variant: "profile" as const, className: "persona-viz-doc persona-viz-doc-2" },
  { id: "3", x: 554, y: 216, variant: "list" as const, className: "persona-viz-doc persona-viz-doc-3" },
  { id: "4", x: 94, y: 348, variant: "lock" as const, className: "persona-viz-doc persona-viz-doc-4" },
  { id: "5", x: 494, y: 368, variant: "notes" as const, className: "persona-viz-doc persona-viz-doc-5" },
]

function vizCardCenter(doc: (typeof VIZ_DOCS)[number]) {
  return { x: doc.x + VIZ_CARD.w / 2, y: doc.y + VIZ_CARD.h / 2 }
}

function vizCurve(from: { x: number; y: number }, bend: number) {
  const mx = (from.x + VIZ_NODE.x) / 2
  const my = (from.y + VIZ_NODE.y) / 2
  const dx = VIZ_NODE.x - from.x
  const dy = VIZ_NODE.y - from.y
  const len = Math.hypot(dx, dy) || 1
  const cx = mx + (-dy / len) * bend
  const cy = my + (dx / len) * bend
  return `M ${from.x} ${from.y} Q ${cx} ${cy} ${VIZ_NODE.x} ${VIZ_NODE.y}`
}

function KnowledgeVizDoc({
  variant,
}: {
  variant: (typeof VIZ_DOCS)[number]["variant"]
}) {
  return (
    <>
      <rect
        width={VIZ_CARD.w}
        height={VIZ_CARD.h}
        rx="8"
        fill="#111827"
        fillOpacity="0.92"
        stroke="rgba(148,163,184,0.28)"
        strokeWidth="1"
      />
      <path d="M58 0 L76 18 H63 Q58 18 58 13 Z" fill="#1e293b" />
      <path
        d="M58 0 V13 Q58 18 63 18 H76"
        fill="none"
        stroke="rgba(56,189,248,0.28)"
        strokeWidth="0.9"
      />
      <rect x="14" y="16" width="14" height="16" rx="2" fill="none" stroke="#38BDF8" strokeOpacity="0.7" strokeWidth="1.1" />
      <path d="M18 16 V20 H24 V16" fill="none" stroke="#38BDF8" strokeOpacity="0.7" strokeWidth="1.1" />
      {variant === "profile" && (
        <>
          <circle cx="21" cy="28" r="2.4" fill="#38BDF8" fillOpacity="0.75" />
          <path d="M17.5 33.2 C17.5 31.4 24.5 31.4 24.5 33.2" stroke="#38BDF8" strokeOpacity="0.7" strokeWidth="1" fill="none" />
        </>
      )}
      {variant === "lock" && (
        <>
          <rect x="18.5" y="27" width="5" height="4.5" rx="0.8" fill="#38BDF8" fillOpacity="0.75" />
          <path d="M19.4 27 V25.4 A1.6 1.6 0 0 1 22.6 25.4 V27" fill="none" stroke="#38BDF8" strokeOpacity="0.75" strokeWidth="1" />
        </>
      )}
      <rect x="14" y="42" width="36" height="3" rx="1.5" fill="#38BDF8" fillOpacity="0.38" />
      <rect x="14" y="50" width="28" height="3" rx="1.5" fill="#94A3B8" fillOpacity="0.28" />
      <rect x="14" y="58" width="32" height="3" rx="1.5" fill="#94A3B8" fillOpacity="0.22" />
      {variant !== "list" && <rect x="14" y="66" width="22" height="3" rx="1.5" fill="#94A3B8" fillOpacity="0.16" />}
      {variant === "list" && (
        <>
          <rect x="14" y="66" width="3" height="3" rx="0.6" fill="#38BDF8" fillOpacity="0.45" />
          <rect x="20" y="66" width="24" height="3" rx="1.5" fill="#94A3B8" fillOpacity="0.2" />
          <rect x="14" y="74" width="3" height="3" rx="0.6" fill="#38BDF8" fillOpacity="0.28" />
          <rect x="20" y="74" width="18" height="3" rx="1.5" fill="#94A3B8" fillOpacity="0.16" />
        </>
      )}
    </>
  )
}

function KnowledgeVisualization() {
  const bends = [46, -40, 26, -48, 34]
  const paths = VIZ_DOCS.map((doc, index) => ({
    id: doc.id,
    d: vizCurve(vizCardCenter(doc), bends[index]),
    className: `persona-viz-link persona-viz-link-${doc.id}`,
  }))
  const answer = { x: 236, y: 132, w: 132, h: 78 }
  const answerPath = `M ${answer.x + answer.w / 2} ${answer.y + answer.h} Q 300 230 ${VIZ_NODE.x} ${VIZ_NODE.y}`

  return (
    <svg
      viewBox="0 0 720 560"
      className="h-auto w-full max-w-[540px]"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <filter id="persona-viz-soft-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g opacity="0.22">
        <rect x="48" y="118" width="52" height="66" rx="6" fill="#111827" stroke="rgba(148,163,184,0.35)" />
        <rect x="638" y="96" width="46" height="58" rx="6" fill="#111827" stroke="rgba(148,163,184,0.35)" />
        <rect x="40" y="268" width="48" height="60" rx="6" fill="#111827" stroke="rgba(148,163,184,0.35)" />
        <rect x="650" y="318" width="44" height="56" rx="6" fill="#111827" stroke="rgba(148,163,184,0.35)" />
      </g>

      <g transform="translate(668 72)">
        <g className="persona-viz-spark">
          <path d="M0 -7 L1.1 0 L0 7 L-1.1 0 Z" fill="#7DD3FC" />
          <path d="M-7 0 L0 1.1 L7 0 L0 -1.1 Z" fill="#7DD3FC" />
        </g>
      </g>
      <g transform="translate(84 470)">
        <g className="persona-viz-spark persona-viz-spark-2">
          <path d="M0 -5 L0.9 0 L0 5 L-0.9 0 Z" fill="#7DD3FC" />
          <path d="M-5 0 L0 0.9 L5 0 L0 -0.9 Z" fill="#7DD3FC" />
        </g>
      </g>

      {paths.map((path) => (
        <path
          key={path.id}
          id={`persona-viz-path-${path.id}`}
          className={path.className}
          d={path.d}
          pathLength="1"
        />
      ))}
      <path
        id="persona-viz-path-answer"
        className="persona-viz-link"
        d={answerPath}
        pathLength="1"
      />

      <g transform={`translate(${VIZ_NODE.x} ${VIZ_NODE.y})`}>
        <circle className="persona-viz-glow" r="28" fill="#38BDF8" fillOpacity="0.12" />
        <g className="persona-viz-node">
          <circle r="16" fill="#0F172A" stroke="#38BDF8" strokeOpacity="0.45" strokeWidth="1.2" />
          <circle r="11" fill="#0B1220" stroke="#38BDF8" strokeOpacity="0.28" />
          <circle r="4.5" fill="#38BDF8" filter="url(#persona-viz-soft-glow)" />
          <circle r="1.5" cx="-5" cy="-4" fill="#7DD3FC" fillOpacity="0.7" />
          <circle r="1.5" cx="5.5" cy="-3" fill="#7DD3FC" fillOpacity="0.55" />
          <circle r="1.5" cx="4" cy="5.5" fill="#7DD3FC" fillOpacity="0.5" />
        </g>
        <text
          y="36"
          textAnchor="middle"
          fill="#7DD3FC"
          fillOpacity="0.55"
          fontSize="8"
          letterSpacing="0.08em"
        >
          knowledge processing
        </text>
      </g>

      {VIZ_DOCS.map((doc) => (
        <g key={doc.id} transform={`translate(${doc.x} ${doc.y})`}>
          <g className={doc.className}>
            <KnowledgeVizDoc variant={doc.variant} />
          </g>
        </g>
      ))}

      {paths.map((path, index) => (
        <circle
          key={`particle-${path.id}`}
          r="2.15"
          fill="#38BDF8"
          className="persona-viz-particle"
          filter="url(#persona-viz-soft-glow)"
        >
          <animateMotion dur={`${2.4 + index * 0.18}s`} begin={`${2.05 + index * 0.28}s`} repeatCount="indefinite">
            <mpath href={`#persona-viz-path-${path.id}`} />
          </animateMotion>
        </circle>
      ))}
      <circle r="1.7" fill="#7DD3FC" className="persona-viz-particle">
        <animateMotion dur="2.6s" begin="2.8s" repeatCount="indefinite">
          <mpath href="#persona-viz-path-2" />
        </animateMotion>
      </circle>
      <circle r="1.7" fill="#7DD3FC" className="persona-viz-particle">
        <animateMotion dur="2.9s" begin="3.15s" repeatCount="indefinite">
          <mpath href="#persona-viz-path-4" />
        </animateMotion>
      </circle>

      <g transform={`translate(${answer.x} ${answer.y})`}>
        <g className="persona-viz-answer">
        <rect
          width={answer.w}
          height={answer.h}
          rx="12"
          fill="#F8FAFC"
          fillOpacity="0.96"
          stroke="rgba(56,189,248,0.35)"
        />
        <circle cx="22" cy="22" r="9" fill="#0F172A" />
        <circle cx="22" cy="20" r="2.4" fill="#38BDF8" />
        <path d="M16.8 26.2 C16.8 23.6 27.2 23.6 27.2 26.2" stroke="#38BDF8" strokeWidth="1.1" fill="none" />
        <rect x="38" y="16" width="72" height="5" rx="2.5" fill="#0F172A" fillOpacity="0.78" />
        <rect x="38" y="26" width="58" height="4" rx="2" fill="#94A3B8" fillOpacity="0.7" />
        <rect x="16" y="42" width="96" height="4" rx="2" fill="#CBD5E1" />
        <rect x="16" y="52" width="78" height="4" rx="2" fill="#E2E8F0" />
        <rect x="16" y="62" width="64" height="4" rx="2" fill="#E2E8F0" />
        </g>
      </g>
    </svg>
  )
}

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

        <section className="grid flex-1 items-center gap-8 pb-8 pt-6 lg:grid-cols-2">
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

            <h1 className="mt-4 text-2xl font-semibold leading-[0.95] tracking-[-0.06em] text-slate-50 sm:text-3xl lg:text-[3.25rem]">
              <span className="block">PersonaAI</span>
              <span className="mt-2 block bg-linear-to-r from-sky-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Your Personal AI Assistant.
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

          <div
            className="pointer-events-none relative hidden min-h-[380px] items-center justify-center overflow-hidden lg:flex"
            aria-hidden="true"
          >
            <KnowledgeVisualization />
          </div>
        </section>
      </div>
    </main>
  )
}

export default WelcomeScreen
