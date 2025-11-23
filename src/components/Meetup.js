import Image from "next/image";
import React from "react";
import { assets } from "../../public/assets";
import { MoveRight } from "lucide-react";

function Meetup() {
  return (
    <div className="md:mt-20 mt-10 lg:mr-16 2xl:mr-0">
      <div className="2xl:max-w-7xl xl:mx-auto bg-gray-100 relative">
         <div className="absolute left-0 bottom-0 h-6 w-[95%]   bg-linear-to-r from-blue-900 via-green-500 to-purple-900"></div>
        <div className="flex flex-col md:flex-row px-4 md:px-0">
          <div>
            <Image
              alt="img"
              src={assets?.meetup?.src}
              width={500}
              height={200}
            />
          </div>
          <div className="md:p-14 px-5 mt-14">
            <p className="text-blue-700 text-base font-semibold">Lorem Ipsum</p>
            <p className="text-black font-bold md:text-4xl uppercase text-2xl max-w-lg py-4">
              <span className="text-blue-700">Lorem</span> ipsum dolor sit amet
              consectetur. Enim donec.
            </p>
            <p className="text-gray-700 text-base max-w-lg">
              Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim
              amet non.{" "}
            </p>
            <div className="flex md:gap-36 gap-20 mt-6">
              <div className="text-gray-700 font-semibold space-y-3">
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
              </div>
              <div className="text-gray-700 font-semibold space-y-3">
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum</p>
              </div>
            </div>

            <button className="flex mb-12 sm:mb-10 md:mb-0 items-center gap-2 text-white bg-blue-700 hover:bg-blue-600 px-3 py-1 mt-8">
              Lorem Ipsum <MoveRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meetup;