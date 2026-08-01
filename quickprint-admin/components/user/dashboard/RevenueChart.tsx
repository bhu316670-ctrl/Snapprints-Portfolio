"use client";

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-6">

      <div className="flex justify-between items-center mb-6">

        <div>

          <h2 className="text-xl font-semibold">
            Revenue Overview
          </h2>

          <p className="text-gray-500 text-sm">
            Monthly revenue trend
          </p>

        </div>

      </div>

      <div className="h-80 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">

        Revenue Chart
        <br />
        (Recharts will be added later)

      </div>

    </div>
  );
}