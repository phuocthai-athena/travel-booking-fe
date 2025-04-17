import { useState } from "react";
import { Link } from "react-router-dom";
import { TRAVEL_BOOKING_APP_NAME } from "@/lib/constants";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className="bg-dove-gray-0 px-4 py-2.5 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <a href="https://flowbite.com" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              {TRAVEL_BOOKING_APP_NAME}
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="text-burnt-sienna-500 hover:text-burnt-sienna-600 focus:ring-burnt-sienna-200 mr-2 rounded-lg px-4 py-2 font-medium focus:ring-4 focus:outline-none lg:px-5 lg:py-2.5"
            >
              Log in
            </a>
            <a
              href="#"
              className="bg-burnt-sienna-500 hover:bg-burnt-sienna-600 focus:ring-burnt-sienna-200 mr-2 rounded-lg px-4 py-2 font-medium text-white focus:ring-4 focus:outline-none lg:px-5 lg:py-2.5"
            >
              Get started
            </a>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none lg:hidden"
              aria-controls="mobile-menu-2"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                // Close icon
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } w-full items-center justify-between lg:order-1 lg:flex lg:w-auto`}
            id="mobile-menu-2"
          >
            <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              {["Trang chủ", "Tour", "Cẩm nang du lịch", "Liên hệ"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="lg:hover:text-burnt-sienna-500 lg:text-midnight-blue-950 text-burnt-sienna-500 hover:bg-burnt-sienna-50 hover:border-burnt-sienna-500 block rounded border border-transparent py-2 pr-4 pl-3 uppercase lg:border-0 lg:p-0 lg:hover:bg-transparent"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
    // <header className="text-white bg-blue p-sm">
    //   <nav className="flex justify-between mx-auto max-w-7xl">
    //     <Link to="/" className="text-xl font-bold">
    //       MyApp
    //     </Link>
    //     <div className="space-x-sm">
    //       <Link to="/" className="hover:text-accent">
    //         Home
    //       </Link>
    //       <Link to="/products" className="hover:text-accent">
    //         Products
    //       </Link>
    //       {isAdmin && (
    //         <Link to="/admin" className="hover:text-accent">
    //           Admin
    //         </Link>
    //       )}
    //       {isAuthenticated ? (
    //         <button onClick={logoutUser} className="hover:text-accent">
    //           Logout
    //         </button>
    //       ) : (
    //         <Link to="/login" className="hover:text-accent">
    //           Login
    //         </Link>
    //       )}
    //     </div>
    //   </nav>
    // </header>
  );
};

export default Header;
