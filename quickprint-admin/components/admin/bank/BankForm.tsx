"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { BankAccount } from "@/lib/dummyBanks";
import { users } from "@/lib/dummyUsers";

interface Props {
  initialData?: BankAccount;
}

export default function BankForm({ initialData }: Props) {
  const router = useRouter();

  const [userId, setUserId] = useState(initialData?.userId ?? "");

  const [bankName, setBankName] = useState(initialData?.bankName ?? "");

  const [accountHolder, setAccountHolder] = useState(
    initialData?.accountHolder ?? ""
  );

  const [accountNumber, setAccountNumber] = useState(
    initialData?.accountNumber ?? ""
  );

  const [confirmAccountNumber, setConfirmAccountNumber] = useState(
    initialData?.accountNumber ?? ""
  );

  const [ifsc, setIfsc] = useState(initialData?.ifsc ?? "");

  const [verified, setVerified] = useState(
    initialData?.verified ?? false
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (accountNumber !== confirmAccountNumber) {
      alert("Account numbers do not match.");
      return;
    }

    console.log({
      userId,
      bankName,
      accountHolder,
      accountNumber,
      ifsc,
      verified,
    });

    alert(initialData ? "Bank updated." : "Bank added.");

    router.push("/admin/bank-accounts");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border rounded-xl p-6 max-w-3xl space-y-6"
    >
      <h2 className="text-2xl font-semibold">
        {initialData ? "Edit Bank Account" : "Add Bank Account"}
      </h2>

      <div>
        <label className="block mb-2 font-medium">
          User
        </label>

        <select
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="border rounded-lg px-3 py-2 w-full"
          required
        >
          <option value="">Select User</option>

          {users.map((user) => (
            <option key={user.id} value={user.id}>
               ({user.email})
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Bank Name
        </label>

        <input
          className="border rounded-lg px-3 py-2 w-full"
          value={bankName}
          onChange={(e) => setBankName(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Account Holder
        </label>

        <input
          className="border rounded-lg px-3 py-2 w-full"
          value={accountHolder}
          onChange={(e) => setAccountHolder(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Account Number
        </label>

        <input
          className="border rounded-lg px-3 py-2 w-full"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Confirm Account Number
        </label>

        <input
          className="border rounded-lg px-3 py-2 w-full"
          value={confirmAccountNumber}
          onChange={(e) =>
            setConfirmAccountNumber(e.target.value)
          }
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">
          IFSC Code
        </label>

        <input
          className="border rounded-lg px-3 py-2 w-full"
          value={ifsc}
          onChange={(e) => setIfsc(e.target.value.toUpperCase())}
          required
        />
      </div>

      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={verified}
          onChange={(e) => setVerified(e.target.checked)}
        />

        Verified
      </label>

      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Save
        </button>

        <button
          type="button"
          onClick={() => router.back()}
          className="border px-5 py-2 rounded-lg"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}