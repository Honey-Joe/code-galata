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
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <div className="2xl:container">
        <div className="w-[80%] mx-auto grid grid-cols-1 my-11">
        <div className="slider-container ">
      <Slider {...settings}>
        <div>
          <h3><ReviewSectionCard></ReviewSectionCard></h3>
        </div>
        <div>
          <h3><ReviewSectionCard></ReviewSectionCard></h3>
        </div>
        <div>
          <h3><ReviewSectionCard></ReviewSectionCard></h3>
        </div>
        <div>
          <h3><ReviewSectionCard></ReviewSectionCard></h3>
        </div>
        <div>
          <h3><ReviewSectionCard></ReviewSectionCard></h3>
        </div>
        <div>
          <h3><ReviewSectionCard></ReviewSectionCard></h3>
        </div>
      </Slider>
    </div>
        </div>
    </div>
    
    </>
    
  );
}

export default ReviewSection;