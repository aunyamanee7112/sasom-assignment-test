import React,  { Fragment } from "react";
import Image from "next/image";

export interface IBreadcrumbList {
  item: string;
}

const Breadcrumb = ({ list }: { list: IBreadcrumbList[] }) => {
  return (
    <div className="cursor-pointer inline-flex text-gray-500 gap-1 lg:gap-3 truncate capitalize">
      {list.map((menu, index) => (
        <Fragment key={index}>
          <div className={`${index + 1 == list.length && "truncate"}`}>
            {menu.item}
          </div>
          {index + 1 !== list.length && (
            <Image src="/chevron-right.svg" width={15} height={15} alt="" />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
