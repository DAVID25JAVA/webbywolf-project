import React from "react";
import { assets, secondHeroSection } from "../../public/assets";
import Image from "next/image";
import { MoveRight, PhoneCall } from "lucide-react";

function SecondHeroSection() {
   

  return (
    <div className="max-w-7xl mx-auto md:px-4 ">
      <div className="relative mx-5 shadow-[0px_0px_10px_rgba(0,0,0,0.3)] md:p-5 px-3 py-5  md:py-14 mt-10 md:mt-0 bg-white rounded-xl">
        {/* Gradient Bottom Border */}
        <div className="absolute left-0 bottom-0 h-6 w-full   bg-linear-to-r from-blue-900 via-green-500 to-purple-900"></div>

        <p className="text-lg text-blue-600 font-semibold">
          Lorem ipsum dolor sit
        </p>
        <div className="flex justify-between gap-5 items-center mt-1">
          {/* left side content */}
          <div className="md:w-[50%] w-full">
            <h1 className="mt-2 text-black md:text-3xl text-xl tracking-tight md:tracking-normal font-bold w-xs uppercase ">
              Lorem ipsum dolor sit amet
            </h1>
            <p className="text-gray-700 md:leading-7 pt-3">
              Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
              facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget
              integer in nam. Non nisl iaculis at felis aliquet. Hendrerit
              tellus at purus lectus.
            </p>
            {secondHeroSection?.map((item) => (
              <div key={item?.id} className="flex items-center gap-3 pt-2 md:pt-3">
                <Image
                  alt="img"
                  src={item?.img}
                  className="w-36 space-y-2 p-2 rounded"
                />
                <p className="md:text-base text-sm text-gray-700 max-w-xs">
                  {item?.content}
                </p>
              </div>
            ))}
          </div>
          {/* right side Image */}
          <div className="hidden md:block">
            <Image
              alt="img"
              src={assets?.Section1Image?.src}
              width={500}
              height={300}
            />
          </div>
        </div>
        <div className="pt-8 flex gap-3 pb-10 md:pb-0">
          <button className="bg-blue-700 font-semibold rounded hover:bg-blue-800 text-white flex p-2 gap-2">
            Lorem Ipsum <MoveRight />
          </button>
          <p className="flex gap-2 items-center text-blue-800 font-semibold">
            <PhoneCall size={20} />
            123456789
          </p>
        </div>
      </div>
    </div>
  );
}

export default SecondHeroSection;
