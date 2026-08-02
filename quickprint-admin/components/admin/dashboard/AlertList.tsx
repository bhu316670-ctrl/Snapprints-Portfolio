"use client";
import type { Alert } from "@/services/dashboard.service";




interface Props {
  alerts: Alert[];
}

export default function AlertList({
  alerts,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">

      <h2 className="text-xl font-semibold mb-5">
        Active Alerts
      </h2>

      <div className="space-y-4">

        {alerts.length === 0 && (
          <p className="text-gray-500">
            No active alerts
          </p>
        )}

        {alerts.map((alert) => (

          <div
            key={alert.id}
            className="border rounded-lg p-4"
          >

            <div className="flex justify-between">

              <h3 className="font-semibold">
                {alert.machine_id}
              </h3>

              <span className="text-red-600 font-medium">
                {alert.severity}
              </span>

            </div>

            <p className="text-sm text-gray-600 mt-2">
              {alert.alert_type}
            </p>

            <p className="text-sm mt-1">
              {alert.message}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}