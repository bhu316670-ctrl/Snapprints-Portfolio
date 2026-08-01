"use client";

import { useState } from "react";

export default function CommissionSettings() {
  const [commission, setCommission] = useState(20);

  return (
    <div className="bg-white border rounded-xl p-6">

      <h2 className="text-xl font-semibold mb-5">
        Platform Commission
      </h2>

      <div className="flex items-center gap-4">

        <input
          type="number"
          className="border rounded-lg p-3 w-40"
          value={commission}
          onChange={(e) =>
            setCommission(Number(e.target.value))
          }
        />

        <span className="text-lg">%</span>

      </div>

      <button
        className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg"
        onClick={() => alert("Commission Updated")}
      >
        Save Commission
      </button>

    </div>
  );
}