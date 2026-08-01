"use client";

import Link from "next/link";
import { User } from "@/lib/dummyUsers";
import { machines } from "@/lib/dummyData";

interface Props {
  user: User;
}

export default function UserDetails({ user }: Props) {
  const assignedMachines = machines.filter((machine) =>
    user.assignedMachines.includes(machine.machineId)
  );

  const totalRevenue = assignedMachines.reduce(
    (sum, machine) => sum + machine.revenue,
    0
  );

  // Dummy values for now
  const totalPrints = 2345;
  const withdrawableBalance = 7250;

  return (
    <div className="space-y-8">
      {/* User Information */}
      <div className="border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          User Information
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <p><strong>Name:</strong> {user.fullName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Company:</strong> {user.company}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <p><strong>Status:</strong> {user.status}</p>
        </div>
      </div>

      {/* Statistics */}
      <div className="border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          Statistics
        </h2>

        <div className="grid grid-cols-4 gap-4">
          <div className="border rounded p-4">
            <p>Total Machines</p>
            <h3 className="text-2xl font-bold">
              {assignedMachines.length}
            </h3>
          </div>

          <div className="border rounded p-4">
            <p>Total Revenue</p>
            <h3 className="text-2xl font-bold">
              ₹{totalRevenue.toLocaleString()}
            </h3>
          </div>

          <div className="border rounded p-4">
            <p>Total Prints</p>
            <h3 className="text-2xl font-bold">
              {totalPrints.toLocaleString()}
            </h3>
          </div>

          <div className="border rounded p-4">
            <p>Withdrawable</p>
            <h3 className="text-2xl font-bold">
              ₹{withdrawableBalance.toLocaleString()}
            </h3>
          </div>
        </div>
      </div>

      {/* Assigned Machines */}
      <div className="border rounded-lg overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">
            Assigned Machines
          </h2>
        </div>

        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3">Machine ID</th>
              <th className="text-left p-3">Machine Name</th>
              <th className="text-left p-3">Location</th>
              <th className="text-left p-3">Status</th>
              <th className="text-left p-3">Revenue</th>
            </tr>
          </thead>

          <tbody>
            {assignedMachines.map((machine) => (
              <tr
                key={machine.id}
                className="border-t"
              >
                <td className="p-3">{machine.machineId}</td>
                <td className="p-3">{machine.name}</td>
                <td className="p-3">{machine.location}</td>
                <td className="p-3">{machine.status}</td>
                <td className="p-3">
                  ₹{machine.revenue.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex gap-3">
        <Link
          href="/admin/users"
          className="border px-5 py-2 rounded"
        >
          Back
        </Link>

        <Link
          href={`/admin/users/edit/${user.id}`}
          className="bg-blue-600 text-white px-5 py-2 rounded"
        >
          Edit User
        </Link>
      </div>
    </div>
  );
}