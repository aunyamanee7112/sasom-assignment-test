import React from "react";

interface ITextComponent extends React.HTMLAttributes<HTMLDivElement>  {
  label: string;
  iconPrefix?: string;
  iconSuffix?: string;
}
const Text:React.FC<ITextComponent> = ({ label, iconPrefix, iconSuffix, ...props }) => {
  return (
    <div {...props} >
      {iconPrefix && <div>{iconPrefix}</div>}
      <p className="">{label}</p>
      {iconSuffix && <div>{iconSuffix}</div>}
    </div>
  );
};
export default Text

