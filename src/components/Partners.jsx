import React from "react";
import logo1 from "../images/se.jpg";
import logo2 from "../images/gmd.jpg";
import logo3 from "../images/nm.jpg";

function Partners() {
  return (
    <div className="section">
      {/* <!-- label --> */}
      <div className="label">Partners</div>
      <div className="labelLine"></div>
      {/* <!-- content --> */}
      <div className="row">
        {/* <!-- partner image --> */}
        <div className="col-lg-2 col-md-4 col-6 mb-4 mb-md-0">
          <div className="partnerLogo">
            <img src={logo1} alt="sandy empire" />
          </div>
        </div>
        {/* <!-- partner image --> */}
        <div className="col-lg-2 col-md-4 col-6 mb-4 mb-md-0">
          <div className="partnerLogo">
            <img src={logo2} alt="gmd construction" />
          </div>
        </div>
        {/* <!-- partner image --> */}
        <div className="col-lg-2 col-md-4 col-6 mb-4 mb-md-0">
          <div className="partnerLogo">
            <img src={logo3} alt="nutsmilk" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
