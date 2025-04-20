import Home from "@/pages/client/Home";
import Login from "@/pages/client/Login";
import Register from "@/pages/client/Register";

export const clientRoutes = [
  { path: "/", component: Home },
  { path: "/register", component: Register },
  { path: "/login", component: Login },
];
