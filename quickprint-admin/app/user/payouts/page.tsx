import PageHeader from "@/components/ui/PageHeader";

import PayoutStats from "@/components/user/payouts/PayoutStats";
import PayoutTable from "@/components/user/payouts/PayoutTable";

export default function UserPayoutsPage() {
  return (
    <div className="space-y-8">

      <PageHeader
        title="Payout History"
        description="Track approved and completed payout transactions."
      />

      <PayoutStats />

      <PayoutTable />

    </div>
  );
}