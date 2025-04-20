import React from "react";
import { TRAVEL_BOOKING_APP_NAME } from "@/lib/constants";
import Logo from "@/components/client/Logo";

const FormAuthHeader = ({ title = "" }) => {
  return (
    <>
      <div className="flex justify-center">
        <Logo />
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <h2 className="text-midnight-blue-950 text-center text-2xl leading-[140%] font-bold">
          {title}
        </h2>
        <p className="text-dove-dove-graytext-midnight-blue-950 text-center text-sm leading-[140%] font-normal">
          Cùng {TRAVEL_BOOKING_APP_NAME} đồng hành với bạn trong các chuyến đi.
        </p>
      </div>
    </>
  );
};

export default FormAuthHeader;
