import { notFound } from "next/navigation";
import UserForm from "@/components/admin/users/UserForm";
import { users } from "@/lib/dummyUsers";

export default async function EditUserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    notFound();
  }

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Edit User
      </h1>

      <UserForm user={user} />

    </div>
  );
}