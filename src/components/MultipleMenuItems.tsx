import React from "react";

type MultipleMenuProps = {
  title1: string;
  title2: string;
  menuDivClass?: string;
  menuSpanClass1?: string;
  menuSpanClass2?: string;
};

export const MultipleMenuItems = ({
  title1,
  title2,
  menuDivClass,
  menuSpanClass1,
  menuSpanClass2,
}: MultipleMenuProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className={`flex flex-row w-[90%] ${menuDivClass}`}>
        <span
          className={`text-[130px] text-[#313131] font-bold ${menuSpanClass1} cursor-pointer transition-all ease-in delay-150 hover:scale-110 hover:-translate-y-3`}
        >
          {title1}
        </span>
        <span
          className={`text-[130px] text-[#313131] font-bold ${menuSpanClass2} cursor-pointer transition-all ease-in delay-150 hover:scale-110 hover:-translate-y-3`}
        >
          {title2}
        </span>
      </div>

      <div className="w-[90%] border-b-[1.5px] border-b-solid border-b-[#D2D2D2] relative bottom-[50px]" />
    </div>
  );
};
