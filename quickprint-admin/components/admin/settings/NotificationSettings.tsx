"use client";

import { useState } from "react";

export default function NotificationSettings() {
  const [settings, setSettings] = useState({
    email: true,
    sms: false,
    machineOffline: true,
    paperLow: true,
    withdrawals: true,
  });

  function toggle(key: keyof typeof settings) {
    setSettings({
      ...settings,
      [key]: !settings[key],
    });
  }

  return (
    <div className="bg-white border rounded-xl p-6">

      <h2 className="text-xl font-semibold mb-5">
        Notification Settings
      </h2>

      <div className="space-y-4">

        {Object.entries(settings).map(([key, value]) => (
          <label
            key={key}
            className="flex items-center gap-3"
          >
            <input
              type="checkbox"
              checked={value}
              onChange={() =>
                toggle(key as keyof typeof settings)
              }
            />

            <span className="capitalize">
              {key.replace(/([A-Z])/g, " $1")}
            </span>

          </label>
        ))}

      </div>

      <button
        className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg"
        onClick={() => alert("Notifications Saved")}
      >
        Save Settings
      </button>

    </div>
  );
}