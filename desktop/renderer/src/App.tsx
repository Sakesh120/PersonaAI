import { useEffect, useState, type ReactNode } from "react"

import SplashScreen from "./components/SplashScreen"
import WelcomeScreen from "./components/WelcomeScreen"
import SignUpScreen from "./components/SignUpScreen"
import LoginScreen from "./components/LoginScreen"
import ForgotPasswordScreen from "./components/ForgotPasswordScreen"
import Dashboard from "./components/Dashboard"
import ChatScreen from "./components/ChatScreen"
import SettingsScreen from "./components/SettingsScreen"
import FilesScreen from "./components/FilesScreen"
import TasksScreen from "./components/TasksScreen"

type Page =
  | "splash"
  | "welcome"
  | "signup"
  | "login"
  | "forgot"
  | "dashboard"
  | "chat"
  | "settings"
  | "files"
  | "tasks"

function App() {
  const [page, setPage] = useState<Page>("splash")

  const withThemeControls = (content: ReactNode) => content

  // Splash → Welcome after 2 seconds
  useEffect(() => {
    if (page !== "splash") return

    const timer = setTimeout(() => {
      setPage("welcome")
    }, 2000)

    return () => clearTimeout(timer)
  }, [page])

  // Splash
  if (page === "splash") {
    return withThemeControls(<SplashScreen />)
  }

  // Welcome
  if (page === "welcome") {
    return withThemeControls(
      <WelcomeScreen
        onGetStarted={() => setPage("signup")}
      />
    )
  }

  // Sign Up
  if (page === "signup") {
    return withThemeControls(
      <SignUpScreen
        onLogin={() => setPage("login")}
      />
    )
  }

  // Login
  if (page === "login") {
    return withThemeControls(
      <LoginScreen
        onCreateAccount={() => setPage("signup")}
        onForgotPassword={() => setPage("forgot")}
        onLoginSuccess={() => setPage("dashboard")}
        onHome={() => setPage("welcome")}
      />
    )
  }

  // Forgot Password
  if (page === "forgot") {
    return withThemeControls(
      <ForgotPasswordScreen
        onBackToLogin={() => setPage("login")}
      />
    )
  }

  // Dashboard
  if (page === "dashboard") {
    return withThemeControls(
      <Dashboard
        onOpenChat={() => setPage("chat")}
        onOpenSettings={() => setPage("settings")}
        onOpenFiles={() => setPage("files")}
        onOpenTasks={() => setPage("tasks")}
      />
    )
  }

  // AI Chat
  if (page === "chat") {
    return withThemeControls(
      <ChatScreen
        onBackToDashboard={() => setPage("dashboard")}
        onOpenSettings={() => setPage("settings")}
        onOpenFiles={() => setPage("files")}
        onOpenTasks={() => setPage("tasks")}
      />
    )
  }

  if (page === "files") {
  return withThemeControls(
    <FilesScreen
      onBackToDashboard={() => setPage("dashboard")}
      onOpenChat={() => setPage("chat")}
      onOpenTasks={() => setPage("tasks")}
      onOpenSettings={() => setPage("settings")}
    />
  )
}
if (page === "tasks") {
  return (
    <TasksScreen
      onBackToDashboard={() => setPage("dashboard")}
      onOpenChat={() => setPage("chat")}
      onOpenFiles={() => setPage("files")}
      onOpenSettings={() => setPage("settings")}
    />
  )
}

  // Settings
  if (page === "settings") {
    return withThemeControls(
      <SettingsScreen
        onBackToDashboard={() => setPage("dashboard")}
        onOpenChat={() => setPage("chat")}
        onOpenFiles={() => setPage("files")}
        onOpenTasks={() => setPage("tasks")}
      />
    )
  }

  return null
}

export default App