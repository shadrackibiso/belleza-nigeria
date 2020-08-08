import React from "react";
import logo from "../images/logo.svg";
import "../css/splashScreen.css";

function SplashScreen() {
  return (
    <div className="splashScreen">
      <img src={logo} />
    </div>
  );
}

export default SplashScreen;
