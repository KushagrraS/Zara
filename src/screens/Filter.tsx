import React from "react";

const filterOption1 = ["Woman", "Man", "Kids", "Sale"];

const filterOption2 = ["Size", "Colour", "Additional", "Price"];

export const Filter = () => {
  const [selectedFilter, setSelectedFilter] = React.useState("");
  const [selectedFilterOption2, setSelectedFilterOption2] = React.useState({
    title: "",
    selected: "",
  });

  return (
    <div className="text-[#383838] font-Figtree">
      {filterOption1.map((value, index) => {
        return (
          <ul key={index}>
            <div className="flex flex-row items-center">
              {selectedFilter === filterOption1[index] && (
                <div className="h-[40px] border-[1.2px] border-[#383838] rotate-90" />
              )}
              <button
                className="text-[18px] p-6 transition duration-100 ease-in delay-150 hover:scale-110 flex justify-center !w-[200px] font-sans"
                onClick={() => {
                  !selectedFilter.includes(filterOption1[index])
                    ? setSelectedFilter(filterOption1[index])
                    : setSelectedFilter("");
                }}
              >
                {value}
              </button>
            </div>
          </ul>
        );
      })}
      <div className="!h-full border-[1px] border-[#D2D2D2] mt-[50px]" />
      <div className="mt-[50px]">
      {filterOption2.map((value, index) => {
        return (
          <ul key={index}>
            <div className="flex flex-row items-center justify-start">
            <button className="opacity-70 font-sans text-[14px] p-6 transition duration-100 ease-in delay-150 hover:scale-110 flex justify-start !w-[200px] hover:opacity-100 hover:font-semibold">
              {value}
            </button>
            <span className="font-sans text-[14px] font-light text-[#C4C4C4]">Any</span>
            <button className="w-[20%] font-sans text-[14px] flex items-center justify-end text-[#C4C4C4] transition ease-in-out duration-150 delay-150 hover:-translate-y-[5px] hover:text-[#383838]" onClick={()=>console.log(index)}>+</button>
            </div>
            
          </ul>
        );
      })}
      </div>
      
    </div>
  );
};
