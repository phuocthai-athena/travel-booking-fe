import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: "/admin/dashboard", label: "Dashboard", icon: "📊" },
    { path: "/admin/users", label: "Users", icon: "👥" },
    { path: "/admin/bookings", label: "Bookings", icon: "📅" },
    { path: "/admin/hotels", label: "Hotels", icon: "🏨" },
    { path: "/admin/flights", label: "Flights", icon: "✈️" },
    { path: "/admin/settings", label: "Settings", icon: "⚙️" },
  ];

  return (
    <aside className="w-64 bg-white shadow-lg">
      <div className="p-4">
        <h1 className="text-primary mb-8 text-xl font-bold">Admin Panel</h1>
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-2 rounded-lg p-2 ${
                    location.pathname === item.path
                      ? "bg-primary text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
