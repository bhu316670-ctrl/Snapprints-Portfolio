"use client";

import {
  Printer,
  DollarSign,
  Activity,
  Cpu,
} from "lucide-react";

import type { DashboardStats as DashboardStatsType } from "@/services/dashboard.service";

interface Props {
  stats: DashboardStatsType | null;
}

export default function DashboardStats({
  stats,
}: Props) {
  if (!stats) return null;

  const cards = [
    {
      title: "Jobs Today",
      value: stats.jobsToday,
      icon: Printer,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Revenue Today",
      value: `₹${stats.revenueToday.toLocaleString()}`,
      icon: DollarSign,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Machines Online",
      value: stats.machinesOnline,
      icon: Activity,
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "Total Machines",
      value: stats.machinesTotal,
      icon: Cpu,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-xl shadow-sm border p-6 flex justify-between items-center"
        >
          <div>
            <p className="text-gray-500 text-sm">
              {card.title}
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {card.value}
            </h2>
          </div>

          <div
            className={`w-14 h-14 rounded-xl flex items-center justify-center ${card.color}`}
          >
            <card.icon size={28} />
          </div>
        </div>
      ))}
    </div>
  );
}