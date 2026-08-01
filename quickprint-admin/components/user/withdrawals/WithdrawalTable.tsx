"use client";

import { useMemo, useState } from "react";

import DataTable from "@/components/ui/DataTable";

import WithdrawalFilters from "./WithdrawalFilters";
import WithdrawalRow from "./WithdrawalRow";

const withdrawals = [
  {
    id: 1,
    requestedAt: "2026-07-25",
    amount: 7250,
    bankName: "ICICI Bank",
    accountNumber: "XXXX2456",
    status: "Pending",
  },
  {
    id: 2,
    requestedAt: "2026-07-18",
    amount: 4800,
    bankName: "HDFC Bank",
    accountNumber: "XXXX8891",
    status: "Approved",
  },
  {
    id: 3,
    requestedAt: "2026-07-10",
    amount: 3200,
    bankName: "SBI",
    accountNumber: "XXXX1012",
    status: "Paid",
  },
];

export default function WithdrawalTable() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filtered = useMemo(() => {
    return withdrawals.filter((item) => {
      const matchesSearch =
        item.bankName.toLowerCase().includes(search.toLowerCase()) ||
        item.accountNumber
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        status === "All" || item.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  return (
    <div className="bg-white border rounded-xl shadow-sm">

      <div className="p-5 border-b">

        <h2 className="text-xl font-semibold mb-4">
          Withdrawal History
        </h2>

        <WithdrawalFilters
          search={search}
          status={status}
          onSearchChange={setSearch}
          onStatusChange={setStatus}
        />

      </div>

      <DataTable
        loading={false}
        empty={filtered.length === 0}
        emptyMessage="No withdrawal requests found."
      >

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="text-left px-4 py-3">
                Requested Date
              </th>

              <th className="text-left px-4 py-3">
                Amount
              </th>

              <th className="text-left px-4 py-3">
                Bank Account
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
              <WithdrawalRow
                key={item.id}
                withdrawal={item}
              />
            ))}

          </tbody>

        </table>

      </DataTable>

    </div>
  );
}