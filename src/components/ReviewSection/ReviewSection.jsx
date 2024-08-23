import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewSectionCard from "./ReviewSectionCard";

function ReviewSection() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="2xl:container mx-auto">
        <div className="w-[80%] mx-auto grid grid-cols-1 my-11 gap-4 px-5 py-2">
          <div className="flex items-center justify-center flex-col gap-3">
            <div className="bg-[#FAECF1] px-4 rounded-full py-2">
                <p className="font-[LexendDeca] text-[14px] font-medium text-[#db7093]">Testimonial</p>
            </div>
            <div>
                <p className="text-[30px] font-[LexendDeca] font-bold">What Our Customer Says</p>
            </div>
          </div>
          <div className="slider-container ">
            <Slider {...settings}>
              <div>
                <h3>
                  <ReviewSectionCard></ReviewSectionCard>
                </h3>
              </div>
              <div>
                <h3>
                  <ReviewSectionCard></ReviewSectionCard>
                </h3>
              </div>
              <div>
                <h3>
                  <ReviewSectionCard></ReviewSectionCard>
                </h3>
              </div>
              <div>
                <h3>
                  <ReviewSectionCard></ReviewSectionCard>
                </h3>
              </div>
              <div>
                <h3>
                  <ReviewSectionCard></ReviewSectionCard>
                </h3>
              </div>
              <div>
                <h3>
                  <ReviewSectionCard></ReviewSectionCard>
                </h3>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewSection;
