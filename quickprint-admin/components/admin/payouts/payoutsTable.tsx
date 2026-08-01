"use client";

import { useMemo, useState } from "react";

import { payouts } from "@/lib/dummyPayouts";

import PayoutFilters from "./payoutsFilters";
import PayoutRow from "./payoutsRow";
import DataTable from "@/components/ui/DataTable";

export default function PayoutTable() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filtered = useMemo(() => {
    return payouts.filter((p) => {
      const matchesSearch =
        p.userName.toLowerCase().includes(search.toLowerCase()) ||
        p.machineId.toLowerCase().includes(search.toLowerCase()) ||
        p.machineName.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        status === "All" || p.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  return (
    <div className="bg-white border rounded-xl shadow-sm">

      <div className="p-5 border-b">
        <h2 className="text-xl font-semibold mb-4">
          Payout Requests
        </h2>

        <PayoutFilters
          search={search}
          status={status}
          onSearchChange={setSearch}
          onStatusChange={setStatus}
        />
      </div>

      <DataTable
  loading={false}
  empty={filtered.length === 0}
  emptyMessage="No payout requests found."
>
  <table className="w-full">

    <thead className="bg-gray-100">

      <tr>

        <th className="text-left px-4 py-3">Date</th>

        <th className="text-left px-4 py-3">User</th>

        <th className="text-left px-4 py-3">Machine</th>

        <th className="text-left px-4 py-3">Amount</th>

        <th className="text-left px-4 py-3">Status</th>

        <th className="text-left px-4 py-3">Action</th>

      </tr>

    </thead>

    <tbody>

      {filtered.map((item) => (
        <PayoutRow
          key={item.id}
          payout={item}
        />
      ))}

    </tbody>

  </table>
</DataTable>
    </div>
  );
}