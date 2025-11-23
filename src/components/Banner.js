import React from "react";
import { MoveRight } from "lucide-react";

function Banner() {
  return (
    <div
      className={` relative bg-cover bg-center bg-no-repeat md:h-screen h-full w-full`}
      style={{ backgroundImage: `url('/Banner1Image.png')` }}
    >
      <div className="absolute inset-0"></div>
      <div className="max-w-7xl mx-auto px-8 py-8">
        <button className="font-bold text-xl bg-gray-300 text-black px-6 uppercase py-2">
          Logo
        </button>
        <p className="text-white font-bold md:text-4xl text-2xl text-center py-8 uppercase md:leading-12">
          Lorem ipsum dolor sit amet consectetur. Quis <br /> adipiscing purus egestas
          aliquam viverra mi.
        </p>
        <p className="text-white text-base text-center max-w-3xl mx-auto pb-8">
            Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisl porta massa diam condimentum nulla quam.

        </p>
        <p className="text-white text-base text-center max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisl porta massa diam condimentum nulla quam.

        </p>
        <div className="flex justify-center pt-10">
            
         <button
            type="submit"
            className="bg-white gap-2 text-blue-700 font-semibold px-5 py-2 w-full sm:w-auto rounded hover:bg-blue-800 flex items-center justify-center"
          >
            Subscribe  <MoveRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
