import { LayoutDashboard, Printer, AlertTriangle, IndianRupee } from "lucide-react"
import Link from "next/link"


export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r h-screen p-6">

      <h1 className="text-2xl font-bold mb-10">
        QuickPrint
      </h1>

      <nav className="space-y-4">

        <Link href="/dashboard" className="flex items-center gap-3 text-gray-700 hover:text-black">
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        {/* <Link href="/machines" className="flex items-center gap-3 text-gray-700 hover:text-black">
          <Printer size={18} />
         Add Machine
        </Link> */}

        <Link href="/machines" className="flex items-center gap-3 text-gray-700 hover:text-black">
          <Printer size={18} />
          Machines
        </Link>

        <Link href="#" className="flex items-center gap-3 text-gray-700 hover:text-black">
          <AlertTriangle size={18} />
          Alerts
        </Link>

        <Link href="#" className="flex items-center gap-3 text-gray-700 hover:text-black">
          <IndianRupee size={18} />
          Revenue
        </Link>

      </nav>

    </div>
  )
}