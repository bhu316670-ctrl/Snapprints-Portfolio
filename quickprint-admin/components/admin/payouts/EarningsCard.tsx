import { Payout } from "@/lib/dummyPayouts";

interface Props {
  payout: Payout;
}

export default function EarningsCard({ payout }: Props) {
  return (
    <div className="bg-white border rounded-xl p-6">

      <h2 className="text-xl font-semibold mb-5">
        Earnings
      </h2>

      <div className="space-y-3">

        <div className="flex justify-between">
          <span>Gross Revenue</span>
          <span>₹{payout.grossRevenue.toLocaleString()}</span>
        </div>

        <div className="flex justify-between">
          <span>Platform Fee</span>
          <span>₹{payout.platformFee.toLocaleString()}</span>
        </div>

        <div className="flex justify-between font-semibold">
          <span>Owner Earnings</span>
          <span>₹{payout.ownerEarnings.toLocaleString()}</span>
        </div>

        <div className="border-t pt-3 flex justify-between text-lg font-bold">

          <span>Available Balance</span>

          <span className="text-green-600">
            ₹{payout.availableBalance.toLocaleString()}
          </span>

        </div>

      </div>

    </div>
  );
}