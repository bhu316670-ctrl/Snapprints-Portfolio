"use client";

import { revenues } from "@/lib/dummyRevenue";
import { IndianRupee, Printer, Monitor, TrendingUp } from "lucide-react";

export default function RevenueStats() {
const totalGrossRevenue = revenues.reduce(
  (sum, item) => sum + item.grossRevenue,
  0
);

const totalPlatformFee = revenues.reduce(
  (sum, item) => sum + item.platformFee,
  0
);

const totalOwnerEarnings = revenues.reduce(
  (sum, item) => sum + item.ownerEarnings,
  0
);

  const totalPrints = revenues.reduce(
    (sum, item) => sum + item.prints,
    0
  );

  const totalMachines = new Set(
    revenues.map((item) => item.machineId)
  ).size;

  const averageRevenue =
    totalMachines === 0
      ? 0
      : Math.round(totalGrossRevenue / totalMachines);

  const cards = [
    {
      title: "Total Revenue",
      value: `₹${totalGrossRevenue.toLocaleString()}`,
      icon: IndianRupee,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      title: "Total Prints",
      value: totalPrints.toLocaleString(),
      icon: Printer,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Active Machines",
      value: totalMachines,
      icon: Monitor,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      title: "Average Revenue",
      value: `₹${averageRevenue.toLocaleString()}`,
      icon: TrendingUp,
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="border rounded-xl bg-white shadow-sm p-6"
          >
            <div className="flex justify-between items-center">

              <div>

                <p className="text-sm text-gray-500">
                  {card.title}
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  {card.value}
                </h2>

              </div>

              <div
                className={`${card.bg} p-4 rounded-full`}
              >
                <Icon
                  className={`${card.color}`}
                  size={28}
                />
              </div>

            </div>
          </div>
        );
      })}

    </div>
  );
}