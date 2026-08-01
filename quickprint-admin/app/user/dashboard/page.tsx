import DashboardStats from "@/components/user/dashboard/DashboardStats";
import MachineOverview from "@/components/user/dashboard/MachineOverview";
import RecentTransactions from "@/components/user/dashboard/RecentTransactions";
import RevenueChart from "@/components/user/dashboard/RevenueChart";
import PageHeader from "@/components/ui/PageHeader";

export default function UserDashboard() {
  return (
    <div className="space-y-8">

      <PageHeader
        title="Dashboard"
        description="Welcome back! Here's an overview of your printing business."
      />

      <DashboardStats />

      <RevenueChart />

      <div className="grid lg:grid-cols-2 gap-8">

        <MachineOverview />

        <RecentTransactions />

      </div>

    </div>
  );
}