// Admin API endpoints
export const adminAPI = {
  getUsers: () => fetch("/api/admin/users").then((res) => res.json()),
  getBookings: () => fetch("/api/admin/bookings").then((res) => res.json()),
};

// Client API endpoints
export const clientAPI = {
  getProfile: () => fetch("/api/user/profile").then((res) => res.json()),
  getBookings: () => fetch("/api/user/bookings").then((res) => res.json()),
  getFavorites: () => fetch("/api/user/favorites").then((res) => res.json()),
};
