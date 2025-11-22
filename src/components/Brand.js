import React from "react";
import { bikeBrand } from "../../public/assets";
import Image from "next/image";

function Brand() {
  return (
    <div className="my-20 max-w-7xl px-8 mx-auto">
      <h1 className="uppercase text-black font-bold md:text-4xl tracking-tight text-lg text-center ">LOREM IPSUM DOLOR SIT AMET <br /> CONSECTETUR. COMMODO LEO AMET.</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-5 gap-10 place-items-center pt-10">
        {bikeBrand?.map((brand) => (
          <div
            key={brand?.id}
            className="flex items-center justify-center md:w-36 w-20"
          >
            <Image alt="bike" src={brand?.img} className="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brand;
