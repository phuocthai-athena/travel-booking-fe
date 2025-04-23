import ClientLayout from "@/layouts/client-layout";
import { clientRoutes } from "@/routes/client-routes";
import ProtectedRoute from "@/routes/protected-route";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Client Routes */}
        <Route element={<ClientLayout />}>
          {clientRoutes.map((route) => {
            // Wrap auth routes (login/register) with ProtectedRoute
            if (route.path === "/login" || route.path === "/register") {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    <ProtectedRoute isAuthRoute>
                      <route.component />
                    </ProtectedRoute>
                  }
                />
              );
            }
            return <Route key={route.path} path={route.path} element={<route.component />} />;
          })}
        </Route>

        {/* Admin Routes (Protected) */}
        {/* <Route element={isAuthenticated && isAdmin ? <AdminLayout /> : <Navigate to="/login" />}>
          {adminRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.Component />} />
          ))}
        </Route> */}

        {/* 404 */}
        <Route path="*" element={<div className="p-4 text-center">404 - Không tìm thấy</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
