"use client";

import StatsCard from "@/components/ui/StatsCard";
import {
  Monitor,
  Wifi,
  IndianRupee,
  Printer,
} from "lucide-react";

export default function MachineStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatsCard
        title="Assigned Machines"
        value="3"
        icon={<Monitor size={22} />}
      />

      <StatsCard
        title="Online"
        value="2"
        icon={<Wifi size={22} />}
      />

      <StatsCard
        title="Today's Revenue"
        value="₹2,840"
        icon={<IndianRupee size={22} />}
      />

      <StatsCard
        title="Today's Prints"
        value="184"
        icon={<Printer size={22} />}
      />

    </div>
  );
}