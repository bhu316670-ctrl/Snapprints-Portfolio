"use client";

import Link from "next/link";
import { Revenue } from "@/lib/dummyRevenue";
import StatusBadge from "@/components/ui/StatusBadge";

interface RevenueRowProps {
  revenue: Revenue;
}

export default function RevenueRow({
  revenue,
}: RevenueRowProps) {
  return (
    <tr className="border-b hover:bg-gray-50">

      <td className="px-4 py-3">
        {revenue.date}
      </td>

      <td className="px-4 py-3 font-medium">
        {revenue.machineId}
      </td>

      <td className="px-4 py-3">
        {revenue.machineName}
      </td>

      <td className="px-4 py-3">
        {revenue.owner}
      </td>

      <td className="px-4 py-3 text-center">
        {revenue.prints}
      </td>

     <td className="px-4 py-3 font-medium">
  ₹{revenue.grossRevenue.toLocaleString()}
</td>

<td className="px-4 py-3 text-red-600">
  ₹{revenue.platformFee.toLocaleString()}
</td>

<td className="px-4 py-3 text-green-700 font-semibold">
  ₹{revenue.ownerEarnings.toLocaleString()}
</td>

      <td>
    <StatusBadge status={revenue.status} />
</td>

      <td className="px-4 py-3">
        <Link
          href={`/admin/revenue/report/${revenue.machineId}`}
          className="text-blue-600 hover:underline"
        >
          View
        </Link>
      </td>

    </tr>
  );
}