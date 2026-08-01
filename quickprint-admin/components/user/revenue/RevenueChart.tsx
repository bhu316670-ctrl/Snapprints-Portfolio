"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", revenue: 3200 },
  { month: "Feb", revenue: 4100 },
  { month: "Mar", revenue: 5200 },
  { month: "Apr", revenue: 4800 },
  { month: "May", revenue: 6500 },
  { month: "Jun", revenue: 7200 },
  { month: "Jul", revenue: 8100 },
];

export default function RevenueChart() {
  return (
    <div className="bg-white border rounded-xl shadow-sm p-6">

      <div className="mb-6">

        <h2 className="text-xl font-semibold">
          Revenue Trend
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Monthly revenue generated from your assigned machines.
        </p>

      </div>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}