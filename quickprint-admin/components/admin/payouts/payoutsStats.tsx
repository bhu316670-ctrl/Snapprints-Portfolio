"use client";

import { payouts } from "@/lib/dummyPayouts";
import {
  Wallet,
  Clock3,
  CheckCircle2,
  IndianRupee,
} from "lucide-react";

export default function PayoutStats() {
  const pendingAmount = payouts
    .filter((p) => p.status === "Pending")
    .reduce((sum, p) => sum + p.amount, 0);

  const pendingRequests = payouts.filter(
    (p) => p.status === "Pending"
  ).length;

  const paidAmount = payouts
    .filter((p) => p.status === "Paid")
    .reduce((sum, p) => sum + p.amount, 0);

  const approved = payouts.filter(
    (p) => p.status === "Approved"
  ).length;

  const cards = [
    {
      title: "Pending Amount",
      value: `₹${pendingAmount.toLocaleString()}`,
      icon: IndianRupee,
    },
    {
      title: "Pending Requests",
      value: pendingRequests,
      icon: Clock3,
    },
    {
      title: "Approved",
      value: approved,
      icon: Wallet,
    },
    {
      title: "Paid",
      value: `₹${paidAmount.toLocaleString()}`,
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="bg-white border rounded-xl p-6"
          >
            <div className="flex justify-between">
              <div>
                <p className="text-gray-500 text-sm">
                  {card.title}
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  {card.value}
                </h2>
              </div>

              <Icon className="text-blue-600" size={30} />
            </div>
          </div>
        );
      })}
    </div>
  );
}