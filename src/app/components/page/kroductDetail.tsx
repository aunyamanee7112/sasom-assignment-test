import React from "react";
import { Button } from "../atom/Button";
import Text from "../atom/Text";

const ProductDetail = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Button label={"sell"} variant="secondary" />
      <Text label="Ready to ship" />
      <Text label="Starting from" className="text-gray-500 text-xs" />
      <Text label="Starting from" className="text-gray-500 text-xs" />
    </div>
  );
};

export default ProductDetail;
