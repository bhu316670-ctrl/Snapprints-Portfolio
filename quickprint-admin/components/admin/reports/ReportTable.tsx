"use client";

import { useMemo, useState } from "react";

import { reports } from "@/lib/dummyReports";

import DataTable from "@/components/ui/DataTable";

import ReportFilters from "./ReportFilters";
import ReportRow from "./ReportRow";

export default function ReportTable() {
  const [search, setSearch] = useState("");
  const [period, setPeriod] = useState("today");

  const filteredReports = useMemo(() => {
    const value = search.toLowerCase();

    return reports.filter((report) => {
      return (
        report.machineId.toLowerCase().includes(value) ||
        report.machineName.toLowerCase().includes(value) ||
        report.owner.toLowerCase().includes(value)
      );
    });
  }, [search, period]);

  return (
    <div className="space-y-5">

      <ReportFilters
        search={search}
        period={period}
        onSearchChange={setSearch}
        onPeriodChange={setPeriod}
      />

      <DataTable
        loading={false}
        empty={filteredReports.length === 0}
        emptyMessage="No reports found."
      >
        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="text-left px-4 py-3">
                Date
              </th>

              <th className="text-left px-4 py-3">
                Machine ID
              </th>

              <th className="text-left px-4 py-3">
                Machine
              </th>

              <th className="text-left px-4 py-3">
                Owner
              </th>

              <th className="text-center px-4 py-3">
                Prints
              </th>

              <th className="text-left px-4 py-3">
                Revenue
              </th>

              <th className="text-left px-4 py-3">
                Commission
              </th>

              <th className="text-left px-4 py-3">
                Owner Earnings
              </th>

              <th className="text-center px-4 py-3">
                Download
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredReports.map((report) => (
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