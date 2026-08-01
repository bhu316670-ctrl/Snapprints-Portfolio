"use client";

import { useEffect, useState } from "react";

import dashboardService, {
  DashboardStats,
  RevenuePoint,
  LiveJob,
  Alert,
} from "@/services/dashboard.service";

export default function useDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);

  const [revenue, setRevenue] = useState<RevenuePoint[]>([]);

  const [jobs, setJobs] = useState<LiveJob[]>([]);

  const [alerts, setAlerts] = useState<Alert[]>([]);

  const [loading, setLoading] = useState(true);

  async function loadDashboard() {
    try {
      const [
        statsData,
        revenueData,
        jobsData,
        alertsData,
      ] = await Promise.all([
        dashboardService.getStats(),
        dashboardService.getRevenue(),
        dashboardService.getLiveJobs(),
        dashboardService.getAlerts(),
      ]);

      setStats(statsData);
      setRevenue(revenueData);
      setJobs(jobsData);
      setAlerts(alertsData);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadDashboard();
  }, []);

  return {
    loading,
    stats,
    revenue,
    jobs,
    alerts,
    reload: loadDashboard,
  };
}