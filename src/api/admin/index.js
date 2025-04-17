import createAxiosInstance from "../config/axiosConfig";

// Create admin API instance
const adminAPI = createAxiosInstance(
  import.meta.env.VITE_ADMIN_API_URL || "http://localhost:3000/api/admin",
);

// Auth API
export const adminAuthAPI = {
  login: (credentials) => adminAPI.post("/auth/login", credentials),
  logout: () => adminAPI.post("/auth/logout"),
  getProfile: () => adminAPI.get("/auth/profile"),
  refreshToken: () => adminAPI.post("/auth/refresh-token"),
};

// Users API
export const adminUsersAPI = {
  getAll: (params) => adminAPI.get("/users", { params }),
  getById: (id) => adminAPI.get(`/users/${id}`),
  create: (userData) => adminAPI.post("/users", userData),
  update: (id, userData) => adminAPI.put(`/users/${id}`, userData),
  delete: (id) => adminAPI.delete(`/users/${id}`),
};

// Add more API modules as needed
// export const adminOtherAPI = { ... };

export default adminAPI;
