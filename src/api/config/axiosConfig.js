import axios from "axios";

// Create base axios instance with default config
const createAxiosInstance = (baseURL) => {
  const instance = axios.create({
    baseURL,
    timeout: 10000, // 10 seconds
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Request interceptor
  instance.interceptors.request.use(
    (config) => {
      // Get token from localStorage
      const token = localStorage.getItem("token");

      // If token exists, add it to headers
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  // Response interceptor
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // Handle common errors
      if (error.response) {
        // Server responded with a status code outside the 2xx range
        const { status } = error.response;

        // Handle 401 Unauthorized
        if (status === 401) {
          // Clear token and redirect to login
          localStorage.removeItem("token");
          window.location.href = "/login";
        }

        // Handle 403 Forbidden
        if (status === 403) {
          // Redirect to access denied page
          window.location.href = "/access-denied";
        }
      } else if (error.request) {
        // Request was made but no response received
        console.error("No response received:", error.request);
      } else {
        // Something happened in setting up the request
        console.error("Error setting up request:", error.message);
      }

      return Promise.reject(error);
    },
  );

  return instance;
};

export default createAxiosInstance;
