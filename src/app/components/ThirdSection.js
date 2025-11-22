import React from "react";
import { assets, thirdSection } from "../../../public/assets";
import Image from "next/image";

function ThirdSection() {
  return (
    <div className="md:my-28 my-14 px-8 mx-auto max-w-7xl">
      <div className="flex md:py-14 py-8 relative justify-between items-center gap-10">
        <div className="   absolute left-0 bottom-0 h-6 w-full   bg-linear-to-r from-blue-900 via-green-500 to-purple-900"></div>
        <div className="max-w-2xl">
          <p className="text-blue-700 font-bold text-base">
            Lorem ipsum dolor sit amet{" "}
          </p>
          <h1 className="md:text-xl text-xl py-4 font-bold text-black tracking-tighter uppercase">
            Lorem ipsum dolor sit amet consectetur. Eu elit.
          </h1>
          <p className="text-base text-gray-700 leading-6 ">
            Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo
            eleifend condimentum in vitae faucibus. Amet massa malesuada sit
            pretium. Donec pharetra erat lacus suspendisse ornare.{" "}
          </p>
          <div className="mt-8">
            {thirdSection?.map((item) => (
              <div key={item?.id} className="flex  gap-3 py-4">
                <div className="w-36 md:w-20">
                  <Image alt="img" src={item?.img} width={70} height={60} />
                </div>
                <div className="">
                  <p className="text-black font-semibold text-[19px] ">
                    {item?.tittle}
                  </p>
                  <p className="text-gray-700  text-base pt-1">
                    {item?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <Image
            className=""
            alt="img"
            src={assets?.Section2Image?.src}
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
