"use client";

import Link from "next/link";
import { BankAccount } from "@/lib/dummyBanks";

interface Props {
  bank: BankAccount;
}

export default function BankDetails({ bank }: Props) {
  return (
    <div className="space-y-6">

      {/* User Information */}
      <div className="bg-white border rounded-xl p-6">

        <h2 className="text-xl font-semibold mb-5">
          User Information
        </h2>

        <div className="grid grid-cols-2 gap-6">

          <div>
            <p className="text-sm text-gray-500">User ID</p>
            <p>{bank.userId}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p>{bank.userName}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p>{bank.email}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p>{bank.phone}</p>
          </div>

        </div>

      </div>

      {/* Bank Information */}
      <div className="bg-white border rounded-xl p-6">

        <h2 className="text-xl font-semibold mb-5">
          Bank Information
        </h2>

        <div className="grid grid-cols-2 gap-6">

          <div>
            <p className="text-sm text-gray-500">Bank Name</p>
            <p>{bank.bankName}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Account Holder</p>
            <p>{bank.accountHolder}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Account Number</p>
            <p>{bank.accountNumber}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">IFSC Code</p>
            <p>{bank.ifsc}</p>
          </div>

        </div>

      </div>

      {/* Status */}
      <div className="bg-white border rounded-xl p-6">

        <h2 className="text-xl font-semibold mb-5">
          Verification Status
        </h2>

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-gray-500">
              Current Status
            </p>

            <p
              className={`font-semibold ${
                bank.verified
                  ? "text-green-600"
                  : "text-orange-600"
              }`}
            >
              {bank.verified ? "Verified" : "Pending"}
            </p>

          </div>

          <button
            className={`px-4 py-2 rounded-lg text-white ${
              bank.verified
                ? "bg-orange-500"
                : "bg-green-600"
            }`}
          >
            {bank.verified
              ? "Mark Unverified"
              : "Verify Account"}
          </button>

        </div>

      </div>

      {/* Actions */}
      <div className="flex gap-4">

        <Link
          href={`/admin/bank-accounts/edit/${bank.id}`}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Edit
        </Link>

        <button className="bg-red-600 text-white px-5 py-2 rounded-lg">
          Delete
        </button>

      </div>

    </div>
  );
}