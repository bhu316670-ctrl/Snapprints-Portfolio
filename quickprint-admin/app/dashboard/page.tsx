
"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import MachineStatus from "@/components/dashboard/MachineStatus"
import AlertsPanel from "@/components/dashboard/AlertPanel"
import LiveJobs from "@/components/dashboard/LiveJobs"
import RevenueChart from "@/components/dashboard/RevenueChart"
import API_BASE from "@/lib/api";

export default function Dashboard() {

  const [stats, setStats] = useState({
    machinesTotal: 0,
    machinesOnline: 0,
    jobsToday: 0,
    revenueToday: 0
  })
  // const API_BASE = process.env.NEXT_PUBLIC_API_BASE;
  useEffect(() => {
    axios.get(`${API_BASE}/api/admin/stats`)
      .then(res => setStats(res.data))
      .catch(err => console.error(err))
  }, [])

 



//   return (
//     <div className="grid grid-cols-4 gap-6">

//       <div className="p-6 border rounded-xl">
//         <p>Machines</p>
//         <h2 className="text-2xl font-bold">{stats.machinesTotal}</h2>
//       </div>

//       <div className="p-6 border rounded-xl">
//         <p>Online</p>
//         <h2 className="text-2xl font-bold text-green-600">
//           {stats.machinesOnline}
//         </h2>
//       </div>

//       <div className="p-6 border rounded-xl">
//         <p>Prints Today</p>
//         <h2 className="text-2xl font-bold">{stats.jobsToday}</h2>
//       </div>

//       <div className="p-6 border rounded-xl">
//         <p>Revenue</p>
//         <h2 className="text-2xl font-bold">₹{stats.revenueToday}</h2>
//       </div>

//     <div className="grid grid-cols-2 gap-6">
//         <MachineStatus />
//         <AlertsPanel />
//       </div>
//     </div>
    
    
//   )
return (
    <div className="space-y-6">
      {/* Top Stats */}
      <div className="grid grid-cols-4 gap-6">
        <div className="p-6 border rounded-xl">
          <p>Machines</p>
          <h2 className="text-2xl font-bold">{stats.machinesTotal}</h2>
        </div>

        <div className="p-6 border rounded-xl">
          <p>Online</p>
          <h2 className="text-2xl font-bold text-green-600">
            {stats.machinesOnline}
          </h2>
        </div>

        <div className="p-6 border rounded-xl">
          <p>Prints Today</p>
          <h2 className="text-2xl font-bold">{stats.jobsToday}</h2>
        </div>

        <div className="p-6 border rounded-xl">
          <p>Revenue</p>
          <h2 className="text-2xl font-bold">₹{stats.revenueToday}</h2>
        </div>
      </div>

      {/* Bottom Panels */}
      <div className="grid grid-cols-2 gap-6">
        <MachineStatus />
        <AlertsPanel />
      </div>
      
        <LiveJobs/>
      
      
        <RevenueChart/>
     
    </div>
  );
}


