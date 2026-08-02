"use client";

import { RevenuePeriod } from "@/components/admin/revenue/RevenueFilters";

interface RevenueChartProps {
  period: RevenuePeriod;
}

export default function RevenueChart({
  period,
}: RevenueChartProps) {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-6">

      <div className="flex items-center justify-between mb-6">

        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Revenue Overview
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Selected Period:
            <span className="ml-2 font-medium capitalize text-blue-600">
              {period.replace("_", " ")}
            </span>
          </p>
        </div>

      </div>

      {/* Placeholder Chart */}

      <div className="h-80 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center">

        <div className="text-center">

          <h3 className="text-lg font-semibold text-gray-700">
            Revenue Chart
          </h3>

          <p className="text-gray-500 mt-2">
            Chart for <b>{period.replace("_", " ")}</b> will be displayed here.
          </p>

        </div>

      </div>

    </div>
  );
}