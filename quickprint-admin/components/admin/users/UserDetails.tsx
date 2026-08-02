"use client";

import Link from "next/link";

import { User } from "@/services/user.service";

interface Props {
  user: User;
}

export default function UserDetails({
  user,
}: Props) {
  return (
    <div className="space-y-8">

      <div className="bg-white rounded-xl border p-8">

        <h2 className="text-xl font-semibold mb-6">
          User Information
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <Info
            label="Full Name"
            value={user.full_name}
          />

          <Info
            label="Email"
            value={user.email}
          />

          <Info
            label="Phone"
            value={user.phone || "-"}
          />

          <Info
            label="Business Name"
            value={user.business_name || "-"}
          />

          <Info
            label="GST Number"
            value={user.gst_number || "-"}
          />

          <Info
            label="Status"
            value={user.status}
          />

          <Info
            label="Created At"
            value={new Date(
              user.created_at
            ).toLocaleString()}
          />

          <Info
            label="Updated At"
            value={new Date(
              user.updated_at
            ).toLocaleString()}
          />

        </div>

      </div>

      <div className="flex gap-3">

        <Link
          href="/admin/users"
          className="border px-5 py-2 rounded-lg"
        >
          Back
        </Link>

        <Link
          href={`/admin/users/edit/${user.id}`}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Edit User
        </Link>

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
    <div className="flex justify-between border-b pb-3">

      <span className="text-gray-500">
        {label}
      </span>

      <span className="font-medium">
        {value}
      </span>

    </div>
  );
}