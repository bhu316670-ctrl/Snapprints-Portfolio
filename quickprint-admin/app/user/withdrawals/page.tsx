import PageHeader from "@/components/ui/PageHeader";

import WithdrawalStats from "@/components/user/withdrawals/WithdrawalStats";
import RequestWithdrawal from "@/components/user/withdrawals/RequestWithdrawal";
import WithdrawalTable from "@/components/user/withdrawals/WithdrawalTable";

export default function WithdrawalsPage() {
  return (
    <div className="space-y-8">

      <PageHeader
        title="Withdrawals"
        description="Manage your withdrawal requests, available balance, and payment history."
      />

      <WithdrawalStats />

      <RequestWithdrawal />

      <WithdrawalTable />

    </div>
  );
}