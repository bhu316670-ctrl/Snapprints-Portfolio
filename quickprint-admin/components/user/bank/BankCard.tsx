"use client";

import Link from "next/link";
import { Eye, Pencil } from "lucide-react";

import StatusBadge from "@/components/ui/StatusBadge";

interface BankAccount {
  id: number;
  bankName: string;
  accountHolder: string;
  accountNumber: string;
  ifsc: string;
  verified: boolean;
  primary: boolean;
}

interface Props {
  bank: BankAccount;
}

export default function BankCard({ bank }: Props) {
  return (
    <div className="bg-white border rounded-xl shadow-sm p-6">

      <div className="flex justify-between items-start">

        <div>

          <h2 className="text-xl font-semibold">
            {bank.bankName}
          </h2>

          <p className="text-gray-600 mt-1">
            {bank.accountHolder}
          </p>

        </div>

        <StatusBadge
          status={bank.verified ? "Verified" : "Pending"}
        />

      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">

        <div>

          <p className="text-sm text-gray-500">
            Account Number
          </p>

          <p className="font-medium mt-1">
            {bank.accountNumber}
          </p>

        </div>

        <div>

          <p className="text-sm text-gray-500">
            IFSC Code
          </p>

          <p className="font-medium mt-1">
            {bank.ifsc}
          </p>

        </div>

        <div>

          <p className="text-sm text-gray-500">
            Primary Account
          </p>

          <p className="font-medium mt-1">
            {bank.primary ? "Yes" : "No"}
          </p>

        </div>

      </div>

      <div className="flex gap-3 mt-8">

        <Link
          href={`/user/bank-account/view/${bank.id}`}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white flex items-center gap-2"
        >
          <Eye size={18} />
          View
        </Link>

        <Link
          href={`/user/bank-account/edit/${bank.id}`}
          className="px-4 py-2 rounded-lg border flex items-center gap-2"
        >
          <Pencil size={18} />
          Edit
        </Link>

      </div>

    </div>
  );
}