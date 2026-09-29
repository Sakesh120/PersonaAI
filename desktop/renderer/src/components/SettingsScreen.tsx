
import { useEffect, useState } from "react"
import PersonaLogo from "./PersonaLogo"

interface SettingsScreenProps {
  onBackToDashboard: () => void
  onOpenChat: () => void
  onOpenFiles: () => void
  onOpenTasks: () => void
}

function SettingsScreen({
  onBackToDashboard,
  onOpenChat,
  onOpenFiles,
  onOpenTasks,
}: SettingsScreenProps) {
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem("personaAI_userName") || "User"
  })

  const [notifications, setNotifications] = useState(() => {
    return localStorage.getItem("personaAI_notifications") !== "false"
  })

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("personaAI_darkMode") !== "false"
  })

  const [editingName, setEditingName] = useState(false)
  const [nameInput, setNameInput] = useState(userName)

  // Save user name
  useEffect(() => {
    localStorage.setItem("personaAI_userName", userName)
  }, [userName])

  // Save notifications setting
  useEffect(() => {
    localStorage.setItem(
      "personaAI_notifications",
      String(notifications)
    )
  }, [notifications])

  // Save dark mode setting
  useEffect(() => {
    localStorage.setItem(
      "personaAI_darkMode",
      String(darkMode)
    )
  }, [darkMode])

  const handleSaveName = () => {
    const trimmedName = nameInput.trim()

    if (trimmedName === "") {
      return
    }

    setUserName(trimmedName)
    setNameInput(trimmedName)
    setEditingName(false)
  }

  return (
    <main className="min-h-screen bg-[#0B1020] text-white">

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-20 h-screen w-64 border-r border-[#263449] bg-[#111827] p-5">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <PersonaLogo />

          <div>
            <h1 className="text-lg font-bold">
              PersonaAI
            </h1>

            <p className="text-[10px] tracking-widest text-gray-500">
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
            className="w-full rounded-xl px-4 py-3 text-left text-gray-400 transition hover:bg-white/5 hover:text-white"
          >
            ⌂ &nbsp; Home
          </button>

          {/* AI Chat */}
          <button
            type="button"
            onClick={onOpenChat}
            className="w-full rounded-xl px-4 py-3 text-left text-gray-400 transition hover:bg-white/5 hover:text-white"
          >
            ◉ &nbsp; AI Chat
          </button>

          {/* Files */}
          <button
            type="button"
            onClick={onOpenFiles}
            className="w-full rounded-xl px-4 py-3 text-left text-gray-400 transition hover:bg-white/5 hover:text-white"
          >
            ▣ &nbsp; Files
          </button>

          {/* Tasks */}
          <button
            type="button"
            onClick={onOpenTasks}
            className="w-full rounded-xl px-4 py-3 text-left text-gray-400 transition hover:bg-white/5 hover:text-white"
          >
            ✓ &nbsp; Tasks
          </button>

          {/* Settings */}
          <button
            type="button"
            className="w-full rounded-xl border border-sky-500/20 bg-[#162033] px-4 py-3 text-left text-sky-300"
          >
            ⚙ &nbsp; Settings
          </button>

        </nav>

        {/* User */}
        <div className="absolute bottom-5 left-5 right-5 border-t border-[#263449] pt-4">

          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-sm font-bold">
              {userName.charAt(0).toUpperCase()}
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-medium">
                {userName}
              </p>

              <p className="text-xs text-gray-500">
                Personal Account
              </p>
            </div>

          </div>

        </div>

      </aside>

      {/* Main Content */}
      <section className="relative ml-64 min-h-screen p-8">

        {/* Header */}
        <header className="flex items-center justify-between">

          <div>
            <p className="text-sm text-blue-300">
              Personalize your experience
            </p>

            <h2 className="mt-1 text-3xl font-bold">
              Settings
            </h2>

            <p className="mt-2 text-gray-400">
              Manage your PersonaAI preferences.
            </p>
          </div>

          <button
            type="button"
            onClick={onBackToDashboard}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition hover:bg-white/10"
          >
            ← Dashboard
          </button>

        </header>

        {/* Settings Cards */}
        <div className="mt-10 grid max-w-4xl gap-5">

          {/* Account */}
          <div className="rounded-2xl border border-white/10 bg-[#11182B] p-6">

            <h3 className="text-lg font-semibold">
              Account
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Manage your personal account information.
            </p>

            <div className="mt-5 rounded-xl border border-[#263449] bg-[#0F172A] p-4">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-gray-400">
                    Name
                  </p>

                  {!editingName ? (
                    <p className="mt-1 font-medium">
                      {userName}
                    </p>
                  ) : (
                    <input
                      type="text"
                      value={nameInput}
                      onChange={(event) =>
                        setNameInput(event.target.value)
                      }
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          handleSaveName()
                        }
                      }}
                      autoFocus
                      className="mt-2 rounded-lg border border-[#263449] bg-[#111827] px-3 py-2 text-sm text-slate-50 outline-none focus:border-sky-400"
                    />
                  )}
                </div>

                {!editingName ? (
                  <button
                    type="button"
                    onClick={() => {
                      setNameInput(userName)
                      setEditingName(true)
                    }}
                    className="rounded-lg px-3 py-2 text-sm text-sky-400 transition hover:bg-sky-500/10"
                  >
                    Edit
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSaveName}
                    className="rounded-lg bg-[#2563EB] px-3 py-2 text-sm font-medium transition hover:bg-[#1D4ED8]"
                  >
                    Save
                  </button>
                )}

              </div>

            </div>

          </div>

          {/* Preferences */}
          <div className="rounded-2xl border border-white/10 bg-[#11182B] p-6">

            <h3 className="text-lg font-semibold">
              Preferences
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Customize how PersonaAI works for you.
            </p>

            <div className="mt-5 space-y-4">

              {/* Dark Mode */}
              <button
                type="button"
                onClick={() => setDarkMode(!darkMode)}
                className="flex w-full items-center justify-between rounded-xl border border-white/5 bg-[#0B1020] p-4 text-left transition hover:border-white/10"
              >

                <div>
                  <p className="font-medium">
                    Dark Mode
                  </p>

                  <p className="text-xs text-gray-500">
                    Use the dark interface.
                  </p>
                </div>

                <div
                  className={`h-6 w-11 rounded-full p-1 transition ${
                    darkMode
                      ? "bg-blue-500"
                      : "bg-gray-600"
                  }`}
                >
                  <div
                    className={`h-4 w-4 rounded-full bg-white transition ${
                      darkMode ? "ml-auto" : "ml-0"
                    }`}
                  />
                </div>

              </button>

              {/* Notifications */}
              <button
                type="button"
                onClick={() =>
                  setNotifications(!notifications)
                }
                className="flex w-full items-center justify-between rounded-xl border border-white/5 bg-[#0B1020] p-4 text-left transition hover:border-white/10"
              >

                <div>
                  <p className="font-medium">
                    Notifications
                  </p>

                  <p className="text-xs text-gray-500">
                    Receive assistant notifications.
                  </p>
                </div>

                <div
                  className={`h-6 w-11 rounded-full p-1 transition ${
                    notifications
                      ? "bg-blue-500"
                      : "bg-gray-600"
                  }`}
                >
                  <div
                    className={`h-4 w-4 rounded-full bg-white transition ${
                      notifications ? "ml-auto" : "ml-0"
                    }`}
                  />
                </div>

              </button>

            </div>

          </div>

          {/* Offline Mode */}
          <div className="rounded-2xl border border-white/10 bg-[#11182B] p-6">

            <h3 className="text-lg font-semibold">
              Privacy & Offline
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              PersonaAI desktop data preferences.
            </p>

            <div className="mt-5 flex items-center justify-between rounded-xl border border-[#263449] bg-[#0F172A] p-4">

              <div>
                <p className="font-medium">
                  Offline Mode
                </p>

                <p className="text-xs text-gray-500">
                  Keep your personal workspace available offline.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                <span className="text-sm text-green-400">
                  Active
                </span>
              </div>

            </div>

          </div>

          {/* About */}
          <div className="rounded-2xl border border-white/10 bg-[#11182B] p-6">

            <h3 className="text-lg font-semibold">
              About PersonaAI
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              PersonaAI is your personal AI assistant designed
              to help with conversations, productivity, questions,
              and everyday tasks.
            </p>

            <div className="mt-5 flex items-center justify-between">

              <p className="text-xs text-gray-600">
                Version 1.0.0
              </p>

              <p className="text-xs text-gray-600">
                Desktop Edition
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}

export default SettingsScreen