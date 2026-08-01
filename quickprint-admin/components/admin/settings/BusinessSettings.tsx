"use client";

import { useState } from "react";

export default function BusinessSettings() {
  const [business, setBusiness] = useState({
    company: "SnapPrint",
    gst: "27ABCDE1234F1Z5",
    supportEmail: "support@snapprint.in",
    supportPhone: "9876543210",
    address: "Mumbai, India",
  });

  return (
    <div className="bg-white border rounded-xl p-6">

      <h2 className="text-xl font-semibold mb-5">
        Business Settings
      </h2>

      <div className="grid grid-cols-2 gap-5">

        <input
          className="border rounded-lg p-3"
          value={business.company}
          onChange={(e) =>
            setBusiness({ ...business, company: e.target.value })
          }
        />

        <input
          className="border rounded-lg p-3"
          value={business.gst}
          onChange={(e) =>
            setBusiness({ ...business, gst: e.target.value })
          }
        />

        <input
          className="border rounded-lg p-3"
          value={business.supportEmail}
          onChange={(e) =>
            setBusiness({
              ...business,
              supportEmail: e.target.value,
            })
          }
        />

        <input
          className="border rounded-lg p-3"
          value={business.supportPhone}
          onChange={(e) =>
            setBusiness({
              ...business,
              supportPhone: e.target.value,
            })
          }
        />

      </div>

      <textarea
        className="border rounded-lg p-3 w-full mt-5"
        rows={3}
        value={business.address}
        onChange={(e) =>
          setBusiness({
            ...business,
            address: e.target.value,
          })
        }
      />

      <button
        className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg"
        onClick={() => alert("Business Saved")}
      >
        Save Business
      </button>

    </div>
  );
}