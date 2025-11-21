import React from "react";
import { assets, secondHeroSection } from "../../../public/assets";
import Image from "next/image";
import { MoveRight, PhoneCall } from "lucide-react";

function SecondHeroSection() {
  console.log(secondHeroSection);

  return (
    <div className="max-w-7xl mx-auto md:px-4">
      <div className="shadow p-5 mx-5">
        <p className="text-base text-blue-600 font-semibold">
          Lorem ipsum dolor sit
        </p>
        <div className="flex justify-between gap-5 item s-center mt-1">
          {/* left side content */}
          <div className="w-[50%]">
            <h1 className="mt-2 text-black md:text-3xl text-2xl font-bold w-xs uppercase leading-10">
              Lorem ipsum dolor sit amet
            </h1>
            <p className="text-gray-700 leading-7 pt-3">
              Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
              facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget
              integer in nam. Non nisl iaculis at felis aliquet. Hendrerit
              tellus at purus lectus.
            </p>
            {secondHeroSection?.map((item) => (
              <div key={item?.id} className="flex items-center gap-3">
                <Image
                  alt="img"
                  src={item?.img}
                  className="w-36 space-y-2 p-2"
                />
                <p className="text-base text-gray-700 max-w-xs">{item?.content}</p>
              </div>
            ))}
          </div>
          {/* right side Image */}
          <div>
            <Image
              alt="img"
              src={assets?.Section1Image?.src}
              width={500}
              height={300}
            />
          </div>
        </div>
        <div className="pt-4 flex gap-3">
                  <button className="bg-blue-700 font-semibold rounded hover:bg-blue-800 text-white flex p-2 gap-2">Lorem Ipsum <MoveRight /></button>
                  <p className="flex gap-2 items-center text-blue-800 font-semibold"><PhoneCall size={20} />123456789</p>
        </div>
      </div>
    </div>
  );
}

export default SecondHeroSection;
