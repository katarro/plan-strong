import React from "react";
import logo from "../media/logo.png";
import "../styles/navbar.css";
export default function navbar() {
  return (
    <React.Fragment>
      <div className="container-navbar">
        <div className="navbar-left">
          <img src={logo} alt="logo" className="navbar-logo" />
        </div>
        <div className="navbar-right">
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/">Calculadora RM</a>
            </li>
            <li>
              <a href="/">Métodos</a>
            </li>
          </ul>
        </div>
      </div>
      
    </React.Fragment>
  );
}
