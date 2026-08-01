import PayoutDetails from "@/components/admin/payouts/payoutsDetails";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function PayoutDetailsPage({ params }: Props) {
  const { id } = await params;

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        Payout Request #{id}
      </h1>

      <PayoutDetails id={Number(id)} />

    </div>
  );
}