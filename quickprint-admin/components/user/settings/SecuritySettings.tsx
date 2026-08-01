"use client";

import { useState } from "react";

export default function SecuritySettings() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function updatePassword(e: React.FormEvent) {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Password updated successfully.");

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  }

  return (
    <form
      onSubmit={updatePassword}
      className="bg-white border rounded-xl shadow-sm p-6"
    >

      <h2 className="text-xl font-semibold mb-6">
        Security Settings
      </h2>

      <div className="space-y-5">

        <div>
          <label className="block mb-2 font-medium">
            Current Password
          </label>

          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            New Password
          </label>

          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Confirm New Password
          </label>

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Update Password
        </button>

      </div>

    </form>
  );
}