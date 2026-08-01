import { Payout } from "@/lib/dummyPayouts";

interface Props {
  payout: Payout;
}

export default function UserCard({ payout }: Props) {
  return (
    <div className="bg-white border rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-5">
        User Information
      </h2>

      <div className="space-y-3">

        <div>
          <p className="text-sm text-gray-500">Name</p>
          <p>{payout.userName}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Email</p>
          <p>{payout.email}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Phone</p>
          <p>{payout.phone}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">User ID</p>
          <p>{payout.userId}</p>
        </div>

      </div>
    </div>
  );
}