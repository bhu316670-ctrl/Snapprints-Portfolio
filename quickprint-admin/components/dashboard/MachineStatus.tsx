"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import API_BASE from "@/lib/api";
interface Machine {
  machine_id: string
  is_online: boolean
  paper_level: number | null
}
export default function MachineStatus() {

  const [machines, setMachines] = useState<Machine[]>([])

  useEffect(() => {
    axios.get(`${API_BASE}/api/admin/machines`)
      .then(res => setMachines(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="border rounded-xl p-6">
      <h2 className="font-semibold mb-4">Machine Status</h2>

      <div className="space-y-3">
        {machines.map(m => (
          <div key={m.machine_id} className="flex justify-between border-b pb-2">

            <span>{m.machine_id}</span>

            <span className={m.is_online ? "text-green-600" : "text-red-500"}>
              {m.is_online ? "Online" : "Offline"}
            </span>

            <span>{m.paper_level ?? "-"}% Paper</span>

          </div>
        ))}
      </div>
    </div>
  )
}