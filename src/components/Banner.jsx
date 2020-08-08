import React from "react";
import banner from "../images/banner.svg";
<<<<<<< HEAD
import { NavLink } from "react-router-dom";
=======
>>>>>>> 4ab618340c1caa3fe3b89682bc2db77f22ad6c8f

function Banner() {
  return (
    <div className="section banner">
      <div className="bannerText">
        <div className="bannerMainText">Miss Belleza Nigeria 2020</div>
        <div className="bannerPrimaryText">online face modelling contest</div>
        <div className="bannerSecondaryText">maiden edition</div>
<<<<<<< HEAD
        <div className="bannerRegistrationText">voting closed</div>
        <NavLink to="/contestants">
          <button
            className="mainBtn"
            title="1st july 2020"
            style={{ fontSize: "16px" }}
          >
            View Ranking
          </button>
        </NavLink>
        {/* <NavLink to="/contestants">
          <button className="mainBtn" title="vote">
            Vote
          </button>
        </NavLink> */}
=======
        <div className="bannerRegistrationText">registration date</div>
        <a className="mainBtn" href="#" title="1st July, 2020">
          01 . 07. 2020
        </a>
>>>>>>> 4ab618340c1caa3fe3b89682bc2db77f22ad6c8f
      </div>
      <img src={banner} className="bannerImage" alt="banner" />
    </div>
  );
}

export default Banner;
