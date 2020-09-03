import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-bg">
        <h1 className="banner-text">Model Y</h1>
      </div>
      <div className="buttona">
        <a href="#" className="maincta">
          Custom Order
        </a>
        <a href="#" className="seccta">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Banner;
