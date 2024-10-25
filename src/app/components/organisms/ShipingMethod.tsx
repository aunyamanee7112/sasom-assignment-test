import React from "react";
import Textlist from "../molecules/Textlist";
import Text from "../atom/Text";

const DATA_SHIPPING_DETAIL = [
  {
    header: "Same day delivery",
    description:
      "Messenger delivery on scheduled date & time (fee base on distance)",
    icon: "https://d2cva83hdk3bwc.cloudfront.net/icon/shipping-sameday.svg",
  },
  {
    header: "Standard delivery",
    description:
      "Ship via provided delivery service after authentication (3-5 days)",
    icon: "https://d2cva83hdk3bwc.cloudfront.net/icon/shipping-standard.svg",
  },
];

const ShipingMethod = () => {
  return (
    <div className="pt-10">
      <Text label="shipping method" className="capitalize" iconSuffix="/info.svg"/>
      <div className="inline-flex flex-col">
        {DATA_SHIPPING_DETAIL.map((item) => (
          <Textlist
            description={item.description}
            header={item.header}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ShipingMethod;
