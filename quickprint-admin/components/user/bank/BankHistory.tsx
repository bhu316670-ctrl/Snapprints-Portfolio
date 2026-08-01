"use client";

interface Props {
  createdAt?: string;
  updatedAt?: string;
  verified?: boolean;
  primary?: boolean;
}

export default function BankHistory({
  createdAt = "2026-07-10",
  updatedAt = "2026-07-20",
  verified = true,
  primary = true,
}: Props) {
  return (
    <div className="bg-white border rounded-xl shadow-sm p-6">

      <h2 className="text-xl font-semibold mb-6">
        Account History
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between border-b pb-3">

          <span className="text-gray-500">
            Created On
          </span>

          <span className="font-medium">
            {createdAt}
          </span>

        </div>

        <div className="flex justify-between border-b pb-3">

          <span className="text-gray-500">
            Last Updated
          </span>

          <span className="font-medium">
            {updatedAt}
          </span>

        </div>

        <div className="flex justify-between border-b pb-3">

          <span className="text-gray-500">
            Verification
          </span>

          <span
            className={
              verified
                ? "text-green-600 font-semibold"
                : "text-orange-500 font-semibold"
            }
          >
            {verified ? "Verified" : "Pending"}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-gray-500">
            Primary Account
          </span>

          <span className="font-medium">
            {primary ? "Yes" : "No"}
          </span>

        </div>

      </div>

    </div>
  );
}