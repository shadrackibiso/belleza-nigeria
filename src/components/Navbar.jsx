import React from "react";
import logo from "../images/logo.svg";
<<<<<<< HEAD
import { NavLink } from "react-router-dom";
=======
>>>>>>> 4ab618340c1caa3fe3b89682bc2db77f22ad6c8f

function Navbar() {
  return (
    <div>
      <nav>
<<<<<<< HEAD
        <NavLink to="/">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </NavLink>
=======
        <a href="#" className="logo">
          <img src={logo} alt="logo" />
        </a>
>>>>>>> 4ab618340c1caa3fe3b89682bc2db77f22ad6c8f
      </nav>
    </div>
  );
}

export default Navbar;
