import { Outlet } from "react-router-dom";
import Footer from "@/components/client/Footer";
import Header from "@/components/client/Header";

const ClientLayout = () => {
  return (
    <div className="bg-dove-gray-50 flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-grow items-center justify-center">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default ClientLayout;
