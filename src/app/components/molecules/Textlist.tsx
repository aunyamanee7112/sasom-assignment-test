import React from "react";
import Text from "../atom/Text";
import Image from "next/image";

interface ITextlist {
  description: string;
  header: string;
  icon?: string;
}

const Textlist = ({ header, description, icon }: ITextlist) => {
  return (
    <div className="inline-flex gap-3 py-5">
      {icon && <Image src={icon} width={35} height={35} alt="icon" />}
      <div className="block">
        <Text label={header} /> 
        <Text className="text-gray-500 text-sm mt-1" label={description} />
      </div>
    </div>
  );
};

export default Textlist;
