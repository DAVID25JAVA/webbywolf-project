import React from "react";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { assets } from "../../public/assets";

function Customer() {
  return (
    <div className="bg-gray-100 py-10 md:my-36 my-10 mt-14 relative">
      <div className="absolute left-0 bottom-0 h-6 w-[95%]   bg-linear-to-r from-blue-900 via-green-500 to-purple-900"></div>
      <div className="max-w-7xl mx-auto md:px-8 px-4 ">
        <div className="">
          <h1 className="font-extrabold md:text-3xl text-2xl text-blue-700">
            Lorem ipsum dolor sit <br /> amet consectetur. <br /> Dignissim
            tellus.
          </h1>
          <p className="text-base text-gray-700 py-5 max-w-xl">
            Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi
            blandit laoreet urna sapien quam pulvinar. Dolor aliquet est tortor
            tincidunt ultricies feugiat mauris. Aliquam platea turpis porta nisl
            felis. Massa in facilisis semper libero eget eu quisque bibendum
            platea. Tortor fames.
          </p>
          <button className="flex mb-12 sm:mb-10 md:mb-0 items-center gap-2 text-white bg-blue-700 hover:bg-blue-600 px-3 py-1 mt-3">
            Lorem Ipsum <MoveRight />
          </button>

          {/* card */}
          <div className="bg-white max-w-lg p-5 shadow-lg mt-5 relative md:top-28 ">
            <p className="text-gray-700 font-semibold text-lg">
              Lorem ipsum dolor sit
            </p>
            <p className="text-gray-700 text-base pt-5">
              Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae
              amet habitasse semper.
            </p>
            <p className="text-gray-700 text-base ">
              Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut
              placerat vitae amet suspendisse fermentum velit. Nibh dolor nunc
              id tristique sit.
            </p>
            <p className="text-gray-700 text-base ">
              Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae
              amet habitasse semper.
            </p>
          </div>

          {/* Image */}
          <div className="absolute -top-14 right-0 hidden md:block">
            <Image
              alt="img"
              src={assets?.frined?.src}
              width={500}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
