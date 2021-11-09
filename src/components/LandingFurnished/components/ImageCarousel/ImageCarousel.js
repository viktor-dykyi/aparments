import React from "react";
import Slider from "react-slick";
import "./ImageCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import oneImg from "../ImageCarousel/carouselImg/luxury.jpg";
import twoImg from "../ImageCarousel/carouselImg/Rectangle-2.jpg";
import threeImg from "../ImageCarousel/carouselImg/Rectangle-3.jpg";
import fourImg from "../ImageCarousel/carouselImg/Rectangle-4.jpg";
import fiveImg from "../ImageCarousel/carouselImg/Rectangle-5.jpg";
import sixImg from "../ImageCarousel/carouselImg/Rectangle-6.jpg";
import sevenImg from "../ImageCarousel/carouselImg/Rectangle-7.jpg";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1.2,
  slidesToScroll: 1,
//   nextArrow: (props) => (
//     <div {...props}>
//       <img src="" className="image-carousel__arrow-next" alt="" />
//     </div>
//   ),
//   prevArrow: (props) => (
//     <div {...props}>
//       <img src="" className="image-carousel__arrow-prev" alt="" />
//     </div>
//   ),
// TODO: Fix this
};

export const ImageCarousel = () => {
  return (
    <div className="image-carousel__container">
      <Slider {...settings}>
        <img src={oneImg} alt="img" className="image-carousel" />
        <img src={twoImg} alt="img" className="image-carousel" />
        <img src={threeImg} alt="img" className="image-carousel" />
        <img src={fourImg} alt="img" className="image-carousel" />
        <img src={fiveImg} alt="img" className="image-carousel" />
        <img src={sixImg} alt="img" className="image-carousel" />
        <img src={sevenImg} alt="img" className="image-carousel" />
      </Slider>
    </div>
  );
};
