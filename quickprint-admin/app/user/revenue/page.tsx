import PageHeader from "@/components/ui/PageHeader";

import RevenueStats from "@/components/user/revenue/RevenueStats";
import RevenueFilters from "@/components/user/revenue/RevenueFilters";
import RevenueChart from "@/components/user/revenue/RevenueChart";
import RevenueTable from "@/components/user/revenue/RevenueTable";

export default function RevenuePage() {
  return (
    <div className="space-y-8">

      <PageHeader
        title="Revenue"
        description="Track revenue, earnings and printing performance across your machines."
      />

      <RevenueStats />

      <RevenueFilters />

      <RevenueChart />

      <RevenueTable />

    </div>
  );
}