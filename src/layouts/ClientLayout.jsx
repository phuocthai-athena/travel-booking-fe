import { Outlet } from "react-router-dom";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

const ClientLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-100">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default ClientLayout;
