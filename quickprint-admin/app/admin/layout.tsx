import AdminSidebar from "@/components/layout/AdminSidebar";
import AdminHeader from "@/components/layout/AdminHeader";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-gray-100">

      <AdminSidebar />

      <div className="flex-1 min-h-screen flex flex-col">

        <AdminHeader />

        <main className="p-6">
          {children}
        </main>

      </div>

    </div>
  );
}