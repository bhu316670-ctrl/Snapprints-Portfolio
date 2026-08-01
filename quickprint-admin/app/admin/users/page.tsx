import Link from "next/link";

import UserTable from "@/components/admin/users/UserTable";
import PageHeader from "@/components/ui/PageHeader";

export default function UsersPage() {
  return (
    <div>

      <PageHeader
        title="Users"
        description="Manage registered users and assigned machines."
        action={
          <Link
            href="/admin/users/add"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            + Add User
          </Link>
        }
      />

      <UserTable />

    </div>
  );
}