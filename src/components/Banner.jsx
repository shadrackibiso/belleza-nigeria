import React from "react";
import banner from "../images/banner.svg";

function Banner() {
  return (
    <div className="section banner">
      <div className="bannerText">
        <div className="bannerMainText">Miss Belleza Nigeria 2020</div>
        <div className="bannerPrimaryText">online face modelling contest</div>
        <div className="bannerSecondaryText">maiden edition</div>
        <div className="bannerRegistrationText">registration date</div>
        <a className="mainBtn" href="#" title="1st July, 2020">
          01 . 07. 2020
        </a>
      </div>
      <img src={banner} className="bannerImage" alt="banner" />
    </div>
  );
}

export default Banner;
