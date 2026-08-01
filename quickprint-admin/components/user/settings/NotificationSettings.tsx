"use client";

import { useState } from "react";

export default function NotificationSettings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [withdrawalAlerts, setWithdrawalAlerts] = useState(true);
  const [payoutAlerts, setPayoutAlerts] = useState(true);

  function saveNotifications() {
    alert("Notification settings updated.");
  }

  return (
    <div className="bg-white border rounded-xl shadow-sm p-6">

      <h2 className="text-xl font-semibold mb-6">
        Notification Settings
      </h2>

      <div className="space-y-5">

        <label className="flex justify-between items-center">
          <span>Email Notifications</span>
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={(e) => setEmailNotifications(e.target.checked)}
          />
        </label>

        <label className="flex justify-between items-center">
          <span>SMS Notifications</span>
          <input
            type="checkbox"
            checked={smsNotifications}
            onChange={(e) => setSmsNotifications(e.target.checked)}
          />
        </label>

        <label className="flex justify-between items-center">
          <span>Withdrawal Alerts</span>
          <input
            type="checkbox"
            checked={withdrawalAlerts}
            onChange={(e) => setWithdrawalAlerts(e.target.checked)}
          />
        </label>

        <label className="flex justify-between items-center">
          <span>Payout Alerts</span>
          <input
            type="checkbox"
            checked={payoutAlerts}
            onChange={(e) => setPayoutAlerts(e.target.checked)}
          />
        </label>

        <button
          onClick={saveNotifications}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Save Preferences
        </button>

      </div>

    </div>
  );
}