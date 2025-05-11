import axios from "axios";
import { TOKEN_TYPE, getToken, removeToken, setToken } from "../utils/auth";
import { ENDPOINTS } from "../utils/end-points";
import config from "./index";

const { baseURL } = config;

const createAxiosInstance = (url = "") => {
  const axiosInstance = axios.create({
    baseURL: baseURL || url,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Interceptor cho request: Thêm token vào header
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );

  // Interceptor cho response: Xử lý refresh token khi token hết hạn
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const { data } = await axios.post(ENDPOINTS.auth.refreshToken, {
            refreshToken: getToken(TOKEN_TYPE.REFRESH_TOKEN),
          });
          setToken(data.token);
          setToken(data.refreshToken, TOKEN_TYPE.REFRESH_TOKEN);
          originalRequest.headers.Authorization = `Bearer ${data.token}`;
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          removeToken();
          removeToken(TOKEN_TYPE.REFRESH_TOKEN);
          window.location.href = "/login";
          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(error);
    },
  );

  return axiosInstance;
};

export default createAxiosInstance;
