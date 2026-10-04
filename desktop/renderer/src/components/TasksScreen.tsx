import { useEffect, useState } from "react"
import SidebarUserProfile from "./SidebarUserProfile" // NEW (Code 2)
import PersonaLogo from "./PersonaLogo"

interface TasksScreenProps {
  onBackToDashboard: () => void
  onOpenChat: () => void
  onOpenFiles: () => void
  onOpenSettings: () => void
}

function TasksScreen({
  onBackToDashboard,
  onOpenChat,
  onOpenFiles,
  onOpenSettings,
}: TasksScreenProps) {
  const [task, setTask] = useState("")

  const [tasks, setTasks] = useState<string[]>(() => {
    const savedTasks = localStorage.getItem("personaAI_tasks")

    if (savedTasks) {
      try {
        return JSON.parse(savedTasks)
      } catch {
        return []
      }
    }

    return []
  })

  // NEW (Code 2): profile state
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem("personaAI_userName") || "User"
  })

  const [profileImage, setProfileImage] = useState<string | null>(() => {
    return localStorage.getItem("personaAI_profileImage") || null
  })

  // Save tasks whenever tasks change
  useEffect(() => {
    localStorage.setItem("personaAI_tasks", JSON.stringify(tasks))
  }, [tasks])

  // NEW (Code 2): Update profile name and image whenever profile is changed
  useEffect(() => {
    const handleProfileUpdate = () => {
      setUserName(
        localStorage.getItem("personaAI_userName") || "User"
      )

      setProfileImage(
        localStorage.getItem("personaAI_profileImage") || null
      )
    }

    window.addEventListener(
      "personaAI-profile-updated",
      handleProfileUpdate
    )

    return () => {
      window.removeEventListener(
        "personaAI-profile-updated",
        handleProfileUpdate
      )
    }
  }, [])

  const addTask = () => {
    if (task.trim() === "") return

    setTasks((previousTasks) => [
      ...previousTasks,
      task.trim(),
    ])

    setTask("")
  }

  const deleteTask = (index: number) => {
    setTasks((previousTasks) =>
      previousTasks.filter((_, i) => i !== index)
    )
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080D1B] text-white">

      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-30 h-screen w-64 border-r border-[#263449] bg-[#111827]/95 p-5 backdrop-blur-xl">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <PersonaLogo size={52} />

          <div>
            <h1 className="text-lg font-bold tracking-wide">
              PersonaAI
            </h1>

            <p className="text-[10px] tracking-[0.25em] text-gray-500">
              PERSONAL AI
            </p>
          </div>

        </div>

        {/* Navigation */}
        <nav className="mt-10 space-y-2">

          {/* Home */}
          <button
            type="button"
            onClick={onBackToDashboard}
            className="group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-slate-400 transition-all duration-200 hover:bg-[#162033] hover:text-white"
          >
            <span className="text-lg transition-transform group-hover:scale-110">
              ⌂
            </span>

            <span>
              Home
            </span>
          </button>

          {/* AI Chat */}
          <button
            type="button"
            onClick={onOpenChat}
            className="group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-slate-400 transition-all duration-200 hover:bg-[#162033] hover:text-white"
          >
            <span className="text-lg transition-transform group-hover:scale-110">
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
            className="group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-slate-400 transition-all duration-200 hover:bg-[#162033] hover:text-white"
          >
            <span className="text-lg transition-transform group-hover:scale-110">
              ▣
            </span>

            <span>
              Files
            </span>
          </button>

          {/* Active Tasks */}
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl border border-sky-500/20 bg-[#162033] px-4 py-3 text-left text-sky-300 shadow-[inset_0_0_0_1px_rgba(56,189,248,0.04)]"
          >
            <span className="text-lg">
              ✓
            </span>

            <span className="font-medium">
              Tasks
            </span>

            <span className="ml-auto h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.9)]" />
          </button>

          {/* Settings */}
          <button
            type="button"
            onClick={onOpenSettings}
            className="group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-slate-400 transition-all duration-200 hover:bg-[#162033] hover:text-white"
          >
            <span className="text-lg transition-transform group-hover:scale-110">
              ⚙
            </span>

            <span>
              Settings
            </span>
          </button>

        </nav>

        {/* NEW (Code 2): Sidebar User Profile (replaces static "Stay Organized" card) */}
        <div className="absolute bottom-6 left-5 right-5">
          <SidebarUserProfile
            userName={userName}
            profileImage={profileImage}
            onOpenSettings={onOpenSettings}
            onProfileImageChange={(image) => {
              setProfileImage(image)

              localStorage.setItem(
                "personaAI_profileImage",
                image
              )

              window.dispatchEvent(
                new Event("personaAI-profile-updated")
              )
            }}
          />
        </div>

      </aside>

      {/* Main Content (width + min-w-0 from Code 2) */}
      <section className="relative ml-64 min-h-screen w-[calc(100%-16rem)] min-w-0 p-8">

        {/* Header */}
        <header className="flex items-start justify-between">

          <div>

            <div className="mb-2 flex items-center gap-2 text-xs text-purple-400">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />

              PRODUCTIVITY
            </div>

            <h2 className="text-3xl font-bold tracking-tight">
              Tasks
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Organize and manage your daily tasks.
            </p>

          </div>

          {/* Task Count */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-right backdrop-blur-xl">

            <p className="text-xs text-gray-500">
              TOTAL TASKS
            </p>

            <p className="mt-1 text-2xl font-bold text-white">
              {tasks.length}
            </p>

          </div>

        </header>

        {/* Create Task */}
        <div className="group relative mt-8 overflow-hidden rounded-3xl border border-[#263449] bg-[#111827] p-7 shadow-[0_18px_30px_rgba(15,23,42,0.18)]">

          {/* Glow */}
          <div className="pointer-events-none absolute right-0 top-0 h-40 w-64 rounded-full bg-purple-500/10 blur-3xl" />

          <div className="relative">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400">
                +
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Create a task
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  Add something you want to accomplish.
                </p>
              </div>

            </div>

            <div className="mt-6 flex gap-3">

              <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    addTask()
                  }
                }}
                placeholder="Enter a new task..."
                className="min-w-0 flex-1 rounded-xl border border-[#263449] bg-[#0F172A] px-4 py-3 text-sm text-slate-50 outline-none transition-all placeholder:text-slate-500 focus:border-sky-400/40 focus:ring-2 focus:ring-sky-500/10"
              />

              <button
                type="button"
                onClick={addTask}
                className="rounded-xl bg-[#2563EB] px-7 text-sm font-semibold shadow-[0_10px_20px_rgba(37,99,235,0.18)] transition-all duration-200 hover:bg-[#1D4ED8] active:translate-y-0"
              >
                Add Task
              </button>

            </div>

          </div>

        </div>

        {/* Task List */}
        <div className="mt-8">

          {tasks.length === 0 ? (

            /* Empty State */
            <div className="rounded-3xl border border-white/10 bg-[#10182B]/80 p-12 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl text-blue-400">
                ✓
              </div>

              <h3 className="mt-5 font-semibold text-gray-300">
                No tasks yet
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Create your first task above.
              </p>

            </div>

          ) : (

            <div>

              {/* Section Header */}
              <div className="mb-4 flex items-center justify-between">

                <div>
                  <h3 className="text-lg font-semibold">
                    Your Tasks
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    Keep track of what you need to accomplish.
                  </p>
                </div>

                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-400">
                  {tasks.length} task{tasks.length !== 1 ? "s" : ""}
                </span>

              </div>

              {/* Task Cards */}
              <div className="space-y-3">

                {tasks.map((item, index) => (

                  <div
                    key={`${item}-${index}`}
                    className="group flex items-center gap-4 rounded-2xl border border-[#263449] bg-[#111827] p-4 backdrop-blur-xl transition-all duration-200 hover:border-sky-400/20 hover:bg-[#162033] hover:shadow-[0_10px_30px_rgba(15,23,42,0.18)]"
                  >

                    {/* Task Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-lg text-blue-400 transition-transform duration-200 group-hover:scale-105">
                      ✓
                    </div>

                    {/* Task Text */}
                    <div className="min-w-0 flex-1">

                      <p className="break-words text-sm font-medium text-gray-200">
                        {item}
                      </p>

                      <p className="mt-1 text-[11px] text-gray-600">
                        Pending task
                      </p>

                    </div>

                    {/* Delete */}
                    <button
                      type="button"
                      onClick={() => deleteTask(index)}
                      className="shrink-0 rounded-xl border border-red-400/10 bg-red-500/5 px-4 py-2 text-sm text-red-400 transition-all duration-200 hover:bg-red-500/15 hover:text-red-300"
                    >
                      Delete
                    </button>

                  </div>

                ))}

              </div>

            </div>

          )}

        </div>

      </section>

    </main>
  )
}

export default TasksScreen