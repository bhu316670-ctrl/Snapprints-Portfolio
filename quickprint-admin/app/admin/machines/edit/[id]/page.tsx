"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import PageHeader from "@/components/ui/PageHeader";
import MachineForm from "@/components/admin/machines/MachineForm";

import machineService, {
  Machine,
} from "@/services/machine.service";

export default function EditMachinePage() {

  const { id } = useParams<{
  id: string;
}>();

  const [machine, setMachine] =
    useState<Machine | null>(null);

  useEffect(() => {

    async function loadMachine() {

      const data =
        await machineService.getMachine(id as string);

      if (data) {
        setMachine(data);
      }

    }

    loadMachine();

  }, [id]);

  if (!machine) {
    return <div>Loading...</div>;
  }

  return (

    <div className="space-y-6">

      <PageHeader
        title="Edit Machine"
        description={machine.machine_id}
      />

      <MachineForm machine={machine} />

    </div>

  );
}