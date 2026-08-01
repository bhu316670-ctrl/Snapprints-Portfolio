"use client";

import Link from "next/link";
import StatusBadge from "@/components/ui/StatusBadge";
import { Machine } from "@/services/machine.service";
import machineService from "@/services/machine.service";

interface Props {
  machine: Machine;
}

export default function MachineRow({ machine }: Props) {
  async function handleDelete() {

  if (!confirm("Delete this machine?")) return;

  try {

    await machineService.deleteMachine(
      machine.machine_id
    );

    window.location.reload();

  } catch (err) {

    console.error(err);

    alert("Unable to delete machine");

  }

}
  return (
    <tr className="border-b hover:bg-gray-50">

      <td className="px-4 py-3 font-medium">
        {machine.machine_id}
      </td>

      <td className="px-4 py-3">
        {machine.name}
      </td>

      <td className="px-4 py-3">
        {machine.location_name}
      </td>

      <td className="px-4 py-3">
        <StatusBadge
          status={machine.is_online ? "Online" : "Offline"}
        />
      </td>

      <td className="px-4 py-3 font-semibold">
        ₹{Number(machine.revenue).toLocaleString()}
      </td>

      <td className="px-4 py-3">
        {machine.total_jobs}
      </td>

      <td className="px-4 py-3">

        <div className="flex gap-3">

          <Link
            href={`/admin/machines/view/${machine.machine_id}`}
            className="text-blue-600 hover:underline"
          >
            View
          </Link>

          <Link
            href={`/admin/machines/edit/${machine.machine_id}`}
            className="text-green-600 hover:underline"
          >
            Edit
          </Link>

          <button
          onClick={handleDelete}
            className="text-red-600"
          >
            Delete
          </button>

        </div>

      </td>

    </tr>
  );
}