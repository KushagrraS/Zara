import Image from "next/image";
import React from "react";
import { Icons } from "../../../public/Icons";
import { matchData } from "@/utils";

type Props = {
  imageAddress: any;
  title: string;
  price: string | number;
  index: number;
  discountPrice?: string | number;
};

const catalogData = [
  {
    description:
      "Round neck waistcoat featuring front welt pockets, contrast trims, a pleat in the back and metal appliqué fastening in the front.",
    summary: {
      color: "Navy Blue",
      heightOfModel: "177 cm. / 5′ 9″",
      number: "2388/749",
    },
  },
];

export default function CatalogDetails({ userData }: { userData: Props }) {
  return (
    <div className="flex flex-col items-center justify-center text-[#313131]">
      <span className="w-[80%] break-words text-[32px] tracking-[2px] font-bold">
        {userData.title}
      </span>
      <span className="w-[80%] flex items-center justify-start text-[32px] font-extrabold font-sans mt-[20px]">
        {userData.price}
      </span>
      {catalogData.map((value) => {
        return (
          <div className="flex flex-row items-center mt-[30px] justify-start relative left-[10%]">
            <div className="w-[50%] flex flex-col font-sans">
              <span className="uppercase text-[#31313166] tracking-[2px] text-[12px] font-semibold">
                Description
              </span>
              <span className="tracking-[1px] text-[14px] mt-[15px] font-light leading-[25px]">
                {value.description}
              </span>
            </div>
            <div className="flex flex-col font-sans items-start ml-[10px]">
              <span className="uppercase text-[#31313166] tracking-[2px] text-[12px] font-semibold">
                Summary
              </span>
              <span className="tracking-[1px] text-[14px] mt-[15px] font-light capitalize">
                {`Color: ${value.summary.color}`}
              </span>
              <span className="tracking-[1px] text-[14px] mt-[5px] font-light">
                {`Height of model: ${value.summary.heightOfModel}`}
              </span>
              <span className="tracking-[1px] text-[14px] mt-[5px] font-light">
                {`${value.summary.number}`}
              </span>
            </div>
          </div>
        );
      })}
      <div className="flex items-center w-[100%] flex-row tracking-[1px] text-[14px] mt-[40px] font-light font-sans justify-evenly relative left-[3%]">
        <button className="w-[40%] border-[1px] border-solid border-[#D2D2D2] py-[16px] flex flex-row items-center justify-between px-[20px] transition delay-100 ease-in hover:scale-105">
          <span>Choose size</span>
          <div className="flex flex-row items-center">
            <span className="mr-8">S</span>
            <Image
              src={Icons.DOWN_CHEVRON}
              alt="Down Icon"
              className="w-[9px] h-[6px]"
            />
          </div>
        </button>
        <button className="w-[40%] bg-[#383838] text-[#FFFFFF] py-[16px] flex flex-row items-center justify-between px-[20px] transition delay-100 ease-in hover:scale-105">
          <span className="font-semibold">Add to cart</span>
          <span className="font-bold">+</span>
        </button>
      </div>
      <div className="w-[90%] border-[0.5px] border-[#D2D2D2] mt-[60px] relative left-[2%]" />
      <div className="flex flex-col items-center w-[90%] justify-start mt-[60px]">
        <span className="w-[100%] text-[12px] text-[#31313166] uppercase tracking-[2px]">
          Match with
        </span>
        <div className="flex flex-row mt-[30px] justify-between font-sans">
          {matchData.map((value, index) => {
            return (
              <div className="flex flex-col mr-[20px]" key={index}>
                <Image
                  src={value.imageAddress}
                  alt="Match Image"
                  className="w-[180px] h-[270px] transition delay-100 duration-100 ease-in hover:scale-110 cursor-pointer"
                />
                <span className="capitalize mt-[20px] w-[80%] text-[14px] h-[40px]">
                  {value.title}
                </span>
                <span className="mt-[5px]">{value.price}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
