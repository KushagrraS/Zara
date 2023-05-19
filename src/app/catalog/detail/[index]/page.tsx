"use client";
import React from "react";
import { womenCatalog } from "@/utils";
import { Menu } from "@/components/Menu";
import CatalogImage from "@/screens/Detail/CatalogImage";
import CatalogDetails from "@/screens/Detail/CatalogDetails";
import CatalogSimilarItems from "@/screens/Detail/CatalogSimilarItems";
import { Footer } from "@/components/Footer";

export default function Details({ params }: { params: any }) {
  const { index } = params;
  const userData = womenCatalog[index];
  return (
    <div className="text-[#383838] h-[100vh] font-Figtree">
      <Menu />
      <div className="flex flex-row items-center mx-[30px] mb-[100px]">
        <CatalogImage userData={userData} />
        <div className="w-[48%] !h-[100vh]">
          <CatalogDetails userData={userData} />
        </div>
      </div>
      <div className="mt-[110px] mx-[30px]">
      <span className="text-[26px] tracking-[2px] uppercase font-bold">Similar Items</span>
      <CatalogSimilarItems param={index}/>
      </div>
      <button className="flex flex-row items-center justify-center w-[100%]">
        <span className="uppercase tracking-[15px] font-semibold ml-10">
          More
        </span>
        <div className="h-[20px] border-[1.5px] border-[#383838] rotate-90 ml-[40px]" />
      </button>
      <Footer footerClassName="mt-[60px]"/>
    </div>
  );
}
