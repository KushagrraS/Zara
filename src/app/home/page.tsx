"use client";
import React from "react";
import { Menu } from "@/components/Menu";
import Image from "next/image";
import { Images } from "../../../public/Images";
import { Dress } from "@/screens/Dress";
import { Models } from "@/screens/Models";
import { Icons } from "../../../public/Icons";

const clothesData = [
  {
    dressImage: Images.DRESS_1,
    modelImage: Images.MODEL_1,
    activeIndex: 1,
    dressDescription: "COLOUR BLOCK FAUX SUEDE T-SHIRT",
    price: "$15",
  },
  {
    dressImage: Images.DRESS_2,
    modelImage: Images.MODEL_2,
    activeIndex: 2,
    dressDescription: "SATIN FINISH PLAYSUIT DRESS",
    price: "$26",
  },
  {
    dressImage: Images.DRESS_3,
    modelImage: Images.MODEL_3,
    activeIndex: 3,
    dressDescription: "DOUBLE-BREASTED LINEN BLAZER",
    price: "$26",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = React.useState(1);
  console.log(activeIndex);
  return (
    <div className="text-[#383838]">
      <Menu />
      <div className="font-Figtree w-[100%] absolute bottom-0">
        <div className="flex flex-row ">
          <div className="w-[50%]">
            <Dress data={clothesData} activeIndex={activeIndex} />
          </div>
          <div className="w-[50%] bg-[url('/Images/Grain-Background.png')] h-[100vh]">
            <Models data={clothesData} activeIndex={activeIndex} />
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-between relative top-[280px]">
        <button
          className={`bg-[#E5E5E5] p-4 rounded-[50%] h-[50px] w-[50px] flex items-center justify-center ml-4 ${
            activeIndex === 1 ? "cursor-not-allowed" : "cursor-pointer"
          } transition-all ease-in delay-150 hover:-translate-y-1 hover:scale-110 hover:animate-bounce`}
          onClick={() => activeIndex >= 2 && setActiveIndex(activeIndex - 1)}
        >
          <Image
            src={Icons.LEFT_CHEVRON}
            alt="Left Chevron"
            className="h-[20px] w-[30px]"
          />
        </button>
        <button
          className={`bg-[#E5E5E5] p-4 rounded-[50%] h-[50px] w-[50px] flex items-center justify-center mr-4 ${
            activeIndex === clothesData.length
              ? "cursor-not-allowed"
              : " cursor-pointer"
          } transition-all ease-in delay-150 hover:-translate-y-1 hover:scale-110 hover:animate-bounce`}
          onClick={() =>
            activeIndex !== clothesData.length &&
            setActiveIndex(activeIndex + 1)
          }
        >
          <Image
            src={Icons.RIGHT_CHEVRON}
            alt="Right Chevron"
            className="h-[20px] w-[20px]"
          />
        </button>
      </div>
      <div className="w-full h-[60vh] flex items-center justify-center">
        <Image
          src={Images.ZARA_LOGO}
          alt="Logo"
          style={{
            width: 155,
            height: 120,
          }}
          className="absolute"
        />
      </div>
      <span className="uppercase tracking-[15px] font-semibold text-[13px] w-full flex items-center justify-center absolute bottom-1">
        Shop
      </span>
    </div>
  );
}
