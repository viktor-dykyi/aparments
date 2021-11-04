import React from "react";
import "./OurMembers.css";
import Star from "./img/Star.svg";
import WSJ from "./img/Frame.svg";
import Forbes from "./img/Frame-1.svg";
import Bloomberg from "./img/Frame-2.svg";
import Yahoo from "./img/Frame-3.svg";
import Chicago from "./img/Frame-4.svg";
import Curbed from "./img/Frame-5.svg";

export const OurMembers = () => {
  return (
    <section className="membership">
      <h2 className="membership-title">See what our members have to say</h2>
      <div className="membership-members">
        <div className="membership-members-response">
          <div className="response-rate">
            <img src={Star} alt="stars" className="rate-star" />
            <img src={Star} alt="stars" className="rate-star" />
            <img src={Star} alt="stars" className="rate-star" />
            <img src={Star} alt="stars" className="rate-star" />
            <img src={Star} alt="stars" className="rate-star" />
          </div>
          <p className="members-name">Waseem A.</p>
          <p className="members-location">Fort Lauderdale, FL</p>
          <p className="members-text">
            Even on the conservative side, apartment buildings expect a
            three-month minimum (lease)... If they do offer month-to-month, it’s
            often as much as twice the rental price, and it’s incredibly
            annoying to furnish a place if you’re only going to live there for a
            month.
          </p>
        </div>
        <div className="membership-members-response">
          <div className="response-rate">
            <img src={Star} alt="stars" className="rate-star" />
            <img src={Star} alt="stars" className="rate-star" />
            <img src={Star} alt="stars" className="rate-star" />
            <img src={Star} alt="stars" className="rate-star" />
            <img src={Star} alt="stars" className="rate-star" />
            <p className="members-name">Michael H.</p>
            <p className="members-location">Tampa , FL</p>
            <p className="members-text">
              Landing’s apartments have everything under the sun. When we
              arrived, we brought things that we thought Landing wouldn’t know
              we needed. But they had it – so now we have two of everything
            </p>
          </div>
        </div>
        <div className="membership-members-response">
          <div className="response-rate">
            <img src={Star} alt="stars" className="rate-star" />
            <img src={Star} alt="stars" className="rate-star" />
            <img src={Star} alt="stars" className="rate-star" />
            <img src={Star} alt="stars" className="rate-star" />
            <img src={Star} alt="stars" className="rate-star" />
            <p className="members-name">Daniel O.</p>
            <p className="members-location">Nashville , TN</p>
            <p className="members-text">
              The biggest perk is the flexibility, the fact that if I want to
              live anywhere from Nashville to Seattle, Austin to New York City,
              I have a way to do it. Landing makes the world accessible in a way
              that it wasn’t before.
            </p>
          </div>
        </div>
      </div>
      <div className="membership-sponsors">
        <img src={WSJ} alt="sponsors" className="sponsorsImg" />
        <img src={Forbes} alt="sponsors" className="sponsorsImg" />
        <img src={Bloomberg} alt="sponsors" className="sponsorsImg" />
        <img src={Yahoo} alt="sponsors" className="sponsorsImg" />
        <img src={Chicago} alt="sponsors" className="sponsorsImg" />
        <img src={Curbed} alt="sponsors" className="sponsorsImg" />
      </div>
    </section>
  );
};
