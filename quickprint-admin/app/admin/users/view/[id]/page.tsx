import { notFound } from "next/navigation";

import PageHeader from "@/components/ui/PageHeader";
import UserDetails from "@/components/admin/users/UserDetails";

import userService from "@/services/user.service";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ViewUserPage({
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
        title="User Details"
        description={user.full_name}
      />

      <UserDetails user={user} />
    </div>
  );
}