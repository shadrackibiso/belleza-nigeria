import React from "react";
import instagram from "../images/instagram.svg";
import phone from "../images/phone.svg";
function Contact() {
  return (
    <div className="section">
      {/* <!-- label --> */}
      <div className="label">Contact</div>
      <div className="labelLine"></div>
      {/* <!-- content --> */}
      <div className="row">
        <div className="col-lg-2 mb-4 mb-lg-0 d-flex align-items-center">
          <img src={instagram} alt="instagram" className="icon" />
          <div className="ml-2">miss_belleza_nigeria</div>
        </div>
        <div className="col-lg-2 d-flex align-items-center">
          <img src={phone} alt="phone" className="icon" />
          <div className="ml-2">+234 816 6275 914</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
