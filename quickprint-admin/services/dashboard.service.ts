import api from "@/lib/axios";
import { RevenuePeriod } from "@/components/admin/revenue/RevenueFilters";

export interface DashboardStats {
  jobsToday: number;
  revenueToday: number;
  machinesOnline: number;
  machinesTotal: number;
}

export interface RevenuePoint {
  day: string;
  revenue: number;
}

export interface LiveJob {
  job_id: string;
  machine_id: string;
  status: string;
  created_at: string;
}

export interface Alert {
  id: number;
  machine_id: string;
  alert_type: string;
  severity: string;
  message: string;
  created_at: string;
}

class DashboardService {
  async getStats(): Promise<DashboardStats> {
    const { data } = await api.get("/admin/stats");
    return data;
  }

  async getRevenue(
    period: RevenuePeriod = "week"
  ): Promise<RevenuePoint[]> {
    const { data } = await api.get(
      "/admin/revenue",
      {
        params: { period },
      }
    );

    return data;
  }

  async getLiveJobs(): Promise<LiveJob[]> {
    const { data } = await api.get(
      "/admin/live-jobs"
    );

    return data;
  }

  async getAlerts(): Promise<Alert[]> {
    const { data } = await api.get(
      "/admin/alerts"
    );

    return data;
  }
}

export default new DashboardService();