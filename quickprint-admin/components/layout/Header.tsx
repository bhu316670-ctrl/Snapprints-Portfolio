import { Bell, User } from "lucide-react"

export default function Header() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">

      <h2 className="text-lg font-semibold">
        Admin Dashboard
      </h2>

      <div className="flex items-center gap-6">

        <Bell className="cursor-pointer" />

        <User className="cursor-pointer" />

      </div>

    </header>
  )
}