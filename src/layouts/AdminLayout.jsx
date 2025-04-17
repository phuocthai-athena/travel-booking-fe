import { Outlet } from "react-router-dom";
import Sidebar from "@/components/admin/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-neutral-200">
      <Sidebar />
      <main className="flex-grow p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
