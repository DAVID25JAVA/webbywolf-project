"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { reviewData } from "../../public/assets";
import Autoplay from "embla-carousel-autoplay";

function Review() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "center",
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 768px)': { 
          align: 'center',
          containScroll: 'trimSnaps'
        },
        '(max-width: 767px)': { 
          align: 'center',
          containScroll: 'keepSnaps'
        }
      }
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="bg-blue-700 md:mt-20 mt-14 md:p-10 py-3 md:py-5">
      <div className="max-w-7xl mx-auto md:px-8 px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div className="flex-1">
            <p className="text-base text-white mb-2">
              Join other Sun harvesters
            </p>
            <h1 className="text-white md:text-3xl text-2xl font-extrabold uppercase mb-4">
              Lorem ipsum dolor sit amet
            </h1>
            <p className="text-base text-white max-w-lg">
              Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
              Eleifend mi tristique condimentum congue fusce nunc, donec magnis
              commodo.
            </p>
          </div>

          <div>
            <button className="text-base text-blue-500 bg-white px-6 py-3 rounded hover:bg-gray-100 transition whitespace-nowrap">
              Lorem ipsum
            </button>
          </div>
        </div>

        {/* Embla Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {reviewData.map((review, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(33.333%-1rem)] min-w-0"
                >
                  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col min-h-80">
                    {/* Icon at top */}
                    <div className="mb-4 flex">
                      <Image
                        src={review.icon}
                        alt="icon"
                        className="w-12 h-12 object-contain"
                      />
                    </div>

                    {/* Review text */}
                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                      "{review.review}"
                    </p>

                    {/* User image and name */}
                    <div className="flex items-center gap-3 mt-auto">
                      <Image
                        src={review.img}
                        alt={review.user}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <p className="text-gray-900 font-semibold text-sm">
                        {review.user}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={scrollPrev}
              className="bg-white hover:bg-gray-100 text-blue-700 p-3 rounded-full shadow-lg transition"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="bg-white hover:bg-gray-100 text-blue-700 p-3 rounded-full shadow-lg transition"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;