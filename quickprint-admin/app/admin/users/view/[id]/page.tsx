import { notFound } from "next/navigation";
import UserDetails from "@/components/admin/users/UserDetails";
import { users } from "@/lib/dummyUsers";

export default async function ViewUserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const user = users.find(
    (user) => user.id === Number(id)
  );

  if (!user) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        User Overview
      </h1>

      <UserDetails user={user} />
    </div>
  );
}