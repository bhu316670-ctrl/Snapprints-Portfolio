"use client";

import StatusBadge from "@/components/ui/StatusBadge";

interface Props {
  machine: {
    machineId: string;
    name: string;
    location: string;
    owner: string;
    status: string;
    revenue: number;
    prints: number;
  };
}

export default function MachineDetails({ machine }: Props) {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-6">

      <h2 className="text-2xl font-bold mb-6">
        Machine Details
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div>

          <p className="text-gray-500">
            Machine ID
          </p>

          <h3 className="font-semibold">
            {machine.machineId}
          </h3>

        </div>

        <div>

          <p className="text-gray-500">
            Name
          </p>

          <h3 className="font-semibold">
            {machine.name}
          </h3>

        </div>

        <div>

          <p className="text-gray-500">
            Location
          </p>

          <h3 className="font-semibold">
            {machine.location}
          </h3>

        </div>

        <div>

          <p className="text-gray-500">
            Owner
          </p>

          <h3 className="font-semibold">
            {machine.owner}
          </h3>

        </div>

        <div>

          <p className="text-gray-500">
            Revenue
          </p>

          <h3 className="font-semibold text-green-600">
            ₹{machine.revenue.toLocaleString()}
          </h3>

        </div>

        <div>

          <p className="text-gray-500">
            Prints
          </p>

          <h3 className="font-semibold">
            {machine.prints}
          </h3>

        </div>

        <div>

          <p className="text-gray-500">
            Status
          </p>

          <StatusBadge status={machine.status} />

        </div>

      </div>

    </div>
  );
}