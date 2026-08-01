"use client";

import Link from "next/link";
import StatusBadge from "@/components/ui/StatusBadge";

interface Payout {
  id: number;
  requestedAt: string;
  amount: number;
  bankName: string;
  accountNumber: string;
  transactionId?: string;
  status: string;
}

interface Props {
  payout: Payout;
}

export default function PayoutRow({
  payout,
}: Props) {
  return (
    <tr className="border-b hover:bg-gray-50">

      <td className="px-4 py-3">
        {payout.requestedAt}
      </td>

      <td className="px-4 py-3 font-semibold">
        ₹{payout.amount.toLocaleString()}
      </td>

      <td className="px-4 py-3">

        <div className="font-medium">
          {payout.bankName}
        </div>

        <div className="text-sm text-gray-500">
          {payout.accountNumber}
        </div>

      </td>

      <td className="px-4 py-3">
        <StatusBadge status={payout.status} />
      </td>

      <td className="px-4 py-3">
        {payout.transactionId ?? "-"}
      </td>

      <td className="px-4 py-3">

        <Link
          href={`/user/payouts/view/${payout.id}`}
          className="text-blue-600 hover:underline"
        >
          View
        </Link>

      </td>

    </tr>
  );
}