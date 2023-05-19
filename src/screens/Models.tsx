import Image from "next/image";
import React from "react";

type DataProps = {
  dressImage: string;
  modelImage: string;
  activeIndex: number;
  dressDescription: string;
  price: string;
};

export const Models = ({
  data,
  activeIndex,
}: {
  data: DataProps[];
  activeIndex: number;
}) => {
  return (
    <div className="flex items-center justify-end">
      {data.map((value: DataProps, index: number) => {
        if (activeIndex === index + 1) {
          return (
            <Image
              alt="Model"
              src={value.modelImage}
              key={index}
              style={{
                height: "100vh",
                width: "100%",
                objectFit: "contain",
              }}
            />
          );
        }
      })}
    </div>
  );
};
