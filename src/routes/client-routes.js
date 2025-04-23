import Contact from "@/pages/client/contact";
import Home from "@/pages/client/home";
import Login from "@/pages/client/login";
import Register from "@/pages/client/register";
import Tour from "@/pages/client/tour";
import TravelGuide from "@/pages/client/travel-guide";

export const clientRoutes = [
  { path: "/", component: Home },
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  { path: "/tour", component: Tour },
  { path: "/travel-guide", component: TravelGuide },
  { path: "/contact", component: Contact },
];
