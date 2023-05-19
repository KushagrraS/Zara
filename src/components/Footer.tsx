import React from "react";

import Image from "next/image";
import { Images } from "../../public/Images";

const socilaMedia = ["INSTAGRAM", "Facebook", "Pinterest", "YOUTUBE", "VK"];

export const Footer = ({ footerClassName }: { footerClassName?: string }) => {
  return (
    <div className={`w-full ${footerClassName} font-Figtree`}>
      <Image
        src={Images.FOOTER_IMAGE}
        alt="Footer Image"
        className="!w-[100%] !h-[510px] absolute"
      />
      <div className="!w-[100%] h-[510px] flex flex-col items-center justify-center relative text-[#FFFFFF] uppercase">
        <Image
          src={Images.ZARA_LOGO_LIGHT}
          alt="Zara Logo"
          className="w-[100px] h-[80px]"
        />
        <div className="mt-[60px]">
          {socilaMedia.map((value,index)=> (
            <span key={index} className="mr-[35px] text-[12px] font-normal tracking-[2px] cursor-pointer">{value}</span>
          ))}
        </div>
        <div className="w-[60%] border-[#FFFFFF40] border-[1px] mt-[55px]"/>
        <div className="flex flex-row items-center uppercase mt-[50px] opacity-50">
        <span className="text-[10px] font-thin tracking-[2px] cursor-pointer">Privacy policy</span>
        <span className="text-[10px] font-thin tracking-[2px] mx-[20px]">/</span>
        <span className="text-[10px] font-thin tracking-[2px] cursor-pointer">Terms of use</span>
        </div>
      </div>
    </div>
  );
};
