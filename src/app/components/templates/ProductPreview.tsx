import React from "react";
import Image from "next/image";
import Text from "../atom/Text";
import Script from "next/script";

const ProductPreview: React.FC = () => {
  return (
    <div className="inline-grid grid-cols-1 justify-start items-start w-full h-full pt-5 lg:pt-0 pb-16">
      <div className="inline-grid grid-cols-2 gap-4 w-fit">
        <Text
          iconPrefix="https://d2cva83hdk3bwc.cloudfront.net/icon/r2s-display-medium.png"
          label="Ready to Ship"
        />{" "}
        <Text
          iconPrefix="https://d2cva83hdk3bwc.cloudfront.net/icon/pre-order-display-medium.png"
          label="Pre-order"
        />{" "}
      </div>
      <Script
        src="/images/emis.jpeg"
        strategy="beforeInteractive" // Preload before the interactive part
      />
      <div className="w-full inline-grid justify-center">
        <Image src="/images/emis.jpeg" width={600} height={600} alt="product" />
      </div>
    </div>
  );
};

export default ProductPreview;
