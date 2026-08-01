"use client";

import { useState } from "react";

export default function ProfileSettings() {
  const [profile, setProfile] = useState({
    name: "Admin",
    email: "admin@snapprint.in",
    phone: "9876543210",
    role: "Super Admin",
  });

  return (
    <div className="bg-white border rounded-xl p-6">

      <h2 className="text-xl font-semibold mb-5">
        Profile Settings
      </h2>

      <div className="grid grid-cols-2 gap-5">

        <input
          className="border rounded-lg p-3"
          value={profile.name}
          onChange={(e) =>
            setProfile({ ...profile, name: e.target.value })
          }
          placeholder="Name"
        />

        <input
          className="border rounded-lg p-3"
          value={profile.email}
          onChange={(e) =>
            setProfile({ ...profile, email: e.target.value })
          }
          placeholder="Email"
        />

        <input
          className="border rounded-lg p-3"
          value={profile.phone}
          onChange={(e) =>
            setProfile({ ...profile, phone: e.target.value })
          }
          placeholder="Phone"
        />

        <input
          className="border rounded-lg p-3 bg-gray-100"
          value={profile.role}
          readOnly
        />

      </div>

      <button
        className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg"
        onClick={() => alert("Profile Saved")}
      >
        Save Changes
      </button>

    </div>
  );
}