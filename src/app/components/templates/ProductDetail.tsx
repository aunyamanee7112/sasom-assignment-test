import React from "react";
import ActionsButton from "../organisms/ActionsButtons";
import GarunteeBar from "../organisms/GarunteeBar";
import ShipingMethod from "../organisms/ShipingMethod";
import RangeBid from "../organisms/RangeBid";

const ProductDetail = () => {
  return (
    <div className="w-full lg:px-5">
      <RangeBid />
      <ShipingMethod />
      <GarunteeBar />
      <ActionsButton />
    </div>
  );
};

export default ProductDetail;
