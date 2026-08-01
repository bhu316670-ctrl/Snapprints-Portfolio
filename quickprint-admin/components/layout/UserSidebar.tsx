"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Printer,
  IndianRupee,
  Wallet,
  Landmark,
  FileText,
  User,
  Settings,
  LogOut,
} from "lucide-react";

const menus = [
  {
    title: "Dashboard",
    items: [
      {
        name: "Dashboard",
        href: "/user/dashboard",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    title: "Business",
    items: [
      {
        name: "My Machines",
        href: "/user/machines",
        icon: Printer,
      },
      {
        name: "Revenue",
        href: "/user/revenue",
        icon: IndianRupee,
      },
      {
        name: "Withdrawals",
        href: "/user/withdrawals",
        icon: Wallet,
      },
      {
        name: "Payout History",
        href: "/user/payouts",
        icon: Landmark,
      },
      {
        name: "Reports",
        href: "/user/reports",
        icon: FileText,
      },
    ],
  },
  {
    title: "Account",
    items: [
      {
        name: "Bank Account",
        href: "/user/bank-account",
        icon: Landmark,
      },
      {
        name: "Profile",
        href: "/user/profile",
        icon: User,
      },
      {
        name: "Settings",
        href: "/user/settings",
        icon: Settings,
      },
    ],
  },
];

export default function UserSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-white border-r min-h-screen flex flex-col">

      <div className="p-6 border-b">

        <h1 className="text-3xl font-bold text-blue-600">
          SnapPrint
        </h1>

        <p className="text-gray-500 mt-1">
          User Dashboard
        </p>

      </div>

      <nav className="flex-1 p-5 space-y-8">

        {menus.map((group) => (

          <div key={group.title}>

            <h3 className="text-xs uppercase tracking-wider text-gray-400 mb-3">
              {group.title}
            </h3>

            <div className="space-y-2">

              {group.items.map((item) => {

                const Icon = item.icon;

                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                      active
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon size={20} />

                    {item.name}
                  </Link>
                );
              })}

            </div>

          </div>

        ))}

      </nav>

      <div className="border-t p-5">

        <button className="w-full flex items-center justify-center gap-2 border rounded-lg py-3 hover:bg-red-50 text-red-600">

          <LogOut size={18} />

          Logout

        </button>

      </div>

    </aside>
  );
}