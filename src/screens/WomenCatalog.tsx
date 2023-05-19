import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.css";

type WomenCatalogProps = {
  imageAddress: string;
  title: string;
  price: string;
  index: number;
};
export const WomenCatalog = ({
  womenCatalog,
}: {
  womenCatalog: WomenCatalogProps[];
}) => {
  return (
    <div className={`w-[62%] ${styles.imagesGridContainer} mr-16`}>
      {womenCatalog.map((value: WomenCatalogProps, index: number) => {
        return (
          <Link
            key={index}
            className="flex flex-col cursor-pointer items-start"
            href={`/catalog/detail/${index}`}
          >
            <Image
              src={value.imageAddress}
              alt="women catalog"
              className=" h-[400px] transition ease-in delay-150 hover:scale-105"
            />
            <span className="mt-[18px] text-[12px] font-sans font-medium">{value.title}</span>
            <span className="mt-[6px] text-[12px] font-sans font-semibold">{value.price}</span>
          </Link>
        );
      })}
      <button className="flex flex-row items-center justify-end w-[38rem]">
        <span className="uppercase tracking-[15px] font-semibold ml-10">
          More
        </span>
        <div className="h-[20px] border-[1.5px] border-[#383838] rotate-90 ml-[40px]" />
      </button>
    </div>
  );
};
