import React from "react"

interface UserProfileCardProps {
  name: string
  image?: string
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  name,
  image,
}) => {
  return (
    <div className="flex items-center gap-3 px-3 py-3 border-t border-[#263449]">
      <div className="w-10 h-10 rounded-full overflow-hidden bg-[#1E293B] flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-white text-sm font-semibold">
            {name.charAt(0).toUpperCase()}
          </span>
        )}
      </div>

      <div className="min-w-0">
        <p className="text-white text-sm font-medium truncate">
          {name}
        </p>

        <p className="text-[#8B98AA] text-xs">
          User
        </p>
      </div>
    </div>
  )
}

export default UserProfileCard