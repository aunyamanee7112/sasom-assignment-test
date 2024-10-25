import React from "react";
import Image from "next/image";
interface ITextComponent extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  iconPrefix?: string;
  iconSuffix?: string;
}
const Text: React.FC<ITextComponent> = ({
  label,
  iconPrefix,
  iconSuffix,
  ...props
}) => {
  return (
    <div {...props} style={{display:'flex'}}>
      {iconPrefix && (
        <Image
          src={iconPrefix}
          className="w-fit h-fit mr-2 mt-1"
          width={15}
          height={15}
          alt="icon"
        />
      )}
      <p className="">{label}</p>
      {iconSuffix && (
        <Image
          src={iconSuffix}
          className="w-fit h-fit ml-2 mt-1"
          width={10}
          height={10}
          alt="icon"
        />
      )}
    </div>
  );
};
export default Text;
