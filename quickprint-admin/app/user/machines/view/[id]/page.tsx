import { notFound } from "next/navigation";

import PageHeader from "@/components/ui/PageHeader";
import MachineDetails from "@/components/user/machines/MachineDetails";

const machines = [
  {
    id: "1",
    machineId: "SNP001",
    name: "Engineering Block",
    location: "Mumbai",
    owner: "Bhushan Jadhav",
    status: "Online",
    revenue: 12540,
    prints: 1205,
  },
  {
    id: "2",
    machineId: "SNP002",
    name: "Library",
    location: "Mumbai",
    owner: "Bhushan Jadhav",
    status: "Offline",
    revenue: 8450,
    prints: 780,
  },
  {
    id: "3",
    machineId: "SNP003",
    name: "Admin Building",
    location: "Mumbai",
    owner: "Bhushan Jadhav",
    status: "Online",
    revenue: 16450,
    prints: 1490,
  },
];

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function MachineViewPage({
  params,
}: PageProps) {
  const { id } = await params;

  const machine = machines.find((item) => item.id === id);

  if (!machine) {
    notFound();
  }

  return (
    <div className="space-y-6">

      <PageHeader
        title="Machine Details"
        description="View complete information about your assigned machine."
      />

      <MachineDetails machine={machine} />

    </div>
  );
}