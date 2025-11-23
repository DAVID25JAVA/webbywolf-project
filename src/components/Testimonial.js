import React from "react";
import { MoveRight } from "lucide-react";

function Testimonial() {
  return (
    <div className="max-w-7xl mx-auto md:px-8 px-4 md:mt-20 mt-14">
      <div className="flex flex-col justify-center gap-5 items-center">
        <div className="font-bold text-xl bg-gray-300 text-black px-4 w-28 text-center py-2">
          LOGO
        </div>

        <h1 className="md:text-3xl text-xl text-black  uppercase font-bold text-center">
          Lorem ipsum dolor sit amet consectetur. Dui.
        </h1>
        <p className="text-base text-gray-700  max-w-md text-center ">
          Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor
          pharetra tempor quis arcu. Ipsum nullam.
        </p>

        <button className="flex  items-center gap-2 text-white bg-blue-700 hover:bg-blue-600 px-3 py-2 rounded-lg">
          Lorem Ipsum <MoveRight />
        </button>
      </div>
    </div>
  );
}

export default Testimonial;
