// Helper function to handle API responses
export const handleApiResponse = (response) => {
  // Check if response is successful
  if (response.status >= 200 && response.status < 300) {
    return {
      success: true,
      data: response.data,
      status: response.status,
    };
  }

  // Handle error responses
  return {
    success: false,
    error: response.data,
    status: response.status,
  };
};

// Helper function to handle API errors
export const handleApiError = (error) => {
  // Check if error has a response
  if (error.response) {
    return {
      success: false,
      error: error.response.data,
      status: error.response.status,
      message: error.response.data.message || "An error occurred",
    };
  }

  // Check if error is a request error (no response)
  if (error.request) {
    return {
      success: false,
      error: null,
      status: 0,
      message: "No response received from server",
    };
  }

  // Handle other errors
  return {
    success: false,
    error: null,
    status: 0,
    message: error.message || "An unknown error occurred",
  };
};

// Helper function to create API request with error handling
export const apiRequest = async (apiCall) => {
  try {
    const response = await apiCall();
    return handleApiResponse(response);
  } catch (error) {
    return handleApiError(error);
  }
};
