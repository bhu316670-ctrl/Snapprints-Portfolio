"use client";

import StatusBadge from "@/components/ui/StatusBadge";

interface Props {
  payout: {
    id: number;
    requestedAt: string;
    amount: number;
    bankName: string;
    accountNumber: string;
    transactionId?: string;
    status: string;
  };
}

export default function PayoutDetails({ payout }: Props) {
  return (
    <div className="bg-white border rounded-xl shadow-sm p-6">

      <h2 className="text-2xl font-semibold mb-6">
        Payout Details
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div>

          <h3 className="font-semibold text-gray-600 mb-2">
            Payment Information
          </h3>

          <div className="space-y-3">

            <div className="flex justify-between">
              <span>Amount</span>
              <strong>₹{payout.amount.toLocaleString()}</strong>
            </div>

            <div className="flex justify-between">
              <span>Requested On</span>
              <strong>{payout.requestedAt}</strong>
            </div>

            <div className="flex justify-between">
              <span>Status</span>
              <StatusBadge status={payout.status} />
            </div>

            <div className="flex justify-between">
              <span>Transaction ID</span>
              <strong>{payout.transactionId || "-"}</strong>
            </div>

          </div>

        </div>

        <div>

          <h3 className="font-semibold text-gray-600 mb-2">
            Bank Details
          </h3>

          <div className="space-y-3">

            <div className="flex justify-between">
              <span>Bank</span>
              <strong>{payout.bankName}</strong>
            </div>

            <div className="flex justify-between">
              <span>Account</span>
              <strong>{payout.accountNumber}</strong>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}