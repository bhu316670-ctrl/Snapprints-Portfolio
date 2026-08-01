"use client";

import StatusBadge from "@/components/ui/StatusBadge";

interface BankAccount {
  id: number;
  bankName: string;
  accountHolder: string;
  accountNumber: string;
  ifsc: string;
  verified: boolean;
  primary: boolean;
  createdAt?: string;
  updatedAt?: string;
}

interface Props {
  bank: BankAccount;
}

export default function BankDetails({ bank }: Props) {
  return (
    <div className="bg-white border rounded-xl shadow-sm p-6">

      <h2 className="text-2xl font-semibold mb-8">
        Bank Account Details
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="space-y-5">

          <div>
            <p className="text-sm text-gray-500">
              Bank Name
            </p>

            <p className="font-medium mt-1">
              {bank.bankName}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Account Holder
            </p>

            <p className="font-medium mt-1">
              {bank.accountHolder}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Account Number
            </p>

            <p className="font-medium mt-1">
              {bank.accountNumber}
            </p>
          </div>

        </div>

        <div className="space-y-5">

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
              Verification Status
            </p>

            <div className="mt-2">
              <StatusBadge
                status={bank.verified ? "Verified" : "Pending"}
              />
            </div>
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

      </div>

    </div>
  );
}