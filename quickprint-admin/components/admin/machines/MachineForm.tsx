"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import machineService from "@/services/machine.service";

import {
  Machine,
  MachinePayload,
} from "@/services/machine.service";

interface Props {
  machine?: Machine;
}

export default function MachineForm({
  machine,
}: Props) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: machine?.name || "",

    locationName:
      machine?.location_name || "",

    address:
      machine?.address || "",

    city:
      machine?.city || "",

    state:
      machine?.state || "",

    pincode:
      machine?.pincode || "",
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

      if (machine) {

        await machineService.updateMachine(
          machine.machine_id,
          form
        );

        alert("Machine updated successfully");

      } else {

        await machineService.createMachine(form);

        alert("Machine created successfully");

      }

      router.push("/admin/machines");

    } catch (error) {

      console.error(error);

      alert("Unable to save machine.");

    } finally {

      setLoading(false);

    }
  }

  return (

    <form
      onSubmit={handleSubmit}
      className="max-w-3xl bg-white rounded-xl border p-8 space-y-6"
    >

      <h2 className="text-xl font-semibold">

        {machine
          ? "Edit Machine"
          : "Create Machine"}

      </h2>

      <div>

        <label className="block mb-2">

          Machine Name

        </label>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
          required
        />

      </div>

      <div>

        <label className="block mb-2">

          Location Name

        </label>

        <input
          name="locationName"
          value={form.locationName}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
          required
        />

      </div>

      <div>

        <label className="block mb-2">

          Address

        </label>

        <input
          name="address"
          value={form.address}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

      </div>

      <div className="grid md:grid-cols-3 gap-5">

        <div>

          <label className="block mb-2">

            City

          </label>

          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

        </div>

        <div>

          <label className="block mb-2">

            State

          </label>

          <input
            name="state"
            value={form.state}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

        </div>

        <div>

          <label className="block mb-2">

            Pincode

          </label>

          <input
            name="pincode"
            value={form.pincode}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

        </div>

      </div>

      <div className="flex justify-end gap-3">

        <button
          type="button"
          onClick={() => router.back()}
          className="px-5 py-3 border rounded-lg"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 rounded-lg bg-blue-600 text-white"
        >
          {loading
            ? "Saving..."
            : machine
            ? "Update Machine"
            : "Create Machine"}
        </button>

      </div>

    </form>

  );
}