import PageHeader from "@/components/ui/PageHeader";

import ReportStats from "@/components/user/reports/ReportStats";
import ReportTable from "@/components/user/reports/ReportTable";

export default function UserReportsPage() {
  return (
    <div className="space-y-8">

      <PageHeader
        title="Reports"
        description="View, search, and download your revenue, withdrawal, and payout reports."
      />

      <ReportStats />

      <ReportTable />

    </div>
  );
}