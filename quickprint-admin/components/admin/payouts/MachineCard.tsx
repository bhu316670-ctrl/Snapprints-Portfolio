import { Payout } from "@/lib/dummyPayouts";

interface Props {
  payout: Payout;
}

export default function MachineCard({ payout }: Props) {
  return (
    <div className="bg-white border rounded-xl p-6">

      <h2 className="text-xl font-semibold mb-5">
        Machine Information
      </h2>

      <div className="space-y-3">

        <div>
          <p className="text-sm text-gray-500">Machine ID</p>
          <p>{payout.machineId}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Machine Name</p>
          <p>{payout.machineName}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Location</p>
          <p>{payout.location}</p>
        </div>

      </div>

    </div>
  );
}