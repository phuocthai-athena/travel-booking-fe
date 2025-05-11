import { logout } from "@/store/auth/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, isAdmin } = useSelector((state) => state.auth);

  return {
    user,
    isAuthenticated,
    isAdmin,
    logout: () => dispatch(logout()),
  };
};
