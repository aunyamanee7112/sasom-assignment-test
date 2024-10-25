import React from "react";
import Image from "next/image";
import Breadcrumb, { IBreadcrumbList } from "../atom/Breadcrumb";

const BREADCRUMB_LIST: IBreadcrumbList[] = [
  { item: "home" },
  { item: "Accessories" },
  { item: "Emis" },
  { item: "Emis New Logo Mix Ball Cap Beige Navy" },
];

const Header = () => {
  return (
    <div className="w-full flex justify-between py-5 lg:pb-10 gap-5">
      <Breadcrumb list={BREADCRUMB_LIST} />
      <div className="inline-flex gap-3 min-w-12 cursor-pointer">
        <Image src="/share.svg" width={25} height={25} alt="icon" />
        <Image src="/notification.svg" width={25} height={25} alt="icon" />
      </div>
    </div>
  );
};

export default Header;
