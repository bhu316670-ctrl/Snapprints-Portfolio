"use client";

import { useMemo, useState } from "react";

import DataTable from "@/components/ui/DataTable";

import PayoutFilters from "./PayoutFilters";
import PayoutRow from "./PayoutRow";

const payouts = [
  {
    id: 1,
    requestedAt: "2026-07-25",
    amount: 7250,
    bankName: "ICICI Bank",
    accountNumber: "XXXX2456",
    transactionId: "TXN987654",
    status: "Paid",
  },
  {
    id: 2,
    requestedAt: "2026-07-20",
    amount: 4800,
    bankName: "HDFC Bank",
    accountNumber: "XXXX8891",
    transactionId: "",
    status: "Approved",
  },
  {
    id: 3,
    requestedAt: "2026-07-18",
    amount: 3200,
    bankName: "SBI",
    accountNumber: "XXXX1012",
    transactionId: "",
    status: "Rejected",
  },
  {
    id: 4,
    requestedAt: "2026-07-27",
    amount: 5400,
    bankName: "Axis Bank",
    accountNumber: "XXXX5558",
    transactionId: "",
    status: "Pending",
  },
];

export default function PayoutTable() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filtered = useMemo(() => {
    return payouts.filter((item) => {

      const matchesSearch =
        item.bankName.toLowerCase().includes(search.toLowerCase()) ||
        item.accountNumber.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        status === "All" || item.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  return (
    <div className="bg-white border rounded-xl shadow-sm">

      <div className="p-5 border-b">

        <h2 className="text-xl font-semibold mb-4">
          Payout History
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
        emptyMessage="No payout history found."
      >

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="text-left px-4 py-3">
                Date
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
                Transaction ID
              </th>

              <th className="text-left px-4 py-3">
                Action
              </th>

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