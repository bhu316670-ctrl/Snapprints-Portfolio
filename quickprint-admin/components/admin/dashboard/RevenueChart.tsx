"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import useRevenue from "@/hooks/useRevenue";

interface RevenueChartProps {
  // period: "today" | "week" | "month" | "year";
}
import { RevenuePeriod } from "@/components/admin/revenue/RevenueFilters";

interface RevenueChartProps {
  period: RevenuePeriod;
}
export default function RevenueChart({
  period,
}: RevenueChartProps) {
  const { data, loading } = useRevenue(period);

  if (loading) {
    return (
      <div className="bg-white rounded-xl border p-6 h-[380px] flex items-center justify-center">
        <p className="text-gray-500">Loading revenue...</p>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="bg-white rounded-xl border p-6 h-[380px] flex items-center justify-center">
        <p className="text-gray-500">
          No revenue available.
        </p>
      </div>
    );
  }

  const chartData = data.map((item) => ({
    day: new Date(item.day).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
    }),
    revenue: Number(item.revenue),
  }));

  return (
    <div className="bg-white rounded-xl border shadow-sm p-6">

      <div className="mb-6">

        <h2 className="text-lg font-semibold">
          Revenue Overview
        </h2>

        <p className="text-sm text-gray-500">
          Revenue for the selected period
        </p>

      </div>

      <ResponsiveContainer
        width="100%"
        height={320}
      >
        <LineChart data={chartData}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="day"
            tick={{ fontSize: 12 }}
          />

          <YAxis
            tickFormatter={(value) =>
              `₹${value.toLocaleString()}`
            }
          />

          <Tooltip
  formatter={(value) => [
    `₹${Number(value).toLocaleString("en-IN")}`,
    "Revenue",
  ]}
/>

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#2563eb"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 7 }}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}