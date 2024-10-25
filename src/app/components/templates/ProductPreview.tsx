import React from "react";
import Image from "next/image";
import Text from "../atom/Text";

const ProductPreview = () => {
  return (
    <div className="inline-grid flex-col justify-center items-center w-full h-full pt-5 lg:pt-0 pb-16">
      <div className="inline-grid grid-cols-2 gap-4 w-fit h-[20px] lg:h-[150px]">
        <Text iconPrefix="https://d2cva83hdk3bwc.cloudfront.net/icon/r2s-display-medium.png" label="Ready to Ship" /> <Text iconPrefix="https://d2cva83hdk3bwc.cloudfront.net/icon/pre-order-display-medium.png" label="Pre-order" />{" "}
      </div>
      <Image src="/images/emis.jpeg" width={600} height={600}  className="justify-self-center" alt="product" />
    </div>
  );
};

export default ProductPreview;
