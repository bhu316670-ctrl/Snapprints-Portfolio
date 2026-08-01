import UserHeader from "@/components/layout/UserHeader";
import UserSidebar from "@/components/layout/UserSidebar";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <UserSidebar />

      <div className="flex-1 flex flex-col">

        <UserHeader />

        <main className="flex-1 p-8">
          {children}
        </main>

      </div>

    </div>
  );
}