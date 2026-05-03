// "use client"

// import { useEffect, useState } from "react"
// import axios from "axios"
// import { Download } from "lucide-react"

// interface Machine {
//   machine_id: string
//   last_seen: string
//   total_jobs: number
//   revenue: number
// }

// export default function MachineTable() {

//   const [machines, setMachines] = useState<Machine[]>([])
//   const [search, setSearch] = useState("")

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/admin/machineinfo")
//       .then(res => setMachines(res.data))
//   }, [])

//   const filtered = machines.filter(m =>
//     m.machine_id.toLowerCase().includes(search.toLowerCase())
//   )

//   return (
//     <div className="border rounded-xl p-6">

//       {/* Search Bar */}

//       <input
//         type="text"
//         placeholder="Search machine..."
//         className="border p-2 rounded mb-4 w-full"
//         value={search}
//         onChange={e => setSearch(e.target.value)}
//       />

//       <table className="w-full">

//         <thead className="border-b">
//           <tr>
//             <th>Machine</th>
//             <th>Last Seen</th>
//             <th>Total Jobs</th>
//             <th>Revenue</th>
//             <th>Report</th>
//           </tr>
//         </thead>

//         <tbody>

//           {filtered.map(machine => (

//             <tr key={machine.machine_id} className="border-b">

//               <td>{machine.machine_id}</td>

//               <td>{machine.last_seen}</td>

//               <td>{machine.total_jobs}</td>

//               <td>₹{machine.revenue}</td>

//               <td>

//                 <Download
//                   className="cursor-pointer"
//                   onClick={() => downloadReport(machine.machine_id)}
//                 />

//               </td>

//             </tr>

//           ))}

//         </tbody>

//       </table>

//     </div>
//   )
// }

// function downloadReport(machineId: string) {

//   const period = prompt("Enter report period: 1 / 3 / 6 / 12")

//   window.open(
//     `http://localhost:5000/api/admin/machine-report/${machineId}?period=${period}`
//   )
// }



"use client"

import { useEffect, useState } from "react"
import API_BASE from "@/lib/api";
import axios from "axios"
import { Download, Plus } from "lucide-react"
import MachineRegistration from "./MachineRegistration"

interface Machine {
  machine_id: string
  name: string
  status: string
  is_print_locked: boolean
  last_seen: string
  total_jobs: number
  revenue: number
  is_online: boolean
}

export default function MachineTable() {

  const [machines, setMachines] = useState<Machine[]>([])
  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    fetchMachines()
  }, [])

  const fetchMachines = async () => {
    const res = await axios.get(`${API_BASE}/api/admin/machineinfo`)
    setMachines(res.data)
  }

  const filtered = machines.filter(m =>
    m.machine_id.toLowerCase().includes(search.toLowerCase())
  )

  const toggleSelect = (id: string) => {
    setSelected(prev =>
      prev.includes(id)
        ? prev.filter(i => i !== id)
        : [...prev, id]
    )
  }

  function downloadReport(machineId: string) {
  const period = prompt("Enter report period: 1 / 3 / 6 / 12")

  window.open(
    `${API_BASE}/api/admin/machine-report/${machineId}?period=${period}`
  )
}

function downloadBulkReport(machineIds: string[]) {
  if (machineIds.length === 0) {
    alert("Select machines first")
    return
  }

  const period = prompt("Enter report period: 1 / 3 / 6 / 12")

  machineIds.forEach(id => {
    window.open(
      `${API_BASE}/api/admin/machine-report/${id}?period=${period}`
    )
  })
}

  return (
    
    <div className="p-6">
        <MachineRegistration 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        refreshMachines={fetchMachines}
      />

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">

        {/* LEFT: Search */}
        <input
          type="text"
          placeholder="Search machines..."
          className="border p-2 rounded w-1/3"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        {/* RIGHT: Buttons */}
        <div className="flex gap-3">

          <button
            className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2"
            onClick={() => setIsOpen(true)}
          >
            <Plus size={16} />
            Add Machine
          </button>
         

          <button
            className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2"
            onClick={() => downloadBulkReport(selected)}
          >
            <Download size={16} />
            Download Report
          </button>

        </div>
      </div>

      {/* TABLE */}
      <div className="border rounded-xl overflow-hidden">

        <table className="w-full text-left">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-3"></th>
              <th className="p-3">Machine</th>
              <th className="p-3">Status</th>
              <th className="p-3">Online</th>
              <th className="p-3">Last Seen</th>
              <th className="p-3">Jobs</th>
              <th className="p-3">Revenue</th>
              <th className="p-3">Report</th>
            </tr>
          </thead>

          <tbody>

            {filtered.map(machine => (

              <tr key={machine.machine_id} className="border-t hover:bg-gray-50">

                {/* Checkbox */}
                <td className="p-3">
                  <input
                    type="checkbox"
                    checked={selected.includes(machine.machine_id)}
                    onChange={() => toggleSelect(machine.machine_id)}
                  />
                </td>

                {/* Machine */}
                <td className="p-3 font-medium">
                  {machine.machine_id}
                </td>

                {/* Status */}
                <td className="p-3">
                  {machine.is_print_locked ? (
                    <span className="text-red-600">Locked</span>
                  ) : (
                    <span className="text-green-600">Active</span>
                  )}
                </td>

                {/* Online */}
                <td className="p-3">
                  {machine.is_online ? (
                    <span className="text-green-600">Online</span>
                  ) : (
                    <span className="text-gray-400">Offline</span>
                  )}
                </td>

                {/* Last Seen */}
                <td className="p-3">
                  {machine.last_seen
                    ? new Date(machine.last_seen).toLocaleString()
                    : "—"}
                </td>

                {/* Jobs */}
                <td className="p-3">
                  {machine.total_jobs}
                </td>

                {/* Revenue */}
                <td className="p-3">
                  ₹{machine.revenue || 0}
                </td>

                {/* Report
                <td className="p-3">
                  <Download
                    className="cursor-pointer"
                    onClick={() => downloadReport(machine.machine_id)}
                  />
                </td> */}

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
    
  )
  
}

