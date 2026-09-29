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

import IntroVideo from "./components/IntroVideo"

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
  // First show the PersonaAI intro video
  const [showIntroVideo, setShowIntroVideo] = useState(true)

  const [page, setPage] = useState<Page>("splash")

  const withThemeControls = (content: ReactNode) => content

  // Show the splash screen briefly after the intro video finishes.
  useEffect(() => {
    if (showIntroVideo || page !== "splash") return

    const timer = setTimeout(() => {
      setPage("welcome")
    }, 2000)

    return () => clearTimeout(timer)
  }, [page, showIntroVideo])

  // --------------------------------------------------
  // FIRST: PersonaAI Intro Video
  // --------------------------------------------------
  if (showIntroVideo) {
    return (
      <IntroVideo
        onComplete={() => {
          setShowIntroVideo(false)
        }}
      />
    )
  }

  // --------------------------------------------------
  // Splash
  // --------------------------------------------------
  if (page === "splash") {
    return withThemeControls(
      <SplashScreen />
    )
  }

  // --------------------------------------------------
  // Welcome
  // --------------------------------------------------
  if (page === "welcome") {
    return withThemeControls(
      <WelcomeScreen
        onGetStarted={() => setPage("signup")}
        onLogin={() => setPage("login")}
        onSignUp={() => setPage("signup")}
        onOpenChat={() => setPage("chat")}
        onOpenDashboard={() => setPage("dashboard")}
      />
    )
  }

  // --------------------------------------------------
  // Sign Up
  // --------------------------------------------------
  if (page === "signup") {
    return withThemeControls(
      <SignUpScreen
        onLogin={() => setPage("login")}
        onHome={() => setPage("welcome")}
      />
    )
  }

  // --------------------------------------------------
  // Login
  // --------------------------------------------------
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

  // --------------------------------------------------
  // Forgot Password
  // --------------------------------------------------
  if (page === "forgot") {
    return withThemeControls(
      <ForgotPasswordScreen
        onBackToLogin={() => setPage("login")}
      />
    )
  }

  // --------------------------------------------------
  // Dashboard
  // --------------------------------------------------
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

  // --------------------------------------------------
  // AI Chat
  // --------------------------------------------------
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

  // --------------------------------------------------
  // Files
  // --------------------------------------------------
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

  // --------------------------------------------------
  // Tasks
  // --------------------------------------------------
  if (page === "tasks") {
    return withThemeControls(
      <TasksScreen
        onBackToDashboard={() => setPage("dashboard")}
        onOpenChat={() => setPage("chat")}
        onOpenFiles={() => setPage("files")}
        onOpenSettings={() => setPage("settings")}
      />
    )
  }

  // --------------------------------------------------
  // Settings
  // --------------------------------------------------
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