//import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import API_BASE from "@/lib/api";

interface Job {
  job_id: string
  machine_id: string
  total_pages: number
  status: string
}
export default function LiveJobs() {

  const [jobs, setJobs] = useState<Job[]>([])

  useEffect(() => {
    axios.get(`${API_BASE}/api/admin/live-jobs`)
      .then(res => setJobs(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="border rounded-xl p-6">

      <h2 className="font-semibold mb-4">Live Print Jobs</h2>

      <table className="w-full text-left">

        <thead className="border-b">
          <tr>
            <th>Job</th>
            <th>Machine</th>
            <th>Pages</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {jobs.map(j => (
            <tr key={j.job_id} className="border-b">

              <td>{j.job_id}</td>
              <td>{j.machine_id}</td>
              <td>{j.total_pages}</td>
              <td>{j.status}</td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  )
}