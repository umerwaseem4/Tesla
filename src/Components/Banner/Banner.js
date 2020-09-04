import React from "react";
import "./Banner.css";

const Banner = ({ name, mainbtn, secbtn, imgURL }) => {
  return (
    <div className="banner">
      <div className="banner-bg" style={{ backgroundImage: `url(${imgURL})` }}>
        <h1 data-aos="fade-right" className="banner-text">
          {name}
        </h1>
      </div>
      <div className="buttona">
        <a href="#" className="maincta">
          {mainbtn}
        </a>
        <a href="#" className="seccta">
          {secbtn}
        </a>
      </div>
    </div>
  );
};

export default Banner;
