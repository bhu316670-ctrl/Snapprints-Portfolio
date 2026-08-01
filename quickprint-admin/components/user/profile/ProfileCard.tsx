"use client";

import Link from "next/link";
import { UserCircle, Pencil } from "lucide-react";

interface Props {
  profile: {
    fullName: string;
    email: string;
    phone: string;
    role: string;
    status: string;
  };
}

export default function ProfileCard({ profile }: Props) {
  return (
    <div className="bg-white border rounded-xl shadow-sm p-8">

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

        <div className="flex justify-center">

          <div className="w-28 h-28 rounded-full bg-blue-100 flex items-center justify-center">

            <UserCircle
              size={70}
              className="text-blue-600"
            />

          </div>

        </div>

        <div className="flex-1">

          <h2 className="text-2xl font-bold">
            {profile.fullName}
          </h2>

          <p className="text-gray-600 mt-2">
            {profile.role}
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-4">

            <div>

              <p className="text-sm text-gray-500">
                Email
              </p>

              <p className="font-medium">
                {profile.email}
              </p>

            </div>

            <div>

              <p className="text-sm text-gray-500">
                Phone
              </p>

              <p className="font-medium">
                {profile.phone}
              </p>

            </div>

            <div>

              <p className="text-sm text-gray-500">
                Account Status
              </p>

              <span
                className={`inline-flex mt-1 px-3 py-1 rounded-full text-sm font-medium ${
                  profile.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {profile.status}
              </span>

            </div>

          </div>

        </div>

        <div>

          <Link
            href="/user/profile/edit"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg"
          >
            <Pencil size={18} />
            Edit Profile
          </Link>

        </div>

      </div>

    </div>
  );
}