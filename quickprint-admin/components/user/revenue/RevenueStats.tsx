"use client";

import StatsCard from "@/components/ui/StatsCard";
import {
  IndianRupee,
  Wallet,
  Printer,
  Monitor,
} from "lucide-react";

export default function RevenueStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatsCard
        title="Total Revenue"
        value="₹48,250"
        icon={<IndianRupee size={22} />}
      />

      <StatsCard
        title="Owner Earnings"
        value="₹38,600"
        icon={<Wallet size={22} />}
      />

      <StatsCard
        title="Total Prints"
        value="5,240"
        icon={<Printer size={22} />}
      />

      <StatsCard
        title="Assigned Machines"
        value="3"
        icon={<Monitor size={22} />}
      />

    </div>
  );
}