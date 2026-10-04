import { useRef } from "react"

interface SidebarUserProfileProps {
  userName: string
  profileImage: string | null
  onOpenSettings: () => void
  onProfileImageChange: (image: string) => void
}

function SidebarUserProfile({
  userName,
  profileImage,
  onOpenSettings,
  onProfileImageChange,
}: SidebarUserProfileProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const firstLetter =
    userName.trim().charAt(0).toUpperCase() || "U"

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0]

    if (!file) {
      return
    }

    const reader = new FileReader()

    reader.onload = () => {
      const image = reader.result

      if (typeof image === "string") {
        onProfileImageChange(image)
      }
    }

    reader.readAsDataURL(file)

    event.target.value = ""
  }

  const handleProfileClick = () => {
    onOpenSettings()
  }

  return (
    <>
      <button
        type="button"
        onClick={handleProfileClick}
        className="group flex w-full items-center gap-3 rounded-xl p-2 text-left transition hover:bg-white/[0.04]"
        title="Open Settings"
      >
        {profileImage ? (
          <img
            src={profileImage}
            alt={`${userName} profile`}
            className="h-10 w-10 shrink-0 rounded-full object-cover shadow-[0_0_20px_rgba(99,102,241,0.25)]"
          />
        ) : (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 font-bold text-white shadow-[0_0_20px_rgba(99,102,241,0.25)]">
            {firstLetter}
          </div>
        )}

        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-white">
            {userName}
          </p>

          <p className="text-xs text-gray-500">
            Personal Account
          </p>
        </div>
      </button>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
    </>
  )
}

export default SidebarUserProfile