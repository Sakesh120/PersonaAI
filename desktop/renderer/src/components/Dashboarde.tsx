import PersonaLogo from "./PersonaLogo"

type DashboardProps = {
  onOpenChat?: () => void
  onOpenSettings?: () => void
  onOpenFiles?: () => void
  onOpenTasks?: () => void
}

function Dashboard({
  onOpenChat,
  onOpenSettings,
  onOpenFiles,
  onOpenTasks,
}: DashboardProps) {
  return (
    <main className="min-h-screen bg-[#0B1020] text-white">

      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[20%] top-[-10%] h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute right-[-5%] top-[30%] h-96 w-96 rounded-full bg-purple-600/10 blur-[130px]" />
        <div className="absolute bottom-[-10%] left-[35%] h-96 w-96 rounded-full bg-cyan-500/5 blur-[130px]" />
      </div>


      {/* ================= SIDEBAR ================= */}
      <aside className="fixed left-0 top-0 z-30 flex h-screen w-64 flex-col border-r border-white/10 bg-[#0D1426]/95 p-5 backdrop-blur-xl">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <PersonaLogo size="sm" />

          <div>
            <h1 className="text-lg font-bold">
              PersonaAI
            </h1>

            <p className="text-[10px] tracking-[0.2em] text-gray-500">
              PERSONAL AI
            </p>
          </div>
        </div>


        {/* Navigation */}
        <nav className="mt-10 space-y-2">

          {/* Home */}
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl bg-gradient-to-r from-blue-500/15 to-purple-500/10 px-4 py-3 text-left text-blue-300 shadow-[inset_0_0_20px_rgba(59,130,246,0.03)]"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10 text-lg">
              ⌂
            </span>

            <span className="font-medium">
              Home
            </span>
          </button>


          {/* AI Chat */}
          <button
            type="button"
            onClick={onOpenChat}
            className="group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-gray-400 transition duration-200 hover:bg-white/5 hover:text-white"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg text-lg transition group-hover:bg-blue-500/10">
              ◉
            </span>

            <span>
              AI Chat
            </span>
          </button>


          {/* Files */}
          <button
            type="button"
            onClick={onOpenFiles}
            className="group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-gray-400 transition duration-200 hover:bg-white/5 hover:text-white"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg text-lg transition group-hover:bg-purple-500/10">
              ▣
            </span>

            <span>
              Files
            </span>
          </button>


          {/* Tasks */}
          <button
            type="button"
            onClick={onOpenTasks}
            className="group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-gray-400 transition duration-200 hover:bg-white/5 hover:text-white"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg text-lg transition group-hover:bg-cyan-500/10">
              ✓
            </span>

            <span>
              Tasks
            </span>
          </button>


          {/* Settings */}
          <button
            type="button"
            onClick={onOpenSettings}
            className="group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-gray-400 transition duration-200 hover:bg-white/5 hover:text-white"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg text-lg transition group-hover:bg-purple-500/10">
              ⚙
            </span>

            <span>
              Settings
            </span>
          </button>

        </nav>


        {/* Sidebar Bottom */}
        <div className="mt-auto border-t border-white/10 pt-5">

          <div className="flex items-center gap-3 rounded-xl p-2">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 font-bold shadow-[0_0_20px_rgba(99,102,241,0.25)]">
              U
            </div>

            <div>
              <p className="text-sm font-medium">
                User
              </p>

              <p className="text-xs text-gray-500">
                Personal Account
              </p>
            </div>

          </div>

        </div>

      </aside>


      {/* ================= MAIN ================= */}
      <section className="relative ml-64 min-h-screen p-8">

        {/* ================= HEADER ================= */}
        <header className="flex items-center justify-between">

          <div>
            <p className="text-sm font-medium text-blue-300">
              Welcome back 👋
            </p>

            <h2 className="mt-1 text-3xl font-bold tracking-tight">
              Good Morning, User
            </h2>

            <p className="mt-2 text-gray-400">
              Your personal workspace is ready.
            </p>
          </div>


          <div className="flex items-center gap-3">

            {/* Notification */}
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition hover:border-white/20 hover:bg-white/10"
            >
              🔔
            </button>


            {/* Profile */}
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 font-bold shadow-[0_0_20px_rgba(99,102,241,0.25)]">
              U
            </div>

          </div>

        </header>


        {/* ================= HERO ================= */}
        <div className="relative mt-8 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#121D38] via-[#11182B] to-[#17132F] p-8 shadow-[0_0_60px_rgba(59,130,246,0.08)]">

          {/* Decorative Glow */}
          <div className="pointer-events-none absolute right-[-80px] top-[-100px] h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />

          <div className="relative flex items-center justify-between gap-8">

            <div className="max-w-2xl">

              {/* Status */}
              <div className="flex items-center gap-2">

                <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />

                <span className="text-xs font-semibold tracking-[0.22em] text-cyan-300">
                  AI ASSISTANT ONLINE
                </span>

              </div>


              <h3 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">
                Your ideas.
                <br />
                <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                  Your productivity.
                </span>
              </h3>


              <p className="mt-4 max-w-xl text-sm leading-6 text-gray-400">
                PersonaAI gives you one focused workspace for conversations,
                files, tasks, and everyday productivity.
              </p>


              {/* Chat CTA */}
              <button
                type="button"
                onClick={onOpenChat}
                className="mt-7 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-3 text-sm font-semibold shadow-[0_0_25px_rgba(99,102,241,0.25)] transition duration-200 hover:scale-[1.02]"
              >
                Start Conversation →
              </button>

            </div>


            {/* Logo */}
            <div className="hidden pr-8 md:block">
              <div className="flex h-36 w-36 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] shadow-[0_0_60px_rgba(59,130,246,0.12)]">
                <PersonaLogo size="lg" />
              </div>
            </div>

          </div>


          {/* Search / Ask UI */}
          <div className="relative mt-8 flex items-center rounded-2xl border border-white/10 bg-[#080D1B]/80 p-2">

            <span className="px-3 text-gray-500">
              ✦
            </span>

            <input
              type="text"
              placeholder="Ask PersonaAI anything..."
              className="flex-1 bg-transparent px-2 py-3 text-sm text-white outline-none placeholder:text-gray-600"
            />

            <button
              type="button"
              onClick={onOpenChat}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 font-bold shadow-[0_0_20px_rgba(99,102,241,0.35)] transition hover:scale-105"
            >
              →
            </button>

          </div>

        </div>


        {/* ================= OVERVIEW ================= */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">

          {/* AI Chat */}
          <button
            type="button"
            onClick={onOpenChat}
            className="group rounded-2xl border border-white/10 bg-[#11182B] p-5 text-left transition duration-200 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-[#141E35]"
          >
            <div className="flex items-center justify-between">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-xl">
                💬
              </div>

              <span className="text-gray-600 transition group-hover:text-blue-300">
                →
              </span>

            </div>

            <p className="mt-5 text-sm font-semibold">
              AI Chat
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Continue your conversations
            </p>
          </button>


          {/* Files */}
          <button
            type="button"
            onClick={onOpenFiles}
            className="group rounded-2xl border border-white/10 bg-[#11182B] p-5 text-left transition duration-200 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-[#15172F]"
          >
            <div className="flex items-center justify-between">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-xl">
                📁
              </div>

              <span className="text-gray-600 transition group-hover:text-purple-300">
                →
              </span>

            </div>

            <p className="mt-5 text-sm font-semibold">
              Files
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Manage your workspace files
            </p>
          </button>


          {/* Tasks */}
          <button
            type="button"
            onClick={onOpenTasks}
            className="group rounded-2xl border border-white/10 bg-[#11182B] p-5 text-left transition duration-200 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-[#141B30]"
          >
            <div className="flex items-center justify-between">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-xl">
                ✓
              </div>

              <span className="text-gray-600 transition group-hover:text-cyan-300">
                →
              </span>

            </div>

            <p className="mt-5 text-sm font-semibold">
              Tasks
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Keep track of your work
            </p>
          </button>

        </div>


        {/* ================= QUICK ACTIONS ================= */}
        <div className="mt-9">

          <div className="flex items-end justify-between">

            <div>
              <h3 className="text-xl font-semibold">
                Quick Actions
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                Start something in one click
              </p>
            </div>

          </div>


          <div className="mt-5 grid gap-4 md:grid-cols-3">

            {/* Conversation */}
            <button
              type="button"
              onClick={onOpenChat}
              className="group rounded-2xl border border-white/10 bg-[#11182B] p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl">
                💬
              </div>

              <h4 className="mt-5 font-semibold">
                New Conversation
              </h4>

              <p className="mt-2 text-sm leading-5 text-gray-500">
                Start a fresh conversation with PersonaAI.
              </p>

              <span className="mt-5 block text-sm text-blue-400">
                Start Chat →
              </span>

            </button>


            {/* Writing */}
            <button
              type="button"
              onClick={onOpenChat}
              className="group rounded-2xl border border-white/10 bg-[#11182B] p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-purple-500/40"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-2xl">
                📝
              </div>

              <h4 className="mt-5 font-semibold">
                Write Something
              </h4>

              <p className="mt-2 text-sm leading-5 text-gray-500">
                Create and organize your ideas.
              </p>

              <span className="mt-5 block text-sm text-purple-400">
                Start Writing →
              </span>

            </button>


            {/* Ask */}
            <button
              type="button"
              onClick={onOpenChat}
              className="group rounded-2xl border border-white/10 bg-[#11182B] p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-2xl">
                💡
              </div>

              <h4 className="mt-5 font-semibold">
                Ask AI
              </h4>

              <p className="mt-2 text-sm leading-5 text-gray-500">
                Get help with your questions and ideas.
              </p>

              <span className="mt-5 block text-sm text-cyan-400">
                Ask Now →
              </span>

            </button>

          </div>

        </div>


        {/* ================= RECENT ACTIVITY ================= */}
        <div className="mt-9 pb-8">

          <div className="flex items-end justify-between">

            <div>
              <h3 className="text-xl font-semibold">
                Recent Activity
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                Your latest workspace activity
              </p>
            </div>

            <span className="text-xs text-gray-600">
              Today
            </span>

          </div>


          <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-[#11182B]">

            {/* Activity 1 */}
            <div className="flex items-center gap-4 border-b border-white/5 p-5">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
                💬
              </div>

              <div className="flex-1">

                <p className="text-sm font-medium">
                  Welcome to PersonaAI
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Your personal AI workspace is ready.
                </p>

              </div>

              <span className="text-xs text-gray-600">
                Just now
              </span>

            </div>


            {/* Activity 2 */}
            <div className="flex items-center gap-4 border-b border-white/5 p-5">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10">
                ✨
              </div>

              <div className="flex-1">

                <p className="text-sm font-medium">
                  PersonaAI initialized
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Your workspace is ready to use.
                </p>

              </div>

              <span className="text-xs text-gray-600">
                Today
              </span>

            </div>


            {/* Activity 3 */}
            <div className="flex items-center gap-4 p-5">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                ✓
              </div>

              <div className="flex-1">

                <p className="text-sm font-medium">
                  Workspace ready
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Chat, Files and Tasks are available.
                </p>

              </div>

              <span className="text-xs text-gray-600">
                Today
              </span>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}

export default Dashboard