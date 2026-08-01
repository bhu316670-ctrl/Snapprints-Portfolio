import { notFound } from "next/navigation";

import PageHeader from "@/components/ui/PageHeader";

import BankDetails from "@/components/user/bank/BankDetails";
import BankHistory from "@/components/user/bank/BankHistory";

const bankAccounts = [
  {
    id: 1,
    bankName: "ICICI Bank",
    accountHolder: "Bhushan Jadhav",
    accountNumber: "XXXX2456",
    ifsc: "ICIC0001234",
    verified: true,
    primary: true,
    createdAt: "2026-07-10",
    updatedAt: "2026-07-20",
  },
  {
    id: 2,
    bankName: "HDFC Bank",
    accountHolder: "Bhushan Jadhav",
    accountNumber: "XXXX8891",
    ifsc: "HDFC0004321",
    verified: false,
    primary: false,
    createdAt: "2026-07-12",
    updatedAt: "2026-07-18",
  },
];

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
    <div className="space-y-8">

      <PageHeader
        title="Bank Account Details"
        description="View your registered bank account information."
      />

      <BankDetails bank={bank} />

      <BankHistory
        createdAt={bank.createdAt}
        updatedAt={bank.updatedAt}
        verified={bank.verified}
        primary={bank.primary}
      />

    </div>
  );
}