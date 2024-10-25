import React from "react";
import { Button } from "../atom/Button";

const ActionsButton = () => {
  return (
    <div className="w-full h-28 lg:h-fit relative">
      <div className="flex gap-3 lg:gap-5 px-5 py-5 lg:py-10 fixed bottom-0 r-0 lg:relative w-full bg-white">
        <Button label="sell" variant="primary" />
        <Button label="buy" variant="secondary" />
      </div>
    </div>
  );
};

export default ActionsButton;
