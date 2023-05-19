"use client";

import React from "react";
import { Menu } from "@/components/Menu";

export default function Search() {
  const [searchInput, setSearchInput] = React.useState("");
  return (
    <div className="text-[#383838] w-full">
      <Menu isSearchOpen={true}/>
      <div className="h-[70vh] w-[100vw] flex items-center justify-center flex-col">
        <input
          value={searchInput}
          placeholder="What are you looking for?"
          className="bg-transparent w-[90%] text-[60px] text-center focus:outline-none"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <span className="w-[90%] border-b-[1.5px] border-b-[#D2D2D2] border-b-solid" />
      </div>
    </div>
  );
}
