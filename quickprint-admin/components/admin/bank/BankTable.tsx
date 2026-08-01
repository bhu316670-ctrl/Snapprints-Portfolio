"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

import { bankAccounts } from "@/lib/dummyBanks";
import BankRow from "./BankRow";
import SearchBox from "@/components/ui/SearchBox";
import DataTable from "@/components/ui/DataTable";

export default function BankTable() {
  const [search, setSearch] = useState("");

  const filtered = bankAccounts.filter((bank) =>
    bank.userName.toLowerCase().includes(search.toLowerCase()) ||
    bank.bankName.toLowerCase().includes(search.toLowerCase()) ||
    bank.accountNumber.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-5">

      <div className="flex justify-between">

        <SearchBox
  value={search}
  onChange={setSearch}
  placeholder="Search bank accounts..."
/>

        <Link
          href="/admin/bank-accounts/add"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={18} />
          Add Bank Account
        </Link>

      </div>

      <DataTable
  loading={false}
  empty={filtered.length === 0}
  emptyMessage="No bank accounts found."
>
  <table className="w-full">

    <thead className="bg-gray-100">

      <tr>

        <th className="text-left p-3">Owner</th>

        <th className="text-left p-3">Bank</th>

        <th className="text-left p-3">Account Holder</th>

        <th className="text-left p-3">Account Number</th>

        <th className="text-left p-3">IFSC</th>

        <th className="text-left p-3">Status</th>

        <th className="text-left p-3">Actions</th>

      </tr>

    </thead>

    <tbody>

      {filtered.map((bank) => (
        <BankRow
          key={bank.id}
          bank={bank}
        />
      ))}

    </tbody>

  </table>
</DataTable>

    </div>
  );
}