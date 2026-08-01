"use client";

import StatsCard from "@/components/ui/StatsCard";
import { FileText, Download, Calendar, DollarSign } from "lucide-react";

export default function ReportStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      <StatsCard
        title="Total Reports"
        value="42"
        icon={<FileText size={22} />}
      />

      <StatsCard
        title="Downloaded"
        value="28"
        icon={<Download size={22} />}
      />

      <StatsCard
        title="This Month"
        value="8"
        icon={<Calendar size={22} />}
      />

      <StatsCard
        title="Total Revenue"
        value="₹1,24,500"
        icon={<DollarSign size={22} />}
      />

    </div>
  );
}