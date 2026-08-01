"use client";

import { useState } from "react";
import Link from "next/link";
import SearchBox from "@/components/ui/SearchBox";
import StatusBadge from "@/components/ui/StatusBadge";
import DataTable from "@/components/ui/DataTable";

const machines = [
  {
    id: "1",
    machineId: "SNP001",
    name: "Engineering Block",
    location: "Mumbai",
    status: "Online",
    revenue: 12540,
    prints: 1205,
  },
  {
    id: "2",
    machineId: "SNP002",
    name: "Library",
    location: "Mumbai",
    status: "Offline",
    revenue: 8450,
    prints: 780,
  },
  {
    id: "3",
    machineId: "SNP003",
    name: "Admin Building",
    location: "Mumbai",
    status: "Online",
    revenue: 16450,
    prints: 1490,
  },
];

export default function MachineTable() {
  const [search, setSearch] = useState("");

  const filtered = machines.filter((m) =>
    m.machineId.toLowerCase().includes(search.toLowerCase()) ||
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-5">

      <SearchBox
        value={search}
        onChange={setSearch}
        placeholder="Search machines..."
      />

      <DataTable
        loading={false}
        empty={filtered.length === 0}
        emptyMessage="No machines found."
      >

        <table className="w-full">

          <thead className="bg-gray-100">

  <tr>

    <th className="text-left p-3">Machine ID</th>

    <th className="text-left p-3">Machine</th>

    <th className="text-left p-3">Location</th>

    <th className="text-left p-3">Revenue</th>

    <th className="text-left p-3">Prints</th>

    <th className="text-left p-3">Status</th>

    <th className="text-left p-3">Actions</th>

  </tr>

</thead>

          <tbody>

            {filtered.map((machine) => (

              <tr
                key={machine.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-3">
                  {machine.machineId}
                </td>

                <td className="p-3">
                  {machine.name}
                </td>

                <td className="p-3">
                  {machine.location}
                </td>

                <td className="p-3">
                  ₹{machine.revenue.toLocaleString()}
                </td>

                <td className="p-3">
                  {machine.prints}
                </td>

                <td className="p-3">
                  <StatusBadge status={machine.status} />
                </td>
                <td className="p-3">
  <Link
    href={`/user/machines/view/${machine.id}`}
    className="text-blue-600 hover:text-blue-800 font-medium"
  >
    View
  </Link>
</td>
              </tr>

            ))}

          </tbody>

        </table>

      </DataTable>

    </div>
  );
}