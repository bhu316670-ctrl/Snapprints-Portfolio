import { Payout } from "@/lib/dummyPayouts";

interface Props {
  payout: Payout;
}

export default function BankCard({ payout }: Props) {
  return (
    <div className="bg-white border rounded-xl p-6">

      <h2 className="text-xl font-semibold mb-5">
        Bank Details
      </h2>

      <div className="space-y-3">

        <div>
          <p className="text-sm text-gray-500">Bank</p>
          <p>{payout.bankName}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Account Holder</p>
          <p>{payout.accountHolder}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Account Number</p>
          <p>{payout.accountNumber}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">IFSC</p>
          <p>{payout.ifsc}</p>
        </div>

      </div>

    </div>
  );
}