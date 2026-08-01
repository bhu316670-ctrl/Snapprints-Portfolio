import api from "@/lib/axios";

export interface Revenue {
  day: string;
  revenue: number;
}

class RevenueService {

  async getRevenue(
    period: "today" | "week" | "month" | "year"
  ) {

    const { data } = await api.get(
      `/admin/revenue?period=${period}`
    );

    return data;
  }

}

export default new RevenueService();