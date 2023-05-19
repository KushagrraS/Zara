import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Icons } from "../../public/Icons";

export const Menu = ({
  menuClassName,
  isMenuOpened,
  isSearchOpen,
}: {
  menuClassName?: string;
  isMenuOpened?: boolean;
  isSearchOpen?: boolean;
}) => {
  const router = useRouter();
  return (
    <div
      className={`flex items-center py-[60px] justify-between mx-16 relative z-[300] ${menuClassName}`}
    >
      <div className=" flex items-center">
        {!isMenuOpened ? (
          <div
            className="flex items-start flex-col mr-10 cursor-pointer"
            onClick={() => router.push("./menu")}
          >
            <div className="w-[30px] border-y-[1.5px] border-[#383838] mb-[10px]" />
            <div className="w-[20px] border-y-[1.5px] border-[#383838]" />
          </div>
        ) : (
          <div
            className="flex items-start flex-col mr-10 cursor-pointer"
            onClick={() => router.push("./home")}
          >
            <Image
              src={Icons.CLOSE_ICON}
              alt="Close Icon"
              className="w-[26px] h-[15px]"
            />
          </div>
        )}
        <span
          className={`text-base uppercase leading-[21px] ${
            isMenuOpened ? "tracking-[9.3px]" : "tracking-[12px]"
          } font-semibold`}
        >
          {isMenuOpened ? "Close" : "Menu"}
        </span>
      </div>
      {isSearchOpen ? (
        <div className=" flex items-center relative left-[80px]" onClick={() => router.push("./home")}>
          <div
            className="flex items-start flex-col mr-10 cursor-pointer"
          >
            <Image
              src={Icons.CLOSE_ICON}
              alt="Close Icon"
              className="w-[26px] h-[15px]"
            />
          </div>
          <span
            className={`text-base uppercase leading-[21px] ${
              isMenuOpened ? "tracking-[9.3px]" : "tracking-[12px]"
            } font-semibold cursor-pointer`}
          >
            {"Close"}
          </span>
        </div>
      ) : (
        <span
          className="uppercase tracking-[15px] cursor-pointer relative left-[80px] font-semibold"
          onClick={() => router.push("./search")}
        >
          srch
        </span>
      )}
      <div className="flex items-center flex-row">
        <div className="w-[120px] border-y-[1.5px] border-[#383838] mr-4" />
        <div className="w-[20px] border-y-[1.5px] border-[#383838]" />
        <span className="uppercase tracking-[15px] font-semibold ml-10">
          Cart
        </span>
        <span className="ml-3 font-semibold">3</span>
      </div>
    </div>
  );
};
