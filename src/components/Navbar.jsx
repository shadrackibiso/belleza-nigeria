import React from "react";
import logo from "../images/logo.svg";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <a href="https://missbellezanigeria.com.ng/">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
