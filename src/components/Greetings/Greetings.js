import React from "react";
import img from "../../img/apartment-img.jpg";
import zoomImg from "../../img/Frame.svg";
import "./Greetings.css";
export const Greetings = () => {
  return (
    <section className="greetings">
      <div className="greetings__text">
        <h1 className="greetings__title">We’re reinventing apartment living</h1>
        <p className="greetings__description">
          Say goodbye to being trapped in a lease. Landing members have access
          to thousands of apartments with flexible leases.
        </p>
      </div>
      <img src={img} alt="" className="greetings__img" />
      <div className="greetings__questions">
        <div className="greetings__questions-item">
          <div className="greetings__questions-item-name">Location</div>
          <div className="greetings__questions-item-value">Where to?</div>
        </div>
        
        <div className="greetings__questions-item">
          <div className="greetings__questions-item-name">Dates</div>
          <div className="greetings__questions-item-value">How long?</div>
        </div>
        <button className="greetings__questions-item-button">
          <img
            src={zoomImg}
            alt="lypa"
            className="greetings__questions-item-zoom-icon"
          />
          <span className="greetings__questions-item-button-text">Search</span>
        </button>
      </div>
    </section>
  );
};
