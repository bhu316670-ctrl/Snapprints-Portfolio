"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AssignMachine from "./AssignMachines";
import userService, {
  User,
} from "@/services/user.service";

interface Props {
  user?: User;
}
const [assignedMachines, setAssignedMachines] =
  useState<string[]>([]);
export default function UserForm({
  user,
}: Props) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    full_name: user?.full_name ?? "",
    email: user?.email ?? "",
    phone: user?.phone ?? "",
    business_name: user?.business_name ?? "",
    gst_number: user?.gst_number ?? "",
    password: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      if (user) {
        await userService.updateUser(user.id, {
  full_name: form.full_name,
  email: form.email,
  phone: form.phone,
  business_name: form.business_name,
  gst_number: form.gst_number,
  assignedMachines,
});

        alert("User updated successfully.");
      } else {
        await userService.createUser({
  full_name: form.full_name,
  email: form.email,
  phone: form.phone,
  business_name: form.business_name,
  gst_number: form.gst_number,
  password: form.password,
  assignedMachines,
});

        alert("User created successfully.");
      }

      router.push("/admin/users");
    } catch (err) {
      console.error(err);
      alert("Unable to save user.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl bg-white rounded-xl border p-8 space-y-6"
    >
      <h2 className="text-xl font-semibold">
        {user ? "Edit User" : "Create User"}
      </h2>

      <div>
        <label className="block mb-2">
          Full Name
        </label>

        <input
          name="full_name"
          value={form.full_name}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
          required
        />
      </div>

      <div>
        <label className="block mb-2">
          Email
        </label>

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
          required
        />
      </div>

      <div>
        <label className="block mb-2">
          Phone
        </label>

        <input
          name="phone"
          value={form.phone ?? ""}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label className="block mb-2">
          Business Name
        </label>

        <input
          name="business_name"
          value={form.business_name ?? ""}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label className="block mb-2">
          GST Number
        </label>

        <input
          name="gst_number"
          value={form.gst_number ?? ""}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />
      </div>

      {!user && (
        <div>
          <label className="block mb-2">
            Password
          </label>

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />
        </div>
      )}

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={() => router.back()}
          className="border px-5 py-3 rounded-lg"
        >
          Cancel
        </button>
      <AssignMachine
  value={assignedMachines}
  onChange={setAssignedMachines}
/>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          {loading
            ? "Saving..."
            : user
            ? "Update User"
            : "Create User"}
        </button>
      </div>
    </form>
  );
}