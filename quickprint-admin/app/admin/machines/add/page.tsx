"use client";

import PageHeader from "@/components/ui/PageHeader";
import MachineForm from "@/components/admin/machines/MachineForm";

export default function AddMachinePage() {
  return (
    <div className="space-y-6">

      <PageHeader
        title="Add Machine"
        description="Register a new SnapPrint machine."
      />

      <MachineForm />

    </div>
  );
}