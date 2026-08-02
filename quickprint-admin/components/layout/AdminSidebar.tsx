"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Cpu,
  Users,
  IndianRupee,
  Wallet,
  CreditCard,
  Landmark,
  FileText,
  Settings,
} from "lucide-react";

const menu = [
  {
    title: "",
    items: [
      {
        name: "Dashboard",
        href: "/admin/dashboard",
        icon: LayoutDashboard,
      },
    ],
  },

  {
    title: "Management",
    items: [
      {
        name: "Machines",
        href: "/admin/machines",
        icon: Cpu,
      },
      {
        name: "Users",
        href: "/admin/users",
        icon: Users,
      },
    ],
  },

  {
    title: "Finance",
    items: [
      {
        name: "Revenue",
        href: "/admin/revenue",
        icon: IndianRupee,
      },
      {
        name: "Withdraw Requests",
        href: "/admin/withdrawals",
        icon: Wallet,
      },
      {
        name: "Payouts",
        href: "/admin/payouts",
        icon: CreditCard,
      },
      {
        name: "Bank Accounts",
        href: "/admin/bank-accounts",
        icon: Landmark,
      },
    ],
  },

  {
    title: "Analytics",
    items: [
      {
        name: "Reports",
        href: "/admin/reports",
        icon: FileText,
      },
    ],
  },

  {
    title: "System",
    items: [
      {
        name: "Settings",
        href: "/admin/settings",
        icon: Settings,
      },
    ],
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex min-h-screen w-64 flex-col bg-slate-900 text-white">

      {/* Logo */}

      <div className="border-b border-slate-800 p-6">

        <h1 className="text-2xl font-bold tracking-wide">
          SnapPrint
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Administration
        </p>

      </div>

      {/* Navigation */}

      <div className="flex-1 overflow-y-auto py-4">

        {menu.map((section) => (

          <div
            key={section.title}
            className="mb-6"
          >

            {section.title && (
              <p className="mb-3 px-6 text-xs uppercase tracking-widest text-slate-500">
                {section.title}
              </p>
            )}

            <div className="space-y-1 px-3">

              {section.items.map((item) => {

                const Icon = item.icon;

                const active =
                  pathname === item.href ||
                  pathname.startsWith(item.href + "/");

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200 ${
                      active
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <Icon size={20} />

                    <span>{item.name}</span>
                  </Link>
                );
              })}

            </div>

          </div>

        ))}

      </div>

      {/* Footer */}

      <div className="border-t border-slate-800 p-5">

        <p className="text-sm font-medium">
          SnapPrint Dashboard
        </p>

        <p className="mt-1 text-xs text-slate-500">
          Version 1.0.0
        </p>

      </div>

    </aside>
  );
}