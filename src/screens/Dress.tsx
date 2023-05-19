"use client";
import Image from "next/image";
import React from "react";

type DataProps = {
    dressImage: string;
    modelImage: string;
    activeIndex: number;
    dressDescription: string;
    price: string;
  };

export const Dress = ({
  data,
  activeIndex,
}: {
  data: DataProps[];
  activeIndex: number;
}) => {
  return (
    <div className="flex items-center justify-center h-[85%] flex-col">
      {data.map((value: DataProps, index: number) => {
        if (activeIndex === index + 1) {
          return (
            <div className="flex flex-col" key={index}>
              <div className="flex flex-col-reverse relative top-[14.5rem] left-[8rem]">
                <div className="w-[150px] h-[150px] border-[1px] border-[#C4C4C4] transition ease-in-out delay-150 duration-300 hover:translate-y-1 hover:scale-110 cursor-pointer" />
                <div className="flex flex-col text-[8px] mb-[12px]">
                  <span className="w-[100px] mb-[2px]">
                    {value.dressDescription}
                  </span>
                  <span>{value.price}</span>
                </div>
              </div>
              <Image
                src={value?.dressImage}
                alt="Dress"
                style={{
                  width: 400,
                  height: 600,
                }}
              />
            </div>
          );
        }
      })}
      <div className="flex flex-row items-end absolute bottom-2 ">
        {[...Array(data.length)].map((_, i) => (
          <div
            className={`px-4 ${activeIndex !== i + 1 && "opacity-[0.3]"}`}
            key={i}
          >
            <div
              className={`border-x-[1px] ${
                activeIndex === i + 1 ? "h-[30px]" : "h-[10px]"
              } border-[1px] border-[#383838]`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
