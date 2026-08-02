import PageHeader from "@/components/ui/PageHeader";
import UserForm from "@/components/admin/users/UserForm";

export default function AddUserPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Add User"
        description="Create a new SnapPrint user."
      />

      <UserForm />
    </div>
  );
}