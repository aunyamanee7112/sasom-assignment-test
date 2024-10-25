import React from "react";
import GarunteeTag from "../molecules/GarunteeTag";

const DATA_TAG = [
  { text: "100% Authentic Guaruntee", icon: "/authenGaruntee.svg" },
  {
    text: "Anti Fruadulent Transaction",
    icon: "/antiFraudulent.svg",
  },
];

const GarunteeBar = () => {
  return (
    <div className="flex justify-around border-t py-6 gap-3">
      {DATA_TAG.map((item,index) => (
        <GarunteeTag key={index} text={item.text} icon={item.icon} />
      ))}
    </div>
  );
};

export default GarunteeBar;
