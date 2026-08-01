"use client";

import { useMemo, useState } from "react";

import DataTable from "@/components/ui/DataTable";

import ReportFilters from "./ReportFilters";
import ReportRow from "./ReportRow";

const reports = [
  {
    id: 1,
    title: "Revenue Report - July",
    type: "Revenue",
    createdAt: "25 Jul 2026",
    status: "Completed",
  },
  {
    id: 2,
    title: "Withdrawal Statement",
    type: "Withdrawal",
    createdAt: "20 Jul 2026",
    status: "Completed",
  },
  {
    id: 3,
    title: "Payout Summary",
    type: "Payout",
    createdAt: "15 Jul 2026",
    status: "Pending",
  },
];

export default function ReportTable() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");

  const filtered = useMemo(() => {
    return reports.filter((report) => {

      const matchesSearch =
        report.title.toLowerCase().includes(search.toLowerCase());

      const matchesType =
        type === "All" || report.type === type;

      return matchesSearch && matchesType;
    });
  }, [search, type]);

  return (
    <div className="space-y-5">

      <ReportFilters
        search={search}
        onSearchChange={setSearch}
        type={type}
        onTypeChange={setType}
      />

      <DataTable
        loading={false}
        empty={filtered.length === 0}
        emptyMessage="No reports found."
      >

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="text-left p-3">Report</th>

              <th className="text-left p-3">Type</th>

              <th className="text-left p-3">Created</th>

              <th className="text-left p-3">Status</th>

              <th className="text-left p-3">Actions</th>

            </tr>

          </thead>

          <tbody>

            {filtered.map((report) => (
              <ReportRow
                key={report.id}
                report={report}
              />
            ))}

          </tbody>

        </table>

      </DataTable>

    </div>
  );
}