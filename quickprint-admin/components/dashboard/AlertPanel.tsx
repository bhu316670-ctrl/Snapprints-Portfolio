//import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import API_BASE from "@/lib/api";
interface Alert {
  id: number
  message: string
}
export default function AlertsPanel() {

  const [alerts, setAlerts] = useState<Alert[]>([])

  useEffect(() => {
    axios.get(`${API_BASE}/api/admin/alerts`)
      .then(res => setAlerts(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="border rounded-xl p-6">
      <h2 className="font-semibold mb-4">Alerts</h2>

      <div className="space-y-2 text-red-600">
        {alerts.length === 0 && (
          <p className="text-gray-500">No alerts</p>
        )}

        {alerts.map(a => (
          <p key={a.id}>
            {a.message}
          </p>
        ))}
      </div>
    </div>
  )
}