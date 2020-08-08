import React from "react";
import logo from "../images/logo.svg";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <NavLink to="/">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
