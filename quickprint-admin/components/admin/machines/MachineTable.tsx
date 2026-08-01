"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import SearchBox from "@/components/ui/SearchBox";
import DataTable from "@/components/ui/DataTable";

import MachineRow from "./MachineRow";
import { Machine } from "@/services/machine.service";

interface Props {
  machines: Machine[];
  loading?: boolean;
}

export default function MachineTable({
  machines,
  loading = false,
}: Props) {

  const [search, setSearch] = useState("");

  const filteredMachines = useMemo(() => {

    const value = search.toLowerCase();

    return machines.filter((machine) =>

      machine.machine_id.toLowerCase().includes(value) ||

      machine.name.toLowerCase().includes(value) ||

      machine.location_name.toLowerCase().includes(value) ||

      machine.city?.toLowerCase().includes(value) ||

      machine.state?.toLowerCase().includes(value)

    );

  }, [machines, search]);

  return (

    <div>

      <div className="flex justify-between items-center mb-6">

        <SearchBox
          value={search}
          onChange={setSearch}
          placeholder="Search machines..."
        />

        <Link
          href="/admin/machines/add"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          + Add Machine
        </Link>

      </div>

      <DataTable
        loading={loading}
        empty={filteredMachines.length === 0}
        emptyMessage="No machines found."
      >

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="text-left px-4 py-3">
                Machine ID
              </th>

              <th className="text-left px-4 py-3">
                Name
              </th>

              <th className="text-left px-4 py-3">
                Location
              </th>

              <th className="text-left px-4 py-3">
                Status
              </th>

              <th className="text-left px-4 py-3">
                Revenue
              </th>

              <th className="text-left px-4 py-3">
                Jobs
              </th>

              <th className="text-left px-4 py-3">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredMachines.map((machine) => (

              <MachineRow
                key={machine.machine_id}
                machine={machine}
              />

            ))}

          </tbody>

        </table>

      </DataTable>

    </div>

  );

}