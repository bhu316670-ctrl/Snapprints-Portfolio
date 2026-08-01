import { notFound } from "next/navigation";

import PageHeader from "@/components/ui/PageHeader";
import BankForm from "@/components/user/bank/BankForm";

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

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditBankPage({
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
    <div className="space-y-8">

      <PageHeader
        title="Edit Bank Account"
        description="Update your bank account details."
      />

      <BankForm
        initialValues={{
          bankName: bank.bankName,
          accountHolder: bank.accountHolder,
          accountNumber: bank.accountNumber,
          ifsc: bank.ifsc,
          primary: bank.primary,
        }}
      />

    </div>
  );
}