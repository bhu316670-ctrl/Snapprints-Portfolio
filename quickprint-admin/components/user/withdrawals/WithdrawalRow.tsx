"use client";

import Link from "next/link";
import StatusBadge from "@/components/ui/StatusBadge";

interface Withdrawal {
  id: number;
  requestedAt: string;
  amount: number;
  bankName: string;
  accountNumber: string;
  status: string;
}

interface Props {
  withdrawal: Withdrawal;
}

export default function WithdrawalRow({
  withdrawal,
}: Props) {
  return (
    <tr className="border-b hover:bg-gray-50">

      <td className="px-4 py-3">
        {withdrawal.requestedAt}
      </td>

      <td className="px-4 py-3 font-semibold">
        ₹{withdrawal.amount.toLocaleString()}
      </td>

      <td className="px-4 py-3">

        <div className="font-medium">
          {withdrawal.bankName}
        </div>

        <div className="text-sm text-gray-500">
          {withdrawal.accountNumber}
        </div>

      </td>

      <td className="px-4 py-3">
        <StatusBadge status={withdrawal.status} />
      </td>

      <td className="px-4 py-3">

        <Link
          href={`/user/withdrawals/view/${withdrawal.id}`}
          className="text-blue-600 hover:underline"
        >
          View
        </Link>

      </td>

    </tr>
  );
}