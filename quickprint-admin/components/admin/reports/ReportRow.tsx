"use client";

import { Download } from "lucide-react";
import { Report } from "@/lib/dummyReports";

interface Props {
  report: Report;
}

export default function ReportRow({ report }: Props) {
  function downloadPDF() {
    alert(`Downloading PDF for ${report.machineId}`);
  }

  function downloadCSV() {
    alert(`Downloading CSV for ${report.machineId}`);
  }

  return (
    <tr className="border-b hover:bg-gray-50">

      <td className="px-4 py-3">
        {report.date}
      </td>

      <td className="px-4 py-3">
        {report.machineId}
      </td>

      <td className="px-4 py-3">
        {report.machineName}
      </td>

      <td className="px-4 py-3">
        {report.owner}
      </td>

      <td className="text-center px-4 py-3">
        {report.prints}
      </td>

      <td className="px-4 py-3 font-medium">
        ₹{report.revenue}
      </td>

      <td className="px-4 py-3 text-orange-600">
        ₹{report.commission}
      </td>

      <td className="px-4 py-3 text-green-600 font-semibold">
        ₹{report.ownerEarnings}
      </td>

      <td className="px-4 py-3">

        <div className="flex gap-3">

          <button
            onClick={downloadPDF}
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
          >
            <Download size={16} />
            PDF
          </button>

          <button
            onClick={downloadCSV}
            className="flex items-center gap-1 text-green-600 hover:text-green-800"
          >
            <Download size={16} />
            CSV
          </button>

        </div>

      </td>

    </tr>
  );
}