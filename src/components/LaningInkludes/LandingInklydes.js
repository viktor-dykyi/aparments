import React from "react";
import "./LandingInklydes.css";
import chear from "./img/chear.svg";
import oneImg from "../../components/LandingFurnished/components/ImageCarousel/carouselImg/luxury.jpg";
import twoImg from "../../components/LandingFurnished/components/ImageCarousel/carouselImg/Rectangle-2.jpg";
import threeImg from "../../components/LandingFurnished/components/ImageCarousel/carouselImg/Rectangle-3.jpg";
import fourImg from "../../components/LandingFurnished/components/ImageCarousel/carouselImg/Rectangle-4.jpg";
import fiveImg from "../../components/LandingFurnished/components/ImageCarousel/carouselImg/Rectangle-5.jpg";
import sixImg from "../../components/LandingFurnished/components/ImageCarousel/carouselImg/Rectangle-6.jpg";
import sevenImg from "../../components/LandingFurnished/components/ImageCarousel/carouselImg/Rectangle-7.jpg";

export const LandingInklydes = () => {
  return (
    <section className="inklydes">
      <div className="inklydes-title">Every Landing includes</div>
      <div className="inklydes-img">
        <div className="inklydes-img-container">
          <img src={oneImg} alt="img" className="image-inklydes" />
          <p className="image-inklydes-content">Comfy, in-house designed furnishings</p>
        </div>
        <div className="inklydes-img-container">
          <img src={twoImg} alt="img" className="image-inklydes" />
          <p className="image-inklydes-content">Luxury mattress and linens</p>
        </div>
        <div className="inklydes-img-container">
          <img src={threeImg} alt="img" className="image-inklydes" />
          <p className="image-inklydes-content">A fully-equipped kitchen</p>
        </div>
        <div className="inklydes-img-container">
          <img src={fourImg} alt="img" className="image-inklydes" />
          <p className="image-inklydes-content">Dedicated workspaces</p>
        </div>
        <div className="inklydes-img-container">
          <img src={fiveImg} alt="img" className="image-inklydes" />
          <p className="image-inklydes-content">Smart TV + Wifi</p>
        </div>
        <div className="inklydes-img-container">
          <img src={sixImg} alt="img" className="image-inklydes" />
          <p className="image-inklydes-content">Premium toiletries</p>
        </div>
        <div className="inklydes-img-container">
          <img src={sevenImg} alt="img" className="image-inklydes" />
          <p className="image-inklydes-content">Plenty of storage</p>
        </div>
        <div className="inklydes-img-container">
          <img src={sevenImg} alt="img" className="image-inklydes" />
          <p className="image-inklydes-content">Plenty of storage</p>
        </div>
      </div>
      <img src={chear} alt="" className="inklydes-logo" />
    </section>
  );
};
