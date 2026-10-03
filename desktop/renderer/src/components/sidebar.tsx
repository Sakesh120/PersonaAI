import PersonaLogo from "./PersonaLogo"
import SidebarUserProfile from "./SidebarUserProfile"

interface SidebarProps {
  activePage: "dashboard" | "chat" | "files" | "tasks" | "settings"

  onOpenDashboard: () => void
  onOpenChat: () => void
  onOpenFiles: () => void
  onOpenTasks: () => void
  onOpenSettings: () => void
}

function Sidebar({
  activePage,
  onOpenDashboard,
  onOpenChat,
  onOpenFiles,
  onOpenTasks,
  onOpenSettings,
}: SidebarProps) {
  const userName =
    localStorage.getItem("personaAI_userName") || "User"

  const profileImage =
    localStorage.getItem("personaAI_profileImage") || ""

  return (
    <aside className="fixed left-0 top-0 z-10 flex h-screen w-64 flex-col border-r border-[#263449] bg-[#0F172A]/90 px-4 py-6 backdrop-blur-xl">

      {/* PersonaAI Branding */}
      <div className="flex items-center gap-3 px-2">
        <PersonaLogo size={52} />

        <div className="flex flex-col justify-center">
          <h1 className="text-base font-semibold leading-none tracking-wide text-white">
            PersonaAI
          </h1>

          <p className="mt-1 text-[9px] leading-none tracking-[0.18em] text-gray-500">
            Offline Personal Intelligence Platform
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-10 space-y-2">

        {/* Home */}
        <button
          type="button"
          onClick={onOpenDashboard}
          className={
            activePage === "dashboard"
              ? "flex w-full items-center gap-3 rounded-xl border border-sky-500/20 bg-[#162033] px-4 py-3 text-left text-sky-300"
              : "group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-gray-400 transition-all duration-200 hover:bg-white/5 hover:text-white"
          }
        >
          <span className="text-lg">
            ⌂
          </span>

          <span
            className={
              activePage === "dashboard"
                ? "font-medium"
                : ""
            }
          >
            Home
          </span>

          {activePage === "dashboard" && (
            <span className="ml-auto h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.9)]" />
          )}
        </button>

        {/* AI Chat */}
        <button
          type="button"
          onClick={onOpenChat}
          className={
            activePage === "chat"
              ? "flex w-full items-center gap-3 rounded-xl border border-sky-500/20 bg-[#162033] px-4 py-3 text-left text-sky-300"
              : "group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-gray-400 transition-all duration-200 hover:bg-white/5 hover:text-white"
          }
        >
          <span className="text-lg">
            ◉
          </span>

          <span
            className={
              activePage === "chat"
                ? "font-medium"
                : ""
            }
          >
            AI Chat
          </span>

          {activePage === "chat" && (
            <span className="ml-auto h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.9)]" />
          )}
        </button>

        {/* Files */}
        <button
          type="button"
          onClick={onOpenFiles}
          className={
            activePage === "files"
              ? "flex w-full items-center gap-3 rounded-xl border border-sky-500/20 bg-[#162033] px-4 py-3 text-left text-sky-300"
              : "group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-gray-400 transition-all duration-200 hover:bg-white/5 hover:text-white"
          }
        >
          <span className="text-lg">
            ▣
          </span>

          <span
            className={
              activePage === "files"
                ? "font-medium"
                : ""
            }
          >
            Files
          </span>

          {activePage === "files" && (
            <span className="ml-auto h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.9)]" />
          )}
        </button>

        {/* Tasks */}
        <button
          type="button"
          onClick={onOpenTasks}
          className={
            activePage === "tasks"
              ? "flex w-full items-center gap-3 rounded-xl border border-sky-500/20 bg-[#162033] px-4 py-3 text-left text-sky-300"
              : "group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-gray-400 transition-all duration-200 hover:bg-white/5 hover:text-white"
          }
        >
          <span className="text-lg">
            ✓
          </span>

          <span
            className={
              activePage === "tasks"
                ? "font-medium"
                : ""
            }
          >
            Tasks
          </span>

          {activePage === "tasks" && (
            <span className="ml-auto h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.9)]" />
          )}
        </button>

        {/* Settings */}
        <button
          type="button"
          onClick={onOpenSettings}
          className={
            activePage === "settings"
              ? "flex w-full items-center gap-3 rounded-xl border border-sky-500/20 bg-[#162033] px-4 py-3 text-left text-sky-300"
              : "group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-gray-400 transition-all duration-200 hover:bg-white/5 hover:text-white"
          }
        >
          <span className="text-lg">
            ⚙
          </span>

          <span
            className={
              activePage === "settings"
                ? "font-medium"
                : ""
            }
          >
            Settings
          </span>

          {activePage === "settings" && (
            <span className="ml-auto h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.9)]" />
          )}
        </button>

      </nav>

      {/* Bottom User Profile */}
      <div className="mt-auto border-t border-[#263449] pt-4">
        <SidebarUserProfile
          userName={userName}
          profileImage={profileImage || null}
          onOpenSettings={onOpenSettings}
          onProfileImageChange={() => {}}
        />
      </div>

    </aside>
  )
}

export default Sidebar