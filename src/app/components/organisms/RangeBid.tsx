import React from "react";
import Text from "../atom/Text";
import Price from "../molecules/Price";

const DATA_PRODUCT_DETAIL = {
  productName: "Emis New Logo Mix Ball Cap Beige Navy",
  brand: "EMIS",
  productId: "EMIS-1033",
  prices: [
    { type: "start", value: 3900 },
    { type: "highest", value: 4100 },
    { type: "last", value: 4050 },
  ],
};

const RangeBid = () => {
  const { productName, brand, productId, prices } = DATA_PRODUCT_DETAIL;
  return (
    <div className="lg:border-b">
      <Text label={productName} className="text-xl mb-3" />
      <div className="inline-flex gap-1 text-gray-500 mb-3 lg:text-sm text-xs">
        <Text className="turncate" label={brand} />
        <div>|</div>
        <Text label={productId} />
      </div>
      <div className="flex justify-around py-6 text-center">
        {prices.map((item,index) => (
          <Price key={index} type={item.type} price={item.value} />
        ))}
      </div>
    </div>
  );
};

export default RangeBid;
