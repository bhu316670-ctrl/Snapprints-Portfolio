// "use client"

// import { useState } from "react"
// import axios from "axios"

// export default function MachineRegistration() {

//   const [name, setName] = useState("")
//   const [location, setLocation] = useState("")
//   const [credentials, setCredentials] = useState<any>(null)

//   const createMachine = async () => {

//     const res = await axios.post(
//       "http://localhost:5000/api/admin/createmachine",
//       { name, location }
//     )

//     setCredentials(res.data.credentials)
//   }

//   return (

//     <div className="p-6 space-y-6">

//       <h1 className="text-2xl font-semibold">
//         Add Machine
//       </h1>

//       <div className="space-y-4">

//         <input
//           placeholder="Machine Name"
//           className="border p-2 w-full"
//           onChange={(e) => setName(e.target.value)}
//         />

//         <input
//           placeholder="Location"
//           className="border p-2 w-full"
//           onChange={(e) => setLocation(e.target.value)}
//         />

//         <button
//           onClick={createMachine}
//           className="bg-black text-white px-4 py-2 rounded"
//         >
//           Create Machine
//         </button>

//       </div>

//       {/* 🔐 SHOW ONLY ONCE */}
//       {credentials && (

//         <div className="border p-4 rounded bg-gray-100">

//           <h2 className="font-bold mb-2">
//             ⚠️ Save Credentials (shown only once)
//           </h2>

//           <p><b>MACHINE_ID:</b> {credentials.MACHINE_ID}</p>
//           <p><b>API_KEY:</b> {credentials.API_KEY}</p>

//           <button
//             className="mt-3 bg-green-600 text-white px-3 py-1 rounded"
//             onClick={() =>
//               navigator.clipboard.writeText(JSON.stringify(credentials))
//             }
//           >
//             Copy
//           </button>

//         </div>

//       )}

//     </div>
//   )
// }
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


// "use client"

// import { useState } from "react"
// import axios from "axios"

// export default function MachineRegistration({ isOpen, setIsOpen }: any) {

//   const [name, setName] = useState("")
//   const [location, setLocation] = useState("")
//   const [credentials, setCredentials] = useState<any>(null)
//   const [loading, setLoading] = useState(false)

//   const createMachine = async () => {

//     if (!name || !location) {
//       alert("Please fill all fields")
//       return
//     }

//     const confirmCreate = confirm(
//       "Are you sure you want to create this machine?"
//     )

//     if (!confirmCreate) return

//     try {
//       setLoading(true)

//       const res = await axios.post(
//         "http://localhost:5000/api/admin/createmachine",
//         { name, location }
//       )

//       setCredentials(res.data.credentials)

//       setName("")
//       setLocation("")

//     } catch (err: any) {
//       alert(err.response?.data?.error || "Failed to create machine")
//     } finally {
//       setLoading(false)
//     }
//   }

//   if (!isOpen) return null

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

//       <div className="bg-white p-6 rounded-xl w-[400px] space-y-4">

//         <h2 className="text-xl font-semibold">
//           Add Machine
//         </h2>

//         <input
//           placeholder="Machine Name"
//           className="border p-2 w-full"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <input
//           placeholder="Location"
//           className="border p-2 w-full"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//         />

//         <div className="flex justify-end gap-3">

//           <button
//             onClick={() => setIsOpen(false)}
//             className="border px-4 py-2 rounded"
//           >
//             Cancel
//           </button>

//           <button
//             onClick={createMachine}
//             disabled={loading}
//             className="bg-black text-white px-4 py-2 rounded"
//           >
//             {loading ? "Creating..." : "Create"}
//           </button>

//         </div>

//         {credentials && (
//           <div className="border p-4 rounded bg-gray-100 mt-4">

//             <h3 className="font-bold mb-2 text-red-600">
//               ⚠️ Save Credentials (shown only once)
//             </h3>

//             <p><b>MACHINE_ID:</b> {credentials.MACHINE_ID}</p>
//             <p><b>API_KEY:</b> {credentials.API_KEY}</p>

//             <button
//               className="mt-3 bg-green-600 text-white px-3 py-1 rounded"
//               onClick={() =>
//                 navigator.clipboard.writeText(
//                   JSON.stringify(credentials, null, 2)
//                 )
//               }
//             >
//               Copy
//             </button>

//           </div>
//         )}

//       </div>

//     </div>
//   )
// }"use client"

import { useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"
import { QRCodeCanvas } from "qrcode.react"
import API_BASE from "@/lib/api";

export default function MachineRegistration({ isOpen, setIsOpen, refreshMachines }: any) {

  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [credentials, setCredentials] = useState<any>(null)

  const [loading, setLoading] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const handleCreateClick = () => {
    if (!name || !location) {
      alert("Please fill all fields")
      return
    }
    setShowConfirm(true)
  }

  const createMachine = async () => {
    try {
      setLoading(true)

      const res = await axios.post(
        `${API_BASE}/api/admin/createmachine`,
        { name, location }
      )

      setCredentials(res.data.credentials)

      toast.success("Machine created successfully")

      // 🔥 refresh table
      refreshMachines()

      // reset form
      setName("")
      setLocation("")
      setShowConfirm(false)

      setTimeout(() => {
        setIsOpen(false)
        setCredentials(null)
      }, 5000)

    } catch (err: any) {
      alert(err.response?.data?.error || "Failed to create machine")
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white p-6 rounded-xl w-[400px] space-y-4">

        <h2 className="text-xl font-semibold">Add Machine</h2>

        <input
          placeholder="Machine Name"
          className="border p-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Location"
          className="border p-2 w-full"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        {/* ACTIONS */}
        <div className="flex justify-end gap-3">

          <button
            onClick={() => setIsOpen(false)}
            className="border px-4 py-2 rounded"
          >
            Cancel
          </button>

          <button
            onClick={handleCreateClick}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Create
          </button>

        </div>

        {/* 🔥 CONFIRMATION MODAL */}
        {showConfirm && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

            <div className="bg-white p-5 rounded-lg w-[350px] space-y-4 shadow-lg">

              <h3 className="text-lg font-semibold">
                Confirm Machine Creation
              </h3>

              <p className="text-sm text-gray-600">
                Are you sure you want to create this machine?
              </p>

              <div className="flex justify-end gap-3">

                <button
                  onClick={() => setShowConfirm(false)}
                  className="border px-4 py-2 rounded"
                >
                  Cancel
                </button>

                <button
                  onClick={createMachine}
                  disabled={loading}
                  className="bg-green-600 text-white px-4 py-2 rounded"
                >
                  {loading ? "Creating..." : "Yes, Create"}
                </button>

              </div>

            </div>

          </div>
        )}

        {/* 🔐 Credentials */}
          {credentials && (
          <div className="border p-4 rounded bg-gray-100 mt-4 text-center">

            <h3 className="font-bold mb-2 text-green-600">
              ✅ Machine Created
            </h3>

            <p><b>ID:</b> {credentials.MACHINE_ID}</p>
            <p className="text-sm break-all">
              <b>API KEY:</b> {credentials.API_KEY}
            </p>

            {/* ✅ QR CODE */}
            <div className="flex justify-center my-3">
              <QRCodeCanvas value={JSON.stringify(credentials)} size={150} />
            </div>

            <button
              className="mt-2 bg-blue-600 text-white px-3 py-1 rounded"
              onClick={() =>
                navigator.clipboard.writeText(
                  JSON.stringify(credentials, null, 2)
                )
              }
            >
              Copy Credentials
            </button>

          </div>
        )}

      </div>
    </div>
  )
}

