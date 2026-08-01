"use client";

import { useMemo, useState } from "react";

import SearchBox from "@/components/ui/SearchBox";
import DataTable from "@/components/ui/DataTable";

import RevenueRow from "./RevenueRow";

const revenues = [
  {
    id: 1,
    date: "2026-07-24",
    machineId: "SNP001",
    machineName: "Engineering Block",
    prints: 145,
    grossRevenue: 4200,
    platformCommission: 840,
    ownerEarnings: 3360,
    status: "Completed",
  },
  {
    id: 2,
    date: "2026-07-23",
    machineId: "SNP002",
    machineName: "Library",
    prints: 96,
    grossRevenue: 2850,
    platformCommission: 570,
    ownerEarnings: 2280,
    status: "Completed",
  },
  {
    id: 3,
    date: "2026-07-22",
    machineId: "SNP003",
    machineName: "Admin Building",
    prints: 178,
    grossRevenue: 5300,
    platformCommission: 1060,
    ownerEarnings: 4240,
    status: "Pending",
  },
];

export default function RevenueTable() {

  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {

    const value = search.toLowerCase();

    return revenues.filter((item) =>
      item.machineId.toLowerCase().includes(value) ||
      item.machineName.toLowerCase().includes(value)
    );

  }, [search]);

  return (

    <div className="space-y-5">

      <SearchBox
        value={search}
        onChange={setSearch}
        placeholder="Search revenue..."
      />

      <DataTable
        loading={false}
        empty={filtered.length === 0}
        emptyMessage="No revenue records found."
      >

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="text-left px-4 py-3">
                Date
              </th>

              <th className="text-left px-4 py-3">
                Machine
              </th>

              <th className="text-left px-4 py-3">
                Prints
              </th>

              <th className="text-left px-4 py-3">
                Gross Revenue
              </th>

              <th className="text-left px-4 py-3">
                Platform Commission
              </th>

              <th className="text-left px-4 py-3">
                Owner Earnings
              </th>

              <th className="text-left px-4 py-3">
                Status
              </th>

              <th className="text-left px-4 py-3">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {filtered.map((item) => (

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