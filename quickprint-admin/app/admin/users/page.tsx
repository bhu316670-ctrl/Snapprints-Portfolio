"use client";

import Link from "next/link";

import useUsers from "@/hooks/useUsers";

import UserTable from "@/components/admin/users/UserTable";
import PageHeader from "@/components/ui/PageHeader";

export default function UsersPage() {
  const { users, loading } = useUsers();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Users"
        description="Manage registered users."
        action={
          <Link
            href="/admin/users/add"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            + Add User
          </Link>
        }
      />

      <UserTable
        users={users}
        loading={loading}
      />
    </div>
  );
}