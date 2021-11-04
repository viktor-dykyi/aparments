import React from "react";
import logo from "../../img/logo.svg";
import Vector from "../../img/Vector.svg";
import "./Header.css";

export const Header = () => {
  return (
    <header className="main-header">
      <img src={logo} alt="logo" className="main-header__logo" />
      <div className="main-header__menu">
        <div className="main-header__menu-container">
          <a href="https://developer.mozilla.org/" className="main-header__menu-link">
            Why Landing
          </a>
          <img src={Vector} alt="logo" className="main-header__menu-icon" />
        </div>
        <div className="main-header__menu-container">
          <a href="https://developer.mozilla.org/" className="main-header__menu-link">
            Resources
          </a>
          <img src={Vector} alt="logo" className="main-header__menu-icon" />
        </div>
        <div className="main-header__button">Sign in</div>
      </div>
    </header>
  );
};
