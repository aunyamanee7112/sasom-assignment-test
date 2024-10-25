import React from "react";
import { Button } from "../atom/Button";
import Text from "../atom/Text";
import ProductDetail from "../templates/ProductDetail";
import ProductPreview from "../templates/ProductPreview";
import Header from "../templates/Header";

const ProductTemplate = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full lg:h-screen px-5 xl:px-32">
      <Header />
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        <ProductPreview />
        <ProductDetail />
      </div>
    </div>
  );
};

export default ProductTemplate;
