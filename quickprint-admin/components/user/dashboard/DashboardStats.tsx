"use client";

import {
  IndianRupee,
  Wallet,
  Printer,
  FileText,
} from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "₹18,450",
    icon: IndianRupee,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    title: "Withdrawable",
    value: "₹7,250",
    icon: Wallet,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    title: "My Machines",
    value: "3",
    icon: Printer,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    title: "Today's Prints",
    value: "245",
    icon: FileText,
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((item) => {

        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="bg-white rounded-xl border shadow-sm p-6"
          >
            <div className="flex justify-between items-center">

              <div>

                <p className="text-gray-500 text-sm">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  {item.value}
                </h2>

              </div>

              <div
                className={`${item.bg} ${item.color} p-4 rounded-xl`}
              >
                <Icon size={28} />
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
}