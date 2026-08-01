"use client";

import StatsCard from "@/components/ui/StatsCard";
import {
  IndianRupee,
  BadgeCheck,
  Clock3,
  Wallet,
} from "lucide-react";

export default function PayoutStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatsCard
        title="Total Paid"
        value="₹31,500"
        icon={<IndianRupee size={22} />}
      />

      <StatsCard
        title="Completed Payouts"
        value="12"
        icon={<BadgeCheck size={22} />}
      />

      <StatsCard
        title="Pending Approval"
        value="2"
        icon={<Clock3 size={22} />}
      />

      <StatsCard
        title="Available Balance"
        value="₹9,840"
        icon={<Wallet size={22} />}
      />

    </div>
  );
}