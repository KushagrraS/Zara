import React from "react";
import { womenCatalog } from "@/utils";
import Image from "next/image";

export default function CatalogSimilarItems(param: any) {
    console.log(womenCatalog.slice(param.param, 3))
  return (
    <div className="text-[#313131] mt-[60px] mb-[100px] flex flex-row">
      {womenCatalog.slice(0, 4).map((value, index) => {
        return (
          <div key={index} className="flex flex-col items-start first:mr-[10px] last:ml-[10px] mx-[10px]">
            <Image
              src={value.imageAddress}
              alt="Similar Items Images"
              className="w-[280] h-[475px] transition delay-150 ease-in hover:scale-105 cursor-pointer"
            />
            <span className="font-sans text-[14px] uppercase tracking-[2px] h-[36px] break-words mt-[20px] w-[90%]">{value.title}</span>
            <span className="mt-[6px]">{value.price}</span>
          </div>
        );
      })}
    </div>
  );
}
