"use client";

import Link from "next/link";
import { Payout } from "@/lib/dummyPayouts";
import StatusBadge from "@/components/ui/StatusBadge";

interface Props {
  payout: Payout;
}

export default function PayoutRow({ payout }: Props) {
  const badgeColor = {
    Pending: "bg-yellow-100 text-yellow-700",
    Approved: "bg-blue-100 text-blue-700",
    Paid: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
  }[payout.status];

  return (
    <tr className="border-b hover:bg-gray-50">

      <td className="px-4 py-3">{payout.requestedAt}</td>

      <td className="px-4 py-3">
        <div className="font-medium">{payout.userName}</div>
        <div className="text-sm text-gray-500">
          {payout.email}
        </div>
      </td>

      <td className="px-4 py-3">
        <div>{payout.machineId}</div>
        <div className="text-sm text-gray-500">
          {payout.machineName}
        </div>
      </td>

      <td className="px-4 py-3 font-semibold">
        ₹{payout.amount.toLocaleString()}
      </td>

      <td>
    <StatusBadge status={payout.status} />
</td>

      <td className="px-4 py-3">
        <Link
          href={`/admin/payouts/${payout.id}`}
          className="text-blue-600 hover:underline"
        >
          View
        </Link>
      </td>

    </tr>
  );
}