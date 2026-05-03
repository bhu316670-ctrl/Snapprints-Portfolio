

//import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
//import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import API_BASE from "@/lib/api";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"

export default function RevenueChart() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`${API_BASE}/api/admin/revenue`)
      .then(res => setData(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="border rounded-xl p-6">

      <h2 className="font-semibold mb-4">Revenue (Last 7 Days)</h2>

      <LineChart width={700} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="revenue" />
      </LineChart>

    </div>
  )
}