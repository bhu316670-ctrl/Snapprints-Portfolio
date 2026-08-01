"use client";

import { useState } from "react";

interface Props {
  initialValues?: {
    bankName: string;
    accountHolder: string;
    accountNumber: string;
    ifsc: string;
    primary: boolean;
  };
}

export default function BankForm({
  initialValues,
}: Props) {

  const [bankName, setBankName] = useState(
    initialValues?.bankName || ""
  );

  const [holder, setHolder] = useState(
    initialValues?.accountHolder || ""
  );

  const [accountNumber, setAccountNumber] = useState(
    initialValues?.accountNumber || ""
  );

  const [ifsc, setIfsc] = useState(
    initialValues?.ifsc || ""
  );

  const [primary, setPrimary] = useState(
    initialValues?.primary || false
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    alert("Bank details saved successfully.");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border rounded-xl shadow-sm p-6 space-y-6"
    >

      <div>

        <label className="block text-sm font-medium mb-2">
          Bank Name
        </label>

        <input
          value={bankName}
          onChange={(e) => setBankName(e.target.value)}
          className="w-full border rounded-lg px-4 py-3"
          required
        />

      </div>

      <div>

        <label className="block text-sm font-medium mb-2">
          Account Holder
        </label>

        <input
          value={holder}
          onChange={(e) => setHolder(e.target.value)}
          className="w-full border rounded-lg px-4 py-3"
          required
        />

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div>

          <label className="block text-sm font-medium mb-2">
            Account Number
          </label>

          <input
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
            required
          />

        </div>

        <div>

          <label className="block text-sm font-medium mb-2">
            IFSC Code
          </label>

          <input
            value={ifsc}
            onChange={(e) => setIfsc(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
            required
          />

        </div>

      </div>

      <label className="flex items-center gap-3">

        <input
          type="checkbox"
          checked={primary}
          onChange={(e) => setPrimary(e.target.checked)}
        />

        <span>
          Set as Primary Bank Account
        </span>

      </label>

      <div className="flex justify-end">

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Save Bank Account
        </button>

      </div>

    </form>
  );
}