"use client";

import Link from "next/link";
import StatusBadge from "@/components/ui/StatusBadge";

interface Revenue {
  id: number;
  date: string;
  machineId: string;
  machineName: string;
  prints: number;
  grossRevenue: number;
  platformCommission: number;
  ownerEarnings: number;
  status: string;
}

interface Props {
  revenue: Revenue;
}

export default function RevenueRow({ revenue }: Props) {
  return (
    <tr className="border-b hover:bg-gray-50">

      <td className="px-4 py-3">
        {revenue.date}
      </td>

      <td className="px-4 py-3">

        <div className="font-medium">
          {revenue.machineName}
        </div>

        <div className="text-sm text-gray-500">
          {revenue.machineId}
        </div>

      </td>

      <td className="px-4 py-3">
        {revenue.prints}
      </td>

      <td className="px-4 py-3 font-medium">
        ₹{revenue.grossRevenue.toLocaleString()}
      </td>

      <td className="px-4 py-3 text-red-600">
        ₹{revenue.platformCommission.toLocaleString()}
      </td>

      <td className="px-4 py-3 text-green-600 font-semibold">
        ₹{revenue.ownerEarnings.toLocaleString()}
      </td>

      <td className="px-4 py-3">
        <StatusBadge status={revenue.status} />
      </td>

      <td className="px-4 py-3">

        <Link
          href={`/user/revenue/view/${revenue.id}`}
          className="text-blue-600 hover:underline"
        >
          View
        </Link>

      </td>

    </tr>
  );
}