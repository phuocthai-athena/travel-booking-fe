import React from "react";
import { Link } from "react-router-dom";
import { TRAVEL_BOOKING_APP_NAME } from "@/lib/constants";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="mr-3 h-6 sm:h-9"
        alt="Flowbite Logo"
      />
      <span className="self-center text-xl font-semibold whitespace-nowrap">
        {TRAVEL_BOOKING_APP_NAME}
      </span>
    </Link>
  );
};

export default Logo;
