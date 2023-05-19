import React from "react";
import Image from "next/image";
import { Images } from "../../../public/Images";

type Props = {
  imageAddress: any;
  title: string;
  price: string | number;
  index: number;
  discountPrice?: string | number;
};

export default function CatalogImage({ userData }: { userData: Props }) {
  return (
    <div className="w-[50%] !h-[100vh] flex flex-row">
      <Image
        alt="main image"
        src={userData.imageAddress}
        className="w-[80%] h-[100%]"
      />
      <div className="flex flex-col h-[100%] justify-center relative right-[20px]">
        <Image
          alt="main image"
          src={Images.CATALOG_IMAGE_1}
          className="w-[130px] h-[180px] object-contain transition ease-in delay-100 hover:scale-110 cursor-pointer"
        />
        <Image
          alt="main image"
          src={Images.CATALOG_IMAGE_2}
          className="w-[130px] h-[180px] my-[20px] object-contain transition ease-in delay-100 hover:scale-110 cursor-pointer"
        />
        <Image
          alt="main image"
          src={Images.CATALOG_IMAGE_3}
          className="w-[130px] h-[180px] object-contain transition ease-in delay-100 hover:scale-110 cursor-pointer"
        />
        <Image
          alt="main image"
          src={Images.CATALOG_IMAGE_4}
          className="w-[130px] h-[180px] mt-[20px] object-contain transition ease-in delay-100 hover:scale-110 cursor-pointer"
        />
      </div>
    </div>
  );
}
