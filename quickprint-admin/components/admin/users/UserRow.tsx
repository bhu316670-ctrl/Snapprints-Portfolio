"use client";

import Link from "next/link";
import { User } from "@/lib/dummyUsers";
import StatusBadge from "@/components/ui/StatusBadge";

interface UserRowProps {
  user: User;
}

export default function UserRow({ user }: UserRowProps) {
  return (
    <tr className="border-b hover:bg-gray-50">

      <td className="px-4 py-3">{user.fullName}</td>

      <td className="px-4 py-3">{user.email}</td>

      <td className="px-4 py-3">{user.phone}</td>

      <td className="px-4 py-3 text-center">
        {user.assignedMachines.length}
      </td>

      <td>
    <StatusBadge status={user.status} />
</td>

      <td className="px-4 py-3">

        <div className="flex gap-3">

          <Link
            href={`/admin/users/view/${user.id}`}
            className="text-blue-600"
          >
            View
          </Link>

          <Link
            href={`/admin/users/edit/${user.id}`}
            className="text-green-600"
          >
            Edit
          </Link>

          <button className="text-red-600">
            Delete
          </button>

        </div>

      </td>

    </tr>
  );
}