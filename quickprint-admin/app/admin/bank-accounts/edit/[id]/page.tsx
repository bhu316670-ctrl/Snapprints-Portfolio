import { notFound } from "next/navigation";

import BankForm from "@/components/admin/bank/BankForm";
import { bankAccounts } from "@/lib/dummyBanks";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditBankPage({ params }: Props) {
  const { id } = await params;

  const bank = bankAccounts.find(
    (item) => item.id === Number(id)
  );

  if (!bank) {
    notFound();
  }

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        Edit Bank Account
      </h1>

      <BankForm initialData={bank} />

    </div>
  );
}