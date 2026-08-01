import RevenueFilters from "@/components/admin/revenue/RevenueFilters";
import RevenueStats from "@/components/admin/revenue/RevenueStats";
import RevenueTable from "@/components/admin/revenue/RevenueTable";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";

export default function RevenuePage() {
  return (
    <div className="space-y-6">

      <PageHeader
    title="Revenue"
    description="Monitor platform earnings and settlements."
    action={
        <button
            className="bg-green-600 text-white px-5 py-2 rounded-lg"
        >
            Download Report
        </button>
    }
/>

      <RevenueFilters />

      <RevenueStats />

      <RevenueTable />

    </div>
  );
}