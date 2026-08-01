import { payouts } from "@/lib/dummyPayouts";

import UserCard from "./UserCard";
import MachineCard from "./MachineCard";
import BankCard from "./BankCard";
import EarningsCard from "./EarningsCard";
import StatusActions from "./StatusActions";

interface Props {
  id: number;
}

export default function PayoutDetails({ id }: Props) {
  const payout = payouts.find((p) => p.id === id);

  if (!payout) {
    return <p>Payout not found.</p>;
  }

  return (
    <div className="space-y-6">

      <div className="grid grid-cols-2 gap-6">
        <UserCard payout={payout} />
        <MachineCard payout={payout} />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <BankCard payout={payout} />
        <EarningsCard payout={payout} />
      </div>

      <StatusActions payout={payout} />

    </div>
  );
}