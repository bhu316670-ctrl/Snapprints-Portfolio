import PayoutStats from "@/components/admin/payouts/payoutsStats";
import PayoutTable from "@/components/admin/payouts/payoutsTable";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";

export default function PayoutPage() {
  return (
    <div className="space-y-6">

      <PageHeader
    title="Payouts"
    description="Manage owner payouts and settlement history."
/>

      <PayoutStats />

      <PayoutTable />

    </div>
  );
}