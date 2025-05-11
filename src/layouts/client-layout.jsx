import { Outlet } from "react-router-dom";
import Footer from "@/components/client/footer";
import Header from "@/components/client/header";

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
