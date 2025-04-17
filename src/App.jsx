import ClientLayout from "@/layouts/ClientLayout";
import { clientRoutes } from "@/routes/clientRoutes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "@/components/common/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Client Routes */}
        <Route element={<ClientLayout />}>
          {clientRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.Component />} />
          ))}
        </Route>

        {/* Admin Routes (Protected) */}
        {/* <Route element={isAuthenticated && isAdmin ? <AdminLayout /> : <Navigate to="/login" />}>
          {adminRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.Component />} />
          ))}
        </Route> */}

        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* 404 */}
        <Route path="*" element={<div className="p-4 text-center">404 - Không tìm thấy</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
