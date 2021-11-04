import React from "react";
import "./Opportunities.css";
import firstImg from "../../img/img-1.svg";
import secondImg from "../../img/img-2.svg";
import thirdImg from "../../img/img-3.svg";
import fourImg from "../../img/img-4.svg";
import fiveImg from "../../img/img-5.svg";
import sixImg from "../../img/img-6.svg";
import arrow from "../../img/arrow.svg";

export const Opportunities = () => {
  return (
    <section className="opportunities">
      <div className="opportunities__title">
        <div className="opportunities__title-head">
          <div className="opportunities__title-content">
            Unlock life with your Landing Membership
          </div>
          <div className="link-container">
            <a href="https://developer.mozilla.org/" className="opportunities__title-link">
              Learn More
            </a>
            <img src={arrow} alt="img" className="arrow-img" />
          </div>
        </div>
        <div className="opportunities__title-price">$199 Annual Membership</div>
      </div>
      <div className="benefits-container">
        <div className="opportunities__benefits">
          <div className="benefits-item">
            <img src={firstImg} alt="img" className="benefits-item-img" />
            <div className="benefits-item-text">
              <h3 className="benefits-item-text-title">Lease how you want</h3>
              Stay between one and 12+ months with the ability to transfer to
              other homes in the Landing network.
            </div>
          </div>
          <div className="benefits-item">
            <img src={secondImg} alt="img" className="benefits-item-img" />
            <div className="benefits-item-text">
              <h3 className="benefits-item-text-title">
                Bounce around or stay put
              </h3>
              We're always expanding our network to give you the best selection
              and options.
            </div>
          </div>
          <div className="benefits-item">
            <img src={thirdImg} alt="img" className="benefits-item-img" />
            <div className="benefits-item-text">
              <h3 className="benefits-item-text-title">
                Keep cash in your pocket
              </h3>
              No application fees or security deposit.
            </div>
          </div>
          <div className="benefits-item">
            <img src={fourImg} alt="img" className="benefits-item-img" />
            <div className="benefits-item-text">
              <h3 className="benefits-item-text-title">
                Enjoy guaranteed peace of mind
              </h3>
              If you’re not completely satisfied in your first week, we’ll make
              it right. Learn More
            </div>
          </div>
          <div className="benefits-item">
            <img src={fiveImg} alt="img" className="benefits-item-img" />
            <div className="benefits-item-text">
              <h3 className="benefits-item-text-title">
                Get up to 7 free travel days
              </h3>
              Stay with Landing on your next trip. Get up to 7 free days every
              year. Learn More
            </div>
          </div>
          <div className="benefits-item">
            <img src={sixImg} alt="img" className="benefits-item-img" />
            <div className="benefits-item-text">
              <h3 className="benefits-item-text-title">
                Rest easy with 24/7 member support
              </h3>
              Questions can come up anytime, so we’re always available to help.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
