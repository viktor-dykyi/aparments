import React from "react";
import { CitiesCarousel } from "./CitiesCarousel/CitiesCarousel";
import "./Citites.css";

export const Cities = () => {
  return (
    <section className="cities">
      <div className="cities-title">
        <h2 className="cities-title-title">See where members love to live</h2>
        <p className="cities-title-text">
          We offer over 80 cities, and counting, across the U.S. and encourage
          you to explore with our free, 7-day travel benefit.
        </p>
      </div>
      <CitiesCarousel />
      <div className="cities-favorite">
        <h3 className="cities-favorite-title">More of our favorite cities</h3>
        <div className="cities-container">
          <div className="cities-list">
            <h4 className="cities-list-title">Miami</h4>
            <p className="states">Florida</p>
          </div>
          <div className="cities-list">
            <h4 className="cities-list-title">Los Angeles</h4>
            <p className="states">California</p>
          </div>
          <div className="cities-list">
            <h4 className="cities-list-title">St. Petersburg</h4>
            <p className="states">Florida</p>
          </div>
          <div className="cities-list">
            <h4 className="cities-list-title">Boulder</h4>
            <p className="states">Colorado</p>
          </div>
          <div className="cities-list">
            <h4 className="cities-list-title">Fort Lauderdale</h4>
            <p className="states">Florida</p>
          </div>
          <div className="cities-list">
            <h4 className="cities-list-title">Charlestone</h4>
            <p className="states">South Carolina</p>
          </div>
          <div className="cities-list">
            <h4 className="cities-list-title">Portland</h4>
            <p className="states">Oregon</p>
          </div>
          <div className="cities-list">
            <h4 className="cities-list-title">Charlotte</h4>
            <p className="states"></p>
            North Carolina
          </div>
          <div className="cities-list">
            <h4 className="cities-list-title">Salt Lake City</h4>
            <p className="states">Utah</p>
          </div>
          <div className="cities-list">
            <h4 className="cities-list-title">New York</h4>
            <p className="states">New York</p>
          </div>
          <div className="cities-list">
            <h4 className="cities-list-title">Washingtone</h4>
            <p className="states">D.C.</p>
          </div>
          <div className="cities-list">
            <h4 className="cities-list-title">Philadelfia</h4>
            <p className="states">Pennsylvania</p>
          </div>
          <div className="cities-list">
            <h4 className="cities-list-title">San Francisko</h4>
            <p className="states">California</p>
          </div>
          <div className="cities-list">
            <h4 className="cities-list-title">Phoenix</h4>
            <p className="states">Arizona</p>
          </div>
          <div className="cities-list">
            <h4 className="cities-list-title">Baltimore</h4>
            <p className="states">Maryland</p>
          </div>
          <div className="cities-list">
            <h4 className="cities-list-title">Oklahoma City</h4>
            <p className="states">Oklahoma</p>
          </div>
          <div className="cities-list">
            <h4 className="cities-list-title">Chicago</h4>
            <p className="states">Illinois</p>
          </div>
          <div className="cities-list">
            <h4 className="cities-list-title">Las Vegas</h4>
            <p className="states">Nevada</p>
          </div>
          <div className="cities-list">
            <h4 className="cities-list-title">Fort Worth</h4>
            <p className="states">Texas</p>
          </div>
          <div className="cities-list">
            <h4 className="cities-list-title">Tampa</h4>
            <p className="states">Florida</p>
          </div>
          <div className="cities-list">
            <h4 className="cities-list-title">Boston</h4>
            <p className="states">Massachusetts</p>
          </div>
          <div className="cities-list">
            <h4 className="cities-list-title">Orlando</h4>
            <p className="states">Florida</p>
          </div>
          <div className="cities-list">
            <h4 className="cities-list-title">Richmond</h4>
            <p className="states">Virgina</p>
          </div>
          <div className="cities-list">
            <h4 className="cities-list-title">Nashville</h4>
            <p className="states">Tennessee</p>
          </div>
        </div>
      </div>
      <button className="all-cities">View All Cities</button>
    </section>
  );
};
