import { notFound } from "next/navigation";

import PageHeader from "@/components/ui/PageHeader";
import UserForm from "@/components/admin/users/UserForm";

import userService from "@/services/user.service";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditUserPage({
  params,
}: Props) {
  const { id } = await params;

  const user = await userService.getUser(id);

  if (!user) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Edit User"
        description={user.full_name}
      />

      <UserForm user={user} />
    </div>
  );
}