"use client";

import { useEffect, useState } from "react";

import machineService, {
  Machine,
} from "@/services/machine.service";

interface Props {
  value: string[];
  onChange: (machineIds: string[]) => void;
}

export default function AssignMachine({
  value,
  onChange,
}: Props) {
  const [machines, setMachines] = useState<Machine[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMachines() {
      try {
        const data = await machineService.getMachines();
        setMachines(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadMachines();
  }, []);

  function toggleMachine(machineId: string) {
    if (value.includes(machineId)) {
      onChange(
        value.filter((id) => id !== machineId)
      );
    } else {
      onChange([...value, machineId]);
    }
  }

  if (loading) {
    return (
      <div className="border rounded-lg p-4">
        Loading machines...
      </div>
    );
  }

  if (machines.length === 0) {
    return (
      <div className="border rounded-lg p-4 text-gray-500">
        No machines available.
      </div>
    );
  }

  return (
    <div className="border rounded-xl p-5 space-y-3">

      <h3 className="text-lg font-semibold">
        Assign Machines
      </h3>

      <div className="max-h-72 overflow-y-auto space-y-3">

        {machines.map((machine) => (

          <label
            key={machine.machine_id}
            className="flex items-center justify-between rounded-lg border p-3 hover:bg-gray-50 cursor-pointer"
          >

            <div>

              <p className="font-medium">
                {machine.name}
              </p>

              <p className="text-sm text-gray-500">
                {machine.machine_id}
              </p>

              <p className="text-xs text-gray-400">
                {machine.location_name}
              </p>

            </div>

            <input
              type="checkbox"
              checked={value.includes(machine.machine_id)}
              onChange={() =>
                toggleMachine(machine.machine_id)
              }
              className="h-5 w-5"
            />

          </label>

        ))}

      </div>

    </div>
  );
}