"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { User } from "@/services/user.service";

import UserRow from "./UserRow";

import SearchBox from "@/components/ui/SearchBox";
import DataTable from "@/components/ui/DataTable";

interface Props {
  users: User[];
  loading?: boolean;
}

export default function UserTable({
  users,
  loading = false,
}: Props) {
  const [search, setSearch] = useState("");

  const filteredUsers = useMemo(() => {
    const value = search.toLowerCase();

    return users.filter((user) => {
      return (
        user.full_name.toLowerCase().includes(value) ||
        user.email.toLowerCase().includes(value) ||
        (user.phone ?? "").toLowerCase().includes(value)
      );
    });
  }, [users, search]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <SearchBox
          value={search}
          onChange={setSearch}
          placeholder="Search users..."
        />

        <Link
          href="/admin/users/add"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          + Add User
        </Link>
      </div>

      <DataTable
        loading={loading}
        empty={filteredUsers.length === 0}
        emptyMessage="No users found."
      >
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-3">Name</th>
              <th className="text-left px-4 py-3">Email</th>
              <th className="text-left px-4 py-3">Phone</th>
              <th className="text-left px-4 py-3">Business</th>
              <th className="text-left px-4 py-3">Status</th>
              <th className="text-left px-4 py-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user) => (
              <UserRow
                key={user.id}
                user={user}
              />
            ))}
          </tbody>
        </table>
      </DataTable>
    </div>
  );
}