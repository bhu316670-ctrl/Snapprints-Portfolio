"use client";

import { useMemo, useState } from "react";

import { revenues } from "@/lib/dummyRevenue";

import RevenueRow from "./RevenueRow";
import SearchBox from "@/components/ui/SearchBox";
import DataTable from "@/components/ui/DataTable";

export default function RevenueTable() {

  const [search, setSearch] = useState("");

  const filteredRevenue = useMemo(() => {

    const value = search.toLowerCase();

    return revenues.filter((item) =>

      item.machineId.toLowerCase().includes(value) ||

      item.machineName.toLowerCase().includes(value) ||

      item.owner.toLowerCase().includes(value)

    );

  }, [search]);

  return (

    <div className="bg-white border rounded-xl shadow-sm">

      <div className="p-5 border-b flex justify-between items-center">

        <h2 className="text-xl font-semibold">

          Revenue Records

        </h2>

<SearchBox
  value={search}
  onChange={setSearch}
  placeholder="Search revenue..."
/>

      </div>

      <DataTable
  loading={false}
  empty={filteredRevenue.length === 0}
  emptyMessage="No revenue records found."
>
  <table className="w-full">

    <thead className="bg-gray-100">

      <tr>

        <th className="text-left px-4 py-3">Date</th>

        <th className="text-left px-4 py-3">Machine ID</th>

        <th className="text-left px-4 py-3">Machine</th>

        <th className="text-left px-4 py-3">Owner</th>

        <th className="text-center px-4 py-3">Prints</th>

        <th className="text-left px-4 py-3">Revenue</th>

        <th className="text-left px-4 py-3">Status</th>

        <th className="text-left px-4 py-3">Action</th>

      </tr>

    </thead>

    <tbody>

      {filteredRevenue.map((item) => (
        <RevenueRow
          key={item.id}
          revenue={item}
        />
      ))}

    </tbody>

  </table>
</DataTable>

    </div>

  );

}