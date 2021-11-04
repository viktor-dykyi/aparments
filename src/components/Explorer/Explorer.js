import React from "react";
import "./Explorer.css";
import mainImg from "../../img/Explorer-img.png";
import piggyBank from "../../img/piggy-bank.png";
import alladinsCard from "../../img/alladin-card.png";
import flyingMark from "../../img/flying-mark.png";

export const Explorer = () => {
  return (
    <section className="explorer">
      <img className="explorer-img" src={mainImg} alt={mainImg} />
      <div className="explorer-content">
        <h2 className="explorer-content-title">
          Get the best rates and even more freedom with Landing Explorer
        </h2>
        <div className="explorer-content-container">
          <img src={piggyBank} alt={piggyBank} className="containers-img" />
          <div className="containers-text">
            <h4 className="countainers-title">Best Rates</h4>
            <p className="countainers-content">
              Explorer members always get our lowest monthly rates.
            </p>
          </div>
        </div>
        <div className="explorer-content-container">
          <img
            src={alladinsCard}
            alt={alladinsCard}
            className="containers-img"
          />
          <div className="containers-text">
            <h4 className="countainers-title">Ultimate Flexibility</h4>
            <p className="countainers-content">
              When you’re ready for something new, simply give a 30-day notice;
              there’s no lease to break or transfer fees.
            </p>
          </div>
        </div>
        <div className="explorer-content-container">
          <img src={flyingMark} alt={flyingMark} className="containers-img" />
          <div className="containers-text">
            <h4 className="countainers-title">Easy Transfers</h4>
            <p className="countainers-content">
              Seamlessly move between Landing apartments anywhere, anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
