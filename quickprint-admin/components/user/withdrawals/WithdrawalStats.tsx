"use client";

import {
  Wallet,
  HandCoins,
  BadgeIndianRupee,
  Clock3,
} from "lucide-react";

import StatsCard from "@/components/ui/StatsCard";

export default function WithdrawalStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatsCard
        title="Available Balance"
        value="₹9,840"
        icon={<Wallet size={22} />}
      />

      <StatsCard
        title="Requested"
        value="₹7,250"
        icon={<HandCoins size={22} />}
      />

      <StatsCard
        title="Total Paid"
        value="₹31,500"
        icon={<BadgeIndianRupee size={22} />}
      />

      <StatsCard
        title="Pending Requests"
        value="2"
        icon={<Clock3 size={22} />}
      />

    </div>
  );
}