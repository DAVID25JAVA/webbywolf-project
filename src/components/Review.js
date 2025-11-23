"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { reviewData } from "../../public/assets";

function Review() {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "60px",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="bg-blue-700 md:mt-20 mt-14 p-10">
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
            <p className="text-base text-white">
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

        {/* Review Slider */}
        <div className="relative">
          <style jsx global>{`
            .slick-center .review-card {
              transform: scale(1.1);
              z-index: 10;
            }

            .slick-slide {
              transition: all 0.3s ease;
              padding: 20px 10px;
            }

            .slick-slide:not(.slick-center) .review-card {
              opacity: 0.7;
              transform: scale(0.9);
            }

            .review-card {
              transition: all 0.3s ease;
            }

            .slick-dots {
              bottom: -40px;
            }

            .slick-dots li button:before {
              color: white;
              font-size: 10px;
            }

            .slick-dots li.slick-active button:before {
              color: white;
            }
          `}</style>

          <Slider ref={sliderRef} {...settings}>
            {reviewData.map((review, index) => (
              <div key={index} className="px-2">
                <div className="review-card bg-white rounded-lg shadow-lg p-6 flex flex-col min-h-75 mx-2">
                  {/* Icon at top */}
                  <div className="mb-4 flex  ">
                    <Image
                      src={review.icon}
                      alt="icon"
                      className="w-12 h-12 object-contain"
                    />
                  </div>

                  {/* Review text */}
                  <p className="text-gray-700 text-base leading-relaxed ">
                    "{review.review}"
                  </p>

                  {/* User image and name */}
                  <div className="flex items-center gap-3 mt-5">
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
          </Slider>

          {/* Custom Navigation Arrows - Bottom Left */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="bg-white hover:bg-gray-100 text-blue-700 p-3 rounded-full shadow-lg transition"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
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
