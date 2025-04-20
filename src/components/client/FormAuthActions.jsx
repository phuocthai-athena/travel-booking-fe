import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const FormAuthActions = ({
  route = "",
  btnPrimary = "",
  questionTitle = "",
  btnSecondary = "",
}) => {
  return (
    <div className="mt-7 flex flex-col items-center justify-center gap-3">
      <Button type="submit" className="">
        {btnPrimary}
      </Button>
      <p className="text-dove-gray-400 text-center text-sm">
        {questionTitle}
        <Button asChild variant="link" className="ml-2 p-0">
          <Link to={route}>{btnSecondary}</Link>
        </Button>
      </p>
    </div>
  );
};

export default FormAuthActions;
