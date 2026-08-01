import { notFound } from "next/navigation";

import { bankAccounts } from "@/lib/dummyBanks";
import BankDetails from "@/components/admin/bank/BankDetails";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function BankDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  const bank = bankAccounts.find(
    (item) => item.id === Number(id)
  );

  if (!bank) {
    notFound();
  }

  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-3xl font-bold">
          Bank Account Details
        </h1>

        <p className="text-gray-500 mt-1">
          View and manage bank account information.
        </p>

      </div>

      <BankDetails bank={bank} />

    </div>
  );
}