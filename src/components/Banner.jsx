import React from "react";
import banner from "../images/banner.svg";
import { NavLink } from "react-router-dom";

function Banner() {
  return (
    <div className="section banner">
      <div className="bannerText">
        <div className="bannerMainText">Miss Belleza Nigeria 2020</div>
        <div className="bannerPrimaryText">online face modelling contest</div>
        <div className="bannerSecondaryText">maiden edition</div>
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
      </div>
      <img src={banner} className="bannerImage" alt="banner" />
    </div>
  );
}

export default Banner;
