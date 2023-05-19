"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { Menu } from "@/components/Menu";
import { SingleMenuItem } from "@/components/SingleMenuItem";
import { MultipleMenuItems } from "@/components/MultipleMenuItems";

export default function MenuScreen() {
    const router = useRouter()
  return (
    <div className="text-[#383838] w-full h-[100vh] font-Figtree">
      <Menu isMenuOpened={true} />
      <SingleMenuItem title="Woman" onNavigate={()=>router.push('./catalog')}/>
      <MultipleMenuItems
        title1="Man"
        title2="Kids"
        menuDivClass="justify-evenly"
        menuSpanClass1="pl-[20rem]"
        menuSpanClass2="pl-[100px]"
      />
      <MultipleMenuItems
        title1="Stories"
        title2="Sale"
        menuDivClass="justify-between"
      />
    </div>
  );
}
