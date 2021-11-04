import React from "react";
import Slider from "react-slick";
import "./CitiesCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Austin from "./CitiesCarouselImg/new-austin-cover 1.jpg";
import Denver from "./CitiesCarouselImg/Denwer.jpg";
import Chicago from "./CitiesCarouselImg/Rectangle.jpg";
import Atlanta from "./CitiesCarouselImg/kyle-sudu-MIcSXlukZsU-unsplash.jpg"

const settings = {
  dots: false,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const CitiesCarousel = () => {
  return (
    <div className="cities-carousel__container">
      <Slider {...settings}>
        <img src={Austin} alt="" className="img-carousel" />
        <img src={Denver} alt="" className="img-carousel" />
        <img src={Chicago} alt="" className="img-carousel" />
        <img src={Atlanta} alt="" className="img-carousel" />
        <img src={Atlanta} alt="" className="img-carousel" />
        <img src={Atlanta} alt="" className="img-carousel" />
      </Slider>
    </div>
  );
};
