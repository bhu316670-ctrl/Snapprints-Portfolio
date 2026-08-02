"use client";

import Link from "next/link";

import StatusBadge from "@/components/ui/StatusBadge";

import userService, {
  User,
} from "@/services/user.service";

interface Props {
  user: User;
}

export default function UserRow({
  user,
}: Props) {
  async function handleDelete() {
    if (!confirm("Delete this user?")) return;

    try {
      await userService.deleteUser(user.id);

      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Unable to delete user.");
    }
  }

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-3">
        {user.full_name}
      </td>

      <td className="px-4 py-3">
        {user.email}
      </td>

      <td className="px-4 py-3">
        {user.phone ?? "-"}
      </td>

      <td className="px-4 py-3">
        {user.business_name ?? "-"}
      </td>

      <td className="px-4 py-3">
        <StatusBadge status={user.status} />
      </td>

      <td className="px-4 py-3">
        <div className="flex gap-3">
          <Link
            href={`/admin/users/view/${user.id}`}
            className="text-blue-600 hover:underline"
          >
            View
          </Link>

          <Link
            href={`/admin/users/edit/${user.id}`}
            className="text-green-600 hover:underline"
          >
            Edit
          </Link>

          <button
            onClick={handleDelete}
            className="text-red-600 hover:underline"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}