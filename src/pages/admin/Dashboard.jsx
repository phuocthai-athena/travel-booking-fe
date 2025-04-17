import { useEffect } from "react";
import { useAdminSelector } from "@/store/admin/hooks";

const Dashboard = () => {
  const { users, bookings, isLoading, error, fetchUsers, fetchBookings } = useAdminSelector((state) => state.admin);

  useEffect(() => {
    fetchUsers();
    fetchBookings();
  }, [fetchUsers, fetchBookings]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-lg bg-white p-4 shadow">
          <h2 className="mb-2 text-lg font-semibold">Users</h2>
          <p className="text-3xl font-bold">{users.length}</p>
        </div>

        <div className="rounded-lg bg-white p-4 shadow">
          <h2 className="mb-2 text-lg font-semibold">Bookings</h2>
          <p className="text-3xl font-bold">{bookings.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
