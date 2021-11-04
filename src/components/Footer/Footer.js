import React from "react";
import "./Footer.css";
import twiter from "./img/twiter.svg";
import inst from "./img/instagram.svg";
import facebook from "./img/facebook.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container-rent">
          Landing is a network of furnished apartments for rent across the
          country.
        </div>
        <div className="footer__container-list">
          <div className="footer__container-footer">
            <div className="footer__container-list">
              <h3 className="footer__container-list-title">Cities</h3>
              <div className="footer__container-list-content">
                Austin
                <br /> Birmingham <br /> Boston <br /> Chicago <br /> Dallas{" "}
                <br />
              </div>
            </div>
            <div className="footer__container-list">
              <h3 className="footer__container-list-title">Landing</h3>
              <div className="footer__container-list-content">
                Member <br /> Benefits <br /> Blog <br /> About Refer a Friend{" "}
                <br /> Become a Host <br /> Become a Partner <br /> Careers
              </div>
            </div>
            <div className="footer__container-list">
              <h3 className="footer__container-list-title">Support</h3>
              <div className="footer__container-list-content">
                Contact Us <br /> FAQ <br /> Terms of <br /> Service <br />{" "}
                Privacy Policy
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__footer">
        <div className="footer-rights">
          © Landing 2021 . All rights reserved.
        </div>
        <div className="footer-media">
          <div className="footer-contacts">415-231-1701</div>
          <img src={twiter} alt="socialMedia" className="social-img" />
          <img src={inst} alt="socialMedia" className="social-img" />
          <img src={facebook} alt="socialMedia" className="social-img" />
        </div>
      </div>
    </footer>
  );
};
