"use client";

import { useState } from "react";
import { Payout } from "@/lib/dummyPayouts";

interface Props {
  payout: Payout;
}

export default function StatusActions({ payout }: Props) {
  const [status, setStatus] = useState(payout.status);

  return (
    <div className="bg-white border rounded-xl p-6">

      <h2 className="text-xl font-semibold mb-6">
        Status & Actions
      </h2>

      <p className="mb-6">
        Current Status:
        <span className="font-semibold ml-2">
          {status}
        </span>
      </p>

      <div className="flex gap-4">

        <button
          onClick={() => setStatus("Approved")}
          className="bg-blue-600 text-white px-5 py-2 rounded"
          disabled={status !== "Pending"}
        >
          Approve
        </button>

        <button
          onClick={() => setStatus("Rejected")}
          className="bg-red-600 text-white px-5 py-2 rounded"
          disabled={status !== "Pending"}
        >
          Reject
        </button>

        <button
          onClick={() => setStatus("Paid")}
          className="bg-green-600 text-white px-5 py-2 rounded"
          disabled={status !== "Approved"}
        >
          Mark Paid
        </button>

      </div>

    </div>
  );
}