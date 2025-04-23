import { getToken } from "@/api/utils/auth";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children, isAuthRoute = false }) => {
  const token = getToken();
  const location = useLocation();

  // If it's an auth route (login/register) and user is authenticated, redirect to home
  if (isAuthRoute && token) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  // If it's a protected route and user is not authenticated, redirect to login
  if (!isAuthRoute && !token) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
