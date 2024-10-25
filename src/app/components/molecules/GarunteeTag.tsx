import React from "react";
import Image from "next/image";
import Text from "../atom/Text";

interface IGarunteeTag {
  text: string;
  icon: string;
}
const GarunteeTag = ({ text, icon }: IGarunteeTag) => {
  return (
    <div className="flex gap-4 items-center flex-wrap justify-center lg:flex-nowrap ">
      <Image src={icon} width={30} height={30} alt="" />
      <Text className="text-xs lg:text-sm text-gray-500" label={text} ></Text>
    </div>
  );
};

export default GarunteeTag;
