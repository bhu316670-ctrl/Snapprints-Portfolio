"use client"

import MachineTable from "@/app/machines/MachineTable"
import MachineRegistration from "./MachineRegistration"

export default function MachinesPage() {
  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-semibold">Machines</h1>

      <MachineTable />

      

      <MachineRegistration /> 

    </div>
  )
}