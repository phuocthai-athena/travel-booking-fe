import Contact from "@/pages/client/Contact";
import Home from "@/pages/client/Home";
import Login from "@/pages/client/Login";
import Register from "@/pages/client/Register";
import Tour from "@/pages/client/Tour";
import TravelGuide from "@/pages/client/TravelGuide";

export const clientRoutes = [
  { path: "/", component: Home },
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  { path: "/tour", component: Tour },
  { path: "/travel-guide", component: TravelGuide },
  { path: "/contact", component: Contact },
];
