"use client";

import Link from "next/link";
import StatusBadge from "@/components/ui/StatusBadge";
import {
  MapPin,
  Printer,
  IndianRupee,
} from "lucide-react";

interface Machine {
  id: string;
  machineId: string;
  name: string;
  location: string;
  status: string;
  revenue: number;
  prints: number;
}

interface Props {
  machine: Machine;
}

export default function MachineCard({ machine }: Props) {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-6">

      <div className="flex justify-between items-start">

        <div>

          <h3 className="text-lg font-semibold">
            {machine.name}
          </h3>

          <p className="text-gray-500">
            {machine.machineId}
          </p>

        </div>

        <StatusBadge status={machine.status} />

      </div>

      <div className="space-y-3 mt-6">

        <div className="flex items-center gap-2 text-gray-600">
          <MapPin size={18} />
          {machine.location}
        </div>

        <div className="flex items-center gap-2 text-green-600">
          <IndianRupee size={18} />
          ₹{machine.revenue.toLocaleString()}
        </div>

        <div className="flex items-center gap-2 text-blue-600">
          <Printer size={18} />
          {machine.prints} Prints
        </div>

      </div>

      <Link
        href={`/user/machines/view/${machine.id}`}
        className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        View Details
      </Link>

    </div>
  );
}