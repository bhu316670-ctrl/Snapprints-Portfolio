"use client";

import { useState } from "react";

export default function RequestWithdrawal() {
  const [amount, setAmount] = useState("");
  const [bank, setBank] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    alert(
      `Withdrawal Requested\n\nAmount : ₹${amount}\nBank : ${bank}`
    );

    setAmount("");
    setBank("");
  }

  return (
    <div className="bg-white border rounded-xl shadow-sm p-6">

      <h2 className="text-xl font-semibold mb-6">
        Request Withdrawal
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-3 gap-5"
      >

        <div>

          <label className="block text-sm font-medium mb-2">
            Amount
          </label>

          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

        </div>

        <div>

          <label className="block text-sm font-medium mb-2">
            Bank Account
          </label>

          <select
            value={bank}
            onChange={(e) => setBank(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >

            <option value="">
              Select Bank
            </option>

            <option value="ICICI">
              ICICI Bank ••••2456
            </option>

            <option value="HDFC">
              HDFC Bank ••••8891
            </option>

            <option value="SBI">
              SBI ••••1012
            </option>

          </select>

        </div>

        <div className="flex items-end">

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 font-medium transition"
          >
            Request Withdrawal
          </button>

        </div>

      </form>

      <div className="mt-6 rounded-lg bg-blue-50 border border-blue-100 p-4">

        <p className="text-sm text-blue-700">

          <strong>Available Balance:</strong> ₹9,840

        </p>

        <p className="text-sm text-blue-700 mt-2">

          Minimum withdrawal amount: ₹500

        </p>

      </div>

    </div>
  );
}