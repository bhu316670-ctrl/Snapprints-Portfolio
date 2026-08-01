"use client";

import { useState } from "react";

interface Props {
  initialValues?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
}

export default function ProfileForm({
  initialValues,
}: Props) {

  const [form, setForm] = useState({
    fullName: initialValues?.fullName ?? "",
    email: initialValues?.email ?? "",
    phone: initialValues?.phone ?? "",
    address: initialValues?.address ?? "",
    city: initialValues?.city ?? "",
    state: initialValues?.state ?? "",
    pincode: initialValues?.pincode ?? "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    console.log(form);

    alert("Profile updated successfully.");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border rounded-xl shadow-sm p-6 space-y-6"
    >

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label className="block mb-2 font-medium">
            Full Name
          </label>

          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Email
          </label>

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Phone
          </label>

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            City
          </label>

          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            State
          </label>

          <input
            name="state"
            value={form.state}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            PIN Code
          </label>

          <input
            name="pincode"
            value={form.pincode}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

      </div>

      <div>

        <label className="block mb-2 font-medium">
          Address
        </label>

        <input
          name="address"
          value={form.address}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3"
        />

      </div>

      <div className="flex justify-end">

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          Save Changes
        </button>

      </div>

    </form>
  );
}