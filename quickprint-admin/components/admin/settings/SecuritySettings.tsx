"use client";

import { useState } from "react";

export default function SecuritySettings() {
  const [passwords, setPasswords] = useState({
    current: "",
    next: "",
    confirm: "",
  });

  return (
    <div className="bg-white border rounded-xl p-6">

      <h2 className="text-xl font-semibold mb-5">
        Security
      </h2>

      <div className="grid grid-cols-3 gap-4">

        <input
          type="password"
          placeholder="Current Password"
          className="border rounded-lg p-3"
          value={passwords.current}
          onChange={(e) =>
            setPasswords({
              ...passwords,
              current: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="New Password"
          className="border rounded-lg p-3"
          value={passwords.next}
          onChange={(e) =>
            setPasswords({
              ...passwords,
              next: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="border rounded-lg p-3"
          value={passwords.confirm}
          onChange={(e) =>
            setPasswords({
              ...passwords,
              confirm: e.target.value,
            })
          }
        />

      </div>

      <button
        className="mt-5 bg-red-600 text-white px-5 py-2 rounded-lg"
        onClick={() => alert("Password Changed")}
      >
        Change Password
      </button>

    </div>
  );
}