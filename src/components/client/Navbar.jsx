import React from "react";
import { Link } from "react-router-dom";
import { NAV_BAR_ROUTES } from "@/lib/constants";
import { Button } from "../ui/button";

const Navbar = ({ isMenuOpen }) => {
  return (
    <div
      className={`${
        isMenuOpen ? "flex" : "hidden"
      } w-full items-center justify-between lg:order-1 lg:flex lg:w-auto`}
      id="mobile-menu-2"
    >
      <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
        {NAV_BAR_ROUTES.map((item) => (
          <li key={item.key}>
            <Button
              asChild
              variant="ghost"
              className="text-midnight-blue-950 block rounded border border-transparent py-2 pr-4 pl-3 uppercase lg:border-0 lg:p-0 lg:hover:bg-transparent"
            >
              <Link to={item.route}>{item.value}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
