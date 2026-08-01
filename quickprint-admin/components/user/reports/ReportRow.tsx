"use client";

import { Eye, Download } from "lucide-react";
import StatusBadge from "@/components/ui/StatusBadge";

interface Props {
  report: {
    id: number;
    title: string;
    type: string;
    createdAt: string;
    status: string;
  };
}

export default function ReportRow({ report }: Props) {
  return (
    <tr className="border-b hover:bg-gray-50">

      <td className="p-3">{report.title}</td>

      <td className="p-3">{report.type}</td>

      <td className="p-3">{report.createdAt}</td>

      <td className="p-3">
        <StatusBadge status={report.status} />
      </td>

      <td className="p-3">

        <div className="flex gap-3">

          <button>
            <Eye size={18} className="text-blue-600" />
          </button>

          <button>
            <Download size={18} className="text-green-600" />
          </button>

        </div>

      </td>

    </tr>
  );
}