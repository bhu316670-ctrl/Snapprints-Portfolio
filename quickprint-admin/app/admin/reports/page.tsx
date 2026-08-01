import PageHeader from "@/components/ui/PageHeader";
import ReportTable from "@/components/admin/reports/ReportTable";

export default function ReportsPage() {
  return (
    <div className="space-y-6">

      <PageHeader
        title="Reports"
        description="View and download machine revenue reports."
      />

      <ReportTable />

    </div>
  );
}