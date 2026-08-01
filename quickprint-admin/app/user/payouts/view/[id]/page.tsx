import { notFound } from "next/navigation";

import PageHeader from "@/components/ui/PageHeader";
import PayoutDetails from "@/components/user/payouts/PayoutDetails";

const payouts = [
  {
    id: 1,
    requestedAt: "2026-07-25",
    amount: 7250,
    bankName: "ICICI Bank",
    accountNumber: "XXXX2456",
    transactionId: "TXN987654",
    status: "Paid",
  },
  {
    id: 2,
    requestedAt: "2026-07-20",
    amount: 4800,
    bankName: "HDFC Bank",
    accountNumber: "XXXX8891",
    transactionId: "",
    status: "Approved",
  },
  {
    id: 3,
    requestedAt: "2026-07-18",
    amount: 3200,
    bankName: "SBI",
    accountNumber: "XXXX1012",
    transactionId: "",
    status: "Rejected",
  },
  {
    id: 4,
    requestedAt: "2026-07-27",
    amount: 5400,
    bankName: "Axis Bank",
    accountNumber: "XXXX5558",
    transactionId: "",
    status: "Pending",
  },
];

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function PayoutViewPage({
  params,
}: Props) {
  const { id } = await params;

  const payout = payouts.find(
    (item) => item.id === Number(id)
  );

  if (!payout) {
    notFound();
  }

  return (
    <div className="space-y-8">

      <PageHeader
        title="Payout Details"
        description="View complete payout information."
      />

      <PayoutDetails payout={payout} />

    </div>
  );
}