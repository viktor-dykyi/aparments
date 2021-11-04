import React from "react";
import { ImageCarousel } from "./components/ImageCarousel/ImageCarousel";
import "./LandingFurnished.css";

export const LandingFurnished = () => {
  return (
    <section className="furnished">
      <div className="furnished-title">
        <p className="furnished-title-title">Landing Furnished</p>
        <h2 className="furnished-title-content">
          Enjoy all the amenities of a fully furnished Landing home
        </h2>
      </div>
      <ImageCarousel />
    </section>
  );
};
