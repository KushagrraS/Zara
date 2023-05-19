"use client";

import React from "react";
import { Menu } from "@/components/Menu";
import { womenCatalog } from "../../utils";
import { WomenCatalog } from "@/screens/WomenCatalog";
import { Filter } from "@/screens/Filter";
import { Footer } from "@/components/Footer";

export default function Women() {
  return (
    <div className="text-[#383838] font-Figtree">
      <Menu />
      <div className="flex flex-row mx-[40px]">
        <WomenCatalog womenCatalog={womenCatalog} />
        <div className="w-full h-[100vh] ml-[84px]">
          <Filter />
        </div>
      </div>
      <Footer footerClassName="mt-[100px]"/>
    </div>
  );
}
