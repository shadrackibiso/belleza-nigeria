import React from "react";
import logo from "../images/logo.svg";

function Navbar() {
  return (
    <div>
      <nav>
        <a href="#" className="logo">
          <img src={logo} alt="logo" />
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
