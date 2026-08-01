"use client";

import useMachines from "@/hooks/useMachines";

import PageHeader from "@/components/ui/PageHeader";

import MachineTable from "@/components/admin/machines/MachineTable";
import MachineCard from "@/components/admin/machines/MachineCard";

export default function MachinesPage() {
  const { machines, loading } = useMachines();

  return (
    <div className="space-y-8">

      <PageHeader
        title="Machines"
        description="Manage all SnapPrint machines."
      />

      {/* Desktop Table */}
      <div className="hidden lg:block">
        <MachineTable
          machines={machines}
          loading={loading}
        />
      </div>

      {/* Mobile Grid */}
      <div className="grid gap-6 lg:hidden">
        {machines.map((machine) => (
          <MachineCard
            key={machine.machine_id}
            machine={machine}
          />
        ))}
      </div>

    </div>
  );
}