"use client";

import { useState } from "react";

import useDashboard from "@/hooks/useDashboard";

import DashboardStats from "@/components/admin/dashboard/DashboardStats";
import RevenueChart from "@/components/admin/dashboard/RevenueChart";
import RevenueFilters, {
  RevenuePeriod,
} from "@/components/admin/revenue/RevenueFilters";
import RecentJobs from "@/components/admin/dashboard/RecentJobs";
import AlertList from "@/components/admin/dashboard/AlertList";

export default function DashboardPage() {
  const { loading, stats, jobs, alerts } = useDashboard();

  const [period, setPeriod] =
    useState<RevenuePeriod>("week");

  if (loading) {
    return (
      <div className="p-6">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <DashboardStats stats={stats} />

      <RevenueFilters
        value={period}
        onChange={setPeriod}
      />

      

      <RecentJobs jobs={jobs} />

      <AlertList alerts={alerts} />
    </div>
  );
}