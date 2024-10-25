import React from "react";
import Text from "../atom/Text";
import { formattedTHB } from "@/app/helper/helper";

interface IPrice {
  type: string;
  price: number;
}

const Price = ({ type, price }: IPrice) => {
  return (
    <div className="inline-flex flex-col items-center gap-1">
      <Text
        className="text-xs text-gray-500"
        label={
          type === "start"
            ? "starting form"
            : type === "highest"
            ? "hightest bid"
            : "last sale"
        }
      />
      <Text className="text-xl font-medium" label={formattedTHB(price)} />
    </div>
  );
};

export default Price;
