import createAxiosInstance from "../config/axios-config";
import { apiRequest } from "../utils/api-utils";
import { ENDPOINTS } from "../utils/end-points";

// Create client API instance
const clientAPI = createAxiosInstance();

// Auth API
export const clientAuthAPI = {
  register: (formData) => apiRequest(() => clientAPI.post(ENDPOINTS.auth.register, formData)),
  login: (formData) => apiRequest(() => clientAPI.post(ENDPOINTS.auth.login, formData)),
  logout: () => apiRequest(() => clientAPI.post(ENDPOINTS.auth.logout)),
  refreshToken: () => apiRequest(() => clientAPI.post(ENDPOINTS.auth.refreshToken)),
};

export default clientAPI;
