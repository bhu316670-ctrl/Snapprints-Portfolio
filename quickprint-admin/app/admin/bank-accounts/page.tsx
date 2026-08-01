import BankTable from "@/components/admin/bank/BankTable";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";

export default function BankAccountsPage() {
  return (
    <div className="space-y-6">

      <div>

        <PageHeader
    title="Bank Accounts"
    description="Manage user bank accounts."
    action={
        <Link
            href="/admin/bank-accounts/add"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
            + Add Bank
        </Link>
    }
/>


      </div>

      <BankTable />

    </div>
  );
}