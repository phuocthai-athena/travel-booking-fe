import { adminUsersAPI } from "./admin";
import { clientAuthAPI, clientHotelsAPI } from "./client";
import { apiRequest } from "./utils/apiUtils";

// Example of using client API with error handling
export const loginUser = async (credentials) => {
  const result = await apiRequest(() => clientAuthAPI.login(credentials));

  if (result.success) {
    // Store token in localStorage
    localStorage.setItem("token", result.data.token);
    return result.data;
  } else {
    // Handle error
    console.error("Login failed:", result.message);
    throw new Error(result.message);
  }
};

// Example of using admin API with error handling
export const getAdminUsers = async (params) => {
  const result = await apiRequest(() => adminUsersAPI.getAll(params));

  if (result.success) {
    return result.data;
  } else {
    // Handle error
    console.error("Failed to get users:", result.message);
    throw new Error(result.message);
  }
};

// Example of using client API directly
export const searchHotels = async (searchParams) => {
  try {
    const response = await clientHotelsAPI.search(searchParams);
    return response.data;
  } catch (error) {
    console.error("Failed to search hotels:", error);
    throw error;
  }
};

// Example of using admin API directly
export const createAdminUser = async (userData) => {
  try {
    const response = await adminUsersAPI.create(userData);
    return response.data;
  } catch (error) {
    console.error("Failed to create user:", error);
    throw error;
  }
};
