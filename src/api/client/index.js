import createAxiosInstance from "../config/axiosConfig";

// Create client API instance
const clientAPI = createAxiosInstance(
  import.meta.env.VITE_CLIENT_API_URL || "http://localhost:3000/api",
);

// Auth API
export const clientAuthAPI = {
  login: (credentials) => clientAPI.post("/auth/login", credentials),
  register: (userData) => clientAPI.post("/auth/register", userData),
  logout: () => clientAPI.post("/auth/logout"),
  getProfile: () => clientAPI.get("/auth/profile"),
  refreshToken: () => clientAPI.post("/auth/refresh-token"),
  forgotPassword: (email) => clientAPI.post("/auth/forgot-password", { email }),
  resetPassword: (token, newPassword) =>
    clientAPI.post("/auth/reset-password", { token, newPassword }),
};

// Hotels API
export const clientHotelsAPI = {
  getAll: (params) => clientAPI.get("/hotels", { params }),
  getById: (id) => clientAPI.get(`/hotels/${id}`),
  search: (params) => clientAPI.get("/hotels/search", { params }),
};

// Bookings API
export const clientBookingsAPI = {
  getAll: () => clientAPI.get("/bookings"),
  getById: (id) => clientAPI.get(`/bookings/${id}`),
  create: (bookingData) => clientAPI.post("/bookings", bookingData),
  cancel: (id) => clientAPI.put(`/bookings/${id}/cancel`),
};

// Add more API modules as needed
// export const clientOtherAPI = { ... };

export default clientAPI;
