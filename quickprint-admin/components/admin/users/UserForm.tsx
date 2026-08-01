"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { User, users } from "@/lib/dummyUsers";
import { machines } from "@/lib/dummyData";

interface UserFormProps {
  user?: User;
}

export default function UserForm({ user }: UserFormProps) {
  const router = useRouter();

  const [form, setForm] = useState({
    fullName: user?.fullName ?? "",
    email: user?.email ?? "",
    phone: user?.phone ?? "",
    company: user?.company ?? "",
    address: user?.address ?? "",
    status: user?.status ?? "Active",
    assignedMachines: user?.assignedMachines ?? [],
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function toggleMachine(machineId: string) {
    const exists = form.assignedMachines.includes(machineId);

    if (exists) {
      setForm({
        ...form,
        assignedMachines: form.assignedMachines.filter(
          (m) => m !== machineId
        ),
      });
    } else {
      setForm({
        ...form,
        assignedMachines: [...form.assignedMachines, machineId],
      });
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (user) {
      const index = users.findIndex((u) => u.id === user.id);

      users[index] = {
        ...user,
        ...form,
      };

      alert("User Updated");
    } else {
      users.push({
        id: users.length + 1,
        ...form,
      });

      alert("User Created");
    }

    router.push("/admin/users");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 max-w-2xl"
    >
      <div>
        <label>Full Name</label>

        <input
          className="border rounded w-full p-2"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Email</label>

        <input
          className="border rounded w-full p-2"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Phone</label>

        <input
          className="border rounded w-full p-2"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Company</label>

        <input
          className="border rounded w-full p-2"
          name="company"
          value={form.company}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Address</label>

        <input
          className="border rounded w-full p-2"
          name="address"
          value={form.address}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Status</label>

        <select
          className="border rounded w-full p-2"
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-3">
          Assign Machines
        </h3>

        <div className="border rounded-lg p-4 space-y-2">

          {machines.map((machine) => (
            <label
              key={machine.id}
              className="flex items-center gap-3"
            >
              <input
                type="checkbox"
                checked={form.assignedMachines.includes(machine.machineId)}
                onChange={() => toggleMachine(machine.machineId)}
              />

              <span>
                {machine.machineId} - {machine.name}
              </span>

            </label>
          ))}

        </div>
      </div>

      <div className="flex gap-3">

        <button
          type="button"
          onClick={() => router.back()}
          className="border px-5 py-2 rounded"
        >
          Cancel
        </button>

        <button
          className="bg-blue-600 text-white px-5 py-2 rounded"
        >
          Save User
        </button>

      </div>

    </form>
  );
}