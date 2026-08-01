"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import PageHeader from "@/components/ui/PageHeader";

import machineService, {
  Machine,
} from "@/services/machine.service";

import StatusBadge from "@/components/ui/StatusBadge";

export default function MachineDetailsPage() {

  const params = useParams();

  const machineId = params.id as string;

  const [machine, setMachine] =
    useState<Machine | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    async function loadMachine() {

      try {

        const data =
          await machineService.getMachine(machineId);

        if (data) {
          setMachine(data);
        }

      } finally {

        setLoading(false);

      }

    }

    loadMachine();

  }, [machineId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!machine) {
    return (
      <div className="text-center py-10">
        Machine not found.
      </div>
    );
  }

  return (

    <div className="space-y-8">

      <PageHeader
        title={machine.name}
        description={machine.machine_id}
      />

      <div className="bg-white rounded-xl border p-8">

        <div className="grid md:grid-cols-2 gap-8">

          <div>

            <h3 className="font-semibold mb-5">
              Machine Information
            </h3>

            <div className="space-y-4">

              <Info
                label="Machine ID"
                value={machine.machine_id}
              />

              <Info
                label="Machine Name"
                value={machine.name}
              />

              <Info
                label="Location"
                value={machine.location_name}
              />

              <Info
                label="Address"
                value={machine.address || "-"}
              />

              <Info
                label="City"
                value={machine.city || "-"}
              />

              <Info
                label="State"
                value={machine.state || "-"}
              />

              <Info
                label="Pincode"
                value={machine.pincode || "-"}
              />

            </div>

          </div>

          <div>

            <h3 className="font-semibold mb-5">
              Statistics
            </h3>

            <div className="space-y-4">

              <Info
                label="Revenue"
                value={`₹${Number(machine.revenue).toLocaleString()}`}
              />

              <Info
                label="Total Jobs"
                value={machine.total_jobs}
              />

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Status
                </span>

                <StatusBadge
                  status={
                    machine.is_online
                      ? "Online"
                      : "Offline"
                  }
                />

              </div>

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Print Lock
                </span>

                <span className="font-medium">

                  {machine.is_print_locked
                    ? "Locked"
                    : "Unlocked"}

                </span>

              </div>

              <Info
                label="Last Seen"
                value={
                  machine.last_seen_at
                    ? new Date(
                        machine.last_seen_at
                      ).toLocaleString()
                    : "-"
                }
              />

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex justify-between border-b pb-2">

      <span className="text-gray-500">
        {label}
      </span>

      <span className="font-medium">
        {value}
      </span>

    </div>
  );
}