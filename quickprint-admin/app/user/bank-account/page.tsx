import Link from "next/link";
import { Plus } from "lucide-react";

import PageHeader from "@/components/ui/PageHeader";
import BankCard from "@/components/user/bank/BankCard";

const bankAccounts = [
  {
    id: 1,
    bankName: "ICICI Bank",
    accountHolder: "Bhushan Jadhav",
    accountNumber: "XXXX2456",
    ifsc: "ICIC0001234",
    verified: true,
    primary: true,
  },
  {
    id: 2,
    bankName: "HDFC Bank",
    accountHolder: "Bhushan Jadhav",
    accountNumber: "XXXX8891",
    ifsc: "HDFC0004321",
    verified: false,
    primary: false,
  },
];

export default function BankAccountsPage() {
  return (
    <div className="space-y-8">

      <PageHeader
        title="Bank Accounts"
        description="Manage your withdrawal bank accounts."
      />

      <div className="flex justify-end">

        <Link
          href="/user/bank-account/add"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg flex items-center gap-2"
        >
          <Plus size={18} />
          Add Bank Account
        </Link>

      </div>

      <div className="grid gap-6">

        {bankAccounts.map((bank) => (
          <BankCard
            key={bank.id}
            bank={bank}
          />
        ))}

      </div>

    </div>
  );
}