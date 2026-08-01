"use client";

import Link from "next/link";
import StatusBadge from "@/components/ui/StatusBadge";
import { Machine } from "@/services/machine.service";

interface Props {
  machine: Machine;
}

export default function MachineCard({ machine }: Props) {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-6 hover:shadow-lg transition">

      <div className="flex justify-between items-start">

        <div>

          <h3 className="text-lg font-semibold">
            {machine.name}
          </h3>

          <p className="text-sm text-gray-500">
            {machine.machine_id}
          </p>

        </div>

        <StatusBadge
          status={machine.is_online ? "Online" : "Offline"}
        />

      </div>

      <div className="mt-5 space-y-2 text-sm">

        <div className="flex justify-between">
          <span className="text-gray-500">Location</span>
          <span>{machine.location_name}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">City</span>
          <span>{machine.city || "-"}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Revenue</span>
          <span className="font-semibold">
            ₹{Number(machine.revenue).toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Print Jobs</span>
          <span>{machine.total_jobs}</span>
        </div>

      </div>

      <div className="mt-6 flex gap-3">

        <Link
          href={`/admin/machines/view/${machine.machine_id}`}
          className="flex-1 text-center bg-blue-600 text-white py-2 rounded-lg"
        >
          View
        </Link>

        <Link
          href={`/admin/machines/edit/${machine.machine_id}`}
          className="flex-1 text-center border py-2 rounded-lg"
        >
          Edit
        </Link>

      </div>

    </div>
  );
}