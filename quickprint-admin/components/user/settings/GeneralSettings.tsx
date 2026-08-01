"use client";

import { useState } from "react";

export default function GeneralSettings() {
  const [language, setLanguage] = useState("English");
  const [timezone, setTimezone] = useState("Asia/Kolkata");
  const [theme, setTheme] = useState("Light");

  function saveSettings() {
    alert("General settings saved successfully.");
  }

  return (
    <div className="bg-white border rounded-xl shadow-sm p-6">

      <h2 className="text-xl font-semibold mb-6">
        General Settings
      </h2>

      <div className="space-y-6">

        <div>
          <label className="block mb-2 font-medium">
            Language
          </label>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
          >
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Time Zone
          </label>

          <select
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
          >
            <option>Asia/Kolkata</option>
            <option>UTC</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Theme
          </label>

          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
          >
            <option>Light</option>
            <option>Dark</option>
            <option>System</option>
          </select>
        </div>

        <button
          onClick={saveSettings}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Save Settings
        </button>

      </div>

    </div>
  );
}