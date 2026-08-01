"use client";

import { usePathname } from "next/navigation";
import {
  Bell,
  Search,
  CircleUserRound,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

const titles: Record<string, string> = {
  "/user/dashboard": "Dashboard",
  "/user/machines": "My Machines",
  "/user/revenue": "Revenue",
  "/user/withdrawals": "Withdrawals",
  "/user/payouts": "Payout History",
  "/user/reports": "Reports",
  "/user/bank-account": "Bank Account",
  "/user/profile": "Profile",
  "/user/settings": "Settings",
};

export default function UserHeader() {
  const pathname = usePathname();
  const { logout } = useAuth();
  const router = useRouter();
  const title = titles[pathname] || "User Dashboard";

  async function handleLogout() {
  await logout();
  router.push("/user-login"); // or "/user-login" in the user header
}
  return (
    <header className="h-20 bg-white border-b flex items-center justify-between px-8">

      <div>

        <h2 className="text-3xl font-bold">
          {title}
        </h2>

      </div>

      <div className="flex items-center gap-6">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            placeholder="Search..."
            className="border rounded-lg pl-10 pr-4 py-2 w-72"
          />

        </div>

        <button className="relative">

          <Bell />

          <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            3
          </span>

        </button>

        <div className="flex items-center gap-3">

          <CircleUserRound size={38} />

          <div>

            <p className="font-semibold">
              Bhushan
            </p>

            <p className="text-sm text-gray-500">
              Machine Owner
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}