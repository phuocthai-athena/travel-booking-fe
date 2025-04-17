import { useEffect } from "react";
import { useStore } from "@/providers/StoreProvider";

const Bookings = () => {
  const store = useStore();
  const { bookings, isLoading, error, fetchUserBookings } = store;

  useEffect(() => {
    fetchUserBookings();
  }, [fetchUserBookings]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">My Bookings</h1>

      {bookings.length === 0 ? (
        <div className="py-8 text-center">
          <p className="text-gray-600">You don't have any bookings yet.</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {bookings.map((booking) => (
            <div key={booking.id} className="rounded-lg bg-white p-4 shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">{booking.type}</h3>
                  <p className="text-gray-600">{booking.details}</p>
                </div>
                <span
                  className={`rounded px-2 py-1 text-sm ${
                    booking.status === "confirmed"
                      ? "bg-green-100 text-green-800"
                      : booking.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                  }`}
                >
                  {booking.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookings;
