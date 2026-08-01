"use client";

import Link from "next/link";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { BankAccount } from "@/lib/dummyBanks";
import StatusBadge from "@/components/ui/StatusBadge";

interface Props {
  bank: BankAccount;
}

export default function BankRow({ bank }: Props) {
  return (
    <tr className="border-b hover:bg-gray-50">

      <td className="p-3">{bank.userName}</td>

      <td className="p-3">{bank.bankName}</td>

      <td className="p-3">{bank.accountHolder}</td>

      <td className="p-3">{bank.accountNumber}</td>

      <td className="p-3">{bank.ifsc}</td>

     <td className="p-3">
  <StatusBadge
    status={bank.verified ? "Verified" : "Pending"}
  />
</td>

      <td className="p-3">
        <div className="flex gap-3">

          <Link href={`/admin/bank-accounts/${bank.id}`}>
            <Eye size={18} className="text-blue-600" />
          </Link>

          <Link href={`/admin/bank-accounts/edit/${bank.id}`}>
            <Pencil size={18} className="text-green-600" />
          </Link>

          <button>
            <Trash2 size={18} className="text-red-600" />
          </button>

        </div>
      </td>

    </tr>
  );
}