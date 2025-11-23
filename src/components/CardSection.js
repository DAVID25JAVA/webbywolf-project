import React from "react";
import { bikeHighlights } from "../../public/assets";
import Image from "next/image";
import Link from "next/link";

function CardSection() {
  return (
    <div className="my-10 md:px-8 px-4 max-w-7xl mx-auto">
      <div>
        <p className="text-base text-blue-600 font-semibold">
          Lorem ipsum dolor sit
        </p>
        <h1 className="md:text-3xl text-xl uppercase text-black font-semibold py-5">
          Lorem ipsum dolor sit
        </h1>
        <p className="text-gray-700 text-base max-w-xl">
          Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis
          donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in
          nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus
          lectus.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-8 py-8 max-w-4xl mx-auto">
          {bikeHighlights?.map((data) => (
            <div
              key={data?.id}
              className="w-full shadow-lg rounded-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full h-64 relative">
                <Image
                  alt="img"
                  src={data?.img}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-black text-lg font-semibold mb-2">
                  {data?.title}
                </p>
                <p className="text-base text-gray-700 pb-4">{data?.description}</p>
                <Link href="/"
                   
                  className="text-blue-600 cursor-pointer hover:text-blue-800 font-semibold underline transition-all duration-200"
                >
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardSection;
