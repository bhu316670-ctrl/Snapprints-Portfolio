import PageHeader from "@/components/ui/PageHeader";
import MachineStats from "@/components/user/machines/MachineStats";
import MachineTable from "@/components/user/machines/MachineTable";

export default function UserMachinesPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="My Machines"
        description="Monitor all assigned printing machines."
      />

      <MachineStats />

      <MachineTable />
    </div>
  );
}