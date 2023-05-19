import React from "react";

type SignleMenuProps = {
  title: string;
  menuDivClass?: string;
  menuSpanClass?: string;
  onNavigate?: () => void;
};

export const SingleMenuItem = ({
  title,
  menuDivClass,
  menuSpanClass,
  onNavigate,
}: SignleMenuProps) => {
  return (
    <div className={`flex flex-col items-center ${menuDivClass}`}>
      <span
        className={`text-[130px] text-[#313131] font-bold pl-[100px] ${menuSpanClass} cursor-pointer transition-all ease-in delay-150 hover:scale-110 hover:-translate-y-3 self-start`}
        onClick={onNavigate}
      >
        {title}
      </span>
      <div className="w-[90%] border-b-[1.5px] border-b-solid border-b-[#D2D2D2] relative bottom-[50px]" />
    </div>
  );
};
