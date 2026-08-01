"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  Bell,
  Search,
  LogOut,
  UserCircle2,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";


export default function AdminHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuth();


  const titles: Record<string, string> = {
    "/admin/dashboard": "Dashboard",
    "/admin/machines": "Machines",
    "/admin/users": "Users",
    "/admin/revenue": "Revenue",
    "/admin/withdrawals": "Withdraw Requests",
    "/admin/payouts": "Payouts",
    "/admin/reports": "Reports",
    "/admin/bank-accounts": "Bank Accounts",
    "/admin/settings": "Settings",
  };

  let pageTitle = "Admin";

  Object.keys(titles).forEach((route) => {
    if (pathname.startsWith(route)) {
      pageTitle = titles[route];
    }
  });

 async function handleLogout() {
  await logout();
  router.push("/admin-login"); // or "/user-login" in the user header
}

  return (
    <header className="sticky top-0 z-50 h-16 bg-white border-b flex items-center justify-between px-6">

      {/* Left */}

      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          {pageTitle}
        </h1>
      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        {/* Search */}

        <div className="relative hidden md:block">

          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-72 border rounded-lg py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* Notification */}

        <button className="relative p-2 rounded-lg hover:bg-gray-100">

          <Bell size={22} />

          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>

        </button>

        {/* Admin */}

        <div className="flex items-center gap-2">

          <UserCircle2
            size={34}
            className="text-slate-700"
          />

          <div className="hidden md:block">

            <p className="font-semibold">
              Admin
            </p>

            <p className="text-xs text-gray-500">
              Administrator
            </p>

          </div>

        </div>

        {/* Logout */}

        <button
          onClick={logout}
          className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
        >
          <LogOut size={18} />

          Logout
        </button>

      </div>

    </header>
  );
}