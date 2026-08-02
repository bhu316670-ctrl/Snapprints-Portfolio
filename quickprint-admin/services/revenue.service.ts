import api from "@/lib/axios";
import { RevenuePeriod } from "@/components/admin/revenue/RevenueFilters";

export interface Revenue {
  day: string;
  revenue: number;
}

class RevenueService {
  async getRevenue(
    period: RevenuePeriod = "week"
  ): Promise<Revenue[]> {
    const { data } = await api.get<Revenue[]>(
      "/admin/revenue",
      {
        params: {
          period,
        },
      }
    );

    return data;
  }
}

export default new RevenueService();