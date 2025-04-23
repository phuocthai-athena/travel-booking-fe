const API_PATH = "api/auth/";

export const ENDPOINTS = {
  auth: {
    login: `${API_PATH}login`,
    register: `${API_PATH}register`,
    logout: `${API_PATH}logout`,
    refreshToken: `${API_PATH}refresh-token`,
  },
  tours: {
    getTours: "/tours",
    getTourById: (id) => `/tour/${id}`,
  },
};
